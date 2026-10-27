import React from "react";
import { PaymentRequest } from "../../types";
import {
  X,
  Bell,
  CheckCircle2,
  AlertCircle,
  ArrowUpRight,
  ArrowDownLeft,
} from "lucide-react";
import { motion } from "motion/react";

interface NotificationsInboxProps {
  requests: PaymentRequest[];
  currencySymbol: string;
  onClose: () => void;
  onPayRequest: (req: PaymentRequest) => void;
}

export const NotificationsInbox: React.FC<NotificationsInboxProps> = ({
  requests,
  currencySymbol,
  onClose,
  onPayRequest,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="absolute inset-0 bg-[#0e0f12]/90 backdrop-blur-md z-50 flex flex-col p-6 text-white"
    >
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <Bell className="w-5 h-5 text-amber-400" />
          <h2 className="text-lg font-bold">Notifications & Inbox</h2>
        </div>
        <button
          onClick={onClose}
          className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:text-white"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="space-y-3 flex-1 overflow-y-auto pr-1">
        <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
          Payment Requests
        </div>
        {requests.length === 0 ? (
          <div className="text-center py-12 text-gray-500 text-xs">
            No notifications or requests
          </div>
        ) : (
          requests.map((req) => (
            <div
              key={req.id}
              className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <img
                  src={req.avatar}
                  alt={req.recipientName}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div className="text-sm font-semibold">
                    {req.recipientName}
                  </div>
                  <div className="text-xs text-gray-400">
                    Requested {currencySymbol}
                    {req.amount.toFixed(2)}
                  </div>
                  <div className="text-[10px] text-gray-500">{req.date}</div>
                </div>
              </div>

              {req.status === "pending" ? (
                <button
                  onClick={() => onPayRequest(req)}
                  className="bg-white text-gray-900 text-xs font-semibold px-3.5 py-1.5 rounded-full hover:bg-gray-100 transition"
                >
                  Pay Now
                </button>
              ) : (
                <span className="text-xs text-emerald-400 font-semibold bg-emerald-500/10 px-2.5 py-1 rounded-full">
                  Paid
                </span>
              )}
            </div>
          ))
        )}

        <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mt-6 mb-2">
          System & Budget Alerts
        </div>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-start gap-3">
          <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
            <CheckCircle2 className="w-4 h-4" />
          </div>
          <div>
            <div className="text-sm font-semibold">Monthly Budget On Track</div>
            <div className="text-xs text-gray-400">
              You have spent 38% of your monthly limit. Keep it up!
            </div>
            <div className="text-[10px] text-gray-500 mt-1">Today, 9:00 AM</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
