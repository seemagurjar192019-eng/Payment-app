/**
 * Module 10: In-App Notification & Audit Event Bus
 */

export type PayZenEventType =
  | "TRANSACTION_SUCCESS"
  | "TRANSACTION_FAILED"
  | "LIMIT_WARNING"
  | "SECURITY_PIN_LOCKED";

export interface PayZenNotification {
  id: string;
  type: PayZenEventType;
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
  metadata?: Record<string, unknown>;
}

export class NotificationBus {
  private static instance: NotificationBus;
  private listeners: ((notification: PayZenNotification) => void)[] = [];
  private history: PayZenNotification[] = [];

  private constructor() {}

  public static getInstance(): NotificationBus {
    if (!this.instance) this.instance = new NotificationBus();
    return this.instance;
  }

  public subscribe(
    callback: (notification: PayZenNotification) => void,
  ): () => void {
    this.listeners.push(callback);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== callback);
    };
  }

  public publish(
    type: PayZenEventType,
    title: string,
    message: string,
    metadata?: Record<string, unknown>,
  ): void {
    const notification: PayZenNotification = {
      id: `NOTIF_${Date.now()}`,
      type,
      title,
      message,
      timestamp: new Date().toISOString(),
      read: false,
      ...(metadata ? { metadata } : {}),
    };

    this.history.unshift(notification);
    this.listeners.forEach((fn) => fn(notification));
  }

  public getHistory(): PayZenNotification[] {
    return [...this.history];
  }
}
