import React from "react";
import { Home, CreditCard, Users, User, ArrowLeftRight } from "lucide-react";
import { ScreenType } from "../types";
import { motion } from "motion/react";

interface NavbarProps {
  currentScreen: ScreenType;
  onNavigate: (screen: ScreenType) => void;
  onOpenSendMoney: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentScreen,
  onNavigate,
  onOpenSendMoney,
}) => {
  const navItems: {
    id: ScreenType;
    label: string;
    icon: React.ComponentType<{ className?: string }>;
  }[] = [
    { id: "recipients", label: "Recipients", icon: Users },
    { id: "home", label: "Home", icon: Home },
    { id: "cards", label: "Cards", icon: CreditCard },
    { id: "profile", label: "Profile", icon: User },
  ];

  return (
    <div className="absolute bottom-4 left-0 right-0 px-6 flex justify-center z-40 pointer-events-none">
      <div className="pointer-events-auto bg-[#1a1c23]/90 backdrop-blur-xl border border-white/10 rounded-full px-4 py-2.5 shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex items-center gap-3">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentScreen === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`relative px-4 py-2 rounded-full flex items-center justify-center transition-colors duration-200 ${
                isActive ? "text-white" : "text-gray-400 hover:text-gray-200"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activePill"
                  className="absolute inset-0 bg-white/15 rounded-full shadow-inner"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <Icon className="w-5 h-5 relative z-10" />
            </button>
          );
        })}

        {/* Quick Send Floating Button inside dock */}
        <button
          onClick={onOpenSendMoney}
          className="bg-white text-gray-900 p-2.5 rounded-full hover:bg-gray-100 transition-transform active:scale-95 shadow-lg flex items-center justify-center ml-1"
          title="Send Money"
        >
          <ArrowLeftRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
