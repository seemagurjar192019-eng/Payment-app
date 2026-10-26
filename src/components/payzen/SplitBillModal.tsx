import React, { useState } from 'react';
import { Recipient } from '../../types';
import { Users, X, Check, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface SplitBillModalProps {
  recipients: Recipient[];
  currencySymbol: string;
  onSplit: (title: string, amountPerPerson: number, selectedRecipients: Recipient[]) => void;
  onClose: () => void;
}

export const SplitBillModal: React.FC<SplitBillModalProps> = ({
  recipients,
  currencySymbol,
  onSplit,
  onClose,
}) => {
  const [title, setTitle] = useState('Dinner & Drinks');
  const [totalAmount, setTotalAmount] = useState('1200');
  const [selectedIds, setSelectedIds] = useState<string[]>(recipients.slice(0, 2).map(r => r.id));

  const toggleSelect = (id: string) => {
    if (selectedIds.includes(id)) {
      if (selectedIds.length > 1) setSelectedIds(selectedIds.filter(i => i !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const parsedTotal = parseFloat(totalAmount) || 0;
  const splitCount = selectedIds.length + 1; // including self
  const perPerson = parsedTotal > 0 ? parsedTotal / splitCount : 0;

  const handleSplitSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (parsedTotal <= 0 || selectedIds.length === 0) return;
    const selectedRecs = recipients.filter(r => selectedIds.includes(r.id));
    onSplit(title, perPerson, selectedRecs);
    onClose();
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
          <h2 className="text-xl font-bold tracking-tight">Split Bill</h2>
          <p className="text-xs text-gray-400">Request share from friends</p>
        </div>
        <button
          onClick={onClose}
          className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:text-white"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <form onSubmit={handleSplitSubmit} className="space-y-4">
        <div>
          <label className="text-xs text-gray-400 mb-1 block">Bill Description</label>
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-3 text-sm text-white focus:outline-none focus:border-white"
          />
        </div>

        <div>
          <label className="text-xs text-gray-400 mb-1 block">Total Amount ({currencySymbol})</label>
          <input
            type="number"
            required
            value={totalAmount}
            onChange={(e) => setTotalAmount(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-3 text-sm text-white focus:outline-none focus:border-white font-bold text-lg"
          />
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex justify-between items-center">
          <div>
            <div className="text-xs text-gray-400">Share per person ({splitCount} people)</div>
            <div className="text-lg font-extrabold text-emerald-400">{currencySymbol}{perPerson.toFixed(2)}</div>
          </div>
          <Users className="w-6 h-6 text-emerald-400" />
        </div>

        <div>
          <label className="text-xs text-gray-400 mb-2 block">Select Friends to Split With</label>
          <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
            {recipients.map((rec) => {
              const isSelected = selectedIds.includes(rec.id);
              return (
                <div
                  key={rec.id}
                  onClick={() => toggleSelect(rec.id)}
                  className={`flex items-center justify-between p-2.5 rounded-xl cursor-pointer transition border ${
                    isSelected ? 'bg-white/10 border-white/30' : 'bg-white/5 border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <img src={rec.avatar} alt={rec.name} className="w-8 h-8 rounded-full object-cover" />
                    <span className="text-xs font-medium">{rec.name}</span>
                  </div>
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center border ${
                    isSelected ? 'bg-emerald-500 border-emerald-500 text-white' : 'border-white/30'
                  }`}>
                    {isSelected && <Check className="w-3 h-3" />}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <button
          type="submit"
          className="w-full mt-4 bg-white text-gray-900 font-bold py-3.5 rounded-2xl flex items-center justify-center gap-2 hover:bg-gray-100 transition shadow-lg"
        >
          <span>Send Split Requests</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </form>
    </motion.div>
  );
};
