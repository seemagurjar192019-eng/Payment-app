import { DigitalCard, Recipient, Transaction, PaymentRequest } from "../types";

export const INITIAL_BALANCE = 7854.43;

export const INITIAL_CARDS: DigitalCard[] = [
  {
    id: "card-1",
    name: "Digital Gold",
    type: "Digital",
    last4: "7642",
    balance: 4520.1,
    color: "yellow",
    isFrozen: false,
    expiry: "08/28",
  },
  {
    id: "card-2",
    name: "Vault Sapphire",
    type: "Virtual",
    last4: "5123",
    balance: 2334.33,
    color: "turquoise",
    isFrozen: false,
    expiry: "12/27",
  },
  {
    id: "card-3",
    name: "Zen Infinite",
    type: "Metal",
    last4: "3413",
    balance: 1000.0,
    color: "blue",
    isFrozen: false,
    expiry: "04/29",
  },
];

export const INITIAL_RECIPIENTS: Recipient[] = [
  {
    id: "rec-1",
    name: "Gigi Hadid",
    handle: "@gigihadid",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    bankInfo: "Chase 2983",
    isFavorite: true,
  },
  {
    id: "rec-2",
    name: "Bella Hadid",
    handle: "@bellahadid",
    avatar:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80",
    bankInfo: "Mastercard 8283",
    isFavorite: true,
  },
  {
    id: "rec-3",
    name: "Imaan Hammam",
    handle: "@imaan",
    avatar:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&auto=format&fit=crop&q=80",
    bankInfo: "HSBC 4567",
    isFavorite: true,
  },
  {
    id: "rec-4",
    name: "Sarah",
    handle: "@sarahdesi",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
    bankInfo: "HDFC 9123",
    isFavorite: false,
  },
  {
    id: "rec-5",
    name: "Pavlo",
    handle: "@designwithpavlo",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    bankInfo: "PayZen Vault 7642",
    isFavorite: true,
  },
  {
    id: "rec-6",
    name: "Jordan",
    handle: "@jordan.creator",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    bankInfo: "ICICI 3810",
    isFavorite: false,
  },
  {
    id: "rec-7",
    name: "Chris",
    handle: "@chrisgraph...",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80",
    bankInfo: "Axis 5541",
    isFavorite: false,
  },
  {
    id: "rec-8",
    name: "Emily",
    handle: "@emilyartis...",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&auto=format&fit=crop&q=80",
    bankInfo: "SBI 9920",
    isFavorite: false,
  },
  {
    id: "rec-9",
    name: "Taylor",
    handle: "@taylorcreator",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
    bankInfo: "Kotak 1109",
    isFavorite: false,
  },
];

export const INITIAL_TRANSACTIONS: Transaction[] = [
  {
    id: "txn-1",
    merchant: "Apple",
    category: "Technology",
    amount: -60.0,
    date: "Today, 2:45 PM",
    type: "send",
    reference: "REF-8291043",
  },
  {
    id: "txn-2",
    merchant: "Threads",
    category: "Social Media",
    amount: -300.0,
    date: "Yesterday, 11:20 AM",
    type: "send",
    reference: "REF-3910244",
  },
  {
    id: "txn-3",
    merchant: "Apple",
    category: "Refund / Credit",
    amount: 2000.0,
    date: "Oct 22, 4:15 PM",
    type: "receive",
    reference: "REF-1192834",
  },
  {
    id: "txn-4",
    merchant: "Exoplanet",
    category: "Subscription",
    amount: -20.0,
    date: "Oct 20, 9:00 AM",
    type: "send",
    reference: "REF-5591023",
  },
  {
    id: "txn-5",
    merchant: "Spotify",
    category: "Entertainment",
    amount: -140.5,
    date: "Oct 18, 1:10 PM",
    type: "send",
    reference: "REF-7728391",
  },
];

export const INITIAL_REQUESTS: PaymentRequest[] = [
  {
    id: "req-1",
    recipientId: "rec-4",
    recipientName: "Sarah",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
    amount: 450.0,
    date: "Yesterday",
    status: "pending",
  },
  {
    id: "req-2",
    recipientId: "rec-6",
    recipientName: "Jordan",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    amount: 1200.0,
    date: "3 days ago",
    status: "pending",
  },
];
