import { useRouter } from "next/router";
import React, { ReactElement, ReactNode } from "react";
import MainLayout from "../components/MainLayout";
import { formatDistanceToNow } from "date-fns";
import { ja } from "date-fns/locale";
import RecommendUserList from "../components/RecommendUserList";
import { useMediaQuery } from "react-responsive";
import UserRanking from "../components/UserRanking";
import { useRequireAuth } from "../lib/requireAuth";
import {
  InstantSearch,
  Hits,
  HitsProps,
  useInstantSearch,
  Pagination,
  Configure,
  SearchBox,
  SearchBoxProps,
} from "react-instantsearch-hooks-web";
import { NextPageWithLayout } from "./_app";
import PostList from "../components/PostList";
import algoliasearch from "algoliasearch";

const timeline: NextPageWithLayout = () => {
  const { firebaseUser, user } = useRequireAuth();
  const router = useRouter();
  const isMobile = useMediaQuery({ query: "(max-width: 1280px)" });
  const searchClient = algoliasearch(
    "XIIP7PXG27",
    "7e70fe71b31e496e35e25a5364e7fdad"
  );
  if (!firebaseUser) {
    return null;
  }
  if (firebaseUser && !user) {
    router.push("/signup");
  }
  const search: SearchBoxProps["queryHook"] = (query, hook) => {
    hook(query);
  };
  const NoresultBoundry = ({ children }: { children: ReactNode }) => {
    const { results } = useInstantSearch();
    if (!results.__isArtificial && results.nbHits === 0) {
      return <p>{results.query}の検索結果はありませんでした</p>;
    }
    return (
      <div>
        {results.query && (
          <p>
            {results.query}の検索結果が{results.nbHits}件見つかりました
          </p>
        )}
        {children}
      </div>
    );
  };
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
          <InstantSearch
            indexName="posts"
            searchClient={searchClient}
          ></InstantSearch>
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
