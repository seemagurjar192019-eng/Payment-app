# Implementation Plan - PayZen Realistic Banking Onboarding & Auth Flow

## User Review Required

> [!IMPORTANT]
> This plan implements a rigorous, realistic Indian banking and fintech onboarding workflow (inspired by top UPI apps like GPay/PhonePe and HDFC/SBI NetBanking), ensuring users go through Splash -> Phone/Google Auth -> KYC Verification -> Bank Account Linking -> 4-Digit UPI PIN setup before accessing the dashboard.

- **Onboarding Flow**: Splash screen -> Phone (+91) OTP authentication or Google Sign-In -> KYC Verification (PAN & Aadhaar simulation) -> Bank selection (SBI, HDFC, ICICI, Axis, Kotak) -> UPI PIN setup.
- **Persistence**: Auth state and KYC onboarding completion status are persisted in localStorage and Firebase Auth / Firestore.

---

## Proposed Changes

### 1. New Onboarding & Authentication Components (`src/components/payzen/onboarding/`)

- **`SplashScreen.tsx`**: Initial secure connection and animated brand loading screen with RBI sandbox badges.
- **`AuthScreen.tsx`**: Phone number (+91) input with 6-digit OTP verification + Google Sign-In option.
- **`KycWizardScreen.tsx`**: Multi-step KYC verification:
  - Step 1: Full legal name & PAN card input with verification badge.
  - Step 2: Aadhaar number linking with OTP simulation.
  - Step 3: Bank account linking (Choose bank: SBI, HDFC, ICICI, Axis, Kotak; Account Type: Savings / Current).
  - Step 4: Set 4-Digit UPI MPIN with secure virtual keypad confirmation.

### 2. State Management & Flow Control (`src/components/payzen/PayZenApp.tsx` & `src/lib/use-payzen.ts`)

- Track onboarding status (`splash` -> `auth` -> `kyc` -> `bank_setup` -> `pin_setup` -> `dashboard`).
- Guard the main dashboard so it is never accessed directly without completing authentication and KYC setup.

---

## Verification Plan

### Automated Tests

- Run `compile_applet` to verify zero TypeScript errors and clean build.

### Manual Verification

- Open the app in browser/preview.
- Verify that the app starts at the Splash screen, transitions to Auth (Phone OTP / Google Sign-In), completes KYC (PAN, Aadhaar, Bank Selection), sets up UPI MPIN, and finally lands on the main dashboard.
