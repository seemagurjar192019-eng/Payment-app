/**
 * Module 9: Real-Time Fraud & Velocity Risk Engine
 */

export interface RiskContext {
  userId: string;
  amountPaise: number;
  recipientVpa: string;
  isNewRecipient: boolean;
  clientTimestamp: number;
  deviceSecurity: {
    isRooted: boolean;
    hasScreenOverlay: boolean;
    isVpnActive: boolean;
  };
}

export type RiskDecision =
  "ALLOW" | "REQUIRE_BIOMETRIC" | "REQUIRE_OTP" | "REJECT";

export class FraudRiskEngine {
  private static recentTxHistory: Array<{
    timestamp: number;
    amountPaise: number;
  }> = [];

  static recordTx(amountPaise: number) {
    this.recentTxHistory.push({ timestamp: Date.now(), amountPaise });
    const oneHourAgo = Date.now() - 3600000;
    this.recentTxHistory = this.recentTxHistory.filter(
      (tx) => tx.timestamp > oneHourAgo,
    );
  }

  static evaluateRisk(context: RiskContext): {
    decision: RiskDecision;
    riskScore: number;
    reason?: string;
  } {
    let score = 0;

    if (context.deviceSecurity.isRooted) score += 60;
    if (context.deviceSecurity.hasScreenOverlay) score += 40;
    if (context.deviceSecurity.isVpnActive) score += 20;

    const fiveMinAgo = Date.now() - 300000;
    const recentCount = this.recentTxHistory.filter(
      (tx) => tx.timestamp > fiveMinAgo,
    ).length;
    if (recentCount >= 5) score += 50;

    if (context.isNewRecipient && context.amountPaise > 500000) {
      score += 35;
    }

    if (score >= 70) {
      return {
        decision: "REJECT",
        riskScore: score,
        reason: "High fraud risk detected on this transaction",
      };
    }
    if (score >= 40) {
      return {
        decision: "REQUIRE_OTP",
        riskScore: score,
        reason: "Additional verification required",
      };
    }
    if (score >= 20) {
      return {
        decision: "REQUIRE_BIOMETRIC",
        riskScore: score,
        reason: "Biometric authorization required",
      };
    }

    return { decision: "ALLOW", riskScore: score };
  }
}
