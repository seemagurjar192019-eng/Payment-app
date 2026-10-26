import React, { useState } from 'react';
import { PayZenSettings } from '../../lib/payzen';
import { User, Shield, Bell, Globe, Lock, Download, RefreshCw, HelpCircle, FileText, ChevronRight, X, Check } from 'lucide-react';
import { motion } from 'motion/react';

interface SettingsScreenProps {
  settings: PayZenSettings;
  onUpdateSettings: (newSettings: PayZenSettings) => void;
  onResetData: () => void;
  onChangePin: () => void;
  onClose: () => void;
}

export const SettingsScreen: React.FC<SettingsScreenProps> = ({
  settings,
  onUpdateSettings,
  onResetData,
  onChangePin,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<'main' | 'support' | 'faq'>('main');
  const [supportMessage, setSupportMessage] = useState('');
  const [supportSent, setSupportSent] = useState(false);

  const handleExportCsv = () => {
    const csvContent = "data:text/csv;charset=utf-8,ID,Merchant,Category,Amount,Date\n1,Apple,Technology,-60,Today\n2,Threads,Social Media,-300,Yesterday";
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "payzen_transactions.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="absolute inset-0 bg-[#0e0f12] z-50 flex flex-col p-6 text-white overflow-y-auto pb-24"
    >
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-bold tracking-tight">Settings</h2>
          <p className="text-xs text-gray-400">Preferences & Security</p>
        </div>
        <button
          onClick={onClose}
          className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:text-white"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {activeTab === 'main' && (
        <div className="space-y-6">
          {/* Account */}
          <div>
            <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Account</div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
                  alt="Avatar"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="text-sm font-bold">PayZen User</div>
                  <div className="text-xs text-gray-400">nai689915@gmail.com • Verified</div>
                </div>
              </div>
              <span className="text-xs text-emerald-400 font-semibold bg-emerald-500/10 px-2.5 py-1 rounded-full">
                Active
              </span>
            </div>
          </div>

          {/* Security */}
          <div>
            <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Security & PIN</div>
            <div className="bg-white/5 border border-white/10 rounded-2xl divide-y divide-white/5">
              <div onClick={onChangePin} className="p-4 flex items-center justify-between cursor-pointer hover:bg-white/5 transition">
                <div className="flex items-center gap-3">
                  <Lock className="w-4 h-4 text-emerald-400" />
                  <span className="text-sm font-medium">Change Security PIN</span>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-500" />
              </div>

              <div className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Shield className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm font-medium">Daily Send Limit</span>
                </div>
                <span className="text-xs font-bold text-gray-300">₹{settings.dailyLimit.toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* Preferences */}
          <div>
            <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Preferences</div>
            <div className="bg-white/5 border border-white/10 rounded-2xl divide-y divide-white/5">
              <div className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Globe className="w-4 h-4 text-blue-400" />
                  <span className="text-sm font-medium">Currency Symbol</span>
                </div>
                <button
                  onClick={() => onUpdateSettings({ ...settings, currency: settings.currency === '₹' ? '$' : '₹' })}
                  className="bg-white/10 px-3 py-1 rounded-lg text-xs font-bold"
                >
                  {settings.currency === '₹' ? 'INR (₹)' : 'USD ($)'}
                </button>
              </div>

              <div className="p-4 flex items-center justify-between">
                <span className="text-sm font-medium">Hide Balance (Tap to Reveal)</span>
                <input
                  type="checkbox"
                  checked={settings.hideBalance}
                  onChange={(e) => onUpdateSettings({ ...settings, hideBalance: e.target.checked })}
                  className="w-4 h-4 accent-emerald-500"
                />
              </div>

              <div className="p-4 flex items-center justify-between">
                <span className="text-sm font-medium">Sound & Haptics</span>
                <input
                  type="checkbox"
                  checked={settings.soundEnabled}
                  onChange={(e) => onUpdateSettings({ ...settings, soundEnabled: e.target.checked })}
                  className="w-4 h-4 accent-emerald-500"
                />
              </div>
            </div>
          </div>

          {/* Data & Export */}
          <div>
            <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Data Management</div>
            <div className="bg-white/5 border border-white/10 rounded-2xl divide-y divide-white/5">
              <div onClick={handleExportCsv} className="p-4 flex items-center justify-between cursor-pointer hover:bg-white/5">
                <div className="flex items-center gap-3">
                  <Download className="w-4 h-4 text-amber-400" />
                  <span className="text-sm font-medium">Export Transactions (CSV)</span>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-500" />
              </div>

              <div onClick={onResetData} className="p-4 flex items-center justify-between cursor-pointer hover:bg-white/5 text-red-400">
                <div className="flex items-center gap-3">
                  <RefreshCw className="w-4 h-4" />
                  <span className="text-sm font-medium">Reset All Demo Data</span>
                </div>
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Help & Legal */}
          <div>
            <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Help & Legal</div>
            <div className="bg-white/5 border border-white/10 rounded-2xl divide-y divide-white/5">
              <div onClick={() => setActiveTab('faq')} className="p-4 flex items-center justify-between cursor-pointer hover:bg-white/5">
                <div className="flex items-center gap-3">
                  <HelpCircle className="w-4 h-4 text-purple-400" />
                  <span className="text-sm font-medium">FAQ & Support</span>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-500" />
              </div>
              <div className="p-4 flex items-center justify-between text-xs text-gray-500">
                <span>PayZen Test Mode v2.5</span>
                <span>Sandbox Secure</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'faq' && (
        <div className="space-y-4">
          <button onClick={() => setActiveTab('main')} className="text-xs text-emerald-400 font-semibold mb-2">← Back to Settings</button>
          <h3 className="text-lg font-bold">Frequently Asked Questions</h3>
          <div className="space-y-3 text-xs text-gray-300">
            <div className="bg-white/5 p-3 rounded-xl">
              <div className="font-semibold text-white mb-1">Is real money transferred?</div>
              <div>No. PayZen is purely a simulated test payment app for demonstration and UI/UX exploration.</div>
            </div>
            <div className="bg-white/5 p-3 rounded-xl">
              <div className="font-semibold text-white mb-1">How is my PIN stored?</div>
              <div>PINs are hashed using Web Crypto SHA-256 algorithm locally in your browser storage.</div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-white/10">
            <h4 className="font-bold text-sm mb-2">Contact Support</h4>
            {supportSent ? (
              <div className="bg-emerald-500/20 text-emerald-300 p-3 rounded-xl text-xs">Support message sent successfully!</div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSupportSent(true); }} className="space-y-3">
                <textarea
                  required
                  rows={3}
                  placeholder="Describe your issue..."
                  value={supportMessage}
                  onChange={(e) => setSupportMessage(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-xs text-white focus:outline-none"
                />
                <button type="submit" className="bg-white text-gray-900 font-semibold px-4 py-2 rounded-xl text-xs">Send Message</button>
              </form>
            )}
          </div>
        </div>
      )}
    </motion.div>
  );
};
