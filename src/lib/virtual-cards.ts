/**
 * Module 8: Virtual Cards & Dynamic CVV Security
 */

export interface CardControls {
  isFrozen: boolean;
  onlinePayments: boolean;
  internationalPayments: boolean;
  contactless: boolean;
  atmWithdrawal: boolean;
  dailyTransactionLimitPaise: number;
}

export interface VirtualCard {
  id: string;
  token: string;
  lastFour: string;
  expiryMonth: number;
  expiryYear: number;
  network: "VISA" | "MASTERCARD" | "RUPAY";
  controls: CardControls;
}

export class VirtualCardEngine {
  static generateDynamicCVV(
    cardToken: string,
    epochMs: number = Date.now(),
  ): { cvv: string; expiresAt: number } {
    const STEP_SECONDS = 300;
    const currentCounter = Math.floor(epochMs / 1000 / STEP_SECONDS);
    const expiresAt = (currentCounter + 1) * STEP_SECONDS * 1000;

    let hash = 0;
    const str = `${cardToken}:${currentCounter}`;
    for (let i = 0; i < str.length; i++) {
      hash = (hash << 5) - hash + str.charCodeAt(i);
      hash |= 0;
    }
    const absHash = Math.abs(hash);
    const cvv = ((absHash % 900) + 100).toString();

    return { cvv, expiresAt };
  }

  static validateCardTransaction(
    card: VirtualCard,
    amountPaise: number,
    channel: "online" | "pos" | "atm" | "international",
  ): { allowed: boolean; reason?: string } {
    if (card.controls.isFrozen) {
      return { allowed: false, reason: "Card is temporarily frozen" };
    }
    if (amountPaise > card.controls.dailyTransactionLimitPaise) {
      return { allowed: false, reason: "Exceeds card daily transaction limit" };
    }
    if (channel === "online" && !card.controls.onlinePayments) {
      return {
        allowed: false,
        reason: "Online payments are disabled for this card",
      };
    }
    if (channel === "international" && !card.controls.internationalPayments) {
      return { allowed: false, reason: "International transactions disabled" };
    }
    return { allowed: true };
  }
}
