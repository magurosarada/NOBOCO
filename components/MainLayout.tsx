import Link from "next/link";
import React, { FC, ReactNode } from "react";
import DropDown from "../components/DropDown";
import SearchBar from "./SearchBar";

type Props = {
  children: ReactNode;
};

let MainLayout: FC<Props> = ({ children }) => {
  return (
    <div>
      <header className="p-4 z-30 w-full fixed bg-green-100 top-0 md:space-x-2 h-16 border-[#F0F0F5] border-b flex justify-between">
        <div className="inline-block w-25 h-8 items-center mr-auto md:mr-0">
          <Link href="/timeline">
            <img src="/logo.svg" alt="" className="w-full h-full" />
          </Link>
        </div>
        <SearchBar />
        <div className="flex gap-2 ml-2 md:gap-3 md:ml-3">
          <Link href="/timeline">
            <button className="w-8 h-8 md:w-9 md:h-9">
              <img
                src="/home.svg"
                alt=""
                className="w-full h-full items-center border border-black rounded-md"
              />
            </button>
          </Link>
          <button className="w-8 h-8 md:w-9 md:h-9">
            <img
              src="/nice.svg"
              alt=""
              className="w-full h-full items-center border border-black rounded-md"
            />
          </button>
          <DropDown />
        </div>
      </header>
      <div>{children}</div>
      <footer className=" mt-10 pt-10 pb-8 bg-gray-50 w-full min-w-full">
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

export default MainLayout;
