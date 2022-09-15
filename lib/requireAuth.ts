import { useRouter } from "next/router";
import { useAuth } from "../context/UserContext";

export const useRequireAuth = () => {
  const auth = useAuth();
  const router = useRouter();

  if (auth.firebaseUser === null) {
    router.push("/login");
  }

  return auth;
};
