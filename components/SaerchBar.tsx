import classNames from "classnames";
import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";

const SaerchBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

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
          <button
            type={isMobile ? "button" : "submit"}
            onClick={isMobile ? toggleSaerchBar : undefined}
            className="w-8 h-8　p-2  md:ml-0 md:w-9 md:h-9"
          >
            <img
              src="search.svg"
              alt=""
              className="w-full h-full border  border-black rounded-md items-center hover:bg"
            />
          </button>
          <input
            type="text"
            placeholder="検索"
            className={classNames(
              "mx-auto md:w-96 h-9 p-4 rounded-r-md items-center",
              isOpen || !isMobile ? "w-full inline z-10" : "hidden",
              isMobile || isOpen ? "roundedr-r-full p-2 inline" : "inline-block"
            )}
          />
        </div>
      </form>
    </div>
  );
};
export default SaerchBar;
