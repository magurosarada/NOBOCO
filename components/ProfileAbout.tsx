import Link from "next/link";
import React, { FC } from "react";
import { useAuth } from "../context/UserContext";
import Button from "./Button";

type Props = {
  postCount: number;
  followCount: number;
  followerCount: number;
};

let ProfileAbout: FC<Props> = ({ postCount, followCount, followerCount }) => {
  const { user } = useAuth();
  if (!user) {
    return null;
  }
  return (
    <div>
      <div className="mx-auto border-b rounded-md bg-white max-w-4xl border-x border-gray-200">
        <img src="/top.jpg" className="w-full max-h-60 object-cover " />
        <div className="px-4">
          <div className="flex  mt-5 items-center ">
            <div className="w-20 h-20 ">
              <img
                src={user.userImage}
                alt=""
                className="rounded-full w-full"
              />
            </div>
            <div className="ml-5">
              <h2 className="font-bold text-xl">{user.name}</h2>
              <h3 className=" text-left text-slate-500">{user.handleName}</h3>
            </div>
            <div className="ml-auto mt-auto">
              <Button
                href="profile/edit"
                className="hover:bg-green-500 hover:text-white"
              >
                プロフィールの編集
              </Button>
            </div>
          </div>

          <div className="flex flex-col mb-3">
            <p className="mt-3">{user.introduction}</p>
            <div className="flex  mt-4">
              <Link href="">
                <a className="">
                  <span>{followCount}</span>フォロー
                </a>
              </Link>
              <Link href="">
                <a className="ml-4">
                  <span>{followerCount}</span>フォロワー
                </a>
              </Link>
              <Link href="">
                <a className="ml-4">
                  <span>{postCount}</span>投稿
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileAbout;
