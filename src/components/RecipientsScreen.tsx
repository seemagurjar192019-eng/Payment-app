import React, { useState } from 'react';
import { Recipient } from '../types';
import { Search, Plus, UserPlus, Check, Star, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface RecipientsScreenProps {
  recipients: Recipient[];
  onSelectRecipient: (recipient: Recipient) => void;
  onAddRecipient: (newRecipient: Recipient) => void;
}

export const RecipientsScreen: React.FC<RecipientsScreenProps> = ({
  recipients,
  onSelectRecipient,
  onAddRecipient,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [newName, setNewName] = useState('');
  const [newHandle, setNewHandle] = useState('');

  const filteredRecipients = recipients.filter(
    (r) =>
      r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.handle.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim()) return;
    const newRec: Recipient = {
      id: `rec-${Date.now()}`,
      name: newName,
      handle: newHandle.startsWith('@') ? newHandle : `@${newHandle || newName.toLowerCase().replace(/\s+/g, '')}`,
      avatar: `https://images.unsplash.com/photo-${1500000000000 + Math.floor(Math.random() * 999999)}?w=150&auto=format&fit=crop&q=80`,
      bankInfo: 'PayZen Instant 4921',
      isFavorite: false,
    };
    onAddRecipient(newRec);
    setNewName('');
    setNewHandle('');
    setShowAddModal(false);
  };

  return (
    <div className="flex flex-col flex-1 px-5 pt-3 pb-24">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-xl font-bold text-white tracking-tight">Recipients</h2>
          <p className="text-xs text-gray-400">Send & request instantly</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="bg-white text-gray-900 text-xs font-semibold px-3.5 py-2 rounded-full flex items-center gap-1.5 hover:bg-gray-100 transition shadow-md active:scale-95"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Add</span>
        </button>
      </div>

      {/* Favorites / Quick Grid */}
      <div className="mb-6">
        <div className="text-xs font-semibold text-gray-400 mb-3 uppercase tracking-wider">Favorites</div>
        <div className="grid grid-cols-4 gap-3">
          {recipients.filter(r => r.isFavorite).map((rec) => (
            <motion.div
              key={rec.id}
              whileTap={{ scale: 0.95 }}
              onClick={() => onSelectRecipient(rec)}
              className="flex flex-col items-center cursor-pointer group"
            >
              <div className="relative mb-1">
                <img
                  src={rec.avatar}
                  alt={rec.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-white/20 group-hover:border-emerald-400 transition"
                />
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full border-2 border-[#0e0f12] flex items-center justify-center text-[10px] text-white">
                  ✓
                </div>
              </div>
              <span className="text-xs font-medium text-white truncate w-full text-center">{rec.name}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Search & List */}
      <div className="bg-white text-gray-900 rounded-t-[32px] -mx-5 px-5 pt-6 pb-12 flex-1 shadow-[0_-10px_30px_rgba(0,0,0,0.3)]">
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Search name or handle..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-gray-100 text-xs rounded-2xl pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-300"
          />
          <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
        </div>

        <div className="space-y-2">
          {filteredRecipients.map((rec) => (
            <div
              key={rec.id}
              onClick={() => onSelectRecipient(rec)}
              className="flex items-center justify-between p-3 rounded-2xl hover:bg-gray-50 transition cursor-pointer border border-transparent hover:border-gray-100"
            >
              <div className="flex items-center gap-3">
                <img src={rec.avatar} alt={rec.name} className="w-11 h-11 rounded-full object-cover" />
                <div>
                  <div className="text-sm font-semibold text-gray-900">{rec.name}</div>
                  <div className="text-xs text-gray-500">{rec.handle}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-medium text-gray-400 bg-gray-100 px-2.5 py-1 rounded-full">
                  {rec.bankInfo}
                </span>
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-700">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add Recipient Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-[#1a1c23] border border-white/10 rounded-3xl p-6 w-full max-w-sm text-white shadow-2xl"
          >
            <h3 className="text-lg font-bold mb-4">Add New Recipient</h3>
            <form onSubmit={handleCreate} className="space-y-4">
              <div>
                <label className="text-xs text-gray-400 mb-1 block">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Rivera"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-white"
                />
              </div>
              <div>
                <label className="text-xs text-gray-400 mb-1 block">PayZen Handle</label>
                <input
                  type="text"
                  placeholder="e.g. @alex"
                  value={newHandle}
                  onChange={(e) => setNewHandle(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-white"
                />
              </div>
              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="flex-1 bg-white/10 hover:bg-white/15 py-2.5 rounded-xl text-sm font-semibold transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-white text-gray-900 py-2.5 rounded-xl text-sm font-semibold hover:bg-gray-100 transition"
                >
                  Save Recipient
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
};
