export type ScreenType = "home" | "cards" | "recipients" | "profile";

export interface Transaction {
  id: string;
  merchant: string;
  category: string;
  amount: number; // positive for receive/request, negative for send/purchase
  date: string;
  avatar?: string;
  iconBg?: string;
  reference?: string;
  status?: "completed" | "pending" | "cancelled";
  type: "send" | "receive" | "request";
  recipientName?: string;
}

export interface DigitalCard {
  id: string;
  name: string;
  type: "Digital" | "Virtual" | "Metal";
  last4: string;
  balance: number;
  color: "yellow" | "turquoise" | "blue" | "purple";
  isFrozen: boolean;
  expiry: string;
}

export interface Recipient {
  id: string;
  name: string;
  handle: string;
  avatar: string;
  bankInfo: string;
  isFavorite?: boolean;
}

export interface PaymentRequest {
  id: string;
  recipientId: string;
  recipientName: string;
  avatar: string;
  amount: number;
  date: string;
  status: "pending" | "completed" | "cancelled";
}
