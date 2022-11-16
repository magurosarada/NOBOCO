import React, { FC } from "react";
import Button from "./Button";

const RecommendUser = ({ name, image }: { name: string; image: string }) => {
  return (
    <div>
      <div className="flex justify-between items-center max-w-full px-4 py-1 ">
        <div className="flex items-center">
          <div className="">
            <img src={image} alt="" className="rounded-full w-8 h-8 mr-2" />
          </div>
          <p className="text-sm">{name}</p>
        </div>
        <div className="flex justify-between">
          <div className="items-center">
            <Button className="max-w-4 h-7 ml-3 w-3 hover:bg-green-500 hover:text-white flex shadow-none">
              フォロー
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendUser;
