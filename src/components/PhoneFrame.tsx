import React from 'react';
import { Wifi, Battery, Signal } from 'lucide-react';

interface PhoneFrameProps {
  children: React.ReactNode;
  currentTime?: string;
}

export const PhoneFrame: React.FC<PhoneFrameProps> = ({ children, currentTime = '1:01' }) => {
  return (
    <div className="min-h-screen bg-[#121316] text-white flex items-center justify-center p-0 sm:p-4 md:p-6 overflow-x-hidden">
      {/* Desktop Wrapper with Realistic iPhone Frame */}
      <div className="relative w-full sm:w-[393px] sm:h-[852px] sm:max-h-[95vh] bg-[#0e0f12] sm:rounded-[48px] sm:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8),0_0_0_12px_#1f232b,0_0_0_14px_#374151] flex flex-col overflow-hidden">
        
        {/* iOS Status Bar */}
        <div className="pt-3 px-6 pb-2 flex justify-between items-center text-xs font-semibold text-gray-300 select-none z-50 bg-[#0e0f12] shrink-0">
          <span>{currentTime}</span>
          
          {/* Dynamic Island / Notch */}
          <div className="absolute left-1/2 -translate-x-1/2 top-2.5 w-28 h-7 bg-black rounded-full flex items-center justify-between px-2.5 shadow-md">
            <div className="w-2.5 h-2.5 rounded-full bg-[#111] border border-gray-800 flex items-center justify-center">
              <div className="w-1 h-1 rounded-full bg-[#0d2137]"></div>
            </div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#111]"></div>
          </div>

          <div className="flex items-center gap-1.5">
            <Signal className="w-3.5 h-3.5" />
            <Wifi className="w-3.5 h-3.5" />
            <Battery className="w-4 h-4" />
          </div>
        </div>

        {/* App Main Viewport Container */}
        <div className="flex-1 flex flex-col overflow-y-auto relative scrollbar-none pb-24">
          {children}
        </div>

        {/* iOS Home Indicator Bar */}
        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full pointer-events-none z-50"></div>
      </div>
    </div>
  );
};
