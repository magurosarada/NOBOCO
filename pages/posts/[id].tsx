import Image from "next/image";
import React, { ReactElement, useEffect, useState } from "react";
import MainLayout from "../../components/MainLayout";
import { Post } from "../../types/post";
import { useUser } from "../../lib/user";
import { NextPageWithLayout } from "../_app";
import format from "date-fns/format";
import Addcomment from "../../components/Addcomment";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { adminDB } from "../../firebase/server";
import Like from "../../components/Like";
import Follow from "../../components/Follow";
import { useAuth } from "../../context/UserContext";
import Link from "next/link";

export const getStaticProps: GetStaticProps<{
  post: Post;
}> = async (context) => {
  const snap = await adminDB.doc(`posts/${context.params?.id}`).get();
  const post = snap.data() as Post;

  return {
    revalidate: 60,
    props: {
      post,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

const postDetail: NextPageWithLayout<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ post }) => {
  const user = useUser(post?.authorId);
  const loginUser = useAuth();

  if (!post) {
    return <p>記事が存在しません</p>;
  }

  return (
    <div className="container mx-auto border-x mt-20">
      <div className="flex">
        <Image src="/add.svg" width={20} height={20} className="mr-4" />
        <h2 className="text-2xl mb-4">投稿</h2>
      </div>
      {user && (
        <div className="">
          <div className="flex items-center justify-between">
            <div className="flex items-center mb-4 px-4">
              <Link href={`../users/${user.id}`}>
                <img
                  src={user?.userImage}
                  alt=""
                  className="rounded-full w-12 h-12"
                />
              </Link>
              <h3 className="text-xl ml-3">{user?.handleName}</h3>
            </div>
            <div>
              <Follow followerId={loginUser.user?.id} userId={post.authorId} />
            </div>
          </div>
          {post.mainImageURL ? (
            <img
              src={post.mainImageURL}
              alt=""
              className="aspect-video max-h-15 rounded-md"
            />
          ) : (
            <div className=""></div>
          )}
          <div>
            <p className="text-2xl mt-4">{post?.body}</p>
          </div>
          <Like userId={user?.id} postId={post.id} />
          <p className="text-slate-500">
            {format(post.createdAt, "yyyy年MM月dd日")}
          </p>
        </div>
      )}
      <Addcomment />
    </div>
  );
};

postDetail.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
export default postDetail;
