/**
 * Module 6: Bill Split & Peer-to-Peer Settlement Algorithm
 */

export interface ExpenseParticipant {
  userId: string;
  name: string;
  paidAmount: number;
  owedAmount: number;
}

export interface SettlementTransfer {
  fromUser: string;
  toUser: string;
  amount: number;
}

export class BillSplitter {
  public static calculateSettlements(
    participants: ExpenseParticipant[],
  ): SettlementTransfer[] {
    const netBalances: { userId: string; net: number }[] = participants
      .map((p) => ({
        userId: p.name,
        net: p.paidAmount - p.owedAmount,
      }))
      .filter((p) => Math.abs(p.net) > 0.01);

    const settlements: SettlementTransfer[] = [];

    const debtors = netBalances
      .filter((b) => b.net < 0)
      .sort((a, b) => a.net - b.net);
    const creditors = netBalances
      .filter((b) => b.net > 0)
      .sort((a, b) => b.net - a.net);

    let dIdx = 0;
    let cIdx = 0;

    while (dIdx < debtors.length && cIdx < creditors.length) {
      const debtor = debtors[dIdx];
      const creditor = creditors[cIdx];

      const settleAmount = Math.min(Math.abs(debtor.net), creditor.net);

      settlements.push({
        fromUser: debtor.userId,
        toUser: creditor.userId,
        amount: Math.round(settleAmount * 100) / 100,
      });

      debtor.net += settleAmount;
      creditor.net -= settleAmount;

      if (Math.abs(debtor.net) < 0.01) dIdx++;
      if (Math.abs(creditor.net) < 0.01) cIdx++;
    }

    return settlements;
  }
}
