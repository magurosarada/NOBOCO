import algoliasearch from "algoliasearch/lite";
import { formatDistanceToNow } from "date-fns";
import { ja } from "date-fns/locale";
import { debounce } from "debounce";
import Link from "next/link";
import { ReactElement, ReactNode } from "react";
import {
  Configure,
  Hits,
  HitsProps,
  InstantSearch,
  Pagination,
  SearchBox,
  SearchBoxProps,
  useInstantSearch,
} from "react-instantsearch-hooks-web";
import MainLayout from "../components/MainLayout";
import { useUser } from "../lib/user";
import { Post } from "../types/post";
import { NextPageWithLayout } from "./_app";

const searchClient = algoliasearch(
  "XIIP7PXG27",
  "7e70fe71b31e496e35e25a5364e7fdad"
);
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
const Hit: HitsProps<Post>["hitComponent"] = ({ hit }) => {
  const user = useUser(hit.authorId);
  return (
    <div className="py-4 md:p-4 mx-auto bg-white  max-w-4xl border border-gray-200">
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

const searchResult: NextPageWithLayout = () => {
  return (
    <div>
      <div className="mt-16 container mx-auto">
        <h2 className="text-xl font-semibold">検索</h2>

        <InstantSearch indexName="posts" searchClient={searchClient}>
          <div className=" my-10 text-center w-full">
            <SearchBox
              classNames={{
                submitIcon: "hidden",
                resetIcon: "hidden",
                input:
                  "pl-2 py-1  pr-10 border-slate-300 border w-full  focus-within:border-black rounded-md hover:border-black outline-0",
                root: "relative inline-block w-3/5",
              }}
              submitIconComponent={() => (
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    color="#a8abb1"
                    stroke="currentColor"
                    tabIndex={-1}
                    className="absolute right-0 top-1/2 -translate-y-1/2 mr-2 p-0.5  w-6 h-6 hover:stroke-black"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                </button>
              )}
              queryHook={debounce(search, 1000)}
            />
          </div>
          <Configure hitsPerPage={5} />
          <NoresultBoundry>
            <Hits<Post> hitComponent={Hit} />
            <Pagination
              classNames={{
                list: "flex space-x-3 justify-center mt-10",
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

searchResult.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default searchResult;
