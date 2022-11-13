import React, { FC } from "react";
import MainLayout from "../components/MainLayout";

type Props = {
  userId: string;
  userImageURL: string;
  userName: string;
  mainimageURL: string;
  showFlag: boolean;
};

const postForm: FC<Props> = ({
  userImageURL = "https://pbs.twimg.com/profile_images/3406268893/54b7e1f981b7df7c817af48d1b96ad5e_400x400.jpeg",
  userId = "xxx",
}) => {
  return (
    <div>
      <div className="mx-auto container rounded-md fixed bg-white left-0 top-0">
        <div className="flex justify-between items-center border-b p-2">
          <button>
            <img src="/close.svg" alt="" />
          </button>
          <h2 className=" font-semibold ml-10 md:ml-14 text-xl">新規投稿</h2>
          <div className="">
            <button
              type="submit"
              className="rounded-full border p-2 hover:bg-green-200"
            >
              投稿する
            </button>
          </div>
        </div>
        <div className="flex md:flex-row flex-col">
          <div className="md:w-3/5 w-full border text-center pb-20">
            <p className="text-center mt-10">画像や動画を挿入</p>
            <button className="border rounded-md  w-14 h-14 mt-2">
              <img src="/add.svg" alt="" className="w-full h-full" />
            </button>
          </div>
          <div className="md:w-2/5 w-full border">
            <div className="flex mt-5 items-center ml-3">
              <div className="w-10 h-10">
                <img
                  src={userImageURL}
                  alt=""
                  className="w-full h-full rounded-full"
                />
              </div>
              <h3 className="font-semibold ml-4">{userId}</h3>
            </div>
            <textarea
              name=""
              id=""
              placeholder="本文を入力"
              rows={6}
              className="w-full  mt-3"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default postForm;
