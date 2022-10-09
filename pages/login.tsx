import AuthLine from "../components/LineLoginButton";
import {
  GoogleAuthProvider,
  TwitterAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase/client";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import { useAuth } from "../context/UserContext";
import { NextPageWithLayout } from "./_app";
import { ReactElement } from "react";

const login: NextPageWithLayout = () => {
  const router = useRouter();
  const { user, firebaseUser } = useAuth();
  const loginWithProvider = (providerName: "google" | "twitter") => {
    const provider = {
      google: new GoogleAuthProvider(),
      twitter: new TwitterAuthProvider(),
    };
    return signInWithPopup(auth, provider[providerName])
      .then(() => {
        if (user && firebaseUser) {
          router.push("timeline");
        } else {
          router.push("signup");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="mt-16 bg-[url('/signup.jpg')] bg-cover object-fill py-32">
      <div className="mx-auto">
        <div className=" py-10 flex flex-col justify-center bg-white md:w-3/5 mx-auto md:rounded-full">
          <img src="/logo.svg" alt="" className="mx-auto md:w-1/3" />
          <div className="mt-5 flex flex-col justify-center">
            <div className="flex justify-center">
              <button
                className="border-2 h-12 rounded-full w-full md:w-3/5 bg-white border-black border-solid hover:bg-gray-100"
                onClick={() => loginWithProvider("google")}
              >
                Googleアカウントでログイン
              </button>
            </div>
            <div className="flex justify-center">
              <button
                className="border-2 h-12 mt-5 rounded-full w-full md:w-3/5 mx-auto bg-white border-black border-solid hover:bg-[#1DA1F2]"
                onClick={() => loginWithProvider("twitter")}
              >
                Twitterアカウントでログイン
              </button>
            </div>
            <AuthLine />
          </div>
        </div>
      </div>
    </div>
  );
};
login.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
export default login;
