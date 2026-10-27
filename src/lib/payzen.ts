// PayZen demo logic — fictional data only. No real payments are ever made.

export type TxStatus = "completed" | "pending" | "cancelled";
export type TxKind = "sent" | "received" | "request";
export interface Tx {
  id: string;
  ref: string;
  name: string;
  icon: string;
  amount: number;
  kind: TxKind;
  status: TxStatus;
  date: string;
  recipientId?: string;
}

export interface Recipient {
  id: string;
  name: string;
  handle: string;
  hue: number;
  avatar?: string;
  bankInfo?: string;
  isFavorite?: boolean;
}

export type Currency = "INR" | "USD" | "EUR";

export type BankAccountType = "Savings" | "Current" | "Wallet" | "RuPay Credit";

export interface BankAccountSource {
  id: string;
  name: string;
  type: BankAccountType;
  accountNumberMasked: string;
  balance: number;
  isPrimary: boolean;
  bankName: string;
}

export const DEFAULT_ACCOUNTS: BankAccountSource[] = [
  {
    id: "acc_1",
    name: "HDFC Primary Savings",
    type: "Savings",
    accountNumberMasked: "•••• 7642",
    balance: 7854.43,
    isPrimary: true,
    bankName: "HDFC Bank",
  },
  {
    id: "acc_2",
    name: "SBI Business Current",
    type: "Current",
    accountNumberMasked: "•••• 8812",
    balance: 24500.0,
    isPrimary: false,
    bankName: "State Bank of India",
  },
  {
    id: "acc_3",
    name: "ICICI Salary Account",
    type: "Savings",
    accountNumberMasked: "•••• 3390",
    balance: 12500.0,
    isPrimary: false,
    bankName: "ICICI Bank",
  },
  {
    id: "acc_4",
    name: "PayZen Digital Wallet",
    type: "Wallet",
    accountNumberMasked: "Active Balance",
    balance: 1500.0,
    isPrimary: false,
    bankName: "PayZen",
  },
];

export interface PayState {
  balance: number;
  accounts: BankAccountSource[];
  primaryAccountId: string;
  txs: Tx[];
  recipients: Recipient[];
  currency: Currency;
  monthlyBudget?: number;
  dailyLimit?: number;
  hideBalance?: boolean;
}

export const RATES: Record<Currency, number> = {
  INR: 1,
  USD: 1 / 84,
  EUR: 1 / 91,
};

export const SEED: PayState = {
  balance: 7854.43,
  accounts: DEFAULT_ACCOUNTS,
  primaryAccountId: "acc_1",
  currency: "INR",
  recipients: [
    { id: "r1", name: "Pavlo", handle: "pavlo.demo@payzen", hue: 30 },
    { id: "r2", name: "Aanya", handle: "aanya.k@payzen", hue: 330 },
    { id: "r3", name: "Rohan", handle: "rohan.m@payzen", hue: 200 },
    { id: "r4", name: "Mira", handle: "mira.s@payzen", hue: 150 },
    { id: "r5", name: "Kabir", handle: "kabir.dev@payzen", hue: 260 },
    { id: "r6", name: "Zoya", handle: "zoya.art@payzen", hue: 10 },
    { id: "r7", name: "Ishaan", handle: "ishaan.p@payzen", hue: 90 },
    { id: "r8", name: "Leela", handle: "leela.r@payzen", hue: 50 },
  ],
  txs: [
    {
      id: "t1",
      ref: "PZ-DEMO-A1F3",
      name: "Orchard Café",
      icon: "coffee",
      amount: -240,
      kind: "sent",
      status: "completed",
      date: "2026-10-24T09:12:00Z",
    },
    {
      id: "t2",
      ref: "PZ-DEMO-B7K2",
      name: "Streamly",
      icon: "tv",
      amount: -499,
      kind: "sent",
      status: "completed",
      date: "2026-10-23T18:40:00Z",
    },
    {
      id: "t3",
      ref: "PZ-DEMO-C9Q8",
      name: "Salary (demo)",
      icon: "briefcase",
      amount: 2000,
      kind: "received",
      status: "completed",
      date: "2026-10-22T10:00:00Z",
    },
    {
      id: "t4",
      ref: "PZ-DEMO-D2M5",
      name: "Metro Rides",
      icon: "car",
      amount: -120,
      kind: "sent",
      status: "completed",
      date: "2026-10-21T08:05:00Z",
    },
    {
      id: "t5",
      ref: "PZ-DEMO-E4P1",
      name: "Green Basket",
      icon: "shopping",
      amount: -526,
      kind: "sent",
      status: "completed",
      date: "2026-10-20T16:22:00Z",
    },
  ],
};

export function makeRef(): string {
  const a = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let s = "";
  for (let i = 0; i < 8; i++) s += a[Math.floor(Math.random() * a.length)];
  return `PZ-DEMO-${s}`;
}

export function generateRef(): string {
  return makeRef();
}

export async function hashPin(pin: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(pin);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}

export interface PayZenSettings {
  isLocked: boolean;
  pinHash: string | null;
  biometricEnabled: boolean;
  autoLockMinutes: number;
  dailyLimit: number;
  currency: Currency;
  isDarkMode: boolean;
  hideBalance: boolean;
  soundEnabled: boolean;
  notificationsEnabled: boolean;
  budgetAlerts: boolean;
}

export const DEFAULT_SETTINGS: PayZenSettings = {
  isLocked: false,
  pinHash: null,
  biometricEnabled: false,
  autoLockMinutes: 5,
  dailyLimit: 10000,
  currency: "INR",
  isDarkMode: true,
  hideBalance: false,
  soundEnabled: true,
  notificationsEnabled: true,
  budgetAlerts: true,
};

export function fmt(
  amountInr: number,
  cur: Currency,
  opts: { sign?: boolean } = {},
) {
  const v = amountInr * RATES[cur];
  const s = new Intl.NumberFormat(cur === "INR" ? "en-IN" : "en-US", {
    style: "currency",
    currency: cur,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(Math.abs(v));
  if (!opts.sign) return v < 0 ? `-${s}` : s;
  return `${v < 0 ? "−" : "+"}${s}`;
}

export function symbol(cur: Currency) {
  return cur === "INR" ? "₹" : cur === "USD" ? "$" : "€";
}

// ---------- calculator ----------
export type Op = "+" | "−" | "×" | "÷";
export const OPS: Op[] = ["+", "−", "×", "÷"];

export function evaluate(expr: string): number {
  if (!expr) return 0;
  const tokens = expr.match(/(\d*\.?\d+|\d+\.|[+−×÷])/g);
  if (!tokens || tokens.join("") !== expr) return NaN;
  const nums: number[] = [];
  const ops: Op[] = [];
  let expectNum = true;
  for (const t of tokens) {
    if (OPS.includes(t as Op)) {
      if (expectNum) return NaN;
      ops.push(t as Op);
      expectNum = true;
    } else {
      if (!expectNum) return NaN;
      nums.push(parseFloat(t));
      expectNum = false;
    }
  }
  if (expectNum) ops.pop();
  const n2: number[] = [nums[0] ?? 0];
  const o2: Op[] = [];
  for (let i = 0; i < ops.length; i++) {
    const b = nums[i + 1] ?? 0;
    if (ops[i] === "×") n2[n2.length - 1]! *= b;
    else if (ops[i] === "÷") {
      if (b === 0) return NaN;
      n2[n2.length - 1]! /= b;
    } else {
      o2.push(ops[i]!);
      n2.push(b);
    }
  }
  let r = n2[0] ?? 0;
  for (let i = 0; i < o2.length; i++)
    r = o2[i] === "+" ? r + (n2[i + 1] ?? 0) : r - (n2[i + 1] ?? 0);
  return Math.round(r * 100) / 100;
}

export function press(expr: string, key: string): string {
  const last = expr.slice(-1);
  const curNum = expr.split(/[+−×÷]/).pop() ?? "";
  if (key === "del") return expr.slice(0, -1);
  if (OPS.includes(key as Op)) {
    if (!expr) return expr;
    if (OPS.includes(last as Op)) return expr.slice(0, -1) + key;
    return expr + key;
  }
  if (key === ".") {
    if (curNum.includes(".")) return expr;
    return expr + (curNum === "" ? "0." : ".");
  }
  if (curNum.includes(".") && (curNum.split(".")[1] ?? "").length >= 2)
    return expr;
  if (curNum.replace(".", "").length >= 9) return expr;
  if (curNum === "0") return expr.slice(0, -1) + key;
  return expr + key;
}

export type Validation = { ok: true } | { ok: false; reason: string };
export function validate(
  amount: number,
  balance: number,
  mode: "send" | "request",
): Validation {
  if (!Number.isFinite(amount)) return { ok: false, reason: "Invalid amount" };
  if (amount <= 0)
    return {
      ok: false,
      reason: amount === 0 ? "Enter an amount" : "Amount must be positive",
    };
  if (amount > 1_000_000)
    return { ok: false, reason: "Demo limit is ₹10,00,000" };
  if (mode === "send" && amount > balance)
    return { ok: false, reason: "Insufficient demo balance" };
  return { ok: true };
}

export const DEFAULT_DAILY_LIMIT = 10_000;
export const MAX_PIN_ATTEMPTS = 5;
export const PIN_LOCKOUT_MS = 30_000;

export function sentToday(txs: Tx[], now: Date = new Date()): number {
  const day = now.toDateString();
  return txs
    .filter(
      (t) =>
        t.kind === "sent" &&
        t.status === "completed" &&
        new Date(t.date).toDateString() === day,
    )
    .reduce((a, t) => a - t.amount, 0);
}
export function withinDailyLimit(
  amount: number,
  alreadySent: number,
  limit: number = DEFAULT_DAILY_LIMIT,
): boolean {
  return alreadySent + amount <= limit;
}
export function lockoutAfter(
  failedAttempts: number,
  now: number,
): number | null {
  return failedAttempts >= MAX_PIN_ATTEMPTS ? now + PIN_LOCKOUT_MS : null;
}
export function isValidPin(pin: string): boolean {
  return /^\d{4}$/.test(pin);
}
export function toCsv(txs: Tx[]): string {
  const esc = (v: string) => `"${v.replace(/"/g, '""')}"`;
  return [
    "Reference,Date,Name,Type,Status,Amount (INR)",
    ...txs.map((t) =>
      [t.ref, t.date, esc(t.name), t.kind, t.status, t.amount.toFixed(2)].join(
        ",",
      ),
    ),
  ].join("\n");
}
