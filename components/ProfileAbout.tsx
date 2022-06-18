import Link from 'next/link'
import React, { FC } from 'react'

type Props = {
  userId:string;
  userName:string;
  userImageURL:string;
  introduction:string;
  postCount:number;
  followCount:number;
  followerCount:number;
}

let ProfileAbout:FC<Props>  = ({
  userName,
  userImageURL,
  introduction,
  userId,
  postCount,
  followCount,
  followerCount
}) => {
  return (
    <div>
      <div className="mt-16 mx-auto border-b p-4 md:p-4 bg-white max-w-4xl border-x border-gray-200">
        <div className="flex  md:mx-auto md:center">
          <div className="w-20 h-20 md:w-40 md:h-40 md:mx-auto ">

            <img src={userImageURL} alt="" className="rounded-full w-full"/>
          </div>
          <div className="mx-auto md:mt-5">
            <h2 className="text-2xl text-center">{userName}</h2>
            <button className="mt-4 md:mt-10 border border-black p-1 px-5 text-center rounded-md font-bold"><Link href="setting"><a className="mx-auto text-center">プロフィールの編集</a></Link></button>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="mt-4 ml-auto">
            <h3 className="font-semibold">{userId}</h3>
            <p className="mt-3">{introduction}</p>
          </div>
          <div className="flex  mt-4">
            <Link href=""><a className=""><span>{followCount}</span>フォロー</a></Link>
            <Link href=""><a className="ml-4"><span>{followerCount}</span>フォロワー</a></Link>
            <Link href=""><a className="ml-4"><span>{postCount}</span>投稿</a></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileAbout
