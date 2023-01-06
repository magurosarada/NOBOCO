import Link from "next/link";
import React, { ReactElement, useState } from "react";
import Button from "../components/Button";
import Layout from "../components/Layout";
import LoginModal from "../components/LoginModal";
import { NextPageWithLayout } from "./_app";

const index: NextPageWithLayout = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div>
      <div className="mt-16 py-64 bg-[url('/top.jpg')] object-cover bg-cover w-full h-full text-center">
        <h1 className="text-7xl text-white">NOBOCO</h1>
        <h2 className="text-white text-3xl">クライマーのためのSNS</h2>
      </div>
      <div className="container mx-auto">
        <div className="mt-20">
          <div className="w-full flex justify-center mx-auto">
            <div className="max-w-sm mr-20">
              <h2 className="py-4 text-[52px] text-center">
                あなたの
                <br />
                クライミングを
                <br />
                みんなに
                <br />
                共有しよう！
              </h2>
              <p className="w-auto">
                NOBOCOはクライマーのために作られたSNSです。
                あなたのクライミングの成果を画像と一緒に共有しましょう。
                フォローで他のユーザーと繋がり、投稿をタイムラインで確認していいねで仲間を応援しましょう！
              </p>
            </div>
            <div className="">
              <img
                src="/topAbout.jpg"
                alt=""
                className="max-w-[500px] mx-auto"
              />
              <p className="text-center">
                <a href="https://jp.freepik.com/free-vector/happy-young-couple-having-fun-girl-and-guy-dancing-at-party-celebrating-good-news-flat-illustration_11235596.htm#from_view=detail_author">
                  著作者：pch.vector
                </a>
                ／出典：Freepik
              </p>
            </div>
          </div>
          <div className="my-28">
            <h2 className="py-4 text-2xl text-center">NOBOCOの使い方</h2>
            <p className="mx-auto w-20 h-2 bg-green-300"></p>
            <div className="grid grid-cols-1 mx-16 mt-10 md:grid-cols-3 md:space-x-1 md:gap-10 ">
              <div
                className="shadow-md border-2 border-green-500 border-opacity-25 rounded-3xl my-2 pb-4 pt-6 px-4 bg-white text-center 
                                items-center flex flex-col"
              >
                <div
                  className="text-xl bg-green-100 text-green-700 font-bold border-2 border-green-100
                                  rounded-full h-12 w-12 flex items-center justify-center"
                >
                  1
                </div>
                <p className="text-green-600 font-bold pt-4 items-center">
                  ログイン
                </p>
                <div
                  className="inline-block w-36 overflow-hidden relative box-border
                                  m-0"
                >
                  <img src="/login.svg" alt="" className="w-full" />
                </div>
              </div>
              <div
                className="shadow-md border-2 border-green-500 border-opacity-25 rounded-3xl my-2 pb-4 pt-6 px-4 bg-white text-center 
                                items-center flex flex-col"
              >
                <div
                  className="text-xl bg-green-100 text-green-700 font-bold border-2 border-green-100
                                  rounded-full h-12 w-12 flex items-center justify-center"
                >
                  2
                </div>
                <p className="text-green-600 font-bold pt-4 items-center">
                  成果を投稿してシェア
                </p>
                <div
                  className="inline-block w-36 overflow-hidden relative box-border
                                  m-0"
                >
                  <img src="/post.svg" alt="" className="w-full" />
                </div>
              </div>
              <div
                className="shadow-md border-2 border-green-500 border-opacity-25 rounded-3xl my-2 pb-4 pt-6 px-4 bg-white text-center 
                                items-center flex flex-col"
              >
                <div
                  className="text-xl bg-green-100 text-green-700 font-bold border-2 border-green-100
                                  rounded-full h-12 w-12 flex items-center justify-center"
                >
                  3
                </div>
                <p className="text-green-600 font-bold pt-4 items-center">
                  タイムラインで投稿をチェック
                </p>
                <div
                  className="inline-block w-36 overflow-hidden relative box-border
                                  m-0"
                >
                  <img src="/timeline.svg" alt="" className="w-full" />
                </div>
              </div>
            </div>
          </div>
          <div className=" mb-12 flex justify-center text-center">
            <div className="flex">
              <div>
                <h3 className="text-[4.16667vw] leading-[1.6] font-bold font-[YakuHanJP, 'Noto Sans JP', 'Poppins', sans-serif]">
                  まずは無料で
                  <br />
                  登録
                </h3>
                <Button
                  className="  mx-auto bg-green-500
                                rounded-full shadow-sm text-base font-medium text-white hover:text-white hover:border-black
                                 focus:outline-none focus:ring-2 mt-[3.88889vw]"
                  type="button"
                  onClick={() => setIsOpen(true)}
                >
                  <div className="w-full px-[70px] py-[10px]   block">
                    登録する
                  </div>
                </Button>
                <LoginModal Isopen={isOpen} onClose={() => setIsOpen(false)} />
              </div>
              <div className="">
                <img src="/bouldering2.jpg" alt="" className="w-[34.58333vw]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
index.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default index;
