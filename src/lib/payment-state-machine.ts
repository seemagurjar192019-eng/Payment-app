/**
 * Module 3: Transaction State Machine & Retry Orchestrator
 */

export type PaymentStatus = 
  | 'INITIALIZED' 
  | 'PENDING_REMITTER' 
  | 'PENDING_BENEFICIARY' 
  | 'SUCCESS' 
  | 'FAILED' 
  | 'DECLINED_PIN' 
  | 'TIMED_OUT' 
  | 'REVERSED';

export interface BankResponseCode {
  code: string;
  userMessage: string;
  retryable: boolean;
}

export const NPCI_ERROR_CODES: Record<string, BankResponseCode> = {
  'SUCCESS': { code: '00', userMessage: 'Transaction Successful', retryable: false },
  'U19': { code: 'U19', userMessage: 'Remitter bank technical error. Please try again later.', retryable: true },
  'ZM': { code: 'ZM', userMessage: 'Incorrect UPI PIN entered. 2 attempts remaining.', retryable: false },
  'U30': { code: 'U30', userMessage: 'Exceeded per-day UPI transaction limit for this bank.', retryable: false },
  'U69': { code: 'U69', userMessage: 'Beneficiary bank technical issue. Amount (if debited) will be refunded.', retryable: true }
};

export interface ProcessPaymentRequest {
  idempotencyKey: string;
  senderVpa: string;
  recipientVpa: string;
  amountPaise: number;
  mpinHash: string;
  note?: string;
}

export class PaymentProcessor {
  private inFlightKeys: Set<string> = new Set();
  private processedTransactions: Map<string, any> = new Map();

  public static generateUTR(): string {
    const datePrefix = new Date().toISOString().slice(2, 4);
    const julianDay = String(Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000)).padStart(3, '0');
    const randomSuffix = String(Math.floor(1000000 + Math.random() * 9000000));
    return `${datePrefix}${julianDay}${randomSuffix}`;
  }

  public async executePayment(req: ProcessPaymentRequest): Promise<{
    status: PaymentStatus;
    utr: string;
    response: BankResponseCode;
    timestamp: string;
  }> {
    if (this.inFlightKeys.has(req.idempotencyKey)) {
      throw new Error("CONCURRENCY_ERROR: A payment request with this idempotency key is already processing.");
    }
    if (this.processedTransactions.has(req.idempotencyKey)) {
      return this.processedTransactions.get(req.idempotencyKey);
    }

    this.inFlightKeys.add(req.idempotencyKey);

    try {
      await new Promise(r => setTimeout(r, 1200));

      const failureRoll = Math.random();
      let status: PaymentStatus = 'SUCCESS';
      let err = NPCI_ERROR_CODES['SUCCESS'];

      if (failureRoll > 0.96) {
        status = 'TIMED_OUT';
        err = NPCI_ERROR_CODES['U19'];
      } else if (failureRoll > 0.93) {
        status = 'FAILED';
        err = NPCI_ERROR_CODES['U69'];
      }

      const result = {
        status,
        utr: PaymentProcessor.generateUTR(),
        response: err,
        timestamp: new Date().toISOString()
      };

      this.processedTransactions.set(req.idempotencyKey, result);
      return result;
    } finally {
      this.inFlightKeys.delete(req.idempotencyKey);
    }
  }
}
