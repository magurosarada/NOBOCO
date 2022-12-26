import Image from "next/image";
import Link from "next/link";
import React, { ReactNode, useState } from "react";
import LoginModal from "./LoginModal";

const Layout = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div>
      <header className="p-4 z-30 w-full fixed bg-green-100 top-0 md:space-x-2 h-16 border-[#F0F0F5] border-b">
        <div className="px-5 m-0 items-center flex justify-between min-w-full">
          <div className="inline-block w-25 h-8  items-center box-border">
            <Link href="/">
              <a className="flex">
                <Image src="/logo.svg" alt="NOBOCO" width="130" height="38" />
              </a>
            </Link>
          </div>
          <div className="items-center">
            <button
              className=" p-2 border border-black items-center rounded-md shadow-sm text-sm font-medium hover:bg-green-300"
              onClick={() => setIsOpen(true)}
            >
              ログイン
            </button>
            <LoginModal onClose={() => setIsOpen(false)} Isopen={isOpen} />
          </div>
        </div>
      </header>
      <div>{children}</div>
      <footer className=" pt-10 pb-8 bg-gray-50 w-full min-w-full">
        <div className="flex flex-wrap justify-center">
          <Link href="/">
            <a className="mx-2 text-sm">NOBOCOについて</a>
          </Link>
          <Link href="/terms">
            <a className="mx-2 text-sm">利用規約</a>
          </Link>
          <Link href="/privacy">
            <a className="mx-2 text-sm">プライバシーポリシー</a>
          </Link>
          <a href="#" className="mx-2">
            お問い合わせ(TwitterDM)
          </a>
        </div>
        <p className="text-center m-4">©2022 NOBOCO</p>
      </footer>
    </div>
  );
};

export default Layout;
