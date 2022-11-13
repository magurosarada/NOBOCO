import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="w-full">
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

export default Footer;
