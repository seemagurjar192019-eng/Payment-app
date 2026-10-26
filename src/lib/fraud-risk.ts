/**
 * Module 8: Fraud Velocity & Risk Engine (Fintech Heuristics)
 */

export interface RiskEvaluation {
  allowed: boolean;
  riskScore: number; // 0 (Safe) to 100 (Critical)
  blockReason?: string;
}

export class FraudRiskEngine {
  public static evaluate(
    amount: number,
    recentPayments: { amount: number; timestamp: number }[],
    isKycVerified: boolean
  ): RiskEvaluation {
    const now = Date.now();
    let score = 0;

    const last60sTxs = recentPayments.filter(p => now - p.timestamp < 60000);
    if (last60sTxs.length >= 3) {
      return {
        allowed: false,
        riskScore: 95,
        blockReason: "SECURITY_BLOCK: Too many transactions in 1 minute. Please wait 60 seconds."
      };
    }

    const nonKycLimit = 25000;
    if (!isKycVerified && amount > nonKycLimit) {
      return {
        allowed: false,
        riskScore: 85,
        blockReason: `LIMIT_EXCEEDED: Maximum limit for unverified accounts is ₹${nonKycLimit}. Complete Video KYC to unlock ₹1,00,000 limit.`
      };
    }

    const duplicateIn5m = recentPayments.filter(p => p.amount === amount && (now - p.timestamp < 300000));
    if (duplicateIn5m.length >= 2) {
      score += 40;
    }

    return {
      allowed: true,
      riskScore: score
    };
  }
}
