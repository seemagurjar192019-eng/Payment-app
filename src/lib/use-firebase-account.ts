import { useEffect, useState } from "react";
import type { User } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db, loginWithGoogle, logoutUser } from "./firebase";
import {
  doc,
  getDoc,
  setDoc,
  serverTimestamp,
  onSnapshot,
} from "firebase/firestore";

export type BankAccountDetails = {
  bankName: string;
  accountHolder: string;
  accountNumber: string;
  ifsc: string;
  branch: string;
  upiId: string;
  accountType: string;
};

export type AccountProfile = {
  displayName: string;
  email: string;
  bankAccount: BankAccountDetails;
};

export function useFirebaseAccount() {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<AccountProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const defaultBank: BankAccountDetails = {
    bankName: "State Bank of India",
    accountHolder: "Naitik Gurjar",
    accountNumber: "3948 2910 482",
    ifsc: "SBIN0004521",
    branch: "Connaught Place, New Delhi",
    upiId: "naitik.gurjar@oksbi",
    accountType: "Savings Account",
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      if (currentUser) {
        try {
          const userDocRef = doc(db, "users", currentUser.uid);
          const userSnap = await getDoc(userDocRef);
          if (userSnap.exists()) {
            const data = userSnap.data();
            setProfile({
              displayName:
                data.displayName || currentUser.displayName || "Naitik Gurjar",
              email: data.email || currentUser.email || "",
              bankAccount: data.bankAccount || defaultBank,
            });
          } else {
            const initialProfile: AccountProfile = {
              displayName: currentUser.displayName || "Naitik Gurjar",
              email: currentUser.email || "",
              bankAccount: defaultBank,
            };
            await setDoc(userDocRef, {
              uid: currentUser.uid,
              ...initialProfile,
              createdAt: serverTimestamp(),
            });
            setProfile(initialProfile);
          }
        } catch (e) {
          console.error("Error loading user profile from Firestore:", e);
          setError("Failed to sync profile with Firestore");
        }
      } else {
        setProfile(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const signIn = async () => {
    setLoading(true);
    try {
      const u = await loginWithGoogle();
      setUser(u);
    } catch (e: any) {
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
    } catch (e: any) {
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
    defaultBank,
  };
}

export type FirebaseAccount = ReturnType<typeof useFirebaseAccount>;
