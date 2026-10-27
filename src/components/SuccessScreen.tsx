import React from "react";
import { Recipient } from "../types";
import { Check } from "lucide-react";
import { motion } from "motion/react";

interface SuccessScreenProps {
  recipient: Recipient;
  amount: number;
  currencySymbol: string;
  mode: "send" | "request";
  reference: string;
  onClose: () => void;
}

export const SuccessScreen: React.FC<SuccessScreenProps> = ({
  recipient,
  amount,
  currencySymbol,
  mode,
  reference,
  onClose,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      onClick={onClose}
      className="absolute inset-0 bg-[#10b981] z-50 flex flex-col items-center justify-between text-white p-8 cursor-pointer select-none"
    >
      <div className="pt-12 text-center">
        <span className="text-xs uppercase tracking-widest font-semibold opacity-80">
          PayZen Secure
        </span>
      </div>

      <div className="flex flex-col items-center justify-center text-center">
        {/* Animated Checkmark Circle */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="w-24 h-24 rounded-full bg-white text-[#10b981] flex items-center justify-center shadow-2xl mb-6"
        >
          <Check className="w-12 h-12 stroke-[3]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl font-extrabold tracking-tight mb-2"
        >
          {currencySymbol}
          {amount.toLocaleString("en-IN", {
            minimumFractionDigits: 0,
            maximumFractionDigits: 2,
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg font-semibold opacity-90 mb-4"
        >
          {mode === "send"
            ? `Sent to ${recipient.name}`
            : `Requested from ${recipient.name}`}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-black/10 px-4 py-2 rounded-xl text-xs font-mono font-medium backdrop-blur-sm"
        >
          Ref: {reference} • SIMULATION ONLY
        </motion.div>
      </div>

      <div className="pb-6 text-center text-xs opacity-80 font-medium animate-pulse">
        Tap anywhere to close
      </div>
    </motion.div>
  );
};
