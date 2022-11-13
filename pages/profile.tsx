import React, { ReactElement } from "react";
import { useMediaQuery } from "react-responsive";
import MainLayout from "../components/MainLayout";
import Post from "../components/Post";
import ProfileAbout from "../components/ProfileAbout";
import RecommendUserList from "../components/RecommendUserList";
import UserRanking from "../components/UserRanking";
import { useRequireAuth } from "../lib/requireAuth";
import { NextPageWithLayout } from "./_app";

const profile: NextPageWithLayout = () => {
  const { firebaseUser } = useRequireAuth();
  const isMobile = useMediaQuery({ query: "(max-width: 1280px)" });
  if (!firebaseUser) {
    return null;
  }

  if (isMobile) {
    return (
      <div>
        <div className="md:max-w-[680px] md:mx-auto md:justify-center md:flex md:flex-col bg-gray-50">
          <div className="pt-6 mx-auto pb-16 justify-center gap-8"></div>
          <div className=" max-w-[450px] rounded-md w-full">
            <ProfileAbout postCount={3} followCount={2} followerCount={10} />
            <div className=" mx-auto mt-4  grid gap-y-4">
              <Post
                id="xxx"
                mainText="xxxx"
                userName="川口"
                place="関東"
                title="bouldering"
                userId="K hinata"
                mainimageURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKJ0ZeOOZbMbeZbrcQ3BaDZhuz-cYfvKkPBg&usqp=CAU"
                createdAt={Date.now()}
                likeCount={2}
                commentCount={3}
              />
              <Post
                id="xxx"
                mainText="xxxx"
                userName="川口"
                place="東北"
                title="bouldering"
                userId="K hinata"
                mainimageURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKJ0ZeOOZbMbeZbrcQ3BaDZhuz-cYfvKkPBg&usqp=CAU"
                createdAt={Date.now()}
                likeCount={2}
                commentCount={3}
              />
              <Post
                id="xxx"
                mainText="xxxx"
                userName="川口"
                place="九州"
                title="bouldering"
                userId="K hinata"
                mainimageURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKJ0ZeOOZbMbeZbrcQ3BaDZhuz-cYfvKkPBg&usqp=CAU"
                createdAt={Date.now()}
                likeCount={2}
                commentCount={3}
              />
            </div>
          </div>
          <div className=" max-w-full ">
            <RecommendUserList />
          </div>
          <div className=" max-w-full">
            <UserRanking />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50">
      <div className="pt-6 flex mx-auto pb-16 justify-center gap-8">
        <div className=" basis-1/6  h-full sticky top-20">
          <UserRanking />
        </div>
        <div className=" max-w-[450px] rounded-md w-full">
          <ProfileAbout postCount={3} followCount={2} followerCount={10} />
          <div className=" mx-auto mt-4  grid gap-y-4">
            <Post
              id="xxx"
              mainText="xxxx"
              userName="川口"
              place="関東"
              title="bouldering"
              userId="K hinata"
              mainimageURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKJ0ZeOOZbMbeZbrcQ3BaDZhuz-cYfvKkPBg&usqp=CAU"
              createdAt={Date.now()}
              likeCount={2}
              commentCount={3}
            />
            <Post
              id="xxx"
              mainText="xxxx"
              userName="川口"
              place="東北"
              title="bouldering"
              userId="K hinata"
              mainimageURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKJ0ZeOOZbMbeZbrcQ3BaDZhuz-cYfvKkPBg&usqp=CAU"
              createdAt={Date.now()}
              likeCount={2}
              commentCount={3}
            />
            <Post
              id="xxx"
              mainText="xxxx"
              userName="川口"
              place="九州"
              title="bouldering"
              userId="K hinata"
              mainimageURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKJ0ZeOOZbMbeZbrcQ3BaDZhuz-cYfvKkPBg&usqp=CAU"
              createdAt={Date.now()}
              likeCount={2}
              commentCount={3}
            />
          </div>
        </div>
        <div className="basis-1/6  h-full sticky top-20">
          <RecommendUserList />
        </div>
      </div>
    </div>
  );
};
profile.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
export default profile;
