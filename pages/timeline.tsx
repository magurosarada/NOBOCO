import { useRouter } from "next/router";
import React, { ReactElement } from "react";
import MainLayout from "../components/MainLayout";
import Post from "../components/Post";
import { useRequireAuth } from "../lib/requireAuth";
import { NextPageWithLayout } from "./_app";

const timeline: NextPageWithLayout = () => {
  const { firebaseUser, user } = useRequireAuth();
  const router = useRouter();
  if (!firebaseUser) {
    return null;
  }
  return (
    <div>
      <div className="bg-gray-100">
        <div className="mt-16">
          <Post
            id="xxx"
            userName="Hinata Kawaguchi"
            mainimageURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAzZ7C_iutlGej5D2y5y7_8Z8OiD4BkUK1qg&usqp=CAU"
            mainText="xxx"
            userId="xxx"
            createdAt={Date.now()}
            likeCount={1}
            commentCount={1}
          />
          <Post
            id="xxx"
            userName="Hinata Kawaguchi"
            userId="xxx"
            mainimageURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAzZ7C_iutlGej5D2y5y7_8Z8OiD4BkUK1qg&usqp=CAU"
            mainText="xxx"
            createdAt={Date.now()}
            likeCount={1}
            commentCount={1}
          />
          <Post
            id="xxx"
            userName="Hinata Kawaguchi"
            userId="xxx"
            mainimageURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKJ0ZeOOZbMbeZbrcQ3BaDZhuz-cYfvKkPBg&usqp=CAU"
            mainText="xxx"
            createdAt={Date.now()}
            likeCount={1}
            commentCount={1}
          />
          <Post
            id="xxx"
            userName="Hinata Kawaguchi"
            userId="xxx"
            mainimageURL=""
            mainText="xxx"
            createdAt={Date.now()}
            likeCount={1}
            commentCount={1}
          />
        </div>
      </div>
    </div>
  );
};
timeline.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
export default timeline;
