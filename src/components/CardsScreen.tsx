import React, { useState } from 'react';
import { DigitalCard } from '../types';
import { Plus, Snowflake, Settings, CreditCard, Check, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface CardsScreenProps {
  cards: DigitalCard[];
  currencySymbol: string;
  onUpdateCard: (updatedCard: DigitalCard) => void;
  onAddCard: () => void;
}

export const CardsScreen: React.FC<CardsScreenProps> = ({ cards, currencySymbol, onUpdateCard, onAddCard }) => {
  const [selectedCardId, setSelectedCardId] = useState<string | null>(null);

  const toggleFreeze = (card: DigitalCard, e: React.MouseEvent) => {
    e.stopPropagation();
    onUpdateCard({
      ...card,
      isFrozen: !card.isFrozen
    });
  };

  return (
    <div className="flex flex-col flex-1 px-5 pt-3 pb-24">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-white tracking-tight">Cards</h2>
          <p className="text-xs text-gray-400">Manage virtual & physical assets</p>
        </div>
        <button
          onClick={onAddCard}
          className="bg-white text-gray-900 text-xs font-semibold px-3.5 py-2 rounded-full flex items-center gap-1.5 hover:bg-gray-100 transition shadow-md active:scale-95"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Order a card</span>
        </button>
      </div>

      {/* Stacked Cards */}
      <div className="space-y-4">
        {cards.map((card, index) => {
          const bgGradient = {
            yellow: 'bg-gradient-to-br from-yellow-300 via-amber-300 to-amber-500 text-gray-900',
            turquoise: 'bg-gradient-to-br from-teal-300 via-teal-400 to-cyan-600 text-gray-900',
            blue: 'bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-700 text-white',
            purple: 'bg-gradient-to-br from-purple-500 via-fuchsia-500 to-pink-600 text-white'
          }[card.color] || 'bg-yellow-300 text-gray-900';

          return (
            <motion.div
              key={card.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedCardId(selectedCardId === card.id ? null : card.id)}
              className={`relative rounded-3xl p-6 shadow-xl transition-all border border-white/20 overflow-hidden ${bgGradient} ${
                card.isFrozen ? 'opacity-60 grayscale' : ''
              }`}
            >
              {/* Card Background Glow / Pattern */}
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>

              <div className="flex justify-between items-start mb-8">
                <div>
                  <div className="text-xs font-semibold opacity-75 uppercase tracking-wider">Digital card</div>
                  <div className="text-lg font-bold">{card.name}</div>
                </div>
                <div className="w-10 h-8 rounded-lg bg-black/20 flex items-center justify-center text-xs font-mono font-bold tracking-widest">
                  CHIP
                </div>
              </div>

              <div className="mb-6">
                <div className="text-xs opacity-75 mb-0.5">Card balance</div>
                <div className="text-2xl font-bold tracking-tight">
                  {currencySymbol}{card.balance.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                </div>
              </div>

              <div className="flex justify-between items-center pt-2 border-t border-black/10">
                <div className="font-mono text-sm tracking-wider font-semibold">
                  •••• {card.last4}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={(e) => toggleFreeze(card, e)}
                    className={`p-2 rounded-full transition ${
                      card.isFrozen ? 'bg-red-500 text-white' : 'bg-black/10 hover:bg-black/20'
                    }`}
                    title={card.isFrozen ? 'Unfreeze Card' : 'Freeze Card'}
                  >
                    <Snowflake className="w-4 h-4" />
                  </button>
                  <div className="p-2 rounded-full bg-black/10">
                    <Settings className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {card.isFrozen && (
                <div className="absolute inset-0 bg-black/40 backdrop-blur-xs flex items-center justify-center">
                  <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Card Frozen
                  </span>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Card Info Note */}
      <div className="mt-6 bg-white/5 border border-white/10 rounded-2xl p-4 text-xs text-gray-400">
        <div className="flex items-center gap-2 text-white font-medium mb-1">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>PayZen Security Vault</span>
        </div>
        Your digital cards are protected with hardware-level encryption. Tap the snowflake icon to instantly freeze or unfreeze any card.
      </div>
    </div>
  );
};
