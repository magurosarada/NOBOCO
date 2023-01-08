import { Menu, Transition } from "@headlessui/react";
import { auth } from "../firebase/client";
import Link from "next/link";
import { Router, useRouter } from "next/router";
import { Fragment, useState } from "react";
import { useAuth } from "../context/UserContext";
import PostModal from "./PostModal";

let DropDown = () => {
  let [isOpen, setIsOpen] = useState<boolean>(false);
  let [isLogoutOpen, setIsLogoutOpen] = useState<boolean>(false);

  const { user } = useAuth();
  const router = useRouter();

  const logout = () => {
    auth
      .signOut()
      .then(() => {
        router.push("/");
      })
      .catch(() => {
        alert("ログアウト失敗");
      });
  };

  return (
    <div>
      <Menu as="div" className="relative block text-right">
        <div>
          <Menu.Button className="focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 w-10 h-10">
            <img
              src={user?.userImage}
              className="w-full h-full items-center rounded-full"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 z-30 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Link href="/profile">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-green-500 text-white" : "text-gray-900"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      プロフィール
                    </button>
                  )}
                </Menu.Item>
              </Link>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-green-500 text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    いいねした投稿
                  </button>
                )}
              </Menu.Item>
            </div>

            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <div onClick={() => setIsLogoutOpen(true)}>
                    <button
                      className={`${
                        active ? "bg-green-500 text-white" : "text-gray-900"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      onClick={() => logout()}
                    >
                      ログアウト
                    </button>
                  </div>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
      <PostModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};

export default DropDown;
