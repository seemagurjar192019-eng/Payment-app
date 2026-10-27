import React from "react";
import { ShieldCheck } from "lucide-react";

export const SimulationBanner: React.FC = () => {
  return (
    <div className="bg-emerald-500/10 border-b border-emerald-500/20 px-4 py-1.5 text-center text-xs font-medium text-emerald-400 flex items-center justify-center gap-2 backdrop-blur-md">
      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
      <span>Test Mode • Simulated Environment</span>
    </div>
  );
};
