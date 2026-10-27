/**
 * Module 4: Bharat Bill Payment System (BBPS) Utilities Engine
 */

export type BillCategory =
  "MOBILE_RECHARGE" | "ELECTRICITY" | "DTH" | "FASTAG" | "CREDIT_CARD";

export interface BillerInfo {
  id: string;
  category: BillCategory;
  name: string;
  identifierName: string;
  identifierRegex: RegExp;
  logo: string;
}

export interface FetchedBill {
  billNumber: string;
  billerId: string;
  consumerName: string;
  billDate: string;
  dueDate: string;
  amount: number;
  convenienceFee: number;
}

export const BILLERS_CATALOG: BillerInfo[] = [
  {
    id: "BILL_BESCOM",
    category: "ELECTRICITY",
    name: "BESCOM - Bengaluru Electricity",
    identifierName: "Consumer Account ID",
    identifierRegex: /^[0-9]{10}$/,
    logo: "zap",
  },
  {
    id: "BILL_FASTAG_NETC",
    category: "FASTAG",
    name: "NETC FASTag Recharge",
    identifierName: "Vehicle Number",
    identifierRegex: /^[A-Z]{2}[0-9]{2}[A-Z]{1,2}[0-9]{4}$/,
    logo: "car",
  },
  {
    id: "BILL_JIO",
    category: "MOBILE_RECHARGE",
    name: "Reliance Jio Prepaid",
    identifierName: "Mobile Number",
    identifierRegex: /^[6-9][0-9]{9}$/,
    logo: "smartphone",
  },
];

export class BbpsEngine {
  public static async fetchBill(
    billerId: string,
    identifierValue: string,
  ): Promise<FetchedBill> {
    const biller = BILLERS_CATALOG.find((b) => b.id === billerId);
    if (!biller) throw new Error("Invalid Biller ID");

    if (!biller.identifierRegex.test(identifierValue)) {
      throw new Error(`Invalid format for ${biller.identifierName}`);
    }

    await new Promise((r) => setTimeout(r, 800));

    const hash = identifierValue
      .split("")
      .reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const mockAmount = (hash % 1500) + 180;

    return {
      billNumber: `BBPS_${Date.now()}`,
      billerId,
      consumerName: "Naitik Gurjar",
      billDate: new Date(Date.now() - 7 * 86400000).toLocaleDateString(),
      dueDate: new Date(Date.now() + 5 * 86400000).toLocaleDateString(),
      amount: mockAmount,
      convenienceFee: 0,
    };
  }
}
