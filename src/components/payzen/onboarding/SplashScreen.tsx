import { motion } from "framer-motion";
import { ShieldCheck, Lock, Landmark } from "lucide-react";
import { Press } from "../ui";

export function SplashScreen({ onComplete }: { onComplete: () => void }) {
  return (
    <div className="absolute inset-0 z-50 flex flex-col justify-between bg-zinc-950 p-6 text-white">
      <div className="flex justify-end pt-2">
        <span className="rounded-full bg-zinc-900 px-3 py-1 text-xs font-medium text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5">
          <ShieldCheck className="size-3.5" /> RBI Sandbox Demo
        </span>
      </div>

      <div className="my-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="mb-6 grid size-20 place-content-center rounded-3xl bg-gradient-to-tr from-indigo-600 to-violet-500 shadow-2xl shadow-indigo-500/40"
        >
          <Landmark className="size-10 text-white" />
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-extrabold tracking-tight"
        >
          PayZen <span className="text-indigo-400">Bank</span>
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-2 max-w-[280px] text-sm text-zinc-400"
        >
          India&apos;s Next-Gen Secure Digital Banking & Unified Payments
          Ecosystem
        </motion.p>
      </div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="space-y-4 pb-4"
      >
        <div className="flex items-center justify-center gap-2 text-xs text-zinc-500">
          <Lock className="size-3 text-emerald-400" /> 256-Bit AES End-to-End
          Encryption
        </div>
        <Press
          onClick={onComplete}
          className="w-full rounded-2xl bg-indigo-600 py-4 font-semibold text-white shadow-lg shadow-indigo-600/30 hover:bg-indigo-500 active:scale-[0.98] transition-all"
        >
          Get Started
        </Press>
      </motion.div>
    </div>
  );
}
