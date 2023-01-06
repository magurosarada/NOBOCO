import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
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
import { FaGoogle, FaTwitter } from "react-icons/fa";
import { ReactElement } from "react";
import Button from "../components/Button";

const LoginModal = ({
  Isopen,
  onClose,
}: {
  Isopen: boolean;
  onClose: VoidFunction;
}) => {
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
          router.push("/");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <>
      <Transition appear show={Isopen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={onClose}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-semibold text-center  leading-6 text-gray-900"
                  >
                    NOBOCOをはじめる
                  </Dialog.Title>
                  <div className="mt-5 flex flex-col justify-center">
                    <div className="flex justify-center">
                      <Button
                        Icon={FaGoogle}
                        className="h-12 rounded-full w-4/6 mx-auto text-white hover:text-white hover:border hover:border-black  px-1 py-1 flex items-center  bg-[#dc4e40] "
                        onClick={() => loginWithProvider("google")}
                      >
                        Googleアカウントでログイン
                      </Button>
                    </div>
                    <div className="flex justify-center">
                      <Button
                        Icon={FaTwitter}
                        className="h-12 mt-5 rounded-full w-4/6 mx-auto px-1 py-1 flex hover:border hover:border-black text-white  bg-[#1DA1F2] hover:text-white"
                        onClick={() => loginWithProvider("twitter")}
                      >
                        Twitterアカウントでログイン
                      </Button>
                    </div>
                    <AuthLine />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default LoginModal;
