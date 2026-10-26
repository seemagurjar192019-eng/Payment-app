import React, { useState } from 'react';
import { Shield, Delete, Check } from 'lucide-react';
import { hashPin } from '../../lib/payzen';
import { motion } from 'motion/react';

interface PinSetupModalProps {
  isSetup: boolean;
  onPinConfigured: (hash: string) => void;
  onSuccess: () => void;
  correctHash?: string | null;
}

export const PinSetupModal: React.FC<PinSetupModalProps> = ({
  isSetup,
  onPinConfigured,
  onSuccess,
  correctHash
}) => {
  const [pin, setPin] = useState('');
  const [confirmPin, setConfirmPin] = useState('');
  const [step, setStep] = useState<'enter' | 'confirm'>(isSetup ? 'enter' : 'enter');
  const [error, setError] = useState<string | null>(null);
  const [attempts, setAttempts] = useState(0);

  const handlePress = (num: string) => {
    setError(null);
    if (pin.length < 4) {
      const nextPin = pin + num;
      setPin(nextPin);
      if (nextPin.length === 4) {
        processPin(nextPin);
      }
    }
  };

  const handleDelete = () => {
    if (pin.length > 0) {
      setPin(pin.slice(0, -1));
    }
  };

  const processPin = async (enteredPin: string) => {
    const hash = await hashPin(enteredPin);
    if (isSetup) {
      if (step === 'enter') {
        setConfirmPin(enteredPin);
        setPin('');
        setStep('confirm');
      } else {
        if (enteredPin === confirmPin) {
          onPinConfigured(hash);
          onSuccess();
        } else {
          setError('PINs do not match. Try again.');
          setPin('');
          setStep('enter');
        }
      }
    } else {
      if (correctHash && hash === correctHash) {
        onSuccess();
      } else {
        const nextAttempts = attempts + 1;
        setAttempts(nextAttempts);
        setError(`Incorrect PIN (${nextAttempts}/5 attempts)`);
        setPin('');
        if (nextAttempts >= 5) {
          setError('Too many incorrect attempts. Locked for 30s.');
          setTimeout(() => setAttempts(0), 30000);
        }
      }
    }
  };

  return (
    <div className="absolute inset-0 bg-[#0e0f12] z-50 flex flex-col items-center justify-between p-6 text-white select-none">
      <div className="pt-12 flex flex-col items-center">
        <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-emerald-400 mb-4 shadow-lg">
          <Shield className="w-7 h-7" />
        </div>
        <h2 className="text-xl font-bold tracking-tight mb-1">
          {isSetup ? (step === 'enter' ? 'Set 4-Digit PIN' : 'Confirm PIN') : 'Enter Security PIN'}
        </h2>
        <p className="text-xs text-gray-400 text-center max-w-xs">
          {isSetup
            ? 'Protect your PayZen demo wallet & transactions'
            : 'Enter your 4-digit secure demo PIN'}
        </p>
      </div>

      {/* PIN Dots */}
      <div className="flex gap-4 my-6">
        {[0, 1, 2, 3].map((idx) => (
          <div
            key={idx}
            className={`w-4 h-4 rounded-full transition-all duration-200 ${
              idx < pin.length ? 'bg-emerald-400 scale-110 shadow-[0_0_12px_rgba(52,211,153,0.6)]' : 'bg-white/20'
            }`}
          />
        ))}
      </div>

      {error && (
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-red-400 text-xs font-semibold bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20"
        >
          {error}
        </motion.div>
      )}

      {/* Numeric Keypad */}
      <div className="grid grid-cols-3 gap-4 w-full max-w-xs mb-8">
        {['1', '2', '3', '4', '5', '6', '7', '8', '9', '', '0', 'delete'].map((item, idx) => {
          if (item === '') return <div key={idx} />;
          if (item === 'delete') {
            return (
              <button
                key={idx}
                onClick={handleDelete}
                className="h-16 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-gray-300 active:scale-95 transition"
              >
                <Delete className="w-6 h-6" />
              </button>
            );
          }
          return (
            <button
              key={idx}
              onClick={() => handlePress(item)}
              className="h-16 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-xl font-bold flex items-center justify-center active:scale-95 transition shadow-sm"
            >
              {item}
            </button>
          );
        })}
      </div>

      <div className="pb-4 text-center text-[10px] text-gray-500">
        Secured with SHA-256 Web Crypto
      </div>
    </div>
  );
};
