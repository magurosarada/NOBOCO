import { useRouter } from "next/router";
import React, { ReactElement } from "react";
import MainLayout from "../components/MainLayout";
import RecommendUserList from "../components/RecommendUserList";
import { useMediaQuery } from "react-responsive";
import UserRanking from "../components/UserRanking";
import { useRequireAuth } from "../lib/requireAuth";
import { NextPageWithLayout } from "./_app";
import PostList from "../components/PostList";
import { useUser } from "../lib/user";

const timeline: NextPageWithLayout = () => {
  const { firebaseUser, user } = useRequireAuth();
  const router = useRouter();
  const isMobile = useMediaQuery({ query: "(max-width: 1280px)" });
  if (!firebaseUser) {
    return null;
  }
  if (firebaseUser && !user) {
    router.push("/timeline");
  }
  if (isMobile) {
    return (
      <div className="bg-gray-50">
        <div className="sm:max-w-[450px] sm:justify-center sm:mx-auto sm:flex sm:flex-col md:max-w-[400px]  bg-gray-50">
          <div className="pt-4 mx-auto  justify-center gap-8"></div>
          <PostList />
          <div className=" max-w-full mt-5">
            <RecommendUserList />
          </div>
          <div className=" max-w-full mt-5 mb-6">
            <UserRanking />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="w-full  bg-gray-50">
        <div className="pt-6 flex justify-center mx-auto pb-16  gap-8">
          <div className=" basis-1/6 h-full shadow-sm sticky top-20 hidden lg:block">
            <UserRanking />
          </div>
          <PostList />
          <div className="basis-1/6  h-full shadow-sm sticky top-20 hidden lg:block">
            <RecommendUserList />
          </div>
        </div>
      </div>
    </div>
  );
};

timeline.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
export default timeline;
