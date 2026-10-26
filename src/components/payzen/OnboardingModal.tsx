import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, Zap, Smartphone, ArrowRight } from 'lucide-react';

interface OnboardingModalProps {
  onComplete: () => void;
}

export const OnboardingModal: React.FC<OnboardingModalProps> = ({ onComplete }) => {
  const [step, setStep] = useState(0);

  const slides = [
    {
      title: 'Welcome to PayZen',
      subtitle: 'The next-generation fintech experience designed for speed, security, and simplicity.',
      icon: Zap,
      bg: 'from-amber-400 to-orange-500'
    },
    {
      title: 'Instant Secure Transfers',
      subtitle: 'Send and request money with custom calculator logic, split bills, and instant QR scanning.',
      icon: Smartphone,
      bg: 'from-cyan-400 to-blue-600'
    },
    {
      title: 'Bank-Grade Protection',
      subtitle: 'Secured with 4-digit PIN lock, SHA-256 encryption, and daily spending limits.',
      icon: Shield,
      bg: 'from-emerald-400 to-teal-600'
    }
  ];

  const currentSlide = slides[step];
  const Icon = currentSlide.icon;

  const handleNext = () => {
    if (step < slides.length - 1) {
      setStep(step + 1);
    } else {
      onComplete();
    }
  };

  return (
    <div className="absolute inset-0 bg-[#0e0f12] z-50 flex flex-col justify-between p-6 text-white">
      <div className="flex justify-end pt-4">
        <button
          onClick={onComplete}
          className="text-xs text-gray-400 hover:text-white font-medium px-3 py-1 rounded-full bg-white/5"
        >
          Skip
        </button>
      </div>

      <div className="flex flex-col items-center text-center my-auto px-4">
        <motion.div
          key={step}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${currentSlide.bg} flex items-center justify-center shadow-2xl mb-8 text-gray-900`}
        >
          <Icon className="w-12 h-12" />
        </motion.div>

        <motion.h2
          key={`title-${step}`}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-2xl font-extrabold tracking-tight mb-3"
        >
          {currentSlide.title}
        </motion.h2>

        <motion.p
          key={`sub-${step}`}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-sm text-gray-400 leading-relaxed max-w-xs"
        >
          {currentSlide.subtitle}
        </motion.p>
      </div>

      <div className="pb-8">
        <div className="flex justify-center items-center gap-2 mb-6">
          {slides.map((_, idx) => (
            <div
              key={idx}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                step === idx ? 'w-8 bg-white' : 'w-2 bg-white/20'
              }`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="w-full bg-white text-gray-900 font-bold py-3.5 rounded-2xl flex items-center justify-center gap-2 hover:bg-gray-100 transition shadow-lg active:scale-98"
        >
          <span>{step === slides.length - 1 ? 'Get Started' : 'Continue'}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
