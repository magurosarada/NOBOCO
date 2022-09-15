import React, { ReactElement } from "react";
import MainLayout from "../components/MainLayout";
import Post from "../components/Post";
import ProfileAbout from "../components/ProfileAbout";
import { useRequireAuth } from "../lib/requireAuth";
import { NextPageWithLayout } from "./_app";

const profile: NextPageWithLayout = () => {
  const { firebaseUser } = useRequireAuth();

  if (!firebaseUser) {
    return null;
  }

  return (
    <div>
      <div className="bg-gray-100">
        <ProfileAbout
          userName="Hinata Kawaguchi"
          introduction="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora earum rem at! Totam dicta quis tempora et corporis aperiam facilis eveniet. Quaerat doloremque consequuntur quis! Numquam aliquid fugit adipisci dolorem?"
          userId="k-hinata"
          postCount={3}
          followCount={2}
          followerCount={10}
        />
        <div>
          <Post
            id="xxx"
            mainText="xxxx"
            userId="K hinata"
            mainimageURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKJ0ZeOOZbMbeZbrcQ3BaDZhuz-cYfvKkPBg&usqp=CAU"
            createdAt={Date.now()}
            likeCount={2}
            commentCount={3}
          />
          <Post
            id="xxx"
            mainText="xxxx"
            userId="K hinata"
            mainimageURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKJ0ZeOOZbMbeZbrcQ3BaDZhuz-cYfvKkPBg&usqp=CAU"
            createdAt={Date.now()}
            likeCount={2}
            commentCount={3}
          />
          <Post
            id="xxx"
            mainText="xxxx"
            userId="K hinata"
            mainimageURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKJ0ZeOOZbMbeZbrcQ3BaDZhuz-cYfvKkPBg&usqp=CAU"
            createdAt={Date.now()}
            likeCount={2}
            commentCount={3}
          />
        </div>
      </div>
    </div>
  );
};
profile.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
export default profile;
