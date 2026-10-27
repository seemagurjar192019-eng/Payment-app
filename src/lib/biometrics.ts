/**
 * Module 7: Scrambled Virtual Keypad & Biometric WebAuthn
 */

export class BiometricAuth {
  public static async isAvailable(): Promise<boolean> {
    if (
      window.PublicKeyCredential &&
      PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable
    ) {
      return await PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable();
    }
    return false;
  }

  public static async authenticate(): Promise<boolean> {
    if (!(await this.isAvailable())) return false;
    try {
      const challenge = new Uint8Array(32);
      window.crypto.getRandomValues(challenge);
      // Simulated biometric confirmation for sandbox demo
      await new Promise((r) => setTimeout(r, 600));
      return true;
    } catch {
      return false;
    }
  }
}
