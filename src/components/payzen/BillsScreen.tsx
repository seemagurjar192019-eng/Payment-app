import React, { useState } from 'react';
import { Smartphone, Zap, Tv, X, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface BillsScreenProps {
  currencySymbol: string;
  balance: number;
  onPayBill: (title: string, amount: number) => void;
  onClose: () => void;
}

export const BillsScreen: React.FC<BillsScreenProps> = ({
  currencySymbol,
  balance,
  onPayBill,
  onClose,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<'mobile' | 'electricity' | 'dth'>('mobile');
  const [consumerId, setConsumerId] = useState('');
  const [amount, setAmount] = useState('499');
  const [successMsg, setSuccessMsg] = useState(false);

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    const val = parseFloat(amount) || 0;
    if (val <= 0) return;
    if (val > balance) {
      alert('Insufficient demo balance');
      return;
    }
    onPayBill(`${selectedCategory.toUpperCase()} Recharge / Bill`, val);
    setSuccessMsg(true);
    setTimeout(() => {
      setSuccessMsg(false);
      onClose();
    }, 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="absolute inset-0 bg-[#0e0f12] z-50 flex flex-col p-6 text-white overflow-y-auto"
    >
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-bold tracking-tight">Bills & Recharge</h2>
          <p className="text-xs text-gray-400">Simulated utility payments</p>
        </div>
        <button
          onClick={onClose}
          className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:text-white"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {successMsg ? (
        <div className="flex-1 flex flex-col items-center justify-center text-center">
          <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center text-white mb-4 shadow-xl">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-lg font-bold">Payment Successful!</h3>
          <p className="text-xs text-gray-400 mt-1">Utility bill processed instantly</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-3 gap-3 mb-6">
            <button
              onClick={() => setSelectedCategory('mobile')}
              className={`p-3 rounded-2xl border flex flex-col items-center gap-2 transition ${
                selectedCategory === 'mobile' ? 'bg-white text-gray-900 border-white font-bold' : 'bg-white/5 border-white/10 text-gray-300'
              }`}
            >
              <Smartphone className="w-5 h-5" />
              <span className="text-xs">Mobile</span>
            </button>
            <button
              onClick={() => setSelectedCategory('electricity')}
              className={`p-3 rounded-2xl border flex flex-col items-center gap-2 transition ${
                selectedCategory === 'electricity' ? 'bg-white text-gray-900 border-white font-bold' : 'bg-white/5 border-white/10 text-gray-300'
              }`}
            >
              <Zap className="w-5 h-5" />
              <span className="text-xs">Electricity</span>
            </button>
            <button
              onClick={() => setSelectedCategory('dth')}
              className={`p-3 rounded-2xl border flex flex-col items-center gap-2 transition ${
                selectedCategory === 'dth' ? 'bg-white text-gray-900 border-white font-bold' : 'bg-white/5 border-white/10 text-gray-300'
              }`}
            >
              <Tv className="w-5 h-5" />
              <span className="text-xs">DTH</span>
            </button>
          </div>

          <form onSubmit={handlePay} className="space-y-4">
            <div>
              <label className="text-xs text-gray-400 mb-1 block">
                {selectedCategory === 'mobile' ? 'Mobile Number' : selectedCategory === 'electricity' ? 'Consumer / Account Number' : 'Subscriber ID'}
              </label>
              <input
                type="text"
                required
                placeholder={selectedCategory === 'mobile' ? '98765 43210' : '1004928192'}
                value={consumerId}
                onChange={(e) => setConsumerId(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-3 text-sm text-white focus:outline-none focus:border-white"
              />
            </div>

            <div>
              <label className="text-xs text-gray-400 mb-1 block">Amount ({currencySymbol})</label>
              <input
                type="number"
                required
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-3 text-sm text-white focus:outline-none focus:border-white font-bold"
              />
            </div>

            <button
              type="submit"
              className="w-full mt-6 bg-white text-gray-900 font-bold py-3.5 rounded-2xl flex items-center justify-center gap-2 hover:bg-gray-100 transition shadow-lg"
            >
              <span>Pay {currencySymbol}{amount}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </>
      )}
    </motion.div>
  );
};
