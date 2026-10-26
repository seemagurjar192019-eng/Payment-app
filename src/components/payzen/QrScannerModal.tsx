import React, { useState } from 'react';
import { Recipient } from '../../types';
import { X, QrCode, Camera, Sparkles, Check, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { UpiParser } from '@/lib/upi-qr';

interface QrScannerModalProps {
  recipients: Recipient[];
  onSelectRecipient: (recipient: Recipient) => void;
  onClose: () => void;
}

export const QrScannerModal: React.FC<QrScannerModalProps> = ({
  recipients,
  onSelectRecipient,
  onClose,
}) => {
  const [tab, setTab] = useState<'scan' | 'myqr'>('scan');
  const [scanning, setScanning] = useState(false);
  const [manualUri, setManualUri] = useState('');
  const [parseError, setParseError] = useState<string | null>(null);

  const simulateScan = (rec: Recipient) => {
    setScanning(true);
    setTimeout(() => {
      setScanning(false);
      onSelectRecipient(rec);
    }, 800);
  };

  const handleManualScan = (e: React.FormEvent) => {
    e.preventDefault();
    setParseError(null);
    try {
      const parsed = UpiParser.parse(manualUri);
      const matchedRecipient: Recipient = recipients.find(r => r.handle.includes(parsed.pa)) || {
        id: `upi_${Date.now()}`,
        name: parsed.pn,
        handle: parsed.pa,
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
        hue: 120
      };
      onSelectRecipient(matchedRecipient);
    } catch (err: any) {
      setParseError(err.message || 'Invalid NPCI UPI QR string');
    }
  };

  const myUpiPayload = UpiParser.generatePayload({
    pa: 'payzen.user@okhdfcbank',
    pn: 'PayZen User',
    cu: 'INR',
    tn: 'Instant payment via PayZen sandbox'
  });

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="absolute inset-0 bg-[#0e0f12] z-50 flex flex-col p-6 text-white overflow-y-auto"
    >
      <div className="flex justify-between items-center mb-6">
        <div className="flex bg-white/10 p-1 rounded-full mx-auto">
          <button
            onClick={() => setTab('scan')}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition ${
              tab === 'scan' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-400 hover:text-white'
            }`}
          >
            Scan UPI QR
          </button>
          <button
            onClick={() => setTab('myqr')}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition ${
              tab === 'myqr' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-400 hover:text-white'
            }`}
          >
            My QR Code
          </button>
        </div>
        <button
          onClick={onClose}
          className="absolute right-6 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:text-white"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {tab === 'scan' ? (
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="relative w-64 h-64 border-2 border-dashed border-emerald-400/60 rounded-3xl flex items-center justify-center overflow-hidden bg-black/40 shadow-2xl">
            {scanning ? (
              <div className="text-emerald-400 font-semibold text-sm animate-pulse flex items-center gap-2">
                <Sparkles className="w-4 h-4 animate-spin" />
                <span>Decoding UPI Payload...</span>
              </div>
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                <Camera className="w-12 h-12 text-emerald-400 mb-2 animate-bounce" />
                <span className="text-xs text-gray-400 mb-2">Align NPCI BharatQR / UPI code within frame</span>
              </div>
            )}
          </div>

          {parseError && (
            <div className="mt-3 text-red-400 text-xs bg-red-500/10 px-3 py-1 rounded-lg border border-red-500/20">
              {parseError}
            </div>
          )}

          <div className="w-full mt-6">
            <div className="text-xs font-semibold text-gray-400 mb-2">Quick Simulated QR Scan:</div>
            <div className="grid grid-cols-3 gap-2">
              {recipients.slice(0, 3).map((rec) => (
                <button
                  key={rec.id}
                  onClick={() => simulateScan(rec)}
                  className="bg-white/5 hover:bg-white/10 border border-white/10 p-2.5 rounded-2xl flex flex-col items-center gap-1.5 transition active:scale-95"
                >
                  <img src={rec.avatar} alt={rec.name} className="w-10 h-10 rounded-full object-cover" />
                  <span className="text-xs font-medium truncate w-full text-center">{rec.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex-1 flex flex-col items-center justify-center text-center">
          <div className="bg-white p-6 rounded-3xl shadow-2xl mb-4">
            <div className="w-48 h-48 bg-gray-900 rounded-2xl flex items-center justify-center text-white p-4">
              <div className="grid grid-cols-6 gap-2 w-full h-full">
                {Array.from({ length: 36 }).map((_, i) => (
                  <div
                    key={i}
                    className={`rounded-xs ${
                      (i + (i % 3)) % 2 === 0 ? 'bg-white' : 'bg-gray-800'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
          <h3 className="text-lg font-bold">PayZen User</h3>
          <p className="text-xs text-emerald-400 font-mono mt-1">payzen.user@okhdfcbank</p>
          <p className="text-[11px] text-gray-400 mt-2 max-w-xs">
            Scan this NPCI compliant BharatQR to receive instant simulated payments.
          </p>
        </div>
      )}
    </motion.div>
  );
};
