import { onAuthStateChanged, User as FirebaseUser } from "@firebase/auth";
import { doc, onSnapshot, Unsubscribe } from "@firebase/firestore";
import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { auth, db } from "../firebase/client";
import { User } from "../types/user";

type UserContextData = {
  user?: User | null | undefined;
  firebaseUser: FirebaseUser | null | undefined;
  isLoading: boolean;
};

const UserContext = createContext<UserContextData>({
  isLoading: true,
  firebaseUser: null,
});
export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>();
  const [isloading, setIsLoading] = useState<Boolean>(true);
  const [firebaseUser, setFirebaseUser] =
    useState<FirebaseUser | null | undefined>();

  useEffect(() => {
    let unsubscribeUser: Unsubscribe;
    const unsubscribeAuth = onAuthStateChanged(auth, (fbUser) => {
      unsubscribeUser?.();

      if (fbUser) {
        const userDoc = doc(db, `users/${fbUser.uid}`);
        unsubscribeUser = onSnapshot(userDoc, (snap) => {
          console.log(snap.data());
          setUser((snap.data() as User) || null);
          fbUser?.getIdToken(true);
        });
      } else if (fbUser === null) {
        setUser(null);
      }

      setFirebaseUser(fbUser);
    });

    () => {
      unsubscribeAuth();
      unsubscribeUser?.();
    };
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        firebaseUser,
        isLoading: user === undefined,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useAuth = () => useContext(UserContext);
