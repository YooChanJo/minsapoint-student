/* Vendors */
import { createContext, useContext, useState, ReactNode } from "react";
import { FirebaseAuthTypes, onAuthStateChanged } from "@react-native-firebase/auth";

import NavigationAPI from "../../api/navigation";
import { firebaseAuth } from "../../config/firebase";

export interface AuthContextType {
  currentUser: FirebaseAuthTypes.User | null;
  userLoggedIn: boolean;
  accessToken: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [currentUser, setCurrentUser] = useState<FirebaseAuthTypes.User | null>(null);
  const [userLoggedIn, setUserLoggedIn] = useState<boolean>(false);
  const [accessToken, setAccessToken] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  async function initializeUser(user: FirebaseAuthTypes.User | null) {
    if (user) {
      const token = await user.getIdToken();
      setAccessToken(token);
      setCurrentUser(user);
      setUserLoggedIn(true);
    } else {
      setAccessToken("");
      setCurrentUser(null);
      setUserLoggedIn(false);
    }
    setLoading(false);
  }

  NavigationAPI.useCompatibleEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, initializeUser);
    return unsubscribe;
  }, []);

  const authValue: AuthContextType = {
    currentUser,
    userLoggedIn,
    accessToken,
  };

  /* TODO: Handling of case when loading persists is needed, z.B. when no wifi error happens */
  return <AuthContext.Provider value={authValue}>{!loading && children}</AuthContext.Provider>;
}
