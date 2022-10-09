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
      <header className="px-6 z-30 w-full sticky bg-white top-0 md:space-x-2 h-16 items-center border-[#F0F0F5] border-b-2 flex justify-between">
        <div className="inline-block w-25 h-8 items-center  mr-auto md:mr-0">
          <Link href="/timeline">
            <img src="/logo.svg" alt="" className="w-full h-full" />
          </Link>
        </div>
        <div className="flex gap-4 items-center">
          <SearchBar />
          <Link href="/timeline">
            <button className="w-6 h-6 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                width={23}
                height={23}
                color="#6e7b85"
                stroke="currentColor"
                className="w-full h-hull hover:stroke-black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
            </button>
          </Link>
          <button className="w-6 h-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              width={23}
              height={23}
              color="#6e7b85"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-full h-full hover:stroke-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
              />
            </svg>
          </button>
          <DropDown />
        </div>
      </header>
      <div>{children}</div>
      <footer className="pt-10 pb-8 bg-gray-50 w-full min-w-full">
        <div className="flex flex-wrap justify-center">
          <Link href="/">
            <a className="mx-2 text-[16px]">NOBOCOについて</a>
          </Link>
          <Link href="/terms">
            <a className="mx-2 text-[16px]">利用規約</a>
          </Link>
          <Link href="/privacy">
            <a className="mx-2 text-[16px]">プライバシーポリシー</a>
          </Link>
          <a href="#" className="mx-2">
            お問い合わせ(TwitterDM)
          </a>
        </div>
        <p className="text-center text-sm m-4">©2022 NOBOCO</p>
      </footer>
    </div>
  );
};

export default MainLayout;
