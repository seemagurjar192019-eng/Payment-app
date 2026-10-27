import {
  LogIn,
  LogOut,
  Mail,
  Save,
  ShieldCheck,
  X,
  Building2,
  CreditCard,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import type { FirebaseAccount } from "@/lib/use-firebase-account";
import { Press, Sheet } from "./ui";

export function AccountPanel({
  account,
  onClose,
}: {
  account: FirebaseAccount;
  onClose: () => void;
}) {
  const [busy, setBusy] = useState(false);

  async function handleGoogleLogin() {
    setBusy(true);
    try {
      await account.signIn();
      toast.success("Signed in with Google successfully!");
    } catch (e: unknown) {
      toast.error((e as Error).message || "Google sign-in failed");
    } finally {
      setBusy(false);
    }
  }

  async function handleSignOut() {
    setBusy(true);
    try {
      await account.signOut();
      toast.success("Signed out successfully");
    } catch (_e: unknown) {
      toast.error("Sign out failed");
    } finally {
      setBusy(false);
    }
  }

  return (
    <Sheet onClose={onClose}>
      <div className="no-scrollbar max-h-[80dvh] overflow-y-auto">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="flex items-center gap-2 text-xl font-bold">
            <ShieldCheck className="size-5 text-positive" />
            PayZen Secure Bank Account
          </h2>
          <Press
            aria-label="Close account"
            onClick={onClose}
            className="grid size-9 place-items-center rounded-full bg-secondary"
          >
            <X className="size-4" />
          </Press>
        </div>

        {account.loading ? (
          <p
            role="status"
            className="py-8 text-center text-sm text-muted-foreground"
          >
            Connecting to Firebase & Bank Server…
          </p>
        ) : account.user && account.profile ? (
          <div className="space-y-5">
            <div className="flex items-center gap-3 rounded-2xl bg-secondary p-4">
              <div className="grid size-12 place-items-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                {account.profile.displayName[0]}
              </div>
              <div>
                <p className="font-semibold">{account.profile.displayName}</p>
                <p className="text-xs text-muted-foreground">
                  {account.profile.email}
                </p>
                <span className="mt-1 inline-block rounded-full bg-positive/15 px-2.5 py-0.5 text-[10px] font-bold text-positive">
                  Verified Account
                </span>
              </div>
            </div>

            {/* Professional Bank Account Details Card */}
            <div className="rounded-2xl border border-border bg-gradient-to-br from-secondary to-surface p-4 space-y-3">
              <div className="flex items-center justify-between text-xs font-semibold text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Building2 className="size-4 text-zen-teal" />
                  Linked Primary Bank Account
                </span>
                <span className="rounded-full bg-positive/20 px-2 py-0.5 text-[10px] font-bold text-positive">
                  Active
                </span>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-bold">
                  {account.profile.bankAccount.bankName}
                </p>
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">Account Holder:</span>
                  <span className="font-semibold">
                    {account.profile.bankAccount.accountHolder}
                  </span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">Account Number:</span>
                  <span className="font-mono font-semibold">
                    {account.profile.bankAccount.accountNumber}
                  </span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">IFSC Code:</span>
                  <span className="font-mono font-semibold">
                    {account.profile.bankAccount.ifsc}
                  </span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">UPI ID:</span>
                  <span className="font-mono font-semibold text-zen-teal">
                    {account.profile.bankAccount.upiId}
                  </span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">Branch:</span>
                  <span className="font-semibold">
                    {account.profile.bankAccount.branch}
                  </span>
                </div>
              </div>
            </div>

            <Press
              disabled={busy}
              onClick={handleSignOut}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-secondary py-3 text-sm font-semibold text-destructive hover:bg-secondary/80"
            >
              <LogOut className="size-4" />
              {busy ? "Signing out..." : "Sign out"}
            </Press>
          </div>
        ) : (
          <div className="space-y-6 py-6 text-center">
            <div className="mx-auto grid size-16 place-items-center rounded-full bg-secondary text-primary">
              <Building2 className="size-8" />
            </div>
            <div>
              <h3 className="text-lg font-bold">Connect Your Google Account</h3>
              <p className="mt-1 text-xs text-muted-foreground max-w-xs mx-auto">
                Securely sync your PayZen profile, transactional ledger, and
                linked bank details across sessions with Firebase.
              </p>
            </div>
            <Press
              disabled={busy}
              onClick={handleGoogleLogin}
              className="flex w-full items-center justify-center gap-3 rounded-2xl bg-primary py-4 text-sm font-semibold text-primary-foreground shadow-lg active:scale-98"
            >
              <svg className="size-5" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              <span>{busy ? "Connecting..." : "Continue with Google"}</span>
            </Press>
            <p className="text-[11px] text-muted-foreground">
              Sandbox Mode • No real money is transferred
            </p>
          </div>
        )}
      </div>
    </Sheet>
  );
}
