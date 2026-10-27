import React, { useState, useEffect } from "react";
import {
  ScreenType,
  DigitalCard,
  Recipient,
  Transaction,
  PaymentRequest,
} from "./types";
import {
  INITIAL_BALANCE,
  INITIAL_CARDS,
  INITIAL_RECIPIENTS,
  INITIAL_TRANSACTIONS,
  INITIAL_REQUESTS,
} from "./data/initialData";
import { PayZenSettings, DEFAULT_SETTINGS, generateRef } from "./lib/payzen";
import { PhoneFrame } from "./components/PhoneFrame";
import { SimulationBanner } from "./components/SimulationBanner";
import { Navbar } from "./components/Navbar";
import { Dashboard } from "./components/Dashboard";
import { CardsScreen } from "./components/CardsScreen";
import { RecipientsScreen } from "./components/RecipientsScreen";
import { ProfileScreen } from "./components/ProfileScreen";
import { SendMoneyModal } from "./components/SendMoneyModal";
import { SuccessScreen } from "./components/SuccessScreen";

import { OnboardingModal } from "./components/payzen/OnboardingModal";
import { PinSetupModal } from "./components/payzen/PinSetupModal";
import { NotificationsInbox } from "./components/payzen/NotificationsInbox";
import { QrScannerModal } from "./components/payzen/QrScannerModal";
import { BillsScreen } from "./components/payzen/BillsScreen";
import { SplitBillModal } from "./components/payzen/SplitBillModal";
import { SettingsScreen } from "./components/payzen/SettingsScreen";

import { AnimatePresence } from "motion/react";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>("home");
  const [balance, setBalance] = useState<number>(() => {
    const saved = localStorage.getItem("payzen_balance");
    return saved !== null ? parseFloat(saved) : INITIAL_BALANCE;
  });

  const [settings, setSettings] = useState<PayZenSettings>(() => {
    const saved = localStorage.getItem("payzen_settings");
    return saved ? JSON.parse(saved) : DEFAULT_SETTINGS;
  });

  const [cards, setCards] = useState<DigitalCard[]>(() => {
    const saved = localStorage.getItem("payzen_cards");
    return saved ? JSON.parse(saved) : INITIAL_CARDS;
  });
  const [recipients, setRecipients] = useState<Recipient[]>(() => {
    const saved = localStorage.getItem("payzen_recipients");
    return saved ? JSON.parse(saved) : INITIAL_RECIPIENTS;
  });
  const [transactions, setTransactions] = useState<Transaction[]>(() => {
    const saved = localStorage.getItem("payzen_transactions");
    return saved ? JSON.parse(saved) : INITIAL_TRANSACTIONS;
  });
  const [requests, setRequests] = useState<PaymentRequest[]>(() => {
    const saved = localStorage.getItem("payzen_requests");
    return saved ? JSON.parse(saved) : INITIAL_REQUESTS;
  });

  // Modal states
  const [showOnboarding, setShowOnboarding] = useState<boolean>(() => {
    return !localStorage.getItem("payzen_onboarded");
  });
  const [showPinSetup, setShowPinSetup] = useState<boolean>(() => {
    return !settings.pinHash;
  });
  const [showAppLock, setShowAppLock] = useState<boolean>(false);
  const [isSendModalOpen, setIsSendModalOpen] = useState(false);
  const [sendModalMode, setSendModalMode] = useState<"send" | "request">(
    "send",
  );
  const [selectedRecipientForSend, setSelectedRecipientForSend] = useState<
    Recipient | undefined
  >(undefined);

  const [showInbox, setShowInbox] = useState(false);
  const [showScan, setShowScan] = useState(false);
  const [showBills, setShowBills] = useState(false);
  const [showSplit, setShowSplit] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [changingPin, setChangingPin] = useState(false);

  const [successPayload, setSuccessPayload] = useState<{
    recipient: Recipient;
    amount: number;
    mode: "send" | "request";
    reference: string;
  } | null>(null);

  // Sync to localStorage
  useEffect(() => {
    localStorage.setItem("payzen_balance", balance.toString());
  }, [balance]);

  useEffect(() => {
    localStorage.setItem("payzen_settings", JSON.stringify(settings));
  }, [settings]);

  useEffect(() => {
    localStorage.setItem("payzen_cards", JSON.stringify(cards));
  }, [cards]);

  useEffect(() => {
    localStorage.setItem("payzen_recipients", JSON.stringify(recipients));
  }, [recipients]);

  useEffect(() => {
    localStorage.setItem("payzen_transactions", JSON.stringify(transactions));
  }, [transactions]);

  useEffect(() => {
    localStorage.setItem("payzen_requests", JSON.stringify(requests));
  }, [requests]);

  const handleUpdateCard = (updated: DigitalCard) => {
    setCards((prev) => prev.map((c) => (c.id === updated.id ? updated : c)));
  };

  const handleAddCard = () => {
    const newCard: DigitalCard = {
      id: `card-${Date.now()}`,
      name: `Vault ${cards.length + 1}`,
      type: "Virtual",
      last4: Math.floor(1000 + Math.random() * 9000).toString(),
      balance: 500.0,
      color: ["yellow", "turquoise", "blue", "purple"][cards.length % 4] as
        "yellow" | "turquoise" | "blue" | "purple",
      isFrozen: false,
      expiry: "10/30",
    };
    setCards([...cards, newCard]);
  };

  const handleAddRecipient = (newRec: Recipient) => {
    setRecipients([newRec, ...recipients]);
  };

  const handleOpenSend = (
    recipient?: Recipient,
    mode: "send" | "request" = "send",
  ) => {
    setSelectedRecipientForSend(recipient);
    setSendModalMode(mode);
    setIsSendModalOpen(true);
  };

  const handleExecutePayment = (
    recipient: Recipient,
    amount: number,
    mode: "send" | "request",
  ) => {
    if (mode === "send" && amount > settings.dailyLimit) {
      alert(
        `Daily limit exceeded! Max allowed is ₹${settings.dailyLimit.toLocaleString()}`,
      );
      return;
    }

    const refNumber = generateRef();

    if (mode === "send") {
      setBalance((prev) => prev - amount);
      const newTxn: Transaction = {
        id: `txn-${Date.now()}`,
        merchant: recipient.name,
        category: "Transfer",
        amount: -amount,
        date: "Just now",
        type: "send",
        reference: refNumber,
      };
      setTransactions([newTxn, ...transactions]);
    } else {
      const newReq: PaymentRequest = {
        id: `req-${Date.now()}`,
        recipientId: recipient.id,
        recipientName: recipient.name,
        avatar: recipient.avatar,
        amount,
        date: "Just now",
        status: "pending",
      };
      setRequests([newReq, ...requests]);
    }

    setIsSendModalOpen(false);
    setSuccessPayload({
      recipient,
      amount,
      mode,
      reference: refNumber,
    });
  };

  const handleUtilityPayment = (title: string, amount: number) => {
    setBalance((prev) => prev - amount);
    const newTxn: Transaction = {
      id: `txn-${Date.now()}`,
      merchant: title,
      category: "Utilities",
      amount: -amount,
      date: "Just now",
      type: "send",
      reference: generateRef(),
    };
    setTransactions([newTxn, ...transactions]);
  };

  const handleSplitSubmit = (
    title: string,
    amountPerPerson: number,
    selectedRecs: Recipient[],
  ) => {
    const newReqs: PaymentRequest[] = selectedRecs.map((rec, i) => ({
      id: `req-${Date.now()}-${i}`,
      recipientId: rec.id,
      recipientName: rec.name,
      avatar: rec.avatar,
      amount: amountPerPerson,
      date: "Just now",
      status: "pending",
    }));
    setRequests([...newReqs, ...requests]);
    setShowSplit(false);
    alert(`Split bill "${title}" sent to ${selectedRecs.length} friends!`);
  };

  const handleResetData = () => {
    setBalance(INITIAL_BALANCE);
    setSettings(DEFAULT_SETTINGS);
    setCards(INITIAL_CARDS);
    setRecipients(INITIAL_RECIPIENTS);
    setTransactions(INITIAL_TRANSACTIONS);
    setRequests(INITIAL_REQUESTS);
    localStorage.clear();
    setShowPinSetup(true);
    alert("Demo data restored to initial state.");
  };

  return (
    <div className="min-h-screen bg-[#0b0c10] flex flex-col">
      <SimulationBanner />

      <PhoneFrame>
        {/* Screen Content */}
        {currentScreen === "home" && (
          <Dashboard
            balance={balance}
            currencySymbol={settings.currency}
            cards={cards}
            transactions={transactions}
            requests={requests}
            settings={settings}
            onUpdateSettings={(s) => setSettings(s)}
            onOpenSend={() => handleOpenSend(undefined, "send")}
            onOpenRequest={() => handleOpenSend(undefined, "request")}
            onOpenScan={() => setShowScan(true)}
            onOpenBills={() => setShowBills(true)}
            onOpenSplit={() => setShowSplit(true)}
            onOpenInbox={() => setShowInbox(true)}
            onNavigateToCards={() => setCurrentScreen("cards")}
            onNavigateToRecipients={() => setCurrentScreen("recipients")}
          />
        )}

        {currentScreen === "cards" && (
          <CardsScreen
            cards={cards}
            currencySymbol={settings.currency}
            onUpdateCard={handleUpdateCard}
            onAddCard={handleAddCard}
          />
        )}

        {currentScreen === "recipients" && (
          <RecipientsScreen
            recipients={recipients}
            onSelectRecipient={(rec) => handleOpenSend(rec, "send")}
            onAddRecipient={handleAddRecipient}
          />
        )}

        {currentScreen === "profile" && (
          <ProfileScreen
            currencySymbol={settings.currency}
            onToggleCurrency={(sym) =>
              setSettings({ ...settings, currency: sym })
            }
            onResetData={handleResetData}
          />
        )}

        {/* Floating Bottom Navigation Bar */}
        <Navbar
          currentScreen={currentScreen}
          onNavigate={(screen) => setCurrentScreen(screen)}
          onOpenSendMoney={() => handleOpenSend(undefined, "send")}
        />

        {/* Modals & Overlays */}
        <AnimatePresence>
          {showOnboarding && (
            <OnboardingModal
              onComplete={() => {
                localStorage.setItem("payzen_onboarded", "true");
                setShowOnboarding(false);
              }}
            />
          )}

          {showPinSetup && !showOnboarding && (
            <PinSetupModal
              isSetup={!settings.pinHash || changingPin}
              correctHash={settings.pinHash}
              onPinConfigured={(hash) => {
                setSettings({ ...settings, pinHash: hash });
                setChangingPin(false);
              }}
              onSuccess={() => {
                setShowPinSetup(false);
                setShowAppLock(false);
              }}
            />
          )}

          {showAppLock && (
            <PinSetupModal
              isSetup={false}
              correctHash={settings.pinHash}
              onPinConfigured={() => {}}
              onSuccess={() => setShowAppLock(false)}
            />
          )}

          {isSendModalOpen && (
            <SendMoneyModal
              recipients={recipients}
              initialRecipient={selectedRecipientForSend}
              balance={balance}
              currencySymbol={settings.currency}
              initialMode={sendModalMode}
              onClose={() => setIsSendModalOpen(false)}
              onExecutePayment={handleExecutePayment}
            />
          )}

          {showInbox && (
            <NotificationsInbox
              requests={requests}
              currencySymbol={settings.currency}
              onClose={() => setShowInbox(false)}
              onPayRequest={(req) => {
                const rec =
                  recipients.find((r) => r.id === req.recipientId) ||
                  recipients[0];
                setShowInbox(false);
                handleOpenSend(rec, "send");
              }}
            />
          )}

          {showScan && (
            <QrScannerModal
              recipients={recipients}
              onSelectRecipient={(rec) => {
                setShowScan(false);
                handleOpenSend(rec, "send");
              }}
              onClose={() => setShowScan(false)}
            />
          )}

          {showBills && (
            <BillsScreen
              currencySymbol={settings.currency}
              balance={balance}
              onPayBill={handleUtilityPayment}
              onClose={() => setShowBills(false)}
            />
          )}

          {showSplit && (
            <SplitBillModal
              recipients={recipients}
              currencySymbol={settings.currency}
              onSplit={handleSplitSubmit}
              onClose={() => setShowSplit(false)}
            />
          )}

          {showSettings && (
            <SettingsScreen
              settings={settings}
              onUpdateSettings={(s) => setSettings(s)}
              onResetData={handleResetData}
              onChangePin={() => {
                setShowSettings(false);
                setChangingPin(true);
                setShowPinSetup(true);
              }}
              onClose={() => setShowSettings(false)}
            />
          )}

          {successPayload && (
            <SuccessScreen
              recipient={successPayload.recipient}
              amount={successPayload.amount}
              currencySymbol={settings.currency}
              mode={successPayload.mode}
              reference={successPayload.reference}
              onClose={() => setSuccessPayload(null)}
            />
          )}
        </AnimatePresence>
      </PhoneFrame>
    </div>
  );
}
