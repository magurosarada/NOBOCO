import React from "react";

const RankingContent = ({
  rank,
  name,
  image,
  likes,
}: {
  rank: string;
  name: string;
  likes: string;
  image: string;
}) => {
  return (
    <div>
      <div className="flex justify-between py-2 items-center  leading-7">
        <div className="items-center flex">
          <div className="flex">
            <span className="px-1 w-4">{rank}</span>
          </div>
          <img src={image} alt="" className="h-8 w-8 rounded-full ml-2" />
          <p className="mx-4 ml-2 text-sm ">{name}</p>
        </div>
        <p className="text-center text-[10px] leading-4 text-gray-600">
          <span className=" text-[16px] text-black">{likes}</span>
          <br />
          いいね
        </p>
      </div>
    </div>
  );
};

export default RankingContent;
