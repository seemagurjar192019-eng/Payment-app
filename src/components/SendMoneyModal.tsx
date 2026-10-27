import React, { useState } from "react";
import { Recipient } from "../types";
import {
  X,
  Delete,
  ChevronDown,
  ArrowRight,
  ShieldCheck,
  Check,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface SendMoneyModalProps {
  recipients: Recipient[];
  initialRecipient?: Recipient;
  balance: number;
  currencySymbol: string;
  initialMode?: "send" | "request";
  onClose: () => void;
  onExecutePayment: (
    recipient: Recipient,
    amount: number,
    mode: "send" | "request",
  ) => void;
}

export const SendMoneyModal: React.FC<SendMoneyModalProps> = ({
  recipients,
  initialRecipient,
  balance,
  currencySymbol,
  initialMode = "send",
  onClose,
  onExecutePayment,
}) => {
  const [mode, setMode] = useState<"send" | "request">(initialMode);
  const [selectedRecipient, setSelectedRecipient] = useState<Recipient>(
    initialRecipient ||
      recipients[0] || {
        id: "default",
        name: "Pavlo",
        handle: "@pavlo",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
        bankInfo: "Vault 7642",
      },
  );

  const [displayExpression, setDisplayExpression] = useState("0");
  const [operator, setOperator] = useState<string | null>(null);
  const [prevValue, setPrevValue] = useState<number | null>(null);
  const [isCalculated, setIsCalculated] = useState(false);
  const [swipeProgress, setSwipeProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Compute final amount from expression
  const calculateResult = (): number => {
    try {
      if (operator && prevValue !== null) {
        const currentNum = parseFloat(displayExpression) || 0;
        switch (operator) {
          case "+":
            return prevValue + currentNum;
          case "-":
            return prevValue - currentNum;
          case "×":
            return prevValue * currentNum;
          case "÷":
            return currentNum !== 0 ? prevValue / currentNum : prevValue;
        }
      }
      return parseFloat(displayExpression) || 0;
    } catch {
      return 0;
    }
  };

  const finalAmount = calculateResult();

  const handleKeyPress = (char: string) => {
    setErrorMsg(null);
    if (char === "." && displayExpression.includes(".")) return;

    if (displayExpression === "0" && char !== ".") {
      setDisplayExpression(char);
    } else {
      setDisplayExpression((prev) => prev + char);
    }
  };

  const handleOperator = (op: string) => {
    const currentNum = parseFloat(displayExpression) || 0;
    setPrevValue(currentNum);
    setOperator(op);
    setDisplayExpression("0");
  };

  const handleDelete = () => {
    if (displayExpression.length > 1) {
      setDisplayExpression((prev) => prev.slice(0, -1));
    } else {
      setDisplayExpression("0");
    }
  };

  const handleConfirm = () => {
    if (finalAmount <= 0) {
      setErrorMsg("Please enter a valid amount greater than 0");
      return;
    }
    if (mode === "send" && finalAmount > balance) {
      setErrorMsg("Insufficient demo balance");
      return;
    }
    onExecutePayment(selectedRecipient, finalAmount, mode);
  };

  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "100%" }}
      transition={{ type: "spring", damping: 25, stiffness: 300 }}
      className="absolute inset-0 bg-[#0e0f12] text-gray-900 z-50 flex flex-col overflow-hidden rounded-t-[36px]"
    >
      {/* Top Sheet Container */}
      <div className="bg-white rounded-t-[36px] flex-1 flex flex-col pt-4 px-6 pb-8 shadow-2xl overflow-y-auto">
        {/* Drag Handle / Close Header */}
        <div className="flex justify-between items-center mb-4">
          <div className="w-10 h-1 bg-gray-300 rounded-full mx-auto absolute left-1/2 -translate-x-1/2 top-3"></div>

          {/* Tabs: Send / Request */}
          <div className="flex bg-gray-100 p-1 rounded-full mx-auto">
            <button
              onClick={() => {
                setMode("send");
                setErrorMsg(null);
              }}
              className={`px-5 py-1.5 rounded-full text-xs font-semibold transition ${
                mode === "send"
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              Send
            </button>
            <button
              onClick={() => {
                setMode("request");
                setErrorMsg(null);
              }}
              className={`px-5 py-1.5 rounded-full text-xs font-semibold transition ${
                mode === "request"
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              Request
            </button>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200 transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Selected Recipient info */}
        <div className="flex justify-center items-center gap-2 mb-6">
          <span className="text-xs font-semibold text-gray-600">
            {selectedRecipient.name}
          </span>
          <span className="text-xs text-gray-400">
            • {selectedRecipient.bankInfo}
          </span>
          <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
        </div>

        {/* Amount Display & Recipient Avatar */}
        <div className="flex flex-col items-center justify-center my-4 relative">
          <div className="flex items-center gap-3">
            <span className="text-4xl font-extrabold text-gray-900 tracking-tight">
              {currencySymbol}
              {finalAmount.toLocaleString("en-IN", {
                minimumFractionDigits: 0,
                maximumFractionDigits: 2,
              })}
            </span>
            <img
              src={selectedRecipient.avatar}
              alt={selectedRecipient.name}
              className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-md"
            />
          </div>

          {operator && prevValue !== null && (
            <div className="text-xs text-gray-400 mt-1 font-mono">
              {prevValue} {operator} {displayExpression}
            </div>
          )}

          <div className="text-xs text-gray-500 mt-2 font-medium">
            Available {currencySymbol}
            {balance.toLocaleString("en-IN", { minimumFractionDigits: 2 })}
          </div>

          {errorMsg && (
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute -bottom-6 bg-red-100 text-red-600 text-[11px] font-semibold px-3 py-1 rounded-full"
            >
              {errorMsg}
            </motion.div>
          )}
        </div>

        {/* Calculator Operations Row */}
        <div className="grid grid-cols-4 gap-2 mb-4 max-w-xs mx-auto w-full">
          {["+", "-", "×", "÷"].map((op) => (
            <button
              key={op}
              onClick={() => handleOperator(op)}
              className="h-10 rounded-2xl bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold text-base flex items-center justify-center transition active:scale-95"
            >
              {op}
            </button>
          ))}
        </div>

        {/* Custom Numeric Keypad */}
        <div className="grid grid-cols-3 gap-2.5 max-w-xs mx-auto w-full mb-6">
          {["1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "0"].map(
            (num) => (
              <button
                key={num}
                onClick={() => handleKeyPress(num)}
                className="h-12 rounded-2xl bg-gray-50 hover:bg-gray-100 text-gray-900 font-bold text-lg flex items-center justify-center transition active:scale-95 shadow-xs"
              >
                {num}
              </button>
            ),
          )}
          <button
            onClick={handleDelete}
            className="h-12 rounded-2xl bg-gray-50 hover:bg-gray-100 text-gray-700 font-bold text-base flex items-center justify-center transition active:scale-95 shadow-xs"
          >
            ⌫
          </button>
        </div>

        {/* Swipe to Confirm Bar */}
        <div className="mt-auto pt-2">
          <div className="relative h-14 bg-gray-100 rounded-full p-1.5 flex items-center justify-between overflow-hidden shadow-inner select-none">
            <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-gray-400 uppercase tracking-widest pointer-events-none">
              Swipe {mode} to confirm →
            </div>

            <motion.div
              drag="x"
              dragConstraints={{ left: 0, right: 240 }}
              dragElastic={0.05}
              onDrag={(e, info) => {
                setSwipeProgress(info.offset.x);
                if (info.offset.x > 200) {
                  handleConfirm();
                }
              }}
              onDragEnd={(e, info) => {
                if (info.offset.x <= 200) {
                  setSwipeProgress(0);
                }
              }}
              className="w-11 h-11 bg-gray-900 rounded-full flex items-center justify-center text-white cursor-pointer shadow-md z-10"
            >
              <ArrowRight className="w-5 h-5" />
            </motion.div>
          </div>
          <div className="text-center text-[10px] text-gray-400 mt-2 flex items-center justify-center gap-1">
            <ShieldCheck className="w-3 h-3 text-emerald-600" />
            <span>Simulation Only — Secure Encrypted Channel</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
