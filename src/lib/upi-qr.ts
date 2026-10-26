/**
 * Module 2: NPCI UPI Spec & QR Parser Engine
 */

export interface ParsedUPI {
  pa: string;        // Payee VPA
  pn: string;        // Payee Legal Name
  am?: number;       // Fixed Amount
  cu: 'INR';         // Currency
  mc?: string;       // Merchant Category Code
  tr?: string;       // Transaction Reference ID
  tn?: string;       // Transaction Note
  mid?: string;      // Merchant ID
  sign?: string;     // Digital signature
}

export class UpiParser {
  public static isValidVpa(vpa: string): boolean {
    const vpaRegex = /^[a-zA-Z0-9.-]{2,256}@[a-zA-Z][a-zA-Z0-9]{1,64}$/;
    return vpaRegex.test(vpa);
  }

  public static parse(qrString: string): ParsedUPI {
    if (!qrString.startsWith("upi://pay")) {
      throw new Error("INVALID_QR: Not a valid UPI QR payload");
    }

    const url = new URL(qrString);
    const params = url.searchParams;

    const pa = params.get("pa");
    const pn = params.get("pn");

    if (!pa) throw new Error("MALFORMED_UPI: Missing payee address (pa)");
    if (!pn) throw new Error("MALFORMED_UPI: Missing payee name (pn)");
    if (!this.isValidVpa(pa)) throw new Error("INVALID_VPA: Malformed UPI ID syntax");

    const rawAmount = params.get("am");
    const parsedAmount = rawAmount ? parseFloat(rawAmount) : undefined;

    return {
      pa: decodeURIComponent(pa),
      pn: decodeURIComponent(pn),
      am: parsedAmount && !isNaN(parsedAmount) && parsedAmount > 0 ? parsedAmount : undefined,
      cu: 'INR',
      mc: params.get("mc") || undefined,
      tr: params.get("tr") || undefined,
      tn: params.get("tn") ? decodeURIComponent(params.get("tn")!) : undefined,
      mid: params.get("mid") || undefined,
      sign: params.get("sign") || undefined
    };
  }

  public static generatePayload(data: ParsedUPI): string {
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
}
