import { signInWithCustomToken } from "firebase/auth";
import { collection, doc, setDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useAuth } from "../context/UserContext";
import { FaLine } from "react-icons/fa";
import { auth, db } from "../firebase/client";
import useLineAuth, { openLineLoginPage } from "../lib/lineAuth";
import Button from "./Button";

const AuthLine = () => {
  const router = useRouter();
  const { user } = useAuth();

  useLineAuth(false);

  return (
    <div className="">
      <Button
        Icon={FaLine}
        color={"#fff"}
        className=" h-12 mt-5 rounded-full w-4/6 mx-auto px-[15px]  text-white hover:border hover:border-black  flex justify-center  items-center hover:text-white   bg-[#06c755] :"
        onClick={() => openLineLoginPage(false)}
      >
        <span>LINEアカウントでログイン</span>
      </Button>
    </div>
  );
};

export default AuthLine;
