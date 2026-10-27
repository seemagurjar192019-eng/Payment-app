import { useCallback, useEffect, useRef, useState } from "react";
import {
  DEFAULT_DAILY_LIMIT,
  makeRef,
  sentToday,
  SEED,
  withinDailyLimit,
  type Currency,
  type PayState,
  type Recipient,
  type Tx,
} from "./payzen";
import { applySandboxTopUp } from "./payzen-insights";

const KEY = "payzen-demo-v1";

export function usePayZen() {
  const [state, setState] = useState<PayState>(SEED);
  const [loaded, setLoaded] = useState(false);
  const ref = useRef(state);
  ref.current = state;

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        setState({
          ...SEED,
          ...parsed,
          accounts: parsed.accounts || SEED.accounts,
          primaryAccountId: parsed.primaryAccountId || SEED.primaryAccountId,
        });
      }
    } catch {}
    setLoaded(true);
  }, []);
  useEffect(() => {
    if (loaded) localStorage.setItem(KEY, JSON.stringify(state));
  }, [state, loaded]);

  const setPrimaryAccount = useCallback((accountId: string) => {
    setState((s) => {
      const acc = s.accounts.find((a) => a.id === accountId);
      if (!acc) return s;
      const updatedAccounts = s.accounts.map((a) => ({
        ...a,
        isPrimary: a.id === accountId,
      }));
      return {
        ...s,
        primaryAccountId: accountId,
        balance: acc.balance,
        accounts: updatedAccounts,
      };
    });
  }, []);

  const send = useCallback((r: Recipient, amount: number): Tx | null => {
    if (amount <= 0 || amount > ref.current.balance) return null; // never go negative
    if (
      !withinDailyLimit(
        amount,
        sentToday(ref.current.txs),
        ref.current.dailyLimit ?? DEFAULT_DAILY_LIMIT,
      )
    )
      return null;
    const tx: Tx = {
      id: crypto.randomUUID(),
      ref: makeRef(),
      name: r.name,
      icon: r.id,
      recipientId: r.id,
      amount: -amount,
      kind: "sent",
      status: "completed",
      date: new Date().toISOString(),
    };

    setState((s) => {
      const newBal = Math.round((s.balance - amount) * 100) / 100;
      const updatedAccounts = s.accounts.map((acc) =>
        acc.id === s.primaryAccountId ? { ...acc, balance: newBal } : acc,
      );
      return {
        ...s,
        balance: newBal,
        accounts: updatedAccounts,
        txs: [tx, ...s.txs],
      };
    });
    return tx;
  }, []);

  const request = useCallback((r: Recipient, amount: number): Tx => {
    const tx: Tx = {
      id: crypto.randomUUID(),
      ref: makeRef(),
      name: r.name,
      icon: r.id,
      recipientId: r.id,
      amount,
      kind: "request",
      status: "pending",
      date: new Date().toISOString(),
    };
    setState((s) => ({ ...s, txs: [tx, ...s.txs] }));
    return tx;
  }, []);

  const cancel = useCallback((id: string) => {
    setState((s) => ({
      ...s,
      txs: s.txs.map((t) =>
        t.id === id && t.status === "pending"
          ? { ...t, status: "cancelled" }
          : t,
      ),
    }));
  }, []);

  const addRecipient = useCallback((name: string) => {
    const r: Recipient = {
      id: crypto.randomUUID(),
      name,
      handle: `${name.toLowerCase().replace(/\s+/g, ".")}@payzen`,
      hue: Math.floor(Math.random() * 360),
    };
    setState((s) => ({ ...s, recipients: [r, ...s.recipients] }));
    return r;
  }, []);

  const setCurrency = useCallback(
    (currency: Currency) => setState((s) => ({ ...s, currency })),
    [],
  );
  const setBudget = useCallback((monthlyBudget: number) => {
    if (!Number.isFinite(monthlyBudget) || monthlyBudget < 0) return;
    setState((s) => ({
      ...s,
      monthlyBudget: Math.round(monthlyBudget * 100) / 100,
    }));
  }, []);
  const topUp = useCallback((amount: number): Tx | null => {
    const tx: Tx = {
      id: crypto.randomUUID(),
      ref: makeRef(),
      name: "Sandbox top-up",
      icon: "briefcase",
      amount,
      kind: "received",
      status: "completed",
      date: new Date().toISOString(),
    };
    const next = applySandboxTopUp(ref.current, tx);
    if (!next) return null;

    // Also update primary account balance
    const newBal = next.balance;
    const updatedAccounts = next.accounts.map((acc) =>
      acc.id === next.primaryAccountId ? { ...acc, balance: newBal } : acc,
    );
    const finalState = { ...next, accounts: updatedAccounts };

    ref.current = finalState;
    setState(finalState);
    return tx;
  }, []);

  const setDailyLimit = useCallback(
    (dailyLimit: number) =>
      setState((s) => ({ ...s, dailyLimit: Math.round(dailyLimit) })),
    [],
  );
  const setHideBalance = useCallback(
    (hideBalance: boolean) => setState((s) => ({ ...s, hideBalance })),
    [],
  );
  const reset = useCallback(() => setState(SEED), []);

  return {
    state,
    send,
    request,
    cancel,
    addRecipient,
    setCurrency,
    setBudget,
    topUp,
    setPrimaryAccount,
    setDailyLimit,
    setHideBalance,
    reset,
  };
}
export type PayZen = ReturnType<typeof usePayZen>;
