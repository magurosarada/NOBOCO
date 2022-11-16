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
import { FaGoogle, FaTwitter } from "react-icons/fa";
import { ReactElement } from "react";
import Button from "../components/Button";

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
        <div className=" py-10 flex flex-col justify-center  md:w-3/5 mx-auto md:rounded-full">
          <img src="/logo.svg" alt="" className="mx-auto md:w-1/3" />
          <div className="mt-5 flex flex-col justify-center">
            <Button
              Icon={FaGoogle}
              className="h-12 rounded-full w-4/6 mx-auto text-white px-11 py-1 flex border-none items-center  bg-[#dc4e40] "
              onClick={() => loginWithProvider("google")}
            >
              Googleアカウントでログイン
            </Button>
            <Button
              Icon={FaTwitter}
              className=" h-12 mt-5 rounded-full   w-4/6 mx-auto px-11 py-1 flex text-white border-none  bg-[#1DA1F2]"
              onClick={() => loginWithProvider("twitter")}
            >
              Twitterアカウントでログイン
            </Button>
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
