import React, { useState } from 'react';
import { Bell, Search, ArrowUpRight, ArrowDownLeft, QrCode, Zap, Users, Eye, EyeOff, Sparkles, Filter } from 'lucide-react';
import { DigitalCard, PaymentRequest, Transaction } from '../types';
import { motion } from 'motion/react';
import { PayZenSettings } from '../lib/payzen';

interface DashboardProps {
  balance: number;
  currencySymbol: string;
  cards: DigitalCard[];
  transactions: Transaction[];
  requests: PaymentRequest[];
  settings: PayZenSettings;
  onUpdateSettings: (s: PayZenSettings) => void;
  onOpenSend: () => void;
  onOpenRequest: () => void;
  onOpenScan: () => void;
  onOpenBills: () => void;
  onOpenSplit: () => void;
  onOpenInbox: () => void;
  onNavigateToCards: () => void;
  onNavigateToRecipients: () => void;
}

export const Dashboard: React.FC<DashboardProps> = ({
  balance,
  currencySymbol,
  cards,
  transactions,
  requests,
  settings,
  onUpdateSettings,
  onOpenSend,
  onOpenRequest,
  onOpenScan,
  onOpenBills,
  onOpenSplit,
  onOpenInbox,
  onNavigateToCards,
  onNavigateToRecipients,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState<'all' | 'send' | 'receive'>('all');

  const filteredTransactions = transactions.filter((t) => {
    const matchesSearch = t.merchant.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.category.toLowerCase().includes(searchQuery.toLowerCase());
    if (filterType === 'send') return matchesSearch && t.amount < 0;
    if (filterType === 'receive') return matchesSearch && t.amount > 0;
    return matchesSearch;
  });

  const pendingRequestsCount = requests.filter(r => r.status === 'pending').length;

  return (
    <div className="flex flex-col flex-1 px-5 pt-3">
      {/* Top Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3 cursor-pointer" onClick={onNavigateToRecipients}>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
              alt="Profile Avatar"
              className="w-11 h-11 rounded-full object-cover border-2 border-white/20 shadow-md"
            />
            <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-[#0e0f12]"></div>
          </div>
          <div>
            <div className="text-xs text-gray-400 font-medium">Welcome back</div>
            <div className="text-sm font-semibold text-white">PayZen User</div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onOpenScan}
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:bg-white/10 transition"
            title="Scan QR"
          >
            <QrCode className="w-4 h-4" />
          </button>

          <button
            onClick={onOpenInbox}
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:bg-white/10 relative transition"
            title="Notifications"
          >
            <Bell className="w-4 h-4" />
            {pendingRequestsCount > 0 && (
              <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse"></span>
            )}
          </button>
        </div>
      </div>

      {/* Hero Section: Balance & Overlapping Cards */}
      <div className="grid grid-cols-12 gap-3 mb-5 items-center">
        <div className="col-span-7">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-medium text-gray-400">Total balance</span>
            <button
              onClick={() => onUpdateSettings({ ...settings, hideBalance: !settings.hideBalance })}
              className="text-gray-400 hover:text-white"
            >
              {settings.hideBalance ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
            </button>
          </div>
          <div className="text-3xl font-bold text-white tracking-tight flex items-baseline">
            <span>{currencySymbol}</span>
            <span>
              {settings.hideBalance
                ? '••••••'
                : balance.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </span>
          </div>
        </div>

        {/* Overlapping Cards Preview */}
        <div
          onClick={onNavigateToCards}
          className="col-span-5 relative h-24 flex items-center justify-end cursor-pointer group"
          title="View all cards"
        >
          {cards.slice(0, 3).map((card, idx) => {
            const bgColors = {
              yellow: 'bg-gradient-to-br from-yellow-300 to-amber-400 text-gray-900',
              turquoise: 'bg-gradient-to-br from-teal-300 to-cyan-500 text-gray-900',
              blue: 'bg-gradient-to-br from-blue-500 to-indigo-600 text-white',
              purple: 'bg-gradient-to-br from-purple-400 to-pink-500 text-white'
            }[card.color] || 'bg-yellow-300 text-gray-900';

            const offsets = ['translate-x-0 z-10', '-translate-x-5 z-20 scale-95', '-translate-x-10 z-30 scale-90'];

            return (
              <motion.div
                key={card.id}
                whileHover={{ scale: 1.05, y: -4 }}
                className={`absolute w-20 h-28 rounded-xl p-2.5 shadow-lg border border-white/20 flex flex-col justify-between transition-transform ${bgColors} ${offsets[idx]}`}
              >
                <div className="flex justify-between items-start">
                  <div className="w-4 h-3 rounded bg-black/20"></div>
                  <div className="text-[10px] font-bold opacity-80">••{card.last4}</div>
                </div>
                <div className="text-[9px] font-semibold opacity-90 truncate">{card.name}</div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Extended Quick Actions Grid */}
      <div className="grid grid-cols-5 gap-2 mb-6">
        <button
          onClick={onOpenSend}
          className="bg-white/10 hover:bg-white/15 border border-white/10 rounded-2xl py-3 flex flex-col items-center justify-center gap-1.5 text-white transition active:scale-95"
        >
          <div className="w-8 h-8 rounded-full bg-white text-gray-900 flex items-center justify-center shadow-md">
            <ArrowUpRight className="w-4 h-4" />
          </div>
          <span className="text-[11px] font-medium">Send</span>
        </button>

        <button
          onClick={onOpenRequest}
          className="bg-white/10 hover:bg-white/15 border border-white/10 rounded-2xl py-3 flex flex-col items-center justify-center gap-1.5 text-white transition active:scale-95"
        >
          <div className="w-8 h-8 rounded-full bg-white/20 text-white flex items-center justify-center shadow-md">
            <ArrowDownLeft className="w-4 h-4" />
          </div>
          <span className="text-[11px] font-medium">Request</span>
        </button>

        <button
          onClick={onOpenScan}
          className="bg-white/10 hover:bg-white/15 border border-white/10 rounded-2xl py-3 flex flex-col items-center justify-center gap-1.5 text-white transition active:scale-95"
        >
          <div className="w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center shadow-md">
            <QrCode className="w-4 h-4" />
          </div>
          <span className="text-[11px] font-medium">Scan QR</span>
        </button>

        <button
          onClick={onOpenBills}
          className="bg-white/10 hover:bg-white/15 border border-white/10 rounded-2xl py-3 flex flex-col items-center justify-center gap-1.5 text-white transition active:scale-95"
        >
          <div className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shadow-md">
            <Zap className="w-4 h-4" />
          </div>
          <span className="text-[11px] font-medium">Bills</span>
        </button>

        <button
          onClick={onOpenSplit}
          className="bg-white/10 hover:bg-white/15 border border-white/10 rounded-2xl py-3 flex flex-col items-center justify-center gap-1.5 text-white transition active:scale-95"
        >
          <div className="w-8 h-8 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center shadow-md">
            <Users className="w-4 h-4" />
          </div>
          <span className="text-[11px] font-medium">Split</span>
        </button>
      </div>

      {/* White Transaction-History Panel */}
      <div className="bg-white text-gray-900 rounded-t-[32px] -mx-5 px-5 pt-6 pb-20 flex-1 shadow-[0_-10px_30px_rgba(0,0,0,0.3)]">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-4 bg-gray-900 rounded-full"></div>
            <h3 className="text-base font-bold text-gray-900 tracking-tight">Transactions</h3>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-gray-100 text-xs rounded-full pl-8 pr-3 py-1.5 w-32 focus:w-40 transition-all focus:outline-none"
              />
              <Search className="w-3.5 h-3.5 text-gray-400 absolute left-2.5 top-2" />
            </div>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex gap-2 mb-4">
          {(['all', 'send', 'receive'] as const).map((type) => (
            <button
              key={type}
              onClick={() => setFilterType(type)}
              className={`text-[11px] font-semibold px-3 py-1 rounded-full capitalize transition ${
                filterType === type ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {type === 'all' ? 'All' : type === 'send' ? 'Sent' : 'Received'}
            </button>
          ))}
        </div>

        {/* Transaction Items */}
        <div className="space-y-3">
          {filteredTransactions.length === 0 ? (
            <div className="text-center py-8 text-gray-400 text-xs">No transactions found</div>
          ) : (
            filteredTransactions.map((txn) => {
              const isPositive = txn.amount > 0;
              return (
                <div
                  key={txn.id}
                  className="flex items-center justify-between p-2.5 rounded-2xl hover:bg-gray-50 transition border border-transparent hover:border-gray-100"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-2xl flex items-center justify-center text-lg ${
                      txn.merchant === 'Apple' ? 'bg-gray-100 text-gray-900' :
                      txn.merchant === 'Threads' ? 'bg-black text-white' :
                      'bg-emerald-100 text-emerald-700'
                    }`}>
                      {txn.merchant === 'Apple' ? '' : txn.merchant === 'Threads' ? '🧵' : '💳'}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">{txn.merchant}</div>
                      <div className="text-[11px] text-gray-500">{txn.date}</div>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className={`text-sm font-bold ${isPositive ? 'text-emerald-600' : 'text-gray-900'}`}>
                      {isPositive ? '+' : ''}{currencySymbol}{Math.abs(txn.amount).toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                    </div>
                    <div className="text-[10px] text-gray-400">{txn.reference || 'Completed'}</div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};
