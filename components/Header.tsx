import Link from "next/link";
import React from "react";
import searchResult from "../pages/searchResult";
import DropDown from "./DropDown";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <div>
      <header className="px-3 md:px-6 z-30 ,max-w-full   bg-white top-0 md:space-x-2 h-16 items-center border-[#F0F0F5] border-b-2 flex justify-between">
        <div className="inline-block w-28  md:w-40 h-8 items-center  mr-auto md:mr-0">
          <Link href="/timeline">
            <a href="">
              <img src="/logo.svg" alt="" className="w-full h-full" />
            </a>
          </Link>
        </div>
        <div className="flex gap-4 items-center">
          <Link href="searchResult">
            <a href="">
              <button className="w-6 h-6 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  width={23}
                  height={23}
                  strokeWidth={1.5}
                  color="#6e7b85"
                  stroke="currentColor"
                  tabIndex={-1}
                  className=" w-full h-hull hover:stroke-black"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </button>
            </a>
          </Link>
          <Link href="/timeline">
            <a href="">
              <button className="w-6 h-6 items-center">
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
            </a>
          </Link>
          <a href="">
            <button className="w-6 h-6 items-center">
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
          </a>
          <DropDown />
        </div>
      </header>
    </div>
  );
};

export default Header;
