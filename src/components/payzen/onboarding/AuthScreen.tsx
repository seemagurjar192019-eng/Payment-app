import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  ShieldCheck,
  Mail,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { toast } from "sonner";
import { Press } from "../ui";
import type { FirebaseAccount } from "@/lib/use-firebase-account";

export function AuthScreen({
  account,
  onAuthenticated,
}: {
  account: FirebaseAccount;
  onAuthenticated: () => void;
}) {
  const [authMethod, setAuthMethod] = useState<"phone" | "google">("phone");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otpCode, setOtpCode] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (phoneNumber.length < 10) {
      toast.error("Please enter a valid 10-digit mobile number");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOtpSent(true);
      toast.success("OTP sent to +91 " + phoneNumber + " (Demo OTP: 4829)");
    }, 1000);
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (otpCode.length < 4) {
      toast.error("Please enter the 4-digit OTP code");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Phone verification successful!");
      onAuthenticated();
    }, 800);
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      await account.signIn();
      toast.success("Google sign-in successful!");
      onAuthenticated();
    } catch (err: unknown) {
      toast.error((err as Error).message || "Google sign-in failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="absolute inset-0 z-50 flex flex-col justify-between bg-zinc-950 p-6 text-white overflow-y-auto">
      <div>
        <div className="flex items-center justify-between pb-6">
          <div className="flex items-center gap-2 font-bold text-lg">
            <ShieldCheck className="size-5 text-indigo-400" />
            PayZen Secure ID
          </div>
          <span className="text-xs text-zinc-500">Step 1 of 3</span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-2 mb-6"
        >
          <h2 className="text-2xl font-bold tracking-tight">
            Sign in or Register
          </h2>
          <p className="text-sm text-zinc-400">
            Link your mobile number linked with your bank accounts for instant
            UPI verification.
          </p>
        </motion.div>

        {/* Method Switcher */}
        <div className="grid grid-cols-2 gap-2 p-1 bg-zinc-900 rounded-2xl mb-6 border border-zinc-800">
          <button
            type="button"
            onClick={() => setAuthMethod("phone")}
            className={`py-2.5 rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-2 ${
              authMethod === "phone"
                ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            <Phone className="size-4" /> Mobile OTP
          </button>
          <button
            type="button"
            onClick={() => setAuthMethod("google")}
            className={`py-2.5 rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-2 ${
              authMethod === "google"
                ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            <Mail className="size-4" /> Google Account
          </button>
        </div>

        {authMethod === "phone" ? (
          <div>
            {!otpSent ? (
              <form onSubmit={handleSendOtp} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-1.5">
                    Mobile Number (Linked to Bank)
                  </label>
                  <div className="flex items-center rounded-2xl bg-zinc-900 border border-zinc-800 px-4 py-3 focus-within:border-indigo-500 transition-colors">
                    <span className="text-zinc-400 font-semibold mr-2">
                      +91
                    </span>
                    <input
                      type="tel"
                      maxLength={10}
                      placeholder="98765 43210"
                      value={phoneNumber}
                      onChange={(e) =>
                        setPhoneNumber(e.target.value.replace(/\D/g, ""))
                      }
                      className="w-full bg-transparent text-white placeholder:text-zinc-600 outline-none text-base"
                    />
                  </div>
                </div>

                <Press
                  disabled={loading}
                  className="w-full rounded-2xl bg-indigo-600 py-4 font-semibold text-white shadow-lg shadow-indigo-600/30 hover:bg-indigo-500 active:scale-[0.98] transition-all flex items-center justify-center gap-2 mt-6"
                >
                  {loading ? "Sending OTP..." : "Get Verification Code"}{" "}
                  <ArrowRight className="size-4" />
                </Press>
              </form>
            ) : (
              <form onSubmit={handleVerifyOtp} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-1.5">
                    Enter 4-Digit OTP sent to +91 {phoneNumber}
                  </label>
                  <div className="flex items-center rounded-2xl bg-zinc-900 border border-zinc-800 px-4 py-3 focus-within:border-indigo-500 transition-colors">
                    <input
                      type="text"
                      maxLength={4}
                      placeholder="4829"
                      value={otpCode}
                      onChange={(e) =>
                        setOtpCode(e.target.value.replace(/\D/g, ""))
                      }
                      className="w-full bg-transparent text-center tracking-[1em] text-white placeholder:text-zinc-600 outline-none text-xl font-bold"
                    />
                  </div>
                  <p className="text-[11px] text-zinc-500 mt-2 text-center">
                    Demo OTP code is{" "}
                    <span className="text-indigo-400 font-bold">4829</span>
                  </p>
                </div>

                <Press
                  disabled={loading}
                  className="w-full rounded-2xl bg-indigo-600 py-4 font-semibold text-white shadow-lg shadow-indigo-600/30 hover:bg-indigo-500 active:scale-[0.98] transition-all flex items-center justify-center gap-2 mt-6"
                >
                  {loading ? "Verifying..." : "Verify & Continue"}{" "}
                  <CheckCircle2 className="size-4" />
                </Press>
              </form>
            )}
          </div>
        ) : (
          <div className="space-y-4 py-6 text-center">
            <p className="text-sm text-zinc-400 mb-4">
              Sign in securely using your Google account to sync your verified
              fintech profile across devices.
            </p>
            <Press
              onClick={handleGoogleLogin}
              disabled={loading}
              className="w-full rounded-2xl bg-white text-zinc-950 py-4 font-bold shadow-lg hover:bg-zinc-200 active:scale-[0.98] transition-all flex items-center justify-center gap-3"
            >
              <svg className="size-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              Continue with Google
            </Press>
          </div>
        )}
      </div>

      <div className="text-center text-[11px] text-zinc-500 pb-2">
        Protected by RBI Regulated Sandbox Guidelines
      </div>
    </div>
  );
}
