import classNames from "classnames";
import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import algoliasearch from "algoliasearch/lite";
import {
  InstantSearch,
  SearchBox,
  SearchBoxProps,
} from "react-instantsearch-hooks-web";
import { debounce } from "debounce";

const searchClient = algoliasearch(
  "XIIP7PXG27",
  "7e70fe71b31e496e35e25a5364e7fdad"
);

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  const search: SearchBoxProps["queryHook"] = (query, hook) => {
    console.log("検索");
    hook(query);
  };

  return (
    <div className="">
      <form
        className={classNames(
          "md:flex  md:max-w-4xl",
          isOpen || isMobile ? "w-full justify-items-end md:justify-center" : ""
        )}
      >
        <div className="flex ">
          <InstantSearch indexName="posts" searchClient={searchClient}>
            <SearchBox
              classNames={{
                submitIcon: "hidden",
                resetIcon: "hidden",
                input:
                  "pl-2 py-1  pr-10 border-slate-300 border focus-within:border-black rounded-md hover:border-black outline-0",
                root: "relative inline-block",
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
          </InstantSearch>
        </div>
      </form>
    </div>
  );
};
export default SearchBar;
