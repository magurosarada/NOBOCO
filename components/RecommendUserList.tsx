import React from "react";
import RecommendUser from "./RecommendUser";

const RecommendUserList = () => {
  return (
    <div className="bg-white rounded-md max-w-full h-full">
      <h2 className=" p-3">おすすめのユーザー</h2>
      <div className=" grid grid-flow-row max-w-full gap-y-2">
        <RecommendUser
          name="小林 直樹"
          image="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/71/714286fe158a94e67e9450fbe427f1b3740958d5_full.jpg"
        />
        <RecommendUser
          name="吉田 太郎"
          image="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/a6/a6f26bd89c3a0f1a46d160042d8d07ad9a8f05db_full.jpg"
        />
        <RecommendUser
          name="鈴木 篤"
          image="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/36/36178ed2e138e1e379498ed449a4ddf9ab42579d_full.jpg"
        />
        <RecommendUser
          name="田中 浩司"
          image="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/00/0089ed5798dc2963fe74c9ff95bd31eb7608acba_full.jpg"
        />
        <RecommendUser
          name="上田 徹"
          image="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/6f/6f7083024bc6f1b315f3f47ddf873142d408312e_full.jpg"
        />
      </div>
    </div>
  );
};

export default RecommendUserList;
