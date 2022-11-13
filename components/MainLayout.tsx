import Link from "next/link";
import React, { FC, ReactNode } from "react";
import DropDown from "../components/DropDown";
import Footer from "./Footer";
import Header from "./Header";
import SearchBar from "./SearchBar";

type Props = {
  children: ReactNode;
};

let MainLayout: FC<Props> = ({ children }) => {
  return (
    <div>
      <div className="sticky top-0 z-50">
        <Header />
      </div>
      <div>{children}</div>
      <div className="pt-10 pb-8 bg-white w-full min-w-full">
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
