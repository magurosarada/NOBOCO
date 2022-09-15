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
  let toggleSaerchBar = () => {
    setIsOpen((oldValue) => !oldValue);
  };

  return (
    <div className="">
      <form
        className={classNames(
          "md:flex  md:max-w-4xl",
          isOpen || isMobile ? "w-full justify-items-end md:justify-center" : ""
        )}
      >
        <div className="flex">
          <InstantSearch indexName="posts" searchClient={searchClient}>
            <SearchBox
              classNames={{
                submitIcon: "hidden",
                resetIcon: "hidden",
                input: "rounded-full p-2 border-slate-300 pr-10",
                root: "relative inline-block",
              }}
              submitIconComponent={() => (
                <div>
                  <img
                    src="/search.svg"
                    alt=""
                    className="absolute right-0 top-1/2 -translate-y-1/2 w-10"
                  />
                </div>
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
