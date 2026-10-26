import React from 'react';
import { User, Shield, Globe, RefreshCw, LogOut, Check, Sparkles, Smartphone } from 'lucide-react';

interface ProfileScreenProps {
  currencySymbol: string;
  onToggleCurrency: (symbol: string) => void;
  onResetData: () => void;
}

export const ProfileScreen: React.FC<ProfileScreenProps> = ({
  currencySymbol,
  onToggleCurrency,
  onResetData,
}) => {
  return (
    <div className="flex flex-col flex-1 px-5 pt-3 pb-24">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-xl font-bold text-white tracking-tight">Profile & Settings</h2>
        <p className="text-xs text-gray-400">PayZen Demo Environment</p>
      </div>

      {/* User Card */}
      <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-3xl p-5 mb-6 flex items-center gap-4">
        <img
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
          alt="Avatar"
          className="w-16 h-16 rounded-full object-cover border-2 border-white/30"
        />
        <div>
          <h3 className="text-base font-bold text-white">PayZen User</h3>
          <p className="text-xs text-gray-400">@payzen.demo</p>
          <span className="inline-block mt-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-semibold">
            Verified Vault
          </span>
        </div>
      </div>

      {/* Settings Options */}
      <div className="space-y-3">
        {/* Currency Switcher */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400">
              <Globe className="w-4 h-4" />
            </div>
            <div>
              <div className="text-sm font-semibold text-white">Currency</div>
              <div className="text-xs text-gray-400">Current: {currencySymbol === '₹' ? 'INR (₹)' : 'USD ($)'}</div>
            </div>
          </div>
          <button
            onClick={() => onToggleCurrency(currencySymbol === '₹' ? '$' : '₹')}
            className="bg-white/10 hover:bg-white/15 text-white text-xs font-semibold px-3 py-1.5 rounded-xl transition"
          >
            Switch to {currencySymbol === '₹' ? 'USD ($)' : 'INR (₹)'}
          </button>
        </div>

        {/* Security / Simulation info */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400">
              <Shield className="w-4 h-4" />
            </div>
            <div>
              <div className="text-sm font-semibold text-white">Sandbox Mode</div>
              <div className="text-xs text-gray-400">Zero real money risk</div>
            </div>
          </div>
          <span className="text-xs text-emerald-400 font-bold bg-emerald-500/10 px-2 py-1 rounded-lg">
            Active
          </span>
        </div>

        {/* Reset Demo Data */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-400">
              <RefreshCw className="w-4 h-4" />
            </div>
            <div>
              <div className="text-sm font-semibold text-white">Reset Demo Data</div>
              <div className="text-xs text-gray-400">Restore default balance & txns</div>
            </div>
          </div>
          <button
            onClick={onResetData}
            className="bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 text-xs font-semibold px-3 py-1.5 rounded-xl transition"
          >
            Reset
          </button>
        </div>
      </div>

      {/* App Version footer */}
      <div className="mt-8 text-center text-xs text-gray-500">
        PayZen v2.4.0 • Built with Google AI Studio
      </div>
    </div>
  );
};
