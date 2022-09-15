import algoliasearch from "algoliasearch/lite";
import { formatDistanceToNow } from "date-fns";
import { ja } from "date-fns/locale";
import React, { ReactElement, ReactNode } from "react";
import {
  InstantSearch,
  Hits,
  HitsProps,
  useInstantSearch,
  Pagination,
  Configure,
} from "react-instantsearch-hooks-web";
import MainLayout from "../components/MainLayout";
import { Post } from "../types/post";
import { NextPageWithLayout } from "./_app";
import useSWR from "swr/immutable";
import { User } from "../types/user";
import { doc, getDoc } from "@firebase/firestore";
import { db } from "../firebase/client";
import { useUser } from "../lib/user";
import Link from "next/link";

const searchClient = algoliasearch(
  "XIIP7PXG27",
  "7e70fe71b31e496e35e25a5364e7fdad"
);

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
const Hit: HitsProps<Post>["hitComponent"] = ({ hit }) => {
  const user = useUser(hit.authorId);
  return (
    <div className="py-4 md:p-4 mx-auto bg-white max-w-4xl border border-gray-200">
      <h3 className="line-clamp-2">
        <Link href={`posts/${hit.id}`}>
          <a>{hit.body}</a>
        </Link>
      </h3>
      <p className="text-slate-500">
        {formatDistanceToNow(hit.createdAt, { locale: ja })}前
      </p>
      <p className="truncate">{user && user.name}</p>
    </div>
  );
};

const sarchResult: NextPageWithLayout = () => {
  return (
    <div>
      <div className="mt-16 container mx-auto">
        <h2 className="text-xl font-semibold">検索結果</h2>
        <InstantSearch indexName="posts" searchClient={searchClient}>
          <Configure hitsPerPage={2} />
          <NoresultBoundry>
            <Hits<Post> hitComponent={Hit} />
            <Pagination
              classNames={{
                list: "flex space-x-3",
                link: "py-1 px-3 block",
                disabledItem: "opacity-50",
                selectedItem: "font-bold",
              }}
            />
          </NoresultBoundry>
        </InstantSearch>
      </div>
    </div>
  );
};

sarchResult.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default sarchResult;
