import Image from "next/image";
import React, { ReactElement, useEffect, useState } from "react";
import MainLayout from "../../components/MainLayout";
import { useUser } from "../../lib/user";
import { NextPageWithLayout } from "../_app";
import format from "date-fns/format";
import Addcomment from "../../components/Addcomment";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { adminDB } from "../../firebase/server";
import Like from "../../components/Like";
import Follow from "../../components/Follow";
import { useAuth } from "../../context/UserContext";
import { User } from "../../types/user";
import Button from "../../components/Button";
import Link from "next/link";

export const getStaticProps: GetStaticProps<{
  postUser: User;
}> = async (context) => {
  const snap = await adminDB.doc(`users/${context.params?.id}`).get();
  const postUser = snap.data() as User;

  return {
    revalidate: 60,
    props: {
      postUser,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

const userDetail: NextPageWithLayout<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ postUser }) => {
  if (!postUser) {
    return <p>ユーザーが存在しません</p>;
  }
  const { user } = useAuth();

  return (
    <div className="container mx-auto border-x mt-20">
      <div className="mx-auto border-b rounded-md bg-white max-w-4xl border-x border-gray-200">
        <img src="/top.jpg" className="w-full max-h-60 object-cover " />
        <div className="px-4">
          <div className="flex  mt-5 items-center ">
            <div className="w-20 h-20 ">
              <img
                src={postUser.userImage}
                alt=""
                className="rounded-full w-full"
              />
            </div>
            <div className="ml-5">
              <h2 className="font-bold text-xl">{postUser.name}</h2>
              <h3 className=" text-left text-slate-500">
                {postUser.handleName}
              </h3>
            </div>
            <div className="ml-auto mt-auto items-center">
              <Button
                href="../profile/edit"
                className="hover:bg-green-500 hover:text-white"
              >
                プロフィールの編集
              </Button>
              <Follow followerId={user?.id} userId={postUser.id}></Follow>
            </div>
          </div>

          <div className="flex flex-col mb-3">
            <p className="mt-3">{postUser.introduction}</p>
            <div className="flex  mt-4">
              <Link href="">
                <a className="">
                  <span>フォロー</span>
                </a>
              </Link>
              <Link href="">
                <a className="ml-4">
                  <span>{postUser.followerCount}</span>フォロワー
                </a>
              </Link>
              <Link href="">
                <a className="ml-4">
                  <span>投稿</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

userDetail.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
export default userDetail;
