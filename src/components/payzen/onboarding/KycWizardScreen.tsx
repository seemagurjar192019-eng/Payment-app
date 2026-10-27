import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  CheckCircle2,
  Landmark,
  CreditCard,
  Lock,
  ArrowRight,
  UserCheck,
} from "lucide-react";
import { toast } from "sonner";
import { Press } from "../ui";

export function KycWizardScreen({ onCompleted }: { onCompleted: () => void }) {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [loading, setLoading] = useState(false);

  // Form states
  const [fullName, setFullName] = useState("");
  const [panNumber, setPanNumber] = useState("");
  const [aadhaarNumber, setAadhaarNumber] = useState("");
  const [selectedBank, setSelectedBank] = useState("HDFC Bank");
  const [accountType, setAccountType] = useState<"Savings" | "Current">(
    "Savings",
  );
  const [upiPin, setUpiPin] = useState("");
  const [confirmPin, setConfirmPin] = useState("");

  const handleStep1 = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || panNumber.length < 10) {
      toast.error("Please enter a valid Full Name and 10-character PAN number");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(2);
      toast.success("PAN verified successfully via NSDL database");
    }, 800);
  };

  const handleStep2 = (e: React.FormEvent) => {
    e.preventDefault();
    if (aadhaarNumber.length < 12) {
      toast.error("Please enter a valid 12-digit Aadhaar number");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(3);
      toast.success("Aadhaar e-KYC verified successfully!");
    }, 800);
  };

  const handleStep3 = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(4);
      toast.success(
        `Linked ${selectedBank} ${accountType} Account successfully!`,
      );
    }, 800);
  };

  const handleStep4 = (e: React.FormEvent) => {
    e.preventDefault();
    if (upiPin.length !== 4 || upiPin !== confirmPin) {
      toast.error("UPI PIN must be 4 digits and match confirmation");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("UPI MPIN set securely. Welcome to PayZen!");
      onCompleted();
    }, 1000);
  };

  const banks = [
    { name: "HDFC Bank", logo: "🏛️", ifsc: "HDFC0001234" },
    { name: "State Bank of India", logo: "🏦", ifsc: "SBIN0005678" },
    { name: "ICICI Bank", logo: "💳", ifsc: "ICIC0009876" },
    { name: "Axis Bank", logo: "🪙", ifsc: "UTIB0002468" },
    { name: "Kotak Mahindra Bank", logo: "🛡️", ifsc: "KKBK0001357" },
  ];

  return (
    <div className="absolute inset-0 z-50 flex flex-col justify-between bg-zinc-950 p-6 text-white overflow-y-auto">
      <div>
        <div className="flex items-center justify-between pb-6">
          <div className="flex items-center gap-2 font-bold text-lg">
            <UserCheck className="size-5 text-emerald-400" />
            Bank KYC & Link
          </div>
          <span className="text-xs text-zinc-400 font-medium">
            Step {step} of 4
          </span>
        </div>

        {/* Progress bar */}
        <div className="grid grid-cols-4 gap-1.5 mb-6">
          {[1, 2, 3, 4].map((s) => (
            <div
              key={s}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                s <= step ? "bg-emerald-500" : "bg-zinc-800"
              }`}
            />
          ))}
        </div>

        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.form
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              onSubmit={handleStep1}
              className="space-y-4"
            >
              <div>
                <h2 className="text-xl font-bold mb-1">PAN Verification</h2>
                <p className="text-xs text-zinc-400 mb-4">
                  As per RBI guidelines, please provide your legal name and
                  Permanent Account Number (PAN).
                </p>
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1.5">
                  Full Name (As on PAN Card)
                </label>
                <input
                  type="text"
                  placeholder="Rahul Sharma"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full rounded-2xl bg-zinc-900 border border-zinc-800 px-4 py-3 text-white placeholder:text-zinc-600 outline-none focus:border-emerald-500 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1.5">
                  PAN Number
                </label>
                <input
                  type="text"
                  maxLength={10}
                  placeholder="ABCDE1234F"
                  value={panNumber}
                  onChange={(e) => setPanNumber(e.target.value.toUpperCase())}
                  className="w-full rounded-2xl bg-zinc-900 border border-zinc-800 px-4 py-3 text-white uppercase placeholder:text-zinc-600 outline-none focus:border-emerald-500 text-sm tracking-wider font-mono"
                />
              </div>

              <Press
                disabled={loading}
                className="w-full rounded-2xl bg-emerald-600 py-4 font-semibold text-white shadow-lg shadow-emerald-600/30 hover:bg-emerald-500 active:scale-[0.98] transition-all flex items-center justify-center gap-2 mt-8"
              >
                {loading ? "Verifying PAN..." : "Verify PAN"}{" "}
                <ArrowRight className="size-4" />
              </Press>
            </motion.form>
          )}

          {step === 2 && (
            <motion.form
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              onSubmit={handleStep2}
              className="space-y-4"
            >
              <div>
                <h2 className="text-xl font-bold mb-1">Aadhaar e-KYC</h2>
                <p className="text-xs text-zinc-400 mb-4">
                  Enter your 12-digit Aadhaar number for instant biometric or
                  OTP authentication.
                </p>
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1.5">
                  Aadhaar Number
                </label>
                <input
                  type="password"
                  maxLength={12}
                  placeholder="•••• •••• 4829"
                  value={aadhaarNumber}
                  onChange={(e) =>
                    setAadhaarNumber(e.target.value.replace(/\D/g, ""))
                  }
                  className="w-full rounded-2xl bg-zinc-900 border border-zinc-800 px-4 py-3 text-white placeholder:text-zinc-600 outline-none focus:border-emerald-500 text-sm font-mono tracking-widest"
                />
                <p className="text-[11px] text-zinc-500 mt-2">
                  Demo Aadhaar accepts any 12 digits (e.g. 987654321098).
                </p>
              </div>

              <Press
                disabled={loading}
                className="w-full rounded-2xl bg-emerald-600 py-4 font-semibold text-white shadow-lg shadow-emerald-600/30 hover:bg-emerald-500 active:scale-[0.98] transition-all flex items-center justify-center gap-2 mt-8"
              >
                {loading ? "Verifying Aadhaar..." : "Verify Aadhaar"}{" "}
                <ArrowRight className="size-4" />
              </Press>
            </motion.form>
          )}

          {step === 3 && (
            <motion.form
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              onSubmit={handleStep3}
              className="space-y-4"
            >
              <div>
                <h2 className="text-xl font-bold mb-1">Select Bank Account</h2>
                <p className="text-xs text-zinc-400 mb-4">
                  Choose your primary bank account to link with PayZen UPI.
                </p>
              </div>

              <div className="space-y-2.5 max-h-[220px] overflow-y-auto pr-1">
                {banks.map((b) => (
                  <div
                    key={b.name}
                    onClick={() => setSelectedBank(b.name)}
                    className={`flex items-center justify-between p-3.5 rounded-2xl border cursor-pointer transition-all ${
                      selectedBank === b.name
                        ? "bg-emerald-950/40 border-emerald-500 text-white"
                        : "bg-zinc-900 border-zinc-800 text-zinc-300 hover:border-zinc-700"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{b.logo}</span>
                      <div>
                        <div className="text-sm font-semibold">{b.name}</div>
                        <div className="text-[11px] text-zinc-500">
                          IFSC: {b.ifsc}
                        </div>
                      </div>
                    </div>
                    {selectedBank === b.name && (
                      <CheckCircle2 className="size-5 text-emerald-400" />
                    )}
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <label className="block text-xs font-medium text-zinc-400 mb-1.5">
                  Account Type
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setAccountType("Savings")}
                    className={`py-2.5 rounded-xl text-xs font-semibold border transition-all ${
                      accountType === "Savings"
                        ? "bg-emerald-600 border-emerald-500 text-white"
                        : "bg-zinc-900 border-zinc-800 text-zinc-400"
                    }`}
                  >
                    Savings Account
                  </button>
                  <button
                    type="button"
                    onClick={() => setAccountType("Current")}
                    className={`py-2.5 rounded-xl text-xs font-semibold border transition-all ${
                      accountType === "Current"
                        ? "bg-emerald-600 border-emerald-500 text-white"
                        : "bg-zinc-900 border-zinc-800 text-zinc-400"
                    }`}
                  >
                    Current Account
                  </button>
                </div>
              </div>

              <Press
                disabled={loading}
                className="w-full rounded-2xl bg-emerald-600 py-4 font-semibold text-white shadow-lg shadow-emerald-600/30 hover:bg-emerald-500 active:scale-[0.98] transition-all flex items-center justify-center gap-2 mt-4"
              >
                {loading ? "Linking Bank..." : "Link Bank Account"}{" "}
                <ArrowRight className="size-4" />
              </Press>
            </motion.form>
          )}

          {step === 4 && (
            <motion.form
              key="step4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              onSubmit={handleStep4}
              className="space-y-4"
            >
              <div>
                <h2 className="text-xl font-bold mb-1">Set 4-Digit UPI MPIN</h2>
                <p className="text-xs text-zinc-400 mb-4">
                  Create a secure 4-digit UPI PIN to authorize all your money
                  transfers and merchant payments.
                </p>
              </div>

              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-1.5">
                    Enter 4-Digit UPI PIN
                  </label>
                  <input
                    type="password"
                    maxLength={4}
                    placeholder="••••"
                    value={upiPin}
                    onChange={(e) =>
                      setUpiPin(e.target.value.replace(/\D/g, ""))
                    }
                    className="w-full rounded-2xl bg-zinc-900 border border-zinc-800 px-4 py-3 text-center tracking-[1em] text-white outline-none focus:border-emerald-500 text-lg font-bold"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-1.5">
                    Confirm 4-Digit UPI PIN
                  </label>
                  <input
                    type="password"
                    maxLength={4}
                    placeholder="••••"
                    value={confirmPin}
                    onChange={(e) =>
                      setConfirmPin(e.target.value.replace(/\D/g, ""))
                    }
                    className="w-full rounded-2xl bg-zinc-900 border border-zinc-800 px-4 py-3 text-center tracking-[1em] text-white outline-none focus:border-emerald-500 text-lg font-bold"
                  />
                </div>
              </div>

              <div className="rounded-xl bg-zinc-900 border border-zinc-800 p-3 text-xs text-zinc-400 flex items-center gap-2">
                <Lock className="size-4 text-emerald-400 shrink-0" />
                Never share your UPI PIN with anyone, including bank officials.
              </div>

              <Press
                disabled={loading}
                className="w-full rounded-2xl bg-emerald-600 py-4 font-semibold text-white shadow-lg shadow-emerald-600/30 hover:bg-emerald-500 active:scale-[0.98] transition-all flex items-center justify-center gap-2 mt-4"
              >
                {loading ? "Securing UPI..." : "Complete Setup & Launch PayZen"}{" "}
                <CheckCircle2 className="size-4" />
              </Press>
            </motion.form>
          )}
        </AnimatePresence>
      </div>

      <div className="text-center text-[11px] text-zinc-500 pb-2">
        RBI Regulated Unified Payments Interface (UPI) Sandbox
      </div>
    </div>
  );
}
