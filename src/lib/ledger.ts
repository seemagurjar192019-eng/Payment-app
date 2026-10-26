/**
 * Module 1: Double-Entry Ledger & Financial Accounting Engine
 * Append-only immutable double-entry ledger in paise.
 */

export type AccountType = 'ASSET' | 'LIABILITY' | 'EQUITY' | 'REVENUE' | 'EXPENSE';

export interface LedgerAccount {
  id: string;
  name: string;
  type: AccountType;
  currency: 'INR';
  createdAt: string;
}

export type EntryDirection = 'DEBIT' | 'CREDIT';

export interface LedgerEntry {
  id: string;
  transactionId: string;
  accountId: string;
  direction: EntryDirection;
  amount: number; // Stored in lowest unit (Paise)
  currency: 'INR';
  timestamp: string;
}

export interface JournalTransaction {
  id: string;
  idempotencyKey: string;
  description: string;
  referenceNo: string;
  entries: LedgerEntry[];
  timestamp: string;
}

export class LedgerEngine {
  private accounts: Map<string, LedgerAccount> = new Map();
  private entries: LedgerEntry[] = [];

  constructor() {
    this.registerAccount({ id: 'ACC_USER_WALLET', name: 'User Wallet', type: 'LIABILITY', currency: 'INR', createdAt: new Date().toISOString() });
    this.registerAccount({ id: 'ACC_PAYZEN_ESCROW', name: 'PayZen Settlement Escrow', type: 'ASSET', currency: 'INR', createdAt: new Date().toISOString() });
    this.registerAccount({ id: 'ACC_EXTERNAL_BANK', name: 'Nodal Bank Account', type: 'ASSET', currency: 'INR', createdAt: new Date().toISOString() });
  }

  public registerAccount(account: LedgerAccount): void {
    this.accounts.set(account.id, account);
  }

  public postTransaction(
    idempotencyKey: string,
    description: string,
    referenceNo: string,
    debitAccountId: string,
    creditAccountId: string,
    amountPaise: number
  ): JournalTransaction {
    if (amountPaise <= 0) {
      throw new Error("LEDGER_ERROR: Amount must be strictly greater than 0");
    }

    const txId = `TX_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
    const now = new Date().toISOString();

    const debitEntry: LedgerEntry = {
      id: `ENT_${Date.now()}_1`,
      transactionId: txId,
      accountId: debitAccountId,
      direction: 'DEBIT',
      amount: amountPaise,
      currency: 'INR',
      timestamp: now
    };

    const creditEntry: LedgerEntry = {
      id: `ENT_${Date.now()}_2`,
      transactionId: txId,
      accountId: creditAccountId,
      direction: 'CREDIT',
      amount: amountPaise,
      currency: 'INR',
      timestamp: now
    };

    if (debitEntry.amount !== creditEntry.amount) {
      throw new Error("LEDGER_ERROR: Unbalanced transaction. Debits != Credits");
    }

    this.entries.push(debitEntry, creditEntry);

    return {
      id: txId,
      idempotencyKey,
      description,
      referenceNo,
      entries: [debitEntry, creditEntry],
      timestamp: now
    };
  }

  public getAccountBalancePaise(accountId: string): number {
    const account = this.accounts.get(accountId);
    if (!account) throw new Error("Account not found");

    const accountEntries = this.entries.filter(e => e.accountId === accountId);
    
    let balance = 0;
    for (const entry of accountEntries) {
      if (account.type === 'ASSET' || account.type === 'EXPENSE') {
        balance += entry.direction === 'DEBIT' ? entry.amount : -entry.amount;
      } else {
        balance += entry.direction === 'CREDIT' ? entry.amount : -entry.amount;
      }
    }
    return balance;
  }
}
