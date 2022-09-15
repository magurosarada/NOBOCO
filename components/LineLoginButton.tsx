import { signInWithCustomToken } from "firebase/auth";
import { collection, doc, setDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useAuth } from "../context/UserContext";
import { auth, db } from "../firebase/client";
import useLineAuth, { openLineLoginPage } from "../lib/lineAuth";

const AuthLine = () => {
  const router = useRouter();
  const { user } = useAuth();

  useLineAuth(false);

  return (
    <div className="flex justify-center">
      <button
        className="border-2 h-12 mt-5 rounded-full w-full md:w-3/5 mx-auto bg-white border-black border-solid hover:bg-[#06c755]"
        onClick={() => openLineLoginPage}
      >
        LINEアカウントでログイン
      </button>
    </div>
  );
};

export default AuthLine;
