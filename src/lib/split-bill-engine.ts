/**
 * Module 7: Split Bill & Debt Simplification Engine
 */

export interface SplitMember {
  id: string;
  name: string;
  vpa: string;
}

export interface ExpenseShare {
  memberId: string;
  paidAmount: number;
  owedAmount: number;
}

export interface SimplifiedDebt {
  fromMemberId: string;
  toMemberId: string;
  amount: number;
}

export class SplitBillEngine {
  static calculateEqualSplit(totalPaise: number, memberIds: string[]): Record<string, number> {
    const count = memberIds.length;
    const baseShare = Math.floor(totalPaise / count);
    const remainder = totalPaise % count;
    
    const shares: Record<string, number> = {};
    memberIds.forEach((id, index) => {
      shares[id] = baseShare + (index < remainder ? 1 : 0);
    });
    return shares;
  }

  static simplifyDebts(shares: ExpenseShare[]): SimplifiedDebt[] {
    const netBalances: Map<string, number> = new Map();

    shares.forEach(s => {
      const net = (netBalances.get(s.memberId) || 0) + (s.paidAmount - s.owedAmount);
      netBalances.set(s.memberId, net);
    });

    const creditors: { id: string; amount: number }[] = [];
    const debtors: { id: string; amount: number }[] = [];

    netBalances.forEach((balance, id) => {
      if (balance > 0) creditors.push({ id, amount: balance });
      else if (balance < 0) debtors.push({ id, amount: -balance });
    });

    const settlements: SimplifiedDebt[] = [];

    let cIdx = 0;
    let dIdx = 0;

    while (cIdx < creditors.length && dIdx < debtors.length) {
      const creditor = creditors[cIdx];
      const debtor = debtors[dIdx];
      const settleAmount = Math.min(creditor.amount, debtor.amount);

      if (settleAmount > 0) {
        settlements.push({
          fromMemberId: debtor.id,
          toMemberId: creditor.id,
          amount: settleAmount,
        });
      }

      creditor.amount -= settleAmount;
      debtor.amount -= settleAmount;

      if (creditor.amount === 0) cIdx++;
      if (debtor.amount === 0) dIdx++;
    }

    return settlements;
  }
}
