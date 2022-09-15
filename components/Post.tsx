import Link from "next/link";
import { formatDistanceToNow } from "date-fns";
import React, { FC } from "react";
import { ja } from "date-fns/locale";
import { useAuth } from "../context/UserContext";
import Addcomment from "./Addcomment";

type Props = {
  id: string;
  userId: string;
  userName: string;
  mainimageURL: string;
  mainText: string;
  createdAt: number;
  likeCount: number;
  commentCount: number;
};

let Post: FC<Props> = ({
  userName,
  mainText,
  mainimageURL,
  createdAt,
  likeCount,
  commentCount,
}) => {
  const { user } = useAuth();
  if (!user) {
    return null;
  }

  return (
    <div>
      <div className="py-4 md:p-4 mx-auto bg-white max-w-4xl border border-gray-200">
        <div className="flex items-center">
          <div className="w-10 h-10">
            <Link href="">
              <a className="">
                <img
                  src={user.userImage}
                  alt=""
                  className="rounded-full w-full h-full"
                />
              </a>
            </Link>
          </div>
          <p className="ml-4 font-semibold">{user.name}</p>
        </div>
        <div className="mt-4">
          <img
            src={mainimageURL}
            alt=""
            className="w-full h-hull object-cover"
          />
        </div>
        <div>
          <p className="mt-4">{mainText}</p>
        </div>
        <div className="flex mt-4">
          <div className="flex items-center">
            <button className="w-7 h-7">
              <img src="chat.svg" alt="" className="w-full h-full" />
            </button>
            <p className="ml-2">{commentCount}</p>
          </div>
          <div className="flex ml-4">
            <button className="w-7 h-7">
              <img src="nice.svg" alt="" className="w-full h-full" />
            </button>
            <p className="ml-2">{likeCount}</p>
          </div>
        </div>
        <div className="pt-4">
          <p className="text-sm text-gray-500">
            {formatDistanceToNow(createdAt, {
              locale: ja,
            })}
          </p>
        </div>
        <Addcomment />
      </div>
    </div>
  );
};

export default Post;
