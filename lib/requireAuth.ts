import { GoogleAuthProvider, signInWithPopup, TwitterAuthProvider } from "firebase/auth";
import { useRouter } from "next/router";
import { useAuth } from "../context/UserContext";
import { auth } from "../firebase/client";

export const useRequireAuth = () => {
  const auth = useAuth();
  const router = useRouter();

  if (auth.firebaseUser === null) {
    router.push("/");
  }

  return auth;
};

export const loginWithProvider = (providerName: "google" | "twitter") => {
  const {firebaseUser, user } = useAuth();
  const router = useRouter()
  const provider = {
    google: new GoogleAuthProvider(),
    twitter: new TwitterAuthProvider(),
  };
  
  return signInWithPopup(auth, provider[providerName])
    .then(() => {
      if (firebaseUser && user) {
        router.push("timeline");
      }
    })
    .catch((e) => {
      console.log(e);
    });
};

export const loginWithGoogle = () => {
  const provider =  new GoogleAuthProvider()     
  return signInWithPopup(auth, provider) .catch((e) => {
    console.log(e);
  });;

}