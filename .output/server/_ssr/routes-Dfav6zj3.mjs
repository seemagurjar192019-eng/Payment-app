import { n as __toESM } from "../_runtime.mjs";
import { a as useScroll, c as AnimatePresence, i as useMotionValue, n as useSpring, o as motion, r as useTransform, s as MotionConfig, t as animate } from "../_libs/framer-motion+[...].mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { o as initializeApp } from "../_libs/@firebase/app+[...].mjs";
import { A as Eye, B as ChevronRight, C as LoaderCircle, D as House, E as KeyRound, F as Copy, G as Camera, H as ChevronDown, I as Coffee, J as Bell, K as Building2, L as CircleQuestionMark, M as Download, N as Delete, O as Gauge, P as CreditCard, R as CircleCheck, S as LockOpen, T as Landmark, U as Check, V as ChevronLeft, W as Car, X as ArrowRight, Y as ArrowUpRight, Z as ArrowDownLeft, _ as Plus, a as UserCheck, b as LogOut, c as Snowflake, d as ShieldCheck, f as Settings2, g as QrCode, h as RotateCcw, i as UserPlus, j as EyeOff, k as FileText, l as ShoppingBag, m as Save, n as Users, o as Tv, p as Search, q as Briefcase, r as User, s as Sparkles, t as X, u as Shield, v as Phone, w as ListFilter, x as Lock, y as Mail, z as ChevronsRight } from "../_libs/lucide-react.mjs";
import { n as toast, t as Toaster } from "../_libs/sonner.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { a as signOut, i as signInWithPopup, n as getAuth, r as onAuthStateChanged, t as GoogleAuthProvider } from "../_libs/firebase__auth.mjs";
import "../_libs/firebase.mjs";
import { a as getFirestore, i as doc, n as getDocFromServer, o as serverTimestamp, r as setDoc, t as getDoc } from "../_libs/@firebase/firestore+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Dfav6zj3.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var DEFAULT_ACCOUNTS = [
	{
		id: "acc_1",
		name: "HDFC Primary Savings",
		type: "Savings",
		accountNumberMasked: "•••• 7642",
		balance: 7854.43,
		isPrimary: true,
		bankName: "HDFC Bank"
	},
	{
		id: "acc_2",
		name: "SBI Business Current",
		type: "Current",
		accountNumberMasked: "•••• 8812",
		balance: 24500,
		isPrimary: false,
		bankName: "State Bank of India"
	},
	{
		id: "acc_3",
		name: "ICICI Salary Account",
		type: "Savings",
		accountNumberMasked: "•••• 3390",
		balance: 12500,
		isPrimary: false,
		bankName: "ICICI Bank"
	},
	{
		id: "acc_4",
		name: "PayZen Digital Wallet",
		type: "Wallet",
		accountNumberMasked: "Active Balance",
		balance: 1500,
		isPrimary: false,
		bankName: "PayZen"
	}
];
var RATES = {
	INR: 1,
	USD: 1 / 84,
	EUR: 1 / 91
};
var SEED = {
	balance: 7854.43,
	accounts: DEFAULT_ACCOUNTS,
	primaryAccountId: "acc_1",
	currency: "INR",
	recipients: [
		{
			id: "r1",
			name: "Pavlo",
			handle: "pavlo.demo@payzen",
			hue: 30
		},
		{
			id: "r2",
			name: "Aanya",
			handle: "aanya.k@payzen",
			hue: 330
		},
		{
			id: "r3",
			name: "Rohan",
			handle: "rohan.m@payzen",
			hue: 200
		},
		{
			id: "r4",
			name: "Mira",
			handle: "mira.s@payzen",
			hue: 150
		},
		{
			id: "r5",
			name: "Kabir",
			handle: "kabir.dev@payzen",
			hue: 260
		},
		{
			id: "r6",
			name: "Zoya",
			handle: "zoya.art@payzen",
			hue: 10
		},
		{
			id: "r7",
			name: "Ishaan",
			handle: "ishaan.p@payzen",
			hue: 90
		},
		{
			id: "r8",
			name: "Leela",
			handle: "leela.r@payzen",
			hue: 50
		}
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
			date: "2026-10-24T09:12:00Z"
		},
		{
			id: "t2",
			ref: "PZ-DEMO-B7K2",
			name: "Streamly",
			icon: "tv",
			amount: -499,
			kind: "sent",
			status: "completed",
			date: "2026-10-23T18:40:00Z"
		},
		{
			id: "t3",
			ref: "PZ-DEMO-C9Q8",
			name: "Salary (demo)",
			icon: "briefcase",
			amount: 2e3,
			kind: "received",
			status: "completed",
			date: "2026-10-22T10:00:00Z"
		},
		{
			id: "t4",
			ref: "PZ-DEMO-D2M5",
			name: "Metro Rides",
			icon: "car",
			amount: -120,
			kind: "sent",
			status: "completed",
			date: "2026-10-21T08:05:00Z"
		},
		{
			id: "t5",
			ref: "PZ-DEMO-E4P1",
			name: "Green Basket",
			icon: "shopping",
			amount: -526,
			kind: "sent",
			status: "completed",
			date: "2026-10-20T16:22:00Z"
		}
	]
};
function makeRef() {
	const a = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
	let s = "";
	for (let i = 0; i < 8; i++) s += a[Math.floor(Math.random() * 32)];
	return `PZ-DEMO-${s}`;
}
function fmt(amountInr, cur, opts = {}) {
	const v = amountInr * RATES[cur];
	const s = new Intl.NumberFormat(cur === "INR" ? "en-IN" : "en-US", {
		style: "currency",
		currency: cur,
		minimumFractionDigits: 2,
		maximumFractionDigits: 2
	}).format(Math.abs(v));
	if (!opts.sign) return v < 0 ? `-${s}` : s;
	return `${v < 0 ? "−" : "+"}${s}`;
}
function symbol(cur) {
	return cur === "INR" ? "₹" : cur === "USD" ? "$" : "€";
}
var OPS = [
	"+",
	"−",
	"×",
	"÷"
];
function evaluate(expr) {
	if (!expr) return 0;
	const tokens = expr.match(/(\d*\.?\d+|\d+\.|[+−×÷])/g);
	if (!tokens || tokens.join("") !== expr) return NaN;
	const nums = [];
	const ops = [];
	let expectNum = true;
	for (const t of tokens) if (OPS.includes(t)) {
		if (expectNum) return NaN;
		ops.push(t);
		expectNum = true;
	} else {
		if (!expectNum) return NaN;
		nums.push(parseFloat(t));
		expectNum = false;
	}
	if (expectNum) ops.pop();
	const n2 = [nums[0] ?? 0];
	const o2 = [];
	for (let i = 0; i < ops.length; i++) {
		const b = nums[i + 1] ?? 0;
		if (ops[i] === "×") n2[n2.length - 1] *= b;
		else if (ops[i] === "÷") {
			if (b === 0) return NaN;
			n2[n2.length - 1] /= b;
		} else {
			o2.push(ops[i]);
			n2.push(b);
		}
	}
	let r = n2[0] ?? 0;
	for (let i = 0; i < o2.length; i++) r = o2[i] === "+" ? r + (n2[i + 1] ?? 0) : r - (n2[i + 1] ?? 0);
	return Math.round(r * 100) / 100;
}
function press(expr, key) {
	const last = expr.slice(-1);
	const curNum = expr.split(/[+−×÷]/).pop() ?? "";
	if (key === "del") return expr.slice(0, -1);
	if (OPS.includes(key)) {
		if (!expr) return expr;
		if (OPS.includes(last)) return expr.slice(0, -1) + key;
		return expr + key;
	}
	if (key === ".") {
		if (curNum.includes(".")) return expr;
		return expr + (curNum === "" ? "0." : ".");
	}
	if (curNum.includes(".") && (curNum.split(".")[1] ?? "").length >= 2) return expr;
	if (curNum.replace(".", "").length >= 9) return expr;
	if (curNum === "0") return expr.slice(0, -1) + key;
	return expr + key;
}
function validate(amount, balance, mode) {
	if (!Number.isFinite(amount)) return {
		ok: false,
		reason: "Invalid amount"
	};
	if (amount <= 0) return {
		ok: false,
		reason: amount === 0 ? "Enter an amount" : "Amount must be positive"
	};
	if (amount > 1e6) return {
		ok: false,
		reason: "Demo limit is ₹10,00,000"
	};
	if (mode === "send" && amount > balance) return {
		ok: false,
		reason: "Insufficient demo balance"
	};
	return { ok: true };
}
var DEFAULT_DAILY_LIMIT = 1e4;
var PIN_LOCKOUT_MS = 3e4;
function sentToday(txs, now = /* @__PURE__ */ new Date()) {
	const day = now.toDateString();
	return txs.filter((t) => t.kind === "sent" && t.status === "completed" && new Date(t.date).toDateString() === day).reduce((a, t) => a - t.amount, 0);
}
function withinDailyLimit(amount, alreadySent, limit = DEFAULT_DAILY_LIMIT) {
	return alreadySent + amount <= limit;
}
function lockoutAfter(failedAttempts, now) {
	return failedAttempts >= 5 ? now + PIN_LOCKOUT_MS : null;
}
function isValidPin(pin) {
	return /^\d{4}$/.test(pin);
}
function toCsv(txs) {
	const esc = (v) => `"${v.replace(/"/g, "\"\"")}"`;
	return ["Reference,Date,Name,Type,Status,Amount (INR)", ...txs.map((t) => [
		t.ref,
		t.date,
		esc(t.name),
		t.kind,
		t.status,
		t.amount.toFixed(2)
	].join(","))].join("\n");
}
function monthlyInsights(txs, month, budget = 0) {
	const rows = txs.filter((t) => t.date.slice(0, 7) === month && t.status === "completed");
	const spent = Math.round(rows.filter((t) => t.kind === "sent").reduce((sum, t) => sum + Math.abs(t.amount), 0) * 100) / 100;
	const received = Math.round(rows.filter((t) => t.kind === "received").reduce((sum, t) => sum + t.amount, 0) * 100) / 100;
	const categories = /* @__PURE__ */ new Map();
	const labels = {
		coffee: "Food & drink",
		tv: "Subscriptions",
		car: "Transport",
		shopping: "Shopping"
	};
	rows.filter((t) => t.kind === "sent").forEach((t) => {
		const label = labels[t.icon] ?? "Transfers";
		categories.set(label, (categories.get(label) ?? 0) + Math.abs(t.amount));
	});
	return {
		spent,
		received,
		remaining: Math.max(0, budget - spent),
		overBudget: budget > 0 && spent > budget,
		categories: [...categories].sort((a, b) => b[1] - a[1])
	};
}
function applySandboxTopUp(state, tx) {
	if (tx.kind !== "received" || tx.status !== "completed" || !validate(tx.amount, state.balance, "request").ok) return null;
	if (state.txs.some((row) => row.id === tx.id || row.ref === tx.ref)) return state;
	return {
		...state,
		balance: Math.round((state.balance + tx.amount) * 100) / 100,
		txs: [tx, ...state.txs]
	};
}
function receiptText(tx, currency) {
	return [
		"PayZen — SIMULATED TRANSACTION RECEIPT",
		"No real money transferred. Not a bank receipt.",
		"",
		`Reference: ${tx.ref}`,
		`Name: ${tx.name}`,
		`Amount: ${fmt(tx.amount, currency, { sign: tx.kind !== "request" })}`,
		`Base amount (INR): ${tx.amount.toFixed(2)}`,
		`Type: ${tx.kind}`,
		`Status: ${tx.status}`,
		`Date (UTC): ${tx.date}`,
		"",
		"Currency conversion uses illustrative demo rates."
	].join("\n");
}
function downloadReceipt(tx, currency) {
	const url = URL.createObjectURL(new Blob([receiptText(tx, currency)], { type: "text/plain;charset=utf-8" }));
	const link = document.createElement("a");
	link.href = url;
	link.download = `PayZen-${tx.ref}.txt`;
	link.click();
	setTimeout(() => URL.revokeObjectURL(url), 1e3);
}
var KEY$1 = "payzen-demo-v1";
function usePayZen() {
	const [state, setState] = (0, import_react.useState)(SEED);
	const [loaded, setLoaded] = (0, import_react.useState)(false);
	const ref = (0, import_react.useRef)(state);
	ref.current = state;
	(0, import_react.useEffect)(() => {
		try {
			const raw = localStorage.getItem(KEY$1);
			if (raw) {
				const parsed = JSON.parse(raw);
				setState({
					...SEED,
					...parsed,
					accounts: parsed.accounts || SEED.accounts,
					primaryAccountId: parsed.primaryAccountId || SEED.primaryAccountId
				});
			}
		} catch {}
		setLoaded(true);
	}, []);
	(0, import_react.useEffect)(() => {
		if (loaded) localStorage.setItem(KEY$1, JSON.stringify(state));
	}, [state, loaded]);
	const setPrimaryAccount = (0, import_react.useCallback)((accountId) => {
		setState((s) => {
			const acc = s.accounts.find((a) => a.id === accountId);
			if (!acc) return s;
			const updatedAccounts = s.accounts.map((a) => ({
				...a,
				isPrimary: a.id === accountId
			}));
			return {
				...s,
				primaryAccountId: accountId,
				balance: acc.balance,
				accounts: updatedAccounts
			};
		});
	}, []);
	return {
		state,
		send: (0, import_react.useCallback)((r, amount) => {
			if (amount <= 0 || amount > ref.current.balance) return null;
			if (!withinDailyLimit(amount, sentToday(ref.current.txs), ref.current.dailyLimit ?? 1e4)) return null;
			const tx = {
				id: crypto.randomUUID(),
				ref: makeRef(),
				name: r.name,
				icon: r.id,
				recipientId: r.id,
				amount: -amount,
				kind: "sent",
				status: "completed",
				date: (/* @__PURE__ */ new Date()).toISOString()
			};
			setState((s) => {
				const newBal = Math.round((s.balance - amount) * 100) / 100;
				const updatedAccounts = s.accounts.map((acc) => acc.id === s.primaryAccountId ? {
					...acc,
					balance: newBal
				} : acc);
				return {
					...s,
					balance: newBal,
					accounts: updatedAccounts,
					txs: [tx, ...s.txs]
				};
			});
			return tx;
		}, []),
		request: (0, import_react.useCallback)((r, amount) => {
			const tx = {
				id: crypto.randomUUID(),
				ref: makeRef(),
				name: r.name,
				icon: r.id,
				recipientId: r.id,
				amount,
				kind: "request",
				status: "pending",
				date: (/* @__PURE__ */ new Date()).toISOString()
			};
			setState((s) => ({
				...s,
				txs: [tx, ...s.txs]
			}));
			return tx;
		}, []),
		cancel: (0, import_react.useCallback)((id) => {
			setState((s) => ({
				...s,
				txs: s.txs.map((t) => t.id === id && t.status === "pending" ? {
					...t,
					status: "cancelled"
				} : t)
			}));
		}, []),
		addRecipient: (0, import_react.useCallback)((name) => {
			const r = {
				id: crypto.randomUUID(),
				name,
				handle: `${name.toLowerCase().replace(/\s+/g, ".")}@payzen`,
				hue: Math.floor(Math.random() * 360)
			};
			setState((s) => ({
				...s,
				recipients: [r, ...s.recipients]
			}));
			return r;
		}, []),
		setCurrency: (0, import_react.useCallback)((currency) => setState((s) => ({
			...s,
			currency
		})), []),
		setBudget: (0, import_react.useCallback)((monthlyBudget) => {
			if (!Number.isFinite(monthlyBudget) || monthlyBudget < 0) return;
			setState((s) => ({
				...s,
				monthlyBudget: Math.round(monthlyBudget * 100) / 100
			}));
		}, []),
		topUp: (0, import_react.useCallback)((amount) => {
			const tx = {
				id: crypto.randomUUID(),
				ref: makeRef(),
				name: "Sandbox top-up",
				icon: "briefcase",
				amount,
				kind: "received",
				status: "completed",
				date: (/* @__PURE__ */ new Date()).toISOString()
			};
			const next = applySandboxTopUp(ref.current, tx);
			if (!next) return null;
			const newBal = next.balance;
			const updatedAccounts = next.accounts.map((acc) => acc.id === next.primaryAccountId ? {
				...acc,
				balance: newBal
			} : acc);
			const finalState = {
				...next,
				accounts: updatedAccounts
			};
			ref.current = finalState;
			setState(finalState);
			return tx;
		}, []),
		setPrimaryAccount,
		setDailyLimit: (0, import_react.useCallback)((dailyLimit) => setState((s) => ({
			...s,
			dailyLimit: Math.round(dailyLimit)
		})), []),
		setHideBalance: (0, import_react.useCallback)((hideBalance) => setState((s) => ({
			...s,
			hideBalance
		})), []),
		reset: (0, import_react.useCallback)(() => setState(SEED), [])
	};
}
var firebase_applet_config_default = {
	projectId: "gen-lang-client-0895742699",
	appId: "1:838421470417:web:92b44579786d416fc579f0",
	apiKey: "AIzaSyD5qLrqCOuAy8z5Ad-ow5gDyZEKOTSavHo",
	authDomain: "gen-lang-client-0895742699.firebaseapp.com",
	firestoreDatabaseId: "ai-studio-payzenpremiumfin-827782df-6257-4a7e-bcc1-6b8749d4b9a5",
	storageBucket: "gen-lang-client-0895742699.firebasestorage.app",
	messagingSenderId: "838421470417",
	measurementId: "",
	oAuthClientId: "838421470417-llitbpndd3rrhdi85kp6bgoj5lpmobnj.apps.googleusercontent.com",
	recaptchaSiteKey: ""
};
var app = initializeApp(firebase_applet_config_default);
var db = getFirestore(app, firebase_applet_config_default.firestoreDatabaseId);
var auth = getAuth(app);
var googleProvider = new GoogleAuthProvider();
async function loginWithGoogle() {
	try {
		return (await signInWithPopup(auth, googleProvider)).user;
	} catch (error) {
		console.error("Google sign in error:", error);
		throw error;
	}
}
async function logoutUser() {
	try {
		await signOut(auth);
	} catch (error) {
		console.error("Logout error:", error);
		throw error;
	}
}
async function testConnection() {
	try {
		await getDocFromServer(doc(db, "test", "connection"));
	} catch (error) {
		if (error instanceof Error && error.message.includes("the client is offline")) console.error("Please check your Firebase configuration.");
	}
}
testConnection();
function useFirebaseAccount() {
	const [user, setUser] = (0, import_react.useState)(null);
	const [profile, setProfile] = (0, import_react.useState)(null);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [error, setError] = (0, import_react.useState)("");
	const defaultBank = {
		bankName: "State Bank of India",
		accountHolder: "Naitik Gurjar",
		accountNumber: "3948 2910 482",
		ifsc: "SBIN0004521",
		branch: "Connaught Place, New Delhi",
		upiId: "naitik.gurjar@oksbi",
		accountType: "Savings Account"
	};
	(0, import_react.useEffect)(() => {
		const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
			setUser(currentUser);
			setLoading(false);
			if (currentUser) try {
				const userDocRef = doc(db, "users", currentUser.uid);
				const userSnap = await getDoc(userDocRef);
				if (userSnap.exists()) {
					const data = userSnap.data();
					setProfile({
						displayName: data.displayName || currentUser.displayName || "Naitik Gurjar",
						email: data.email || currentUser.email || "",
						bankAccount: data.bankAccount || defaultBank
					});
				} else {
					const initialProfile = {
						displayName: currentUser.displayName || "Naitik Gurjar",
						email: currentUser.email || "",
						bankAccount: defaultBank
					};
					await setDoc(userDocRef, {
						uid: currentUser.uid,
						...initialProfile,
						createdAt: serverTimestamp()
					});
					setProfile(initialProfile);
				}
			} catch (e) {
				console.error("Error loading user profile from Firestore:", e);
				setError("Failed to sync profile with Firestore");
			}
			else setProfile(null);
		});
		return () => unsubscribe();
	}, []);
	const signIn = async () => {
		setLoading(true);
		try {
			const u = await loginWithGoogle();
			setUser(u);
		} catch (e) {
			setError(e.message || "Google sign-in failed");
		} finally {
			setLoading(false);
		}
	};
	const signOutUser = async () => {
		setLoading(true);
		try {
			await logoutUser();
			setUser(null);
			setProfile(null);
		} catch (e) {
			setError(e.message || "Logout failed");
		} finally {
			setLoading(false);
		}
	};
	return {
		configured: true,
		user,
		profile,
		loading,
		error,
		signIn,
		signOut: signOutUser,
		defaultBank
	};
}
function Press({ className, ...p }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
		type: "button",
		whileTap: { scale: .94 },
		transition: {
			type: "spring",
			stiffness: 500,
			damping: 30
		},
		className: cn("outline-none focus-visible:ring-2 focus-visible:ring-ring", className),
		...p
	});
}
function Avatar({ r, size = 44, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("grid shrink-0 place-items-center rounded-full font-bold text-primary-foreground", className),
		style: {
			width: size,
			height: size,
			fontSize: size * .38,
			background: `linear-gradient(140deg, oklch(0.72 0.14 ${r.hue}), oklch(0.5 0.14 ${r.hue + 40}))`
		},
		"aria-hidden": true,
		children: r.name.slice(0, 1).toUpperCase()
	});
}
var MERCHANT = {
	coffee: Coffee,
	tv: Tv,
	briefcase: Briefcase,
	car: Car,
	shopping: ShoppingBag
};
function TxIcon({ tx, recipients }) {
	const r = recipients.find((x) => x.id === tx.icon);
	if (r) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {
		r,
		size: 36
	});
	const I = MERCHANT[tx.icon] ?? ShoppingBag;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative grid size-9 place-items-center rounded-full bg-primary text-primary-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(I, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute -bottom-0.5 -right-0.5 size-2.5 rounded-full border-2 border-sheet bg-zen-teal" })]
	});
}
function TxRow({ tx, recipients, currency, onClick, i = 0 }) {
	const d = new Date(tx.date);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
		type: "button",
		layout: true,
		initial: {
			opacity: 0,
			y: 12
		},
		animate: {
			opacity: 1,
			y: 0
		},
		transition: { delay: i * .04 },
		whileTap: { scale: .98 },
		onClick,
		className: "flex w-full items-center gap-3 rounded-xl px-1 py-2.5 text-left",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TxIcon, {
				tx,
				recipients
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0 flex-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "truncate text-sm font-semibold",
					children: tx.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-[11px] text-muted-foreground",
					children: [(() => {
						return `${d.getUTCDate()} ${[
							"Jan",
							"Feb",
							"Mar",
							"Apr",
							"May",
							"Jun",
							"Jul",
							"Aug",
							"Sep",
							"Oct",
							"Nov",
							"Dec"
						][d.getUTCMonth()]}`;
					})(), tx.kind === "request" && " · Request"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-right",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: cn("tabular text-sm font-semibold", tx.kind === "received" && "text-positive", tx.status === "cancelled" && "text-muted-foreground line-through"),
					children: tx.kind === "request" ? fmt(tx.amount, currency) : fmt(tx.amount, currency, { sign: true })
				}), tx.status !== "completed" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: cn("text-[10px] font-semibold uppercase", tx.status === "pending" ? "text-pending" : "text-muted-foreground"),
					children: tx.status
				})]
			})
		]
	});
}
/** Spring-animated money value. */
function AnimatedMoney({ value, currency, className, split }) {
	const mv = useSpring(value, {
		stiffness: 90,
		damping: 20
	});
	(0, import_react.useEffect)(() => mv.set(value), [value, mv]);
	const [txt, setTxt] = (0, import_react.useState)(fmt(value, currency));
	(0, import_react.useEffect)(() => mv.on("change", (v) => setTxt(fmt(v, currency))), [mv, currency]);
	(0, import_react.useEffect)(() => setTxt(fmt(mv.get(), currency)), [currency, mv]);
	if (!split) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("tabular", className),
		children: txt
	});
	const [a, b] = txt.split(".");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: cn("tabular", className),
		children: [a, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "text-[0.55em] font-semibold opacity-60",
			children: [".", b]
		})]
	});
}
function SwipeConfirm({ label, onConfirm, disabled, tone = "dark" }) {
	const track = (0, import_react.useRef)(null);
	const x = useMotionValue(0);
	const [max, setMax] = (0, import_react.useState)(240);
	const progress = useTransform(x, [0, max], [0, 1]);
	const fill = useTransform(progress, (p) => `${p * 100}%`);
	const textOpacity = useTransform(progress, [0, .6], [1, 0]);
	(0, import_react.useEffect)(() => {
		if (track.current) setMax(track.current.offsetWidth - 56);
	}, []);
	(0, import_react.useEffect)(() => {
		if (disabled) animate(x, 0);
	}, [disabled, x]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: track,
		className: cn("relative h-14 w-full overflow-hidden rounded-full", tone === "dark" ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground", disabled && "opacity-40"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				style: { width: fill },
				className: "absolute inset-y-0 left-0 bg-success/40"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
				style: { opacity: textOpacity },
				className: "absolute inset-0 grid place-items-center pl-8 text-sm font-semibold",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				drag: disabled ? false : "x",
				dragConstraints: {
					left: 0,
					right: max
				},
				dragElastic: .02,
				dragMomentum: false,
				style: { x },
				onDragEnd: () => {
					if (x.get() > max * .85) {
						animate(x, max, { duration: .15 });
						onConfirm();
					} else animate(x, 0, {
						type: "spring",
						stiffness: 400,
						damping: 30
					});
				},
				role: "slider",
				"aria-label": label,
				"aria-valuemin": 0,
				"aria-valuemax": 100,
				"aria-valuenow": 0,
				tabIndex: disabled ? -1 : 0,
				onKeyDown: (e) => {
					if (!disabled && (e.key === "Enter" || e.key === "ArrowRight")) onConfirm();
				},
				className: "absolute left-1 top-1 grid size-12 cursor-grab touch-none place-items-center rounded-full bg-sheet text-foreground shadow-lg active:cursor-grabbing",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronsRight, { className: "size-5" })
			})
		]
	});
}
function Sheet({ children, onClose, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		className: "absolute inset-0 z-40",
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-0 bg-phone/60",
			onClick: onClose
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: { y: "100%" },
			animate: { y: 0 },
			exit: { y: "100%" },
			transition: {
				type: "spring",
				stiffness: 320,
				damping: 34
			},
			drag: "y",
			dragConstraints: {
				top: 0,
				bottom: 0
			},
			dragElastic: {
				top: 0,
				bottom: .6
			},
			onDragEnd: (_, i) => {
				if (i.offset.y > 120) onClose();
			},
			className: cn("absolute inset-x-0 bottom-0 rounded-t-[2rem] bg-sheet p-5 pb-8 text-foreground shadow-sheet", className),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mx-auto mb-4 h-1 w-10 rounded-full bg-border" }), children]
		})]
	});
}
function DemoBadge({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: cn("rounded-full border border-current px-3 py-1 text-center text-[10px] font-bold uppercase tracking-wider", className),
		children: "Simulation only — no real money transferred"
	});
}
function AccountPanel({ account, onClose }) {
	const [busy, setBusy] = (0, import_react.useState)(false);
	async function handleGoogleLogin() {
		setBusy(true);
		try {
			await account.signIn();
			toast.success("Signed in with Google successfully!");
		} catch (e) {
			toast.error(e.message || "Google sign-in failed");
		} finally {
			setBusy(false);
		}
	}
	async function handleSignOut() {
		setBusy(true);
		try {
			await account.signOut();
			toast.success("Signed out successfully");
		} catch (_e) {
			toast.error("Sign out failed");
		} finally {
			setBusy(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet, {
		onClose,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "no-scrollbar max-h-[80dvh] overflow-y-auto",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-5 flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "flex items-center gap-2 text-xl font-bold",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-5 text-positive" }), "PayZen Secure Bank Account"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Press, {
					"aria-label": "Close account",
					onClick: onClose,
					className: "grid size-9 place-items-center rounded-full bg-secondary",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
				})]
			}), account.loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				role: "status",
				className: "py-8 text-center text-sm text-muted-foreground",
				children: "Connecting to Firebase & Bank Server…"
			}) : account.user && account.profile ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 rounded-2xl bg-secondary p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid size-12 place-items-center rounded-full bg-primary text-lg font-bold text-primary-foreground",
							children: account.profile.displayName[0]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-semibold",
								children: account.profile.displayName
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: account.profile.email
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1 inline-block rounded-full bg-positive/15 px-2.5 py-0.5 text-[10px] font-bold text-positive",
								children: "Verified Account"
							})
						] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border bg-gradient-to-br from-secondary to-surface p-4 space-y-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between text-xs font-semibold text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, { className: "size-4 text-zen-teal" }), "Linked Primary Bank Account"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full bg-positive/20 px-2 py-0.5 text-[10px] font-bold text-positive",
								children: "Active"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-bold",
									children: account.profile.bankAccount.bankName
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between text-xs",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground",
										children: "Account Holder:"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-semibold",
										children: account.profile.bankAccount.accountHolder
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between text-xs",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground",
										children: "Account Number:"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono font-semibold",
										children: account.profile.bankAccount.accountNumber
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between text-xs",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground",
										children: "IFSC Code:"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono font-semibold",
										children: account.profile.bankAccount.ifsc
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between text-xs",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground",
										children: "UPI ID:"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono font-semibold text-zen-teal",
										children: account.profile.bankAccount.upiId
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between text-xs",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground",
										children: "Branch:"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-semibold",
										children: account.profile.bankAccount.branch
									})]
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Press, {
						disabled: busy,
						onClick: handleSignOut,
						className: "flex w-full items-center justify-center gap-2 rounded-xl bg-secondary py-3 text-sm font-semibold text-destructive hover:bg-secondary/80",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "size-4" }), busy ? "Signing out..." : "Sign out"]
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-6 py-6 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto grid size-16 place-items-center rounded-full bg-secondary text-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, { className: "size-8" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-lg font-bold",
						children: "Connect Your Google Account"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs text-muted-foreground max-w-xs mx-auto",
						children: "Securely sync your PayZen profile, transactional ledger, and linked bank details across sessions with Firebase."
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Press, {
						disabled: busy,
						onClick: handleGoogleLogin,
						className: "flex w-full items-center justify-center gap-3 rounded-2xl bg-primary py-4 text-sm font-semibold text-primary-foreground shadow-lg active:scale-98",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
							className: "size-5",
							viewBox: "0 0 24 24",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									fill: "currentColor",
									d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									fill: "currentColor",
									d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									fill: "currentColor",
									d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									fill: "currentColor",
									d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: busy ? "Connecting..." : "Continue with Google" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] text-muted-foreground",
						children: "Sandbox Mode • No real money is transferred"
					})
				]
			})]
		})
	});
}
/** Full-screen PIN entry. mode "setup" asks twice; "verify" checks the saved PIN. */
function PinPad({ lock, mode, title, onDone, onCancel }) {
	const [pin, setPin] = (0, import_react.useState)("");
	const [first, setFirst] = (0, import_react.useState)(null);
	const [msg, setMsg] = (0, import_react.useState)("");
	const [shake, setShake] = (0, import_react.useState)(0);
	const fail = (m) => {
		setMsg(m);
		setPin("");
		setShake((s) => s + 1);
	};
	const submit = async (p) => {
		if (mode === "setup") {
			if (!first) {
				setFirst(p);
				setPin("");
				setMsg("");
				return;
			}
			if (p !== first) {
				setFirst(null);
				return fail("PINs didn't match. Try again.");
			}
			await lock.setPin(p);
			onDone();
			return;
		}
		const r = await lock.verify(p);
		if (r === "ok") onDone();
		else if (r === "locked") fail("Too many tries. Wait 30 seconds.");
		else fail(`Wrong PIN. ${5 - lock.fails - 1} tries left.`);
	};
	const tap = (k) => {
		if (k === "del") return setPin((p) => p.slice(0, -1));
		if (pin.length >= 4) return;
		const next = pin + k;
		setPin(next);
		if (next.length === 4) setTimeout(() => void submit(next), 120);
	};
	const heading = title ?? (mode === "setup" ? first ? "Confirm your PIN" : "Create a 4-digit PIN" : "Enter your PIN");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		className: "absolute inset-0 z-[60] flex flex-col items-center bg-phone px-8 pb-10 pt-20 text-phone-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-10 text-positive" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-4 text-xl font-bold",
				children: heading
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 h-5 text-center text-xs text-phone-muted",
				children: msg || (mode === "setup" ? "Protects payments and opening the app" : "PayZen is locked")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				animate: shake ? { x: [
					0,
					-10,
					10,
					-6,
					6,
					0
				] } : {},
				className: "mt-8 flex gap-4",
				children: [
					0,
					1,
					2,
					3
				].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("size-4 rounded-full border-2 border-phone-foreground", pin.length > i && "bg-phone-foreground") }, i))
			}, shake),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-auto grid w-full grid-cols-3 gap-3",
				children: [
					"1",
					"2",
					"3",
					"4",
					"5",
					"6",
					"7",
					"8",
					"9",
					"",
					"0",
					"del"
				].map((k, i) => k === "" ? onCancel ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: onCancel,
					className: "h-16 text-sm font-semibold text-phone-muted",
					children: "Cancel"
				}, i) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}, i) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": k === "del" ? "Delete" : k,
					onClick: () => tap(k),
					className: "grid h-16 place-items-center rounded-full bg-surface text-2xl font-semibold active:scale-95",
					children: k === "del" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Delete, { className: "size-6" }) : k
				}, i))
			})
		]
	});
}
var FAQ = [
	["Is my money real?", "No. PayZen is in test mode — balances and payments are simulated until bank partners are connected."],
	["Forgot my PIN?", "Use Settings → Security → Remove PIN, or reset app data. Real accounts will verify identity first."],
	["Where is my data stored?", "Wallet data stays in this browser. Your profile is saved to your account once sign-in is connected."]
];
function Row({ icon, label, value, onClick, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		onClick,
		role: onClick ? "button" : void 0,
		className: cn("flex items-center gap-3 px-4 py-3.5", onClick && "cursor-pointer active:bg-secondary"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-muted-foreground",
				children: icon
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "flex-1 text-sm font-medium",
				children: label
			}),
			value && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-xs text-muted-foreground",
				children: value
			}),
			children ?? (onClick && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-4 text-muted-foreground" }))
		]
	});
}
function Toggle({ on, onChange, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		role: "switch",
		"aria-checked": on,
		"aria-label": label,
		onClick: (e) => {
			e.stopPropagation();
			onChange(!on);
		},
		className: cn("relative h-6 w-11 rounded-full transition-colors", on ? "bg-positive" : "bg-secondary"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("absolute top-0.5 size-5 rounded-full bg-background shadow transition-all", on ? "left-[22px]" : "left-0.5") })
	});
}
var Group = ({ title, children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
	className: "mt-5",
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mb-2 px-1 text-[11px] font-bold uppercase tracking-wider text-phone-muted",
		children: title
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "divide-y divide-border overflow-hidden rounded-2xl bg-sheet text-foreground",
		children
	})]
});
function SettingsPanel({ pz, lock, onClose, onSetPin }) {
	const { state } = pz;
	const [page, setPage] = (0, import_react.useState)("main");
	const limit = state.dailyLimit ?? 1e4;
	const used = sentToday(state.txs);
	const exportCsv = () => {
		const url = URL.createObjectURL(new Blob([toCsv(state.txs)], { type: "text/csv" }));
		const a = document.createElement("a");
		a.href = url;
		a.download = "payzen-transactions.csv";
		a.click();
		URL.revokeObjectURL(url);
		toast.success("Statement downloaded");
	};
	const editLimit = () => {
		const v = prompt("Daily send limit (₹)", String(limit));
		if (v === null) return;
		const n = Number(v);
		if (!Number.isFinite(n) || n < 100 || n > 1e5) {
			toast.error("Choose between ₹100 and ₹1,00,000");
			return;
		}
		pz.setDailyLimit(n);
		toast.success("Daily limit updated");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: { x: "100%" },
		animate: { x: 0 },
		exit: { x: "100%" },
		transition: {
			type: "spring",
			stiffness: 320,
			damping: 34
		},
		className: "absolute inset-0 z-40 overflow-y-auto bg-phone px-5 pb-10 pt-4 text-phone-foreground no-scrollbar",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": "Back",
					onClick: () => page === "main" ? onClose() : setPage("main"),
					className: "grid size-9 place-items-center rounded-full bg-surface",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-5" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-bold",
					children: page === "main" ? "Settings" : page === "help" ? "Help & FAQ" : "Terms & privacy"
				})]
			}),
			page === "help" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 space-y-3",
				children: [FAQ.map(([q, a]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
					className: "rounded-2xl bg-sheet p-4 text-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("summary", {
						className: "cursor-pointer text-sm font-semibold",
						children: q
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-xs text-muted-foreground",
						children: a
					})]
				}, q)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "mailto:support@payzen.app?subject=PayZen%20help",
					className: "block rounded-full bg-phone-foreground py-3 text-center text-sm font-semibold text-phone",
					children: "Email support"
				})]
			}),
			page === "terms" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 space-y-3 rounded-2xl bg-sheet p-4 text-xs leading-relaxed text-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Test mode." }), " PayZen does not move real money. All balances, cards and payments are simulated."] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Your data." }), " Wallet activity stays on this device. Your PIN is stored only as a one-way hash."] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Before launch." }), " Final terms and privacy policy will be published with the licensed payment partner."] })
				]
			}),
			page === "main" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Group, {
					title: "Security",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyRound, { className: "size-4" }),
							label: lock.hasPin ? "Change PIN" : "Set up PIN",
							onClick: onSetPin
						}),
						lock.hasPin && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "size-4" }),
							label: "Lock when leaving app",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
								label: "Lock when leaving app",
								on: lock.lockOnResume,
								onChange: lock.setLockOnResume
							})
						}),
						lock.hasPin && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "size-4" }),
							label: "Lock now",
							onClick: () => {
								lock.lock();
								onClose();
							}
						}),
						lock.hasPin && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-4" }),
							label: "Remove PIN",
							onClick: () => {
								if (confirm("Remove PIN? Payments won't ask for it.")) {
									lock.removePin();
									toast("PIN removed");
								}
							}
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Group, {
					title: "Payments",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gauge, { className: "size-4" }),
						label: "Daily send limit",
						value: fmt(limit, state.currency),
						onClick: editLimit
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "px-4 pb-3.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-1.5 overflow-hidden rounded-full bg-secondary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-full bg-positive",
								style: { width: `${Math.min(100, used / limit * 100)}%` }
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1.5 text-[11px] text-muted-foreground",
							children: [fmt(used, state.currency), " sent today"]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Group, {
					title: "Privacy & data",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "size-4" }),
							label: "Hide balance on home",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
								label: "Hide balance",
								on: Boolean(state.hideBalance),
								onChange: pz.setHideBalance
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-4" }),
							label: "Download statement (CSV)",
							onClick: exportCsv
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-4" }),
							label: "Reset wallet data",
							onClick: () => {
								if (confirm("Reset all wallet data?")) {
									pz.reset();
									toast.success("Wallet reset");
								}
							}
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Group, {
					title: "Support",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleQuestionMark, { className: "size-4" }),
						label: "Help & FAQ",
						onClick: () => setPage("help")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "size-4" }),
						label: "Terms & privacy",
						onClick: () => setPage("terms")
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-center text-[11px] text-phone-muted",
					children: "PayZen 1.0 · Test mode — no real money moves"
				})
			] })
		]
	});
}
var KEY = "payzen-lock-v1";
async function hashPin(pin) {
	const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(`payzen:${pin}`));
	return Array.from(new Uint8Array(buf)).map((b) => b.toString(16).padStart(2, "0")).join("");
}
function useAppLock() {
	const [stored, setStored] = (0, import_react.useState)(null);
	const [ready, setReady] = (0, import_react.useState)(false);
	const [locked, setLocked] = (0, import_react.useState)(false);
	const [fails, setFails] = (0, import_react.useState)(0);
	const [until, setUntil] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		try {
			const raw = localStorage.getItem(KEY);
			if (raw) {
				const parsed = JSON.parse(raw);
				setStored(parsed);
				setLocked(true);
			}
		} catch {}
		setReady(true);
	}, []);
	(0, import_react.useEffect)(() => {
		const onVis = () => {
			if (document.visibilityState === "hidden" && stored?.lockOnResume) setLocked(true);
		};
		document.addEventListener("visibilitychange", onVis);
		return () => document.removeEventListener("visibilitychange", onVis);
	}, [stored]);
	const save = (s) => {
		setStored(s);
		if (s) localStorage.setItem(KEY, JSON.stringify(s));
		else localStorage.removeItem(KEY);
	};
	const setPin = (0, import_react.useCallback)(async (pin) => {
		if (!isValidPin(pin)) return false;
		save({
			hash: await hashPin(pin),
			lockOnResume: stored?.lockOnResume ?? true
		});
		setLocked(false);
		return true;
	}, [stored]);
	/** Returns "ok" | "wrong" | "locked" */
	const verify = (0, import_react.useCallback)(async (pin) => {
		if (Date.now() < until) return "locked";
		if (stored && await hashPin(pin) === stored.hash) {
			setFails(0);
			setLocked(false);
			return "ok";
		}
		const n = fails + 1;
		const end = lockoutAfter(n, Date.now());
		if (end) {
			setUntil(end);
			setFails(0);
			return "locked";
		}
		setFails(n);
		return "wrong";
	}, [
		stored,
		fails,
		until
	]);
	const setLockOnResume = (v) => stored && save({
		...stored,
		lockOnResume: v
	});
	const removePin = () => {
		save(null);
		setLocked(false);
	};
	return {
		ready,
		hasPin: Boolean(stored),
		locked: Boolean(stored) && locked,
		lockOnResume: stored?.lockOnResume ?? false,
		until,
		fails,
		setPin,
		verify,
		lock: () => setLocked(true),
		setLockOnResume,
		removePin
	};
}
function WalletTools({ pz, mode, onClose }) {
	const [month, setMonth] = (0, import_react.useState)(() => (/* @__PURE__ */ new Date()).toISOString().slice(0, 7));
	const [amount, setAmount] = (0, import_react.useState)("");
	const [budget, setBudget] = (0, import_react.useState)(String(pz.state.monthlyBudget ?? ""));
	const [error, setError] = (0, import_react.useState)("");
	const [success, setSuccess] = (0, import_react.useState)(false);
	const [review, setReview] = (0, import_react.useState)(false);
	const data = monthlyInsights(pz.state.txs, month, pz.state.monthlyBudget);
	const input = "h-12 w-full rounded-lg border border-input bg-secondary px-3 text-foreground outline-none focus:ring-2 focus:ring-ring";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet, {
		onClose,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "no-scrollbar max-h-[75dvh] overflow-y-auto",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-5 flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xl font-bold",
						children: mode === "insights" ? "Spending insights" : "Add demo money"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Press, {
						"aria-label": "Close wallet tools",
						onClick: onClose,
						className: "grid size-9 place-items-center rounded-full bg-secondary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
					})]
				}),
				mode === "insights" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block text-xs font-semibold",
						children: ["Month", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							"aria-label": "Insights month",
							type: "month",
							value: month,
							onChange: (e) => setMonth(e.target.value),
							className: `${input} mt-2`
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "my-5 grid grid-cols-2 gap-4 border-y border-border py-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "flex items-center gap-1 text-xs text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-3" }), "Spent"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-lg font-bold tabular",
							children: fmt(data.spent, pz.state.currency)
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "flex items-center gap-1 text-xs text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDownLeft, { className: "size-3" }), "Received"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-lg font-bold tabular text-positive",
							children: fmt(data.received, pz.state.currency)
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("form", {
						onSubmit: (e) => {
							e.preventDefault();
							const value = Number(budget);
							if (!Number.isFinite(value) || value < 0) {
								setError("Enter a valid budget.");
								return;
							}
							pz.setBudget(value);
							setError("");
							toast.success("Sandbox budget saved");
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "text-xs font-semibold",
							children: ["Monthly budget (₹ INR)", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-2 flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									"aria-label": "Monthly budget",
									type: "number",
									min: "0",
									step: "0.01",
									value: budget,
									onChange: (e) => setBudget(e.target.value),
									placeholder: "Not set",
									className: `${input} min-w-0`
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Press, {
									type: "submit",
									"aria-label": "Save budget",
									className: "grid size-12 shrink-0 place-items-center rounded-lg bg-primary text-primary-foreground",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, { className: "size-4" })
								})]
							})]
						})
					}),
					Boolean(pz.state.monthlyBudget) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: `mt-3 text-sm font-semibold ${data.overBudget ? "text-destructive" : "text-positive"}`,
						children: data.overBudget ? "Over monthly budget" : `${fmt(data.remaining, pz.state.currency)} remaining`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mb-2 mt-6 text-sm font-semibold",
						children: "Spending breakdown"
					}),
					data.categories.length ? data.categories.map(([label, value]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between border-b border-border py-3 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "tabular font-semibold",
							children: fmt(value, pz.state.currency)
						})]
					}, label)) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "py-4 text-sm text-muted-foreground",
						children: "No completed spending this month."
					})
				] }) : success ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "py-5 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mx-auto mb-3 size-12 text-positive" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xl font-bold",
							children: "Demo money added"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 tabular",
							children: fmt(Number(amount), "INR")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Press, {
							onClick: onClose,
							className: "mt-5 w-full rounded-lg bg-primary py-3 font-semibold text-primary-foreground",
							children: "Done"
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: (e) => {
						e.preventDefault();
						const value = Number(amount);
						const valid = validate(value, pz.state.balance, "request");
						if (!valid.ok) {
							setError(valid.reason);
							return;
						}
						if (!review) {
							setReview(true);
							setError("");
							return;
						}
						if (!pz.topUp(Math.round(value * 100) / 100)) {
							setError("Unable to add demo money.");
							return;
						}
						setSuccess(true);
						setError("");
					},
					children: [review ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground",
								children: "Simulated wallet credit"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "my-3 text-3xl font-bold tabular",
								children: fmt(Number(amount), "INR")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground",
								children: "No card or bank will be charged."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Press, {
								onClick: () => setReview(false),
								className: "mt-3 text-sm font-semibold underline",
								children: "Edit amount"
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "text-sm font-semibold",
						children: ["Amount (₹ INR)", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							"aria-label": "Top-up amount",
							required: true,
							type: "number",
							min: "0.01",
							max: "1000000",
							step: "0.01",
							value: amount,
							onChange: (e) => setAmount(e.target.value),
							className: `${input} mb-4 mt-2 text-xl tabular`
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-5 flex gap-2",
						children: [
							500,
							1e3,
							2e3
						].map((value) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Press, {
							onClick: () => setAmount(String(value)),
							className: "flex-1 rounded-lg bg-secondary py-2 text-xs font-semibold",
							children: ["+₹", value]
						}, value))
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Press, {
						type: "submit",
						className: "flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-3 text-sm font-semibold text-primary-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }), review ? "Confirm simulated top-up" : "Review top-up"]
					})]
				}),
				error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					role: "alert",
					className: "mt-3 text-sm text-destructive",
					children: error
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DemoBadge, { className: "mt-5 text-muted-foreground" })
			]
		})
	});
}
/**
* Module 5: Audio Soundbox & Haptic Notifier Engine
*/
var SoundboxEngine = class {
	static audioCtx = null;
	static getContext() {
		if (!this.audioCtx) {
			const AudioContextClass = window.AudioContext || window.webkitAudioContext;
			this.audioCtx = new AudioContextClass();
		}
		if (this.audioCtx.state === "suspended") this.audioCtx.resume();
		return this.audioCtx;
	}
	static playPaymentChime() {
		try {
			const ctx = this.getContext();
			const frequencies = [
				523.25,
				659.25,
				783.99,
				1046.5
			];
			const noteDuration = .12;
			frequencies.forEach((freq, idx) => {
				const osc = ctx.createOscillator();
				const gain = ctx.createGain();
				osc.type = "sine";
				osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * noteDuration);
				gain.gain.setValueAtTime(0, ctx.currentTime + idx * noteDuration);
				gain.gain.linearRampToValueAtTime(.3, ctx.currentTime + idx * noteDuration + .02);
				gain.gain.exponentialRampToValueAtTime(1e-4, ctx.currentTime + idx * noteDuration + noteDuration + .1);
				osc.connect(gain);
				gain.connect(ctx.destination);
				osc.start(ctx.currentTime + idx * noteDuration);
				osc.stop(ctx.currentTime + idx * noteDuration + noteDuration + .1);
			});
			if ("vibrate" in navigator) navigator.vibrate([
				40,
				60,
				40,
				60,
				150
			]);
		} catch (e) {
			console.warn("Audio synthesis not permitted prior to user interaction", e);
		}
	}
	static speakPaymentSuccess(amount, language = "hi") {
		if (!("speechSynthesis" in window)) return;
		window.speechSynthesis.cancel();
		const text = language === "hi" ? `पे-ज़ेन पर ${amount} रुपये प्राप्त हुए` : `Received rupees ${amount} on PayZen`;
		const utterance = new SpeechSynthesisUtterance(text);
		utterance.lang = language === "hi" ? "hi-IN" : "en-IN";
		utterance.rate = 1;
		utterance.pitch = 1.1;
		setTimeout(() => {
			window.speechSynthesis.speak(utterance);
		}, 600);
	}
};
var FraudRiskEngine = class {
	static recentTxHistory = [];
	static recordTx(amountPaise) {
		this.recentTxHistory.push({
			timestamp: Date.now(),
			amountPaise
		});
		const oneHourAgo = Date.now() - 36e5;
		this.recentTxHistory = this.recentTxHistory.filter((tx) => tx.timestamp > oneHourAgo);
	}
	static evaluateRisk(context) {
		let score = 0;
		if (context.deviceSecurity.isRooted) score += 60;
		if (context.deviceSecurity.hasScreenOverlay) score += 40;
		if (context.deviceSecurity.isVpnActive) score += 20;
		const fiveMinAgo = Date.now() - 3e5;
		if (this.recentTxHistory.filter((tx) => tx.timestamp > fiveMinAgo).length >= 5) score += 50;
		if (context.isNewRecipient && context.amountPaise > 5e5) score += 35;
		if (score >= 70) return {
			decision: "REJECT",
			riskScore: score,
			reason: "High fraud risk detected on this transaction"
		};
		if (score >= 40) return {
			decision: "REQUIRE_OTP",
			riskScore: score,
			reason: "Additional verification required"
		};
		if (score >= 20) return {
			decision: "REQUIRE_BIOMETRIC",
			riskScore: score,
			reason: "Biometric authorization required"
		};
		return {
			decision: "ALLOW",
			riskScore: score
		};
	}
};
function AmountFlow({ pz, initialMode, initialRecipient, onClose, requirePin }) {
	const { state } = pz;
	const cur = state.currency;
	const [mode, setMode] = (0, import_react.useState)(initialMode);
	const [recipient, setRecipient] = (0, import_react.useState)(initialRecipient);
	const [picker, setPicker] = (0, import_react.useState)(false);
	const [expr, setExpr] = (0, import_react.useState)("");
	const [step, setStep] = (0, import_react.useState)("enter");
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [tx, setTx] = (0, import_react.useState)(null);
	const lock = (0, import_react.useRef)(false);
	const rate = cur === "INR" ? 1 : cur === "USD" ? 1 / 84 : 1 / 91;
	const display = evaluate(expr);
	const amountInr = Math.round(display / rate * 100) / 100;
	const base = validate(amountInr, state.balance, mode);
	const limit = state.dailyLimit ?? 1e4;
	const v = base.ok && mode === "send" && !withinDailyLimit(amountInr, sentToday(state.txs), limit) ? {
		ok: false,
		reason: `Daily limit ${fmt(limit, cur)} reached`
	} : base;
	const hasOp = /[+−×÷]/.test(expr);
	const confirm = () => {
		if (lock.current || !v.ok) return;
		if (mode === "send" && requirePin) requirePin(doConfirm);
		else doConfirm();
	};
	const doConfirm = () => {
		if (lock.current || !v.ok) return;
		lock.current = true;
		setBusy(true);
		setTimeout(() => {
			const risk = FraudRiskEngine.evaluateRisk({
				userId: "user_me",
				amountPaise: Math.round(amountInr * 100),
				recipientVpa: recipient.handle,
				isNewRecipient: false,
				clientTimestamp: Date.now(),
				deviceSecurity: {
					isRooted: false,
					hasScreenOverlay: false,
					isVpnActive: false
				}
			});
			if (risk.decision === "REJECT") {
				toast.error(risk.reason || "Transaction blocked by fraud risk engine");
				setBusy(false);
				lock.current = false;
				setStep("enter");
				return;
			}
			const t = mode === "send" ? pz.send(recipient, amountInr) : pz.request(recipient, amountInr);
			setBusy(false);
			if (!t) {
				lock.current = false;
				setStep("enter");
				return;
			}
			setTx(t);
			if (mode === "send") {
				SoundboxEngine.playPaymentChime();
				SoundboxEngine.speakPaymentSuccess(amountInr, "hi");
			}
			setStep(mode === "send" ? "success" : "requested");
		}, 900);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			className: "absolute inset-0 z-40 flex flex-col bg-phone pt-3",
			initial: { opacity: 0 },
			animate: { opacity: 1 },
			exit: { opacity: 0 },
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: { y: "100%" },
				animate: { y: 0 },
				exit: { y: "100%" },
				transition: {
					type: "spring",
					stiffness: 300,
					damping: 34
				},
				className: "relative flex flex-1 flex-col rounded-t-[2rem] bg-sheet px-5 pb-6 pt-3 text-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mx-auto h-1 w-10 rounded-full bg-border" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Press, {
						onClick: onClose,
						"aria-label": "Close",
						className: "absolute right-4 top-4 grid size-8 place-items-center rounded-full bg-secondary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 flex justify-center gap-1",
						children: ["send", "request"].map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setMode(m),
							className: cn("relative rounded-full px-4 py-1.5 text-sm font-semibold capitalize transition-colors", mode === m ? "text-foreground" : "text-muted-foreground"),
							children: [mode === m && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
								layoutId: "amt-tab",
								className: "absolute inset-0 rounded-full bg-secondary"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "relative",
								children: m
							})]
						}, m))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setPicker((p) => !p),
						className: "mx-auto mt-1 flex items-center gap-1 text-xs text-muted-foreground",
						children: [
							recipient.name,
							" · Demo wallet 7642 ",
							cur,
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: cn("size-3 transition-transform", picker && "rotate-180") })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: picker && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: {
							height: 0,
							opacity: 0
						},
						animate: {
							height: "auto",
							opacity: 1
						},
						exit: {
							height: 0,
							opacity: 0
						},
						className: "overflow-hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "no-scrollbar flex gap-3 overflow-x-auto py-3",
							children: state.recipients.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => {
									setRecipient(r);
									setPicker(false);
								},
								className: cn("flex w-14 shrink-0 flex-col items-center gap-1 rounded-xl p-1 text-[10px]", r.id === recipient.id && "bg-secondary"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {
									r,
									size: 40
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "w-full truncate",
									children: r.name
								})]
							}, r.id))
						})
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-1 flex-col items-center justify-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: cn("flex items-baseline text-5xl font-extrabold tracking-tight", !expr && "text-muted-foreground/40"),
									"aria-live": "polite",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mr-1",
										children: symbol(cur)
									}), (expr || "0.00").split("").map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
										initial: {
											y: 18,
											opacity: 0,
											filter: "blur(4px)"
										},
										animate: {
											y: 0,
											opacity: 1,
											filter: "blur(0px)"
										},
										transition: {
											type: "spring",
											stiffness: 500,
											damping: 30
										},
										className: cn(OPS.includes(c) && "mx-0.5 text-muted-foreground"),
										children: c
									}, i + c))]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: expr && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
									initial: {
										scale: 0,
										opacity: 0
									},
									animate: {
										scale: 1,
										opacity: 1
									},
									exit: {
										scale: 0,
										opacity: 0
									},
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {
										r: recipient,
										size: 30
									})
								}) })]
							}),
							hasOp && Number.isFinite(display) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "tabular mt-1 text-sm font-semibold text-muted-foreground",
								children: ["= ", fmt(amountInr, cur)]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-2 text-[11px] text-muted-foreground",
								children: [
									"Available demo balance",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-semibold text-foreground",
										children: fmt(state.balance, cur)
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: cn("mt-1 h-4 text-xs font-semibold text-destructive transition-opacity", expr && !v.ok ? "opacity-100" : "opacity-0"),
								children: !v.ok ? v.reason : ""
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SwipeConfirm, {
							tone: "light",
							disabled: !v.ok,
							label: mode === "send" ? "Swipe right to review" : "Swipe right to review request",
							onConfirm: () => setStep("review")
						}, mode + String(v.ok))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-2 grid grid-cols-4 gap-2",
						children: OPS.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Press, {
							onClick: () => setExpr((e) => press(e, o)),
							className: "h-10 rounded-full text-xl font-medium text-muted-foreground active:bg-secondary",
							"aria-label": `Operator ${o}`,
							children: o
						}, o))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-3 gap-2 rounded-3xl bg-secondary/60 p-2",
						children: [
							"1",
							"2",
							"3",
							"4",
							"5",
							"6",
							"7",
							"8",
							"9",
							".",
							"0",
							"del"
						].map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Press, {
							onClick: () => setExpr((e) => press(e, k)),
							"aria-label": k === "del" ? "Delete" : k,
							className: "grid h-12 place-items-center rounded-2xl bg-sheet text-xl font-semibold shadow-sm active:bg-secondary",
							children: k === "del" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Delete, { className: "size-5" }) : k
						}, k))
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: step === "review" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			className: "absolute inset-0 z-50",
			initial: { opacity: 0 },
			animate: { opacity: 1 },
			exit: { opacity: 0 },
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 bg-phone/70",
				onClick: () => !busy && setStep("enter")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: { y: "100%" },
				animate: { y: 0 },
				exit: { y: "100%" },
				transition: {
					type: "spring",
					stiffness: 320,
					damping: 34
				},
				className: "absolute inset-x-0 bottom-0 rounded-t-[2rem] bg-sheet p-6 text-foreground shadow-sheet",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mx-auto mb-5 h-1 w-10 rounded-full bg-border" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground",
						children: ["Review ", mode === "send" ? "demo payment" : "demo request"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 flex flex-col items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {
								r: recipient,
								size: 56
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-semibold",
								children: [
									mode === "send" ? "To" : "From",
									" ",
									recipient.name
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: recipient.handle
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "tabular mt-2 text-4xl font-extrabold",
								children: fmt(amountInr, cur)
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "mt-5 space-y-2 rounded-2xl bg-secondary p-4 text-xs",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-muted-foreground",
									children: "From"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "font-semibold",
									children: "PayZen demo wallet ···· 7642"
								})]
							}),
							mode === "send" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-muted-foreground",
									children: "Balance after"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "tabular font-semibold",
									children: fmt(state.balance - amountInr, cur)
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-muted-foreground",
									children: "Fee"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "font-semibold",
									children: fmt(0, cur)
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DemoBadge, { className: "mt-4 text-destructive" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 grid grid-cols-[1fr_2fr] gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Press, {
							disabled: busy,
							onClick: () => setStep("enter"),
							className: "h-12 rounded-full bg-secondary text-sm font-semibold",
							children: "Cancel"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Press, {
							disabled: busy,
							onClick: confirm,
							className: "flex h-12 items-center justify-center gap-2 rounded-full bg-primary text-sm font-semibold text-primary-foreground disabled:opacity-70",
							children: busy ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }), " Processing demo…"] }) : mode === "send" ? "Confirm demo payment" : "Send demo request"
						})]
					})
				]
			})]
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AnimatePresence, { children: [step === "success" && tx && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
			type: "button",
			onClick: onClose,
			className: "absolute inset-0 z-[60] flex flex-col items-center justify-center bg-success px-8 text-center text-success-foreground",
			initial: {
				opacity: 0,
				scale: 1.08
			},
			animate: {
				opacity: 1,
				scale: 1
			},
			exit: { opacity: 0 },
			transition: {
				duration: .45,
				ease: [
					.2,
					.8,
					.2,
					1
				]
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
					viewBox: "0 0 52 52",
					className: "size-20",
					"aria-hidden": true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.path, {
						d: "M14 27 L23 36 L39 17",
						fill: "none",
						stroke: "currentColor",
						strokeWidth: 5,
						strokeLinecap: "round",
						strokeLinejoin: "round",
						initial: { pathLength: 0 },
						animate: { pathLength: 1 },
						transition: {
							delay: .25,
							duration: .5,
							ease: "easeOut"
						}
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						y: 16,
						opacity: 0
					},
					animate: {
						y: 0,
						opacity: 1
					},
					transition: { delay: .5 },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SuccessAmount, {
							value: -tx.amount,
							cur
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm font-semibold opacity-90",
							children: "Demo payment successful"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm opacity-90",
							children: ["Sent to ", tx.name]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "tabular mt-3 text-[11px] opacity-80",
							children: ["Ref ", tx.ref]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DemoBadge, { className: "mt-5" })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "absolute bottom-10 text-[11px] opacity-70",
					children: "Tap anywhere to close"
				})
			]
		}), step === "requested" && tx && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			className: "absolute inset-0 z-[60] flex flex-col items-center justify-center bg-phone px-8 text-center text-phone-foreground",
			initial: {
				opacity: 0,
				scale: 1.05
			},
			animate: {
				opacity: 1,
				scale: 1
			},
			exit: { opacity: 0 },
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {
					r: recipient,
					size: 64
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "tabular mt-4 text-4xl font-extrabold",
					children: fmt(tx.amount, cur)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1 text-sm text-phone-muted",
					children: ["Demo request sent to ", tx.name]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mt-3 rounded-full bg-pending/20 px-3 py-1 text-xs font-bold uppercase text-pending",
					children: "Pending"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "tabular mt-3 text-[11px] text-phone-muted",
					children: ["Ref ", tx.ref]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DemoBadge, { className: "mt-5 text-phone-muted" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Press, {
						onClick: () => {
							pz.cancel(tx.id);
							onClose();
						},
						className: "h-11 rounded-full bg-surface px-5 text-sm font-semibold",
						children: "Cancel request"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Press, {
						onClick: onClose,
						className: "h-11 rounded-full bg-phone-foreground px-5 text-sm font-semibold text-phone",
						children: "Done"
					})]
				})
			]
		})] })
	] });
}
function SuccessAmount({ value, cur }) {
	const [v, setV] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const t = setTimeout(() => setV(value), 450);
		return () => clearTimeout(t);
	}, [value]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedMoney, {
		value: v,
		currency: cur,
		className: "block text-5xl font-extrabold"
	});
}
var ME = {
	id: "me",
	name: "Naitik",
	handle: "you@payzen",
	hue: 60
};
var CARDS = [
	{
		id: "c1",
		label: "Digital card",
		last4: "7642",
		bg: "bg-zen-yellow",
		glow: "shadow-glow-yellow"
	},
	{
		id: "c2",
		label: "Travel card",
		last4: "5123",
		bg: "bg-zen-teal",
		glow: "shadow-glow-teal"
	},
	{
		id: "c3",
		label: "Online card",
		last4: "3413",
		bg: "bg-zen-blue",
		glow: "shadow-glow-blue"
	}
];
function Home$1({ pz, onSend, onRequest, onTx, onCards, onProfile, onInsights, onTopUp, onScan }) {
	const { state } = pz;
	const [q, setQ] = (0, import_react.useState)("");
	const [searching, setSearching] = (0, import_react.useState)(false);
	const [filter, setFilter] = (0, import_react.useState)("all");
	const scroller = (0, import_react.useRef)(null);
	const { scrollY } = useScroll({ container: scroller });
	const cardX = useTransform(scrollY, [0, 200], [0, 40]);
	const [accountPickerOpen, setAccountPickerOpen] = (0, import_react.useState)(false);
	const primaryAcc = state.accounts?.find((a) => a.id === state.primaryAccountId) || state.accounts?.[0];
	const spent = state.txs.filter((t) => t.kind === "sent" && t.status === "completed").reduce((a, t) => a - t.amount, 0);
	const list = state.txs.filter((t) => (filter === "all" || t.kind === filter) && t.name.toLowerCase().includes(q.toLowerCase()));
	const filters = [
		"all",
		"sent",
		"received",
		"request"
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: scroller,
		className: "no-scrollbar h-full overflow-y-auto pb-28",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative px-5 pt-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Press, {
						onClick: onProfile,
						"aria-label": "Profile",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {
							r: ME,
							size: 36
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Press, {
							onClick: onScan,
							"aria-label": "Scan QR",
							className: "flex items-center gap-1 rounded-full bg-surface px-3 py-1.5 text-xs font-semibold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QrCode, { className: "size-4" }), " Scan QR"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Press, {
							onClick: () => toast("No new demo notifications"),
							"aria-label": "Notifications",
							className: "grid size-9 place-items-center rounded-full bg-surface",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "size-4" })
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
					type: "button",
					onClick: onCards,
					style: { x: cardX },
					"aria-label": "Open cards",
					className: "absolute -right-6 top-20 h-36 w-24",
					children: CARDS.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						className: cn("absolute inset-y-0 w-20 rounded-2xl", c.bg),
						style: {
							left: i * 10,
							zIndex: 3 - i
						},
						initial: {
							x: 60,
							opacity: 0
						},
						animate: {
							x: 0,
							opacity: 1
						},
						transition: {
							delay: .1 + i * .08,
							type: "spring",
							stiffness: 200,
							damping: 20
						},
						whileHover: { x: -6 }
					}, c.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 flex items-center justify-between",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setAccountPickerOpen((p) => !p),
						className: "flex items-center gap-1.5 text-xs text-phone-muted hover:text-foreground transition bg-surface/80 px-3 py-1 rounded-full",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: primaryAcc ? `${primaryAcc.bankName} (${primaryAcc.type})` : "Primary Account" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: cn("size-3 transition-transform", accountPickerOpen && "rotate-180") })]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: accountPickerOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						height: 0,
						opacity: 0
					},
					animate: {
						height: "auto",
						opacity: 1
					},
					exit: {
						height: 0,
						opacity: 0
					},
					className: "overflow-hidden mt-2 mb-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-1.5 rounded-2xl bg-surface p-2 shadow-lg",
						children: state.accounts?.map((acc) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => {
								pz.setPrimaryAccount(acc.id);
								setAccountPickerOpen(false);
								toast.success(`Switched primary account to ${acc.name}`);
							},
							className: cn("flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-xs transition", acc.id === state.primaryAccountId ? "bg-primary text-primary-foreground font-bold" : "hover:bg-secondary"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-semibold",
								children: acc.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-[10px] opacity-75",
								children: [
									acc.accountNumberMasked,
									" · ",
									acc.bankName
								]
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "tabular font-bold",
								children: fmt(acc.balance, state.currency)
							})]
						}, acc.id))
					})
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-xs text-phone-muted",
					children: "Wallet balance · test mode"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					"aria-label": state.hideBalance ? "Show balance" : "Hide balance",
					onClick: () => pz.setHideBalance(!state.hideBalance),
					className: "flex items-center gap-2 text-left",
					children: [state.hideBalance ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block text-[2.4rem] font-extrabold leading-tight tracking-widest",
						children: "••••••"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedMoney, {
						value: state.balance,
						currency: state.currency,
						split: true,
						className: "block text-[2.4rem] font-extrabold leading-tight tracking-tight"
					}), state.hideBalance ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "size-5 text-phone-muted" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, { className: "size-5 text-phone-muted" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 flex gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Press, {
							onClick: onSend,
							className: "flex items-center gap-1.5 rounded-full bg-phone-foreground py-1.5 pl-1.5 pr-4 text-sm font-semibold text-phone",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid size-6 place-items-center rounded-full bg-phone text-phone-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-3.5" })
							}), "Send"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Press, {
							onClick: onRequest,
							className: "flex items-center gap-1.5 rounded-full bg-surface px-4 py-1.5 text-sm font-semibold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDownLeft, { className: "size-3.5" }), "Request"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Press, {
							onClick: onScan,
							"aria-label": "Scan QR",
							className: "grid size-9 place-items-center rounded-full bg-surface text-foreground",
							title: "Scan QR Code",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QrCode, { className: "size-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Press, {
							onClick: onTopUp,
							"aria-label": "Add demo money",
							title: "Add demo money",
							className: "grid size-9 place-items-center rounded-full bg-zen-teal text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" })
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Press, {
					onClick: onInsights,
					"aria-label": "Spending insights",
					className: "mt-6 flex w-[85%] items-center justify-between rounded-2xl bg-surface px-4 py-3 text-left",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] text-phone-muted",
						children: "Spending"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "tabular font-bold",
						children: fmt(spent, state.currency)
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex -space-x-2",
						children: state.txs.slice(0, 3).map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-full ring-2 ring-surface",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MiniIcon, {
								t,
								rs: state.recipients
							})
						}, t.id))
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.section, {
			initial: {
				y: 60,
				opacity: 0
			},
			animate: {
				y: 0,
				opacity: 1
			},
			transition: {
				type: "spring",
				stiffness: 200,
				damping: 26,
				delay: .1
			},
			className: "mx-2 mt-6 min-h-[420px] rounded-[1.75rem] bg-sheet px-4 pb-6 pt-3 text-foreground",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mx-auto h-1 w-8 rounded-full bg-border" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-2 flex items-center justify-between",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Press, {
							"aria-label": "Filter",
							onClick: () => setFilter(filters[(filters.indexOf(filter) + 1) % filters.length] ?? "all"),
							className: "grid size-8 place-items-center rounded-full bg-secondary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListFilter, { className: "size-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-sm font-semibold",
							children: "Transactions"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Press, {
							"aria-label": "Search",
							onClick: () => {
								setSearching((s) => !s);
								setQ("");
							},
							className: "grid size-8 place-items-center rounded-full bg-secondary",
							children: searching ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-4" })
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: searching && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.input, {
					initial: {
						height: 0,
						opacity: 0
					},
					animate: {
						height: 40,
						opacity: 1
					},
					exit: {
						height: 0,
						opacity: 0
					},
					autoFocus: true,
					value: q,
					onChange: (e) => setQ(e.target.value),
					placeholder: "Search transactions",
					className: "mt-3 w-full rounded-xl bg-secondary px-3 text-sm outline-none"
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "no-scrollbar mt-3 flex gap-1.5 overflow-x-auto",
					children: filters.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setFilter(f),
						className: cn("relative rounded-full px-3 py-1 text-[11px] font-semibold capitalize", filter === f ? "text-primary-foreground" : "text-muted-foreground"),
						children: [filter === f && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
							layoutId: "filter-pill",
							className: "absolute inset-0 rounded-full bg-primary"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "relative",
							children: f === "request" ? "Requests" : f
						})]
					}, f))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-2",
					children: list.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "py-10 text-center text-sm text-muted-foreground",
						children: "No demo transactions found"
					}) : list.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TxRow, {
						i,
						tx: t,
						recipients: state.recipients,
						currency: state.currency,
						onClick: () => onTx(t)
					}, t.id))
				})
			]
		})]
	});
}
function MiniIcon({ t, rs }) {
	const r = rs.find((x) => x.id === t.icon);
	if (r) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {
		r,
		size: 26
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid size-[26px] place-items-center rounded-full bg-phone-foreground text-[10px] font-bold text-phone",
		children: t.name[0]
	});
}
function Cards() {
	const [frozen, setFrozen] = (0, import_react.useState)({});
	const [shown, setShown] = (0, import_react.useState)({});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "no-scrollbar h-full overflow-y-auto px-5 pb-28 pt-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-2xl font-bold",
				children: "Cards"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Press, {
				onClick: () => toast("Demo card order placed — no real card will be issued"),
				className: "rounded-full bg-phone-foreground px-3 py-1.5 text-xs font-semibold text-phone",
				children: "Order a card"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-5 space-y-4",
			children: CARDS.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					y: 40,
					opacity: 0
				},
				animate: {
					y: 0,
					opacity: 1
				},
				transition: {
					delay: i * .08,
					type: "spring",
					stiffness: 220,
					damping: 24
				},
				whileTap: {
					scale: .97,
					rotateX: 6
				},
				drag: "x",
				dragConstraints: {
					left: 0,
					right: 0
				},
				dragElastic: .15,
				className: cn("relative h-44 rounded-3xl p-4 text-primary", c.bg, c.glow, frozen[c.id] && "grayscale"),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-between text-xs font-semibold",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: c.label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "tabular",
							children: shown[c.id] ? `4000 •••• •••• ${c.last4}` : `•••• ${c.last4}`
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-[10px] font-semibold opacity-60",
						children: "DEMO · NOT A REAL CARD"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute inset-x-4 bottom-4 flex items-center gap-2",
						children: [[
							{
								I: frozen[c.id] ? LockOpen : Snowflake,
								l: frozen[c.id] ? "Unfreeze" : "Freeze",
								f: () => {
									setFrozen((s) => ({
										...s,
										[c.id]: !s[c.id]
									}));
									toast(`${c.label} ${frozen[c.id] ? "unfrozen" : "frozen"} (demo)`);
								}
							},
							{
								I: shown[c.id] ? EyeOff : Eye,
								l: "Show number",
								f: () => setShown((s) => ({
									...s,
									[c.id]: !s[c.id]
								}))
							},
							{
								I: Copy,
								l: "Copy",
								f: () => toast("Demo numbers can't be copied")
							}
						].map(({ I, l, f }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Press, {
							"aria-label": l,
							onClick: f,
							className: "grid size-8 place-items-center rounded-full bg-primary/15",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(I, { className: "size-4" })
						}, l)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "ml-auto flex items-center gap-1 text-[10px] font-bold",
							children: [frozen[c.id] ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "size-3" }) : null, frozen[c.id] ? "FROZEN" : "ACTIVE"]
						})]
					})
				]
			}, c.id))
		})]
	});
}
function Recipients({ pz, onPick }) {
	const { state } = pz;
	const [q, setQ] = (0, import_react.useState)("");
	const [selected, setSelected] = (0, import_react.useState)(null);
	const [adding, setAdding] = (0, import_react.useState)(false);
	const [name, setName] = (0, import_react.useState)("");
	const list = (0, import_react.useMemo)(() => state.recipients.filter((r) => (r.name + r.handle).toLowerCase().includes(q.toLowerCase())), [state.recipients, q]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "no-scrollbar h-full overflow-y-auto px-5 pb-28 pt-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl font-bold",
					children: "Recipients"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Press, {
					onClick: () => setAdding((a) => !a),
					className: "flex items-center gap-1 rounded-full bg-phone-foreground px-3 py-1.5 text-xs font-semibold text-phone",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-3.5" }), "Add"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: adding && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.form, {
				initial: {
					height: 0,
					opacity: 0
				},
				animate: {
					height: "auto",
					opacity: 1
				},
				exit: {
					height: 0,
					opacity: 0
				},
				className: "overflow-hidden",
				onSubmit: (e) => {
					e.preventDefault();
					const n = name.trim();
					if (n.length < 2) {
						toast.error("Enter a name with at least 2 letters");
						return;
					}
					pz.addRecipient(n.slice(0, 24));
					setName("");
					setAdding(false);
					toast.success(`${n} added as a demo contact`);
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						autoFocus: true,
						value: name,
						onChange: (e) => setName(e.target.value),
						placeholder: "Fictional contact name",
						maxLength: 24,
						className: "h-11 flex-1 rounded-xl bg-surface px-3 text-sm outline-none placeholder:text-phone-muted"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Press, {
						type: "submit",
						className: "grid size-11 place-items-center rounded-xl bg-phone-foreground text-phone",
						"aria-label": "Save contact",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserPlus, { className: "size-4" })
					})]
				})
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex items-center gap-2 rounded-xl bg-surface px-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-4 text-phone-muted" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value: q,
					onChange: (e) => setQ(e.target.value),
					placeholder: "Search recipients",
					className: "h-11 flex-1 bg-transparent text-sm outline-none placeholder:text-phone-muted"
				})]
			}),
			list.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "py-12 text-center text-sm text-phone-muted",
				children: [
					"No recipients match “",
					q,
					"”"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5 grid grid-cols-3 gap-x-3 gap-y-5",
				children: list.map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
					type: "button",
					initial: {
						opacity: 0,
						scale: .8
					},
					animate: {
						opacity: 1,
						scale: 1
					},
					transition: { delay: i * .03 },
					whileTap: { scale: .92 },
					onClick: () => {
						setSelected(r.id);
						setTimeout(() => onPick(r), 220);
					},
					className: "flex flex-col items-center gap-1.5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: cn("rounded-full p-0.5 ring-2 transition-all", selected === r.id ? "ring-zen-teal" : "ring-transparent"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {
								r,
								size: 60
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-semibold",
							children: r.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "w-full truncate text-[10px] text-phone-muted",
							children: r.handle
						})
					]
				}, r.id))
			})
		]
	});
}
function Profile({ pz, onTx, account, onAccount, onSettings }) {
	const { state } = pz;
	const reqs = state.txs.filter((t) => t.kind === "request");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "no-scrollbar h-full overflow-y-auto px-5 pb-28 pt-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-2xl font-bold",
				children: "Profile"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 flex items-center gap-3 rounded-2xl bg-surface p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {
					r: ME,
					size: 52
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "break-words font-semibold",
					children: account.profile?.displayName || account.user?.displayName || ME.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-phone-muted",
					children: account.user ? "Firebase account · simulated wallet" : "Local payment sandbox"
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Press, {
				onClick: onAccount,
				className: "mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-phone-foreground py-3 text-sm font-semibold text-phone",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserPlus, { className: "size-4" }), account.loading ? "Connecting account…" : account.user ? "Manage account" : "Sign in / Create account"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Press, {
				onClick: onSettings,
				className: "mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-surface py-3 text-sm font-semibold",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings2, { className: "size-4" }), "Settings & security"]
			}),
			!account.configured && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-center text-xs text-phone-muted",
				children: "Firebase connection pending"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mb-2 mt-6 flex items-center gap-1.5 text-xs font-semibold text-phone-muted",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings2, { className: "size-3.5" }), "Display currency"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex gap-1 rounded-full bg-surface p-1",
				children: [
					"INR",
					"USD",
					"EUR"
				].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => pz.setCurrency(c),
					className: cn("relative flex-1 rounded-full py-2 text-xs font-semibold", state.currency === c ? "text-phone" : "text-phone-muted"),
					children: [state.currency === c && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
						layoutId: "cur-pill",
						className: "absolute inset-0 rounded-full bg-phone-foreground"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "relative",
						children: c
					})]
				}, c))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-2 mt-6 text-xs font-semibold text-phone-muted",
				children: "Payment requests"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-2xl bg-sheet px-3 py-1 text-foreground",
				children: reqs.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "py-6 text-center text-sm text-muted-foreground",
					children: "No demo requests yet"
				}) : reqs.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TxRow, {
					i,
					tx: t,
					recipients: state.recipients,
					currency: state.currency,
					onClick: () => onTx(t)
				}, t.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Press, {
				onClick: () => {
					if (confirm("Reset all demo data to the starting state?")) {
						pz.reset();
						toast.success("Demo data reset");
					}
				},
				className: "mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-surface py-3 text-sm font-semibold",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-4" }), "Reset demo data"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 text-center text-[11px] leading-relaxed text-phone-muted",
				children: "Payments and cards are simulated. Wallet data stays in this browser, separate from your Firebase profile. No real money moves."
			})
		]
	});
}
var UpiParser = class {
	static isValidVpa(vpa) {
		return /^[a-zA-Z0-9.-]{2,256}@[a-zA-Z][a-zA-Z0-9]{1,64}$/.test(vpa);
	}
	static parse(qrString) {
		if (!qrString.startsWith("upi://pay")) throw new Error("INVALID_QR: Not a valid UPI QR payload");
		const params = new URL(qrString).searchParams;
		const pa = params.get("pa");
		const pn = params.get("pn");
		if (!pa) throw new Error("MALFORMED_UPI: Missing payee address (pa)");
		if (!pn) throw new Error("MALFORMED_UPI: Missing payee name (pn)");
		if (!this.isValidVpa(pa)) throw new Error("INVALID_VPA: Malformed UPI ID syntax");
		const rawAmount = params.get("am");
		const parsedAmount = rawAmount ? parseFloat(rawAmount) : void 0;
		return {
			pa: decodeURIComponent(pa),
			pn: decodeURIComponent(pn),
			am: parsedAmount && !isNaN(parsedAmount) && parsedAmount > 0 ? parsedAmount : void 0,
			cu: "INR",
			mc: params.get("mc") || void 0,
			tr: params.get("tr") || void 0,
			tn: params.get("tn") ? decodeURIComponent(params.get("tn")) : void 0,
			mid: params.get("mid") || void 0,
			sign: params.get("sign") || void 0
		};
	}
	static generatePayload(data) {
		const params = new URLSearchParams();
		params.set("pa", data.pa);
		params.set("pn", data.pn);
		params.set("cu", "INR");
		if (data.am) params.set("am", data.am.toFixed(2));
		if (data.mc) params.set("mc", data.mc);
		if (data.tr) params.set("tr", data.tr);
		if (data.tn) params.set("tn", data.tn);
		return `upi://pay?${params.toString()}`;
	}
};
var QrScannerModal = ({ recipients, onSelectRecipient, onClose }) => {
	const [tab, setTab] = (0, import_react.useState)("scan");
	const [scanning, setScanning] = (0, import_react.useState)(false);
	const [manualUri, setManualUri] = (0, import_react.useState)("");
	const [parseError, setParseError] = (0, import_react.useState)(null);
	const simulateScan = (rec) => {
		setScanning(true);
		setTimeout(() => {
			setScanning(false);
			onSelectRecipient(rec);
		}, 800);
	};
	UpiParser.generatePayload({
		pa: "payzen.user@okhdfcbank",
		pn: "PayZen User",
		cu: "INR",
		tn: "Instant payment via PayZen sandbox"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: {
			opacity: 0,
			scale: .95
		},
		animate: {
			opacity: 1,
			scale: 1
		},
		exit: {
			opacity: 0,
			scale: .95
		},
		className: "absolute inset-0 bg-[#0e0f12] z-50 flex flex-col p-6 text-white overflow-y-auto",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex justify-between items-center mb-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex bg-white/10 p-1 rounded-full mx-auto",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setTab("scan"),
					className: `px-4 py-1.5 rounded-full text-xs font-semibold transition ${tab === "scan" ? "bg-white text-gray-900 shadow-sm" : "text-gray-400 hover:text-white"}`,
					children: "Scan UPI QR"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setTab("myqr"),
					className: `px-4 py-1.5 rounded-full text-xs font-semibold transition ${tab === "myqr" ? "bg-white text-gray-900 shadow-sm" : "text-gray-400 hover:text-white"}`,
					children: "My QR Code"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: onClose,
				className: "absolute right-6 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:text-white",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "w-4 h-4" })
			})]
		}), tab === "scan" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex-1 flex flex-col items-center justify-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative w-64 h-64 border-2 border-dashed border-emerald-400/60 rounded-3xl flex items-center justify-center overflow-hidden bg-black/40 shadow-2xl",
					children: scanning ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-emerald-400 font-semibold text-sm animate-pulse flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-4 h-4 animate-spin" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Decoding UPI Payload..." })]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute inset-0 flex flex-col items-center justify-center p-4 text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Camera, { className: "w-12 h-12 text-emerald-400 mb-2 animate-bounce" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs text-gray-400 mb-2",
							children: "Align NPCI BharatQR / UPI code within frame"
						})]
					})
				}),
				parseError && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 text-red-400 text-xs bg-red-500/10 px-3 py-1 rounded-lg border border-red-500/20",
					children: parseError
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full mt-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs font-semibold text-gray-400 mb-2",
						children: "Quick Simulated QR Scan:"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-3 gap-2",
						children: recipients.slice(0, 3).map((rec) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => simulateScan(rec),
							className: "bg-white/5 hover:bg-white/10 border border-white/10 p-2.5 rounded-2xl flex flex-col items-center gap-1.5 transition active:scale-95",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: rec.avatar,
								alt: rec.name,
								className: "w-10 h-10 rounded-full object-cover"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-medium truncate w-full text-center",
								children: rec.name
							})]
						}, rec.id))
					})]
				})
			]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex-1 flex flex-col items-center justify-center text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "bg-white p-6 rounded-3xl shadow-2xl mb-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-48 h-48 bg-gray-900 rounded-2xl flex items-center justify-center text-white p-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-6 gap-2 w-full h-full",
							children: Array.from({ length: 36 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `rounded-xs ${(i + i % 3) % 2 === 0 ? "bg-white" : "bg-gray-800"}` }, i))
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-lg font-bold",
					children: "PayZen User"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-emerald-400 font-mono mt-1",
					children: "payzen.user@okhdfcbank"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] text-gray-400 mt-2 max-w-xs",
					children: "Scan this NPCI compliant BharatQR to receive instant simulated payments."
				})
			]
		})]
	});
};
function SplashScreen({ onComplete }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "absolute inset-0 z-50 flex flex-col justify-between bg-zinc-950 p-6 text-white",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex justify-end pt-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "rounded-full bg-zinc-900 px-3 py-1 text-xs font-medium text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-3.5" }), " RBI Sandbox Demo"]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "my-auto flex flex-col items-center text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: {
							scale: .8,
							opacity: 0
						},
						animate: {
							scale: 1,
							opacity: 1
						},
						transition: {
							duration: .5,
							type: "spring"
						},
						className: "mb-6 grid size-20 place-content-center rounded-3xl bg-gradient-to-tr from-indigo-600 to-violet-500 shadow-2xl shadow-indigo-500/40",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Landmark, { className: "size-10 text-white" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
						initial: {
							y: 20,
							opacity: 0
						},
						animate: {
							y: 0,
							opacity: 1
						},
						transition: { delay: .2 },
						className: "text-3xl font-extrabold tracking-tight",
						children: ["PayZen ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-indigo-400",
							children: "Bank"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						initial: {
							y: 20,
							opacity: 0
						},
						animate: {
							y: 0,
							opacity: 1
						},
						transition: { delay: .3 },
						className: "mt-2 max-w-[280px] text-sm text-zinc-400",
						children: "India's Next-Gen Secure Digital Banking & Unified Payments Ecosystem"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					y: 20,
					opacity: 0
				},
				animate: {
					y: 0,
					opacity: 1
				},
				transition: { delay: .4 },
				className: "space-y-4 pb-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-center gap-2 text-xs text-zinc-500",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "size-3 text-emerald-400" }), " 256-Bit AES End-to-End Encryption"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Press, {
					onClick: onComplete,
					className: "w-full rounded-2xl bg-indigo-600 py-4 font-semibold text-white shadow-lg shadow-indigo-600/30 hover:bg-indigo-500 active:scale-[0.98] transition-all",
					children: "Get Started"
				})]
			})
		]
	});
}
function AuthScreen({ account, onAuthenticated }) {
	const [authMethod, setAuthMethod] = (0, import_react.useState)("phone");
	const [phoneNumber, setPhoneNumber] = (0, import_react.useState)("");
	const [otpSent, setOtpSent] = (0, import_react.useState)(false);
	const [otpCode, setOtpCode] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(false);
	const handleSendOtp = (e) => {
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
		}, 1e3);
	};
	const handleVerifyOtp = (e) => {
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
		} catch (err) {
			toast.error(err.message || "Google sign-in failed");
		} finally {
			setLoading(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "absolute inset-0 z-50 flex flex-col justify-between bg-zinc-950 p-6 text-white overflow-y-auto",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between pb-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 font-bold text-lg",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-5 text-indigo-400" }), "PayZen Secure ID"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs text-zinc-500",
					children: "Step 1 of 3"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 10
				},
				animate: {
					opacity: 1,
					y: 0
				},
				className: "space-y-2 mb-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl font-bold tracking-tight",
					children: "Sign in or Register"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-zinc-400",
					children: "Link your mobile number linked with your bank accounts for instant UPI verification."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-2 p-1 bg-zinc-900 rounded-2xl mb-6 border border-zinc-800",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setAuthMethod("phone"),
					className: `py-2.5 rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-2 ${authMethod === "phone" ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30" : "text-zinc-400 hover:text-white"}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4" }), " Mobile OTP"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setAuthMethod("google"),
					className: `py-2.5 rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-2 ${authMethod === "google" ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30" : "text-zinc-400 hover:text-white"}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-4" }), " Google Account"]
				})]
			}),
			authMethod === "phone" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: !otpSent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: handleSendOtp,
				className: "space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: "block text-xs font-medium text-zinc-400 mb-1.5",
					children: "Mobile Number (Linked to Bank)"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center rounded-2xl bg-zinc-900 border border-zinc-800 px-4 py-3 focus-within:border-indigo-500 transition-colors",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-zinc-400 font-semibold mr-2",
						children: "+91"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "tel",
						maxLength: 10,
						placeholder: "98765 43210",
						value: phoneNumber,
						onChange: (e) => setPhoneNumber(e.target.value.replace(/\D/g, "")),
						className: "w-full bg-transparent text-white placeholder:text-zinc-600 outline-none text-base"
					})]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Press, {
					disabled: loading,
					className: "w-full rounded-2xl bg-indigo-600 py-4 font-semibold text-white shadow-lg shadow-indigo-600/30 hover:bg-indigo-500 active:scale-[0.98] transition-all flex items-center justify-center gap-2 mt-6",
					children: [
						loading ? "Sending OTP..." : "Get Verification Code",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })
					]
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: handleVerifyOtp,
				className: "space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block text-xs font-medium text-zinc-400 mb-1.5",
						children: ["Enter 4-Digit OTP sent to +91 ", phoneNumber]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center rounded-2xl bg-zinc-900 border border-zinc-800 px-4 py-3 focus-within:border-indigo-500 transition-colors",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "text",
							maxLength: 4,
							placeholder: "4829",
							value: otpCode,
							onChange: (e) => setOtpCode(e.target.value.replace(/\D/g, "")),
							className: "w-full bg-transparent text-center tracking-[1em] text-white placeholder:text-zinc-600 outline-none text-xl font-bold"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-[11px] text-zinc-500 mt-2 text-center",
						children: ["Demo OTP code is ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-indigo-400 font-bold",
							children: "4829"
						})]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Press, {
					disabled: loading,
					className: "w-full rounded-2xl bg-indigo-600 py-4 font-semibold text-white shadow-lg shadow-indigo-600/30 hover:bg-indigo-500 active:scale-[0.98] transition-all flex items-center justify-center gap-2 mt-6",
					children: [
						loading ? "Verifying..." : "Verify & Continue",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-4" })
					]
				})]
			}) }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4 py-6 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-zinc-400 mb-4",
					children: "Sign in securely using your Google account to sync your verified fintech profile across devices."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Press, {
					onClick: handleGoogleLogin,
					disabled: loading,
					className: "w-full rounded-2xl bg-white text-zinc-950 py-4 font-bold shadow-lg hover:bg-zinc-200 active:scale-[0.98] transition-all flex items-center justify-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
						className: "size-5",
						viewBox: "0 0 24 24",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								fill: "#4285F4",
								d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								fill: "#34A853",
								d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								fill: "#FBBC05",
								d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								fill: "#EA4335",
								d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
							})
						]
					}), "Continue with Google"]
				})]
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-center text-[11px] text-zinc-500 pb-2",
			children: "Protected by RBI Regulated Sandbox Guidelines"
		})]
	});
}
function KycWizardScreen({ onCompleted }) {
	const [step, setStep] = (0, import_react.useState)(1);
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [fullName, setFullName] = (0, import_react.useState)("");
	const [panNumber, setPanNumber] = (0, import_react.useState)("");
	const [aadhaarNumber, setAadhaarNumber] = (0, import_react.useState)("");
	const [selectedBank, setSelectedBank] = (0, import_react.useState)("HDFC Bank");
	const [accountType, setAccountType] = (0, import_react.useState)("Savings");
	const [upiPin, setUpiPin] = (0, import_react.useState)("");
	const [confirmPin, setConfirmPin] = (0, import_react.useState)("");
	const handleStep1 = (e) => {
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
	const handleStep2 = (e) => {
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
	const handleStep3 = (e) => {
		e.preventDefault();
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			setStep(4);
			toast.success(`Linked ${selectedBank} ${accountType} Account successfully!`);
		}, 800);
	};
	const handleStep4 = (e) => {
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
		}, 1e3);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "absolute inset-0 z-50 flex flex-col justify-between bg-zinc-950 p-6 text-white overflow-y-auto",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between pb-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 font-bold text-lg",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserCheck, { className: "size-5 text-emerald-400" }), "Bank KYC & Link"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-xs text-zinc-400 font-medium",
					children: [
						"Step ",
						step,
						" of 4"
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-4 gap-1.5 mb-6",
				children: [
					1,
					2,
					3,
					4
				].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `h-1.5 rounded-full transition-all duration-300 ${s <= step ? "bg-emerald-500" : "bg-zinc-800"}` }, s))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AnimatePresence, {
				mode: "wait",
				children: [
					step === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.form, {
						initial: {
							opacity: 0,
							x: 20
						},
						animate: {
							opacity: 1,
							x: 0
						},
						exit: {
							opacity: 0,
							x: -20
						},
						onSubmit: handleStep1,
						className: "space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-xl font-bold mb-1",
								children: "PAN Verification"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-zinc-400 mb-4",
								children: "As per RBI guidelines, please provide your legal name and Permanent Account Number (PAN)."
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block text-xs font-medium text-zinc-400 mb-1.5",
								children: "Full Name (As on PAN Card)"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								placeholder: "Rahul Sharma",
								value: fullName,
								onChange: (e) => setFullName(e.target.value),
								className: "w-full rounded-2xl bg-zinc-900 border border-zinc-800 px-4 py-3 text-white placeholder:text-zinc-600 outline-none focus:border-emerald-500 text-sm"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block text-xs font-medium text-zinc-400 mb-1.5",
								children: "PAN Number"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								maxLength: 10,
								placeholder: "ABCDE1234F",
								value: panNumber,
								onChange: (e) => setPanNumber(e.target.value.toUpperCase()),
								className: "w-full rounded-2xl bg-zinc-900 border border-zinc-800 px-4 py-3 text-white uppercase placeholder:text-zinc-600 outline-none focus:border-emerald-500 text-sm tracking-wider font-mono"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Press, {
								disabled: loading,
								className: "w-full rounded-2xl bg-emerald-600 py-4 font-semibold text-white shadow-lg shadow-emerald-600/30 hover:bg-emerald-500 active:scale-[0.98] transition-all flex items-center justify-center gap-2 mt-8",
								children: [
									loading ? "Verifying PAN..." : "Verify PAN",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })
								]
							})
						]
					}, "step1"),
					step === 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.form, {
						initial: {
							opacity: 0,
							x: 20
						},
						animate: {
							opacity: 1,
							x: 0
						},
						exit: {
							opacity: 0,
							x: -20
						},
						onSubmit: handleStep2,
						className: "space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-xl font-bold mb-1",
								children: "Aadhaar e-KYC"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-zinc-400 mb-4",
								children: "Enter your 12-digit Aadhaar number for instant biometric or OTP authentication."
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block text-xs font-medium text-zinc-400 mb-1.5",
									children: "Aadhaar Number"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "password",
									maxLength: 12,
									placeholder: "•••• •••• 4829",
									value: aadhaarNumber,
									onChange: (e) => setAadhaarNumber(e.target.value.replace(/\D/g, "")),
									className: "w-full rounded-2xl bg-zinc-900 border border-zinc-800 px-4 py-3 text-white placeholder:text-zinc-600 outline-none focus:border-emerald-500 text-sm font-mono tracking-widest"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] text-zinc-500 mt-2",
									children: "Demo Aadhaar accepts any 12 digits (e.g. 987654321098)."
								})
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Press, {
								disabled: loading,
								className: "w-full rounded-2xl bg-emerald-600 py-4 font-semibold text-white shadow-lg shadow-emerald-600/30 hover:bg-emerald-500 active:scale-[0.98] transition-all flex items-center justify-center gap-2 mt-8",
								children: [
									loading ? "Verifying Aadhaar..." : "Verify Aadhaar",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })
								]
							})
						]
					}, "step2"),
					step === 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.form, {
						initial: {
							opacity: 0,
							x: 20
						},
						animate: {
							opacity: 1,
							x: 0
						},
						exit: {
							opacity: 0,
							x: -20
						},
						onSubmit: handleStep3,
						className: "space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-xl font-bold mb-1",
								children: "Select Bank Account"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-zinc-400 mb-4",
								children: "Choose your primary bank account to link with PayZen UPI."
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-2.5 max-h-[220px] overflow-y-auto pr-1",
								children: [
									{
										name: "HDFC Bank",
										logo: "🏛️",
										ifsc: "HDFC0001234"
									},
									{
										name: "State Bank of India",
										logo: "🏦",
										ifsc: "SBIN0005678"
									},
									{
										name: "ICICI Bank",
										logo: "💳",
										ifsc: "ICIC0009876"
									},
									{
										name: "Axis Bank",
										logo: "🪙",
										ifsc: "UTIB0002468"
									},
									{
										name: "Kotak Mahindra Bank",
										logo: "🛡️",
										ifsc: "KKBK0001357"
									}
								].map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									onClick: () => setSelectedBank(b.name),
									className: `flex items-center justify-between p-3.5 rounded-2xl border cursor-pointer transition-all ${selectedBank === b.name ? "bg-emerald-950/40 border-emerald-500 text-white" : "bg-zinc-900 border-zinc-800 text-zinc-300 hover:border-zinc-700"}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-2xl",
											children: b.logo
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-sm font-semibold",
											children: b.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-[11px] text-zinc-500",
											children: ["IFSC: ", b.ifsc]
										})] })]
									}), selectedBank === b.name && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-5 text-emerald-400" })]
								}, b.name))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "pt-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block text-xs font-medium text-zinc-400 mb-1.5",
									children: "Account Type"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-2 gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setAccountType("Savings"),
										className: `py-2.5 rounded-xl text-xs font-semibold border transition-all ${accountType === "Savings" ? "bg-emerald-600 border-emerald-500 text-white" : "bg-zinc-900 border-zinc-800 text-zinc-400"}`,
										children: "Savings Account"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setAccountType("Current"),
										className: `py-2.5 rounded-xl text-xs font-semibold border transition-all ${accountType === "Current" ? "bg-emerald-600 border-emerald-500 text-white" : "bg-zinc-900 border-zinc-800 text-zinc-400"}`,
										children: "Current Account"
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Press, {
								disabled: loading,
								className: "w-full rounded-2xl bg-emerald-600 py-4 font-semibold text-white shadow-lg shadow-emerald-600/30 hover:bg-emerald-500 active:scale-[0.98] transition-all flex items-center justify-center gap-2 mt-4",
								children: [
									loading ? "Linking Bank..." : "Link Bank Account",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })
								]
							})
						]
					}, "step3"),
					step === 4 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.form, {
						initial: {
							opacity: 0,
							x: 20
						},
						animate: {
							opacity: 1,
							x: 0
						},
						exit: {
							opacity: 0,
							x: -20
						},
						onSubmit: handleStep4,
						className: "space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-xl font-bold mb-1",
								children: "Set 4-Digit UPI MPIN"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-zinc-400 mb-4",
								children: "Create a secure 4-digit UPI PIN to authorize all your money transfers and merchant payments."
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block text-xs font-medium text-zinc-400 mb-1.5",
									children: "Enter 4-Digit UPI PIN"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "password",
									maxLength: 4,
									placeholder: "••••",
									value: upiPin,
									onChange: (e) => setUpiPin(e.target.value.replace(/\D/g, "")),
									className: "w-full rounded-2xl bg-zinc-900 border border-zinc-800 px-4 py-3 text-center tracking-[1em] text-white outline-none focus:border-emerald-500 text-lg font-bold"
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block text-xs font-medium text-zinc-400 mb-1.5",
									children: "Confirm 4-Digit UPI PIN"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "password",
									maxLength: 4,
									placeholder: "••••",
									value: confirmPin,
									onChange: (e) => setConfirmPin(e.target.value.replace(/\D/g, "")),
									className: "w-full rounded-2xl bg-zinc-900 border border-zinc-800 px-4 py-3 text-center tracking-[1em] text-white outline-none focus:border-emerald-500 text-lg font-bold"
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl bg-zinc-900 border border-zinc-800 p-3 text-xs text-zinc-400 flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "size-4 text-emerald-400 shrink-0" }), "Never share your UPI PIN with anyone, including bank officials."]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Press, {
								disabled: loading,
								className: "w-full rounded-2xl bg-emerald-600 py-4 font-semibold text-white shadow-lg shadow-emerald-600/30 hover:bg-emerald-500 active:scale-[0.98] transition-all flex items-center justify-center gap-2 mt-4",
								children: [
									loading ? "Securing UPI..." : "Complete Setup & Launch PayZen",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-4" })
								]
							})
						]
					}, "step4")
				]
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-center text-[11px] text-zinc-500 pb-2",
			children: "RBI Regulated Unified Payments Interface (UPI) Sandbox"
		})]
	});
}
var TABS = [
	{
		id: "recipients",
		I: Users,
		label: "Recipients"
	},
	{
		id: "home",
		I: House,
		label: "Home"
	},
	{
		id: "cards",
		I: CreditCard,
		label: "Cards"
	},
	{
		id: "profile",
		I: User,
		label: "Profile"
	}
];
function PayZenApp() {
	const pz = usePayZen();
	const account = useFirebaseAccount();
	const [accountOpen, setAccountOpen] = (0, import_react.useState)(false);
	const lock = useAppLock();
	const [settingsOpen, setSettingsOpen] = (0, import_react.useState)(false);
	const [pinSetup, setPinSetup] = (0, import_react.useState)(false);
	const [pinGate, setPinGate] = (0, import_react.useState)(null);
	const requirePin = (go) => lock.hasPin ? setPinGate(() => go) : go();
	const [walletTools, setWalletTools] = (0, import_react.useState)(null);
	const { state } = pz;
	const [tab, setTab] = (0, import_react.useState)("home");
	const [dir, setDir] = (0, import_react.useState)(1);
	const [flow, setFlow] = (0, import_react.useState)(null);
	const [detail, setDetail] = (0, import_react.useState)(null);
	const [showScan, setShowScan] = (0, import_react.useState)(false);
	const [onboardingStage, setOnboardingStage] = (0, import_react.useState)(() => {
		return localStorage.getItem("payzen_onboarding_stage") || "splash";
	});
	const handleStageComplete = (stage) => {
		setOnboardingStage(stage);
		localStorage.setItem("payzen_onboarding_stage", stage);
	};
	const go = (t) => {
		setDir(TABS.findIndex((x) => x.id === t) > TABS.findIndex((x) => x.id === tab) ? 1 : -1);
		setTab(t);
	};
	const open = (mode, r = state.recipients[0]) => r && setFlow({
		mode,
		r
	});
	const live = detail ? state.txs.find((t) => t.id === detail.id) ?? detail : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MotionConfig, {
		reducedMotion: "user",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
			className: "flex min-h-[100dvh] items-center justify-center bg-background md:py-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative h-[100dvh] w-full overflow-hidden bg-phone text-phone-foreground md:h-[844px] md:w-[390px] md:rounded-[3rem] md:border-[10px] md:border-primary md:shadow-phone",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-center gap-2 pt-3 text-[10px] font-bold uppercase tracking-widest text-phone-muted",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-phone-foreground",
							children: "PayZen"
						}), "· test mode"]
					}),
					onboardingStage === "splash" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplashScreen, { onComplete: () => handleStageComplete("auth") }),
					onboardingStage === "auth" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthScreen, {
						account,
						onAuthenticated: () => handleStageComplete("kyc")
					}),
					onboardingStage === "kyc" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KycWizardScreen, { onCompleted: () => handleStageComplete("dashboard") }),
					onboardingStage === "dashboard" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative h-[calc(100%-1.75rem)]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
								mode: "popLayout",
								custom: dir,
								initial: false,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
									custom: dir,
									variants: {
										enter: (d) => ({
											x: d * 60,
											opacity: 0
										}),
										center: {
											x: 0,
											opacity: 1
										},
										exit: (d) => ({
											x: d * -60,
											opacity: 0
										})
									},
									initial: "enter",
									animate: "center",
									exit: "exit",
									transition: {
										type: "spring",
										stiffness: 300,
										damping: 32
									},
									className: "absolute inset-0",
									children: [
										tab === "home" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Home$1, {
											pz,
											onSend: () => open("send"),
											onRequest: () => open("request"),
											onTx: setDetail,
											onCards: () => go("cards"),
											onProfile: () => go("profile"),
											onInsights: () => setWalletTools("insights"),
											onTopUp: () => setWalletTools("topup"),
											onScan: () => setShowScan(true)
										}),
										tab === "cards" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cards, {}),
										tab === "recipients" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Recipients, {
											pz,
											onPick: (r) => open("send", r)
										}),
										tab === "profile" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Profile, {
											pz,
											onTx: setDetail,
											account,
											onAccount: () => setAccountOpen(true),
											onSettings: () => setSettingsOpen(true)
										})
									]
								}, tab)
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
							className: "absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 gap-1 rounded-full bg-primary p-1.5 shadow-phone",
							"aria-label": "Main",
							children: TABS.map(({ id, I, label }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								"aria-label": label,
								"aria-current": tab === id,
								onClick: () => go(id),
								className: cn("relative grid h-10 w-14 place-items-center rounded-full transition-colors", tab === id ? "text-primary" : "text-phone-muted"),
								children: [tab === id && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
									layoutId: "nav-pill",
									transition: {
										type: "spring",
										stiffness: 400,
										damping: 30
									},
									className: "absolute inset-0 rounded-full bg-phone-foreground"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(I, { className: "relative size-[18px]" })]
							}, id))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: walletTools && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WalletTools, {
							pz,
							mode: walletTools,
							onClose: () => setWalletTools(null)
						}, walletTools) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: accountOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccountPanel, {
							account,
							onClose: () => setAccountOpen(false)
						}, account.user?.uid ?? "signed-out-account") }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: flow && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AmountFlow, {
							pz,
							initialMode: flow.mode,
							initialRecipient: flow.r,
							requirePin,
							onClose: () => {
								setFlow(null);
								setTab("home");
							}
						}, "flow") }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: showScan && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QrScannerModal, {
							recipients: state.recipients,
							onSelectRecipient: (rec) => {
								setShowScan(false);
								open("send", rec);
							},
							onClose: () => setShowScan(false)
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: live && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sheet, {
							onClose: () => setDetail(null),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col items-center gap-2 text-center",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TxIcon, {
											tx: live,
											recipients: state.recipients
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-semibold",
											children: live.name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "tabular text-3xl font-extrabold",
											children: live.kind === "request" ? fmt(live.amount, state.currency) : fmt(live.amount, state.currency, { sign: true })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: cn("rounded-full px-3 py-1 text-[11px] font-bold uppercase", live.status === "pending" ? "bg-pending/15 text-pending" : live.status === "cancelled" ? "bg-secondary text-muted-foreground" : "bg-positive/15 text-positive"),
											children: [live.kind === "request" ? "Request · " : "", live.status]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
									className: "mt-5 space-y-2 rounded-2xl bg-secondary p-4 text-xs",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
												className: "text-muted-foreground",
												children: "Reference"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
												className: "tabular font-semibold",
												children: live.ref
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
												className: "text-muted-foreground",
												children: "Date"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
												className: "font-semibold",
												children: new Date(live.date).toUTCString().slice(5, 22)
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
												className: "text-muted-foreground",
												children: "Type"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
												className: "font-semibold capitalize",
												children: live.kind
											})]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DemoBadge, { className: "mt-4 text-muted-foreground" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Press, {
									onClick: () => downloadReceipt(live, state.currency),
									className: "mt-3 flex w-full items-center justify-center gap-2 rounded-lg bg-secondary py-3 text-sm font-semibold",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-4" }), "Download simulated receipt"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 flex gap-2",
									children: [
										live.status === "pending" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Press, {
											onClick: () => pz.cancel(live.id),
											className: "h-12 flex-1 rounded-full bg-secondary text-sm font-semibold text-destructive",
											children: "Cancel request"
										}),
										live.recipientId && live.kind === "sent" && (() => {
											const r = state.recipients.find((x) => x.id === live.recipientId);
											return r ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Press, {
												onClick: () => {
													setDetail(null);
													open("send", r);
												},
												className: "flex h-12 flex-1 items-center justify-center gap-2 rounded-full bg-secondary text-sm font-semibold",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {
													r,
													size: 22
												}), "Send again"]
											}) : null;
										})(),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Press, {
											onClick: () => setDetail(null),
											className: "h-12 flex-1 rounded-full bg-primary text-sm font-semibold text-primary-foreground",
											children: "Close"
										})
									]
								})
							]
						}, "detail") }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: settingsOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingsPanel, {
							pz,
							lock,
							onClose: () => setSettingsOpen(false),
							onSetPin: () => setPinSetup(true)
						}, "settings") })
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AnimatePresence, { children: [
						pinGate && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PinPad, {
							lock,
							mode: "verify",
							title: "Enter PIN to pay",
							onCancel: () => setPinGate(null),
							onDone: () => {
								const g = pinGate;
								setPinGate(null);
								g();
							}
						}, "gate"),
						pinSetup && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PinPad, {
							lock,
							mode: "setup",
							onCancel: () => setPinSetup(false),
							onDone: () => setPinSetup(false)
						}, "setup"),
						lock.ready && lock.locked && !pinSetup && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PinPad, {
							lock,
							mode: "verify",
							onDone: () => {}
						}, "lock")
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, { position: "top-center" })
				]
			})
		})
	});
}
var SplitComponent = PayZenApp;
//#endregion
export { SplitComponent as component };
