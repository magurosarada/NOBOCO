import Link from "next/link";
import React, { ReactElement } from "react";
import Layout from "../components/Layout";
import { NextPageWithLayout } from "./_app";

const index: NextPageWithLayout = () => {
  return (
    <div>
      <div className="mt-16 py-64 bg-[url('/top.jpg')] object-cover bg-cover w-full h-full text-center">
        <h1 className="text-7xl text-white">NOBOCO</h1>
        <h2 className="text-white text-3xl">クライマーのためのSNS</h2>
      </div>
      <div className="container mx-auto">
        <div className="mt-20">
          <div className="w-full">
            <h2 className="py-4 text-2xl text-center">NOBOCOの特徴</h2>
            <p className="mx-auto w-20 h-2 bg-green-300"></p>
            <div className="my-10 grid grid-cols-1 md:grid-cols-3">
              <div className="my-10 flex flex-col">
                <div className="w-40 h-40 mx-auto  mb-9">
                  <img
                    src="/bouldering.svg"
                    alt="ボルダリング"
                    className="w-full -h-full p-6 rounded-full bg-gray-200"
                  />
                </div>
                <h3 className="text-center text-xl font-bold">
                  クライミング専門
                  <br />
                  のSNS
                </h3>
              </div>
              <div className="my-10 flex flex-col">
                <div className="w-40 h-40 mx-auto mb-9">
                  <img
                    src="/chat.svg"
                    alt="コメント"
                    className="w-full h-full p-6 rounded-full bg-gray-200"
                  />
                </div>
                <h3 className="text-center text-xl font-bold">
                  自由にコメント
                </h3>
              </div>
              <div className="my-10 flex flex-col">
                <div className="w-40 h-40  mx-auto mb-9">
                  <img
                    src="/nice.svg"
                    alt="nice"
                    className="w-full h-full p-6 rounded-full bg-gray-200"
                  />
                </div>
                <h3 className="text-center text-xl font-bold">いいねで応援</h3>
              </div>
            </div>
          </div>
          <div className="my-20">
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
          <div className="my-12 flex justify-center text-center">
            <Link href="/login">
              <button
                className="bg-green-600 whitespace-nowrap px-12 py-4 border-2 border-green-600
                                rounded-full shadow-sm text-base font-medium text-white hover:bg-green-50
                                hover:text-green-500 focus:outline-none focus:ring-2"
              >
                登録する
              </button>
            </Link>
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
