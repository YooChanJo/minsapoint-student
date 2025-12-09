/* Vendors */
import { createContext, useContext, useState, ReactNode } from "react";
import { FirebaseAuthTypes, onAuthStateChanged } from "@react-native-firebase/auth";

import NavigationAPI from "../../api/navigation";
import { firebaseAuth } from "../../config/firebase";
import { CommonActions } from "@react-navigation/native";

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

  const navigation = NavigationAPI.useNavigationWithTS();

  async function initializeUser(user: FirebaseAuthTypes.User | null) {
    if (user) {
      setCurrentUser(user);
      setUserLoggedIn(true);
      const token = await user.getIdToken();
      setAccessToken(token);
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: "Home" }],
        })
      );
    } else {
      setAccessToken("");
      setCurrentUser(null);
      setUserLoggedIn(false);
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: "Login" }],
        })
      );
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
