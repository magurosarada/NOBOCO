import React from "react";
import RankingContent from "./RankingContent";

const UserRanking = () => {
  return (
    <div className="bg-white rounded-md h-full w-full p-3">
      <div className="flex justify-between">
        <h3 className=" text-base leading-normal">いいねランキング</h3>
        <div className="flex">
          <button className="font-semibold text-sm  cursor-pointer">
            週間
          </button>
          <button className="ml-2 text-sm text-gray-500 cursor-pointer">
            月間
          </button>
        </div>
      </div>
      <div className="mt-4 divide-y">
        <RankingContent
          rank="1"
          name="石川 達哉"
          likes="40"
          image="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/88/88a2f8c79ef3f362281db1c871fd6a949b8e90ec.jpg"
        />
        <RankingContent
          rank="2"
          name="山下 貴大"
          likes="40"
          image="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/28/28068923ba3115e366a392c7f6c695b4a47fddc0_full.jpg"
        />
        <RankingContent
          rank="3"
          name="野崎 太郎"
          likes="40"
          image="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/b1/b1906ac59db94a8aa043d69903c5337bc4df9134_full.jpg"
        />
        <RankingContent
          rank="4"
          name="浅井 修"
          likes="40"
          image="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/f5/f510968cbd893a417bd306654df2ab1707c06e94_full.jpg"
        />
        <RankingContent
          rank="5"
          name="村田 洋輔"
          likes="40"
          image="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/68/683f5d134f78d867baabb2b11a8ecc1af0b48e9f_full.jpg"
        />
        <RankingContent
          rank="6"
          name="西川 優子"
          likes="40"
          image="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/8b/8bd52c009049dc732bfa91a6ebeaacde68f07153_full.jpg"
        />
      </div>
    </div>
  );
};

export default UserRanking;
