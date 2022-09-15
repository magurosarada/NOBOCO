import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect } from "react";
import {
  getAuth,
  deleteUser,
  reauthenticateWithCredential,
  GoogleAuthProvider,
  TwitterAuthProvider,
  reauthenticateWithPopup,
  signInWithCustomToken,
  AuthErrorCodes,
} from "firebase/auth";
import useLineAuth, {
  openLineLoginPage,
  signinWithLine,
} from "../lib/lineAuth";
import { useRouter } from "next/router";
import { auth } from "../firebase/client";

const LeaveModal = ({
  isLeaveOpen,
  onClose,
}: {
  isLeaveOpen: boolean;
  onClose: VoidFunction;
}) => {
  const router = useRouter();

  useEffect(() => {
    const code = router.query.code;
    const state = router.query.state;

    if (!code || !state) {
      return;
    }

    signinWithLine({
      code: router.query.code as string,
      state: router.query.state as string,
    }).then(() => {
      const user = auth.currentUser;
      if (!user) {
        return null;
      }
      deleteUser(user)
        .then(() => {
          // User deleted.
          alert("delete action!");
        })
        .catch((error) => {
          // An error ocurred
          // ...
        });
    });
  }, [router.query]);

  const userDelete = () => {
    const auth = getAuth();
    const user = auth.currentUser;
    if (!user) {
      return null;
    }
    let provider;

    if (user.providerId.match(/google|twitter/)) {
      const provider = {
        google: new GoogleAuthProvider(),
        twitter: new TwitterAuthProvider(),
      };

      reauthenticateWithPopup(
        user,
        provider[user.providerId as "google" | "twitter"]
      )
        .then(() => {
          // User re-authenticated.
          deleteUser(user)
            .then(() => {
              // User deleted.
            })
            .catch((error) => {
              // An error ocurred
              // ...
            });
        })
        .catch((error) => {
          // An error ocurred
          // ...
        });
    } else {
      openLineLoginPage(true);
    }
  };
  return (
    <>
      <Transition appear show={isLeaveOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={onClose}>
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
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    退会
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-md text-black">
                      本当に退会してもよろしいですか？
                    </p>
                  </div>

                  <div className="mt-4 flex">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-black hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={onClose}
                    >
                      キャンセル
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent ml-4 bg-green-100 px-4 py-2 text-sm font-medium text-black hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={() => userDelete()}
                    >
                      退会する
                    </button>
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

export default LeaveModal;
