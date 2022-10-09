import Link from "next/link";
import { formatDistanceToNow } from "date-fns";
import React, { FC } from "react";
import { ja } from "date-fns/locale";
import { useAuth } from "../context/UserContext";
import Addcomment from "./Addcomment";
import Button from "./Button";

type Props = {
  id: string;
  userId: string;
  userName: string;
  title: string;
  mainimageURL: string;
  mainText: string;
  createdAt: number;
  likeCount: number;
  commentCount: number;
  place: string;
};

let Post: FC<Props> = ({
  mainText,
  mainimageURL,
  createdAt,
  likeCount,
  title,
  commentCount,
  place,
}) => {
  const { user } = useAuth();
  if (!user) {
    return null;
  }

  return (
    <div>
      <div className=" rounded-md bg-white w-full border shadow-sm border-gray-200">
        <div className="">
          <div className="w-full">
            <img
              src={mainimageURL}
              alt=""
              className="w-full h-hull  rounded-md rounded-b-none drop-shadow-md"
            />
          </div>
          <div className="px-6 mt-7">
            <div className="mb-10">
              <h3 className=" text-white text-sm bg-green-500 py-1 px-2 rounded-full inline-block">
                {place}
              </h3>
              <h3 className="text-2xl my-2 font-semibold">{title}</h3>
              <p className="mb-2">{mainText}</p>
            </div>
            <div className="w-full items-center flex">
              <div className="w-10 h-10 rounded-full overflow-hidden mr-2">
                <Link href="">
                  <a className="">
                    <img
                      src={user.userImage}
                      alt=""
                      className=" w-full h-full"
                    />
                  </a>
                </Link>
              </div>
              <div>
                <p className=" font-semibold text-sm">{user.name}</p>
                <p className="text-sm text-gray-500">
                  {formatDistanceToNow(createdAt, {
                    locale: ja,
                  })}
                </p>
              </div>
            </div>
            <div className="flex mt-4 mb-4 items-center">
              <div className="flex items-center">
                <button className="w-6 h-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="gray"
                    className="w-full h-full hover:stroke-black"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                    />
                  </svg>
                </button>
                <p className="px-1">{commentCount}</p>
              </div>
              <div className="flex ml-4 items-center">
                <button className="w-6 h-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="gray"
                    className="w-full h-full hover:stroke-black"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                </button>
                <p className="px-1">{likeCount}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
