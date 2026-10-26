/**
 * Module 10: Multi-Bank Account Aggregator & Balance Fetcher
 */

export interface LinkedBankAccount {
  id: string;
  bankName: string;
  bankCode: 'HDFC' | 'SBI' | 'ICICI' | 'AXIS' | 'PAYTM';
  accountNumberMasked: string;
  accountType: 'SAVINGS' | 'CURRENT';
  ifscPrefix: string;
  isPrimary: boolean;
  cachedBalancePaise: number;
  lastSyncedAt: number;
}

export class BankAggregatorEngine {
  private accounts: LinkedBankAccount[] = [
    {
      id: 'acc_hdfc_01',
      bankName: 'HDFC Bank',
      bankCode: 'HDFC',
      accountNumberMasked: '•••• 4892',
      accountType: 'SAVINGS',
      ifscPrefix: 'HDFC0001234',
      isPrimary: true,
      cachedBalancePaise: 785443,
      lastSyncedAt: Date.now(),
    },
    {
      id: 'acc_sbi_02',
      bankName: 'State Bank of India',
      bankCode: 'SBI',
      accountNumberMasked: '•••• 1104',
      accountType: 'SAVINGS',
      ifscPrefix: 'SBIN0000456',
      isPrimary: false,
      cachedBalancePaise: 2450000,
      lastSyncedAt: Date.now() - 86400000,
    }
  ];

  getAccounts(): LinkedBankAccount[] {
    return [...this.accounts];
  }

  getPrimaryAccount(): LinkedBankAccount {
    return this.accounts.find(a => a.isPrimary) || this.accounts[0];
  }

  setPrimary(accountId: string) {
    this.accounts = this.accounts.map(acc => ({
      ...acc,
      isPrimary: acc.id === accountId,
    }));
  }

  async checkBalance(accountId: string, _mpin: string): Promise<{ success: boolean; balancePaise: number }> {
    await new Promise(resolve => setTimeout(resolve, 800));
    const acc = this.accounts.find(a => a.id === accountId);
    if (!acc) throw new Error('Account not found');
    return { success: true, balancePaise: acc.cachedBalancePaise };
  }
}
