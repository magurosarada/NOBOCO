import Link from "next/link";
import React, { FC } from "react";
import MainLayout from "../components/MainLayout";
import { useRequireAuth } from "../lib/requireAuth";

type Props = {
  introduction: string;
  mail: string;
  password: string;
  userName: string;
  userId: string;
  userImageURL: string;
};
const setting: FC<Props> = ({
  introduction = "aaa",
  mail = "aaa.gmail.com",
  password = "xxx",
  userName = "xxx",
  userId = "xxx",
  userImageURL = "xxx",
}) => {
  const { firebaseUser } = useRequireAuth();
  if (!firebaseUser) {
    return null;
  }
  return (
    <div>
      <div className=" p-10 mx-auto container mt-16">
        <div className="flex">
          <div className="w-8 h-8">
            <img
              src={userImageURL}
              alt=""
              className="w-full h-full rounded-full"
            />
          </div>
          <div>
            <h3 className="font-semibold text-xl ml-7">{userName}</h3>
          </div>
          <div className="mt-6">
            <h3 className="font-semibold">ユーザーネーム</h3>
            <input
              type="text"
              placeholder={userName}
              className="border w-full h-9 mt-4 rounded-md p-2"
            />
          </div>
          <div className="mt-6">
            <h3 className="font-semibold">ユーザーID</h3>
            <input
              type="text"
              placeholder={userId}
              className="border w-full h-9 mt-4 rounded-md p-2"
            />
          </div>
          <div className="mt-6">
            <h3 className="font-semibold">自己紹介</h3>
            <textarea
              name=""
              id=""
              placeholder={introduction}
              className="border w-full h-24 mt-4 rounded-md p-2"
            ></textarea>
          </div>
          <div className="mt-6">
            <h3 className="font-semibold">メールアドレス</h3>
            <input
              type="text"
              placeholder={mail}
              className="border w-full h-9 mt-4 rounded-md p-2"
            />
          </div>
          <div className="mt-6">
            <h3 className="font-semibold">パスワード</h3>
            <input
              type="text"
              placeholder={password}
              className="border w-full h-9 mt-4 rounded-md p-2"
            />
          </div>
          <div className="text-center mt-6">
            <button
              type="submit"
              className=" border rounded-md mx-auto p-2 hover:bg-green-200"
            >
              送信する
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default setting;
