/**
 * Module 9: Multi-Account Debit Switching (Wallet vs Bank vs RuPay)
 */

export type PaymentMethodType = "BANK_ACCOUNT" | "WALLET" | "RUPAY_CREDIT_CARD";

export interface LinkedPaymentInstrument {
  id: string;
  type: PaymentMethodType;
  bankName: string;
  accountNumberMasked: string;
  ifscPrefix: string;
  isDefault: boolean;
  balancePaise: number;
  badgeText?: string;
  themeColor: string;
}

export const USER_LINKED_INSTRUMENTS: LinkedPaymentInstrument[] = [
  {
    id: "INST_HDFC",
    type: "BANK_ACCOUNT",
    bankName: "HDFC Bank",
    accountNumberMasked: "•••• 4921",
    ifscPrefix: "HDFC0001234",
    isDefault: true,
    balancePaise: 4256000,
    themeColor: "#004c8f",
  },
  {
    id: "INST_SBI",
    type: "BANK_ACCOUNT",
    bankName: "State Bank of India",
    accountNumberMasked: "•••• 8812",
    ifscPrefix: "SBIN0000451",
    isDefault: false,
    balancePaise: 841000,
    themeColor: "#280071",
  },
  {
    id: "INST_WALLET",
    type: "WALLET",
    bankName: "PayZen Wallet",
    accountNumberMasked: "Active Balance",
    ifscPrefix: "PAYZEN001",
    isDefault: false,
    balancePaise: 785443,
    badgeText: "Instant",
    themeColor: "#10b981",
  },
  {
    id: "INST_RUPAY_CC",
    type: "RUPAY_CREDIT_CARD",
    bankName: "ICICI Coral RuPay Card",
    accountNumberMasked: "•••• 1092",
    ifscPrefix: "ICIC0000002",
    isDefault: false,
    balancePaise: 15000000,
    badgeText: "UPI Credit",
    themeColor: "#ea580c",
  },
];
