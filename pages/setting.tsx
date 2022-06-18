import Link from 'next/link';
import React, { FC } from 'react'
import { UserContentProvider, useUser} from './UserContext'

type Props = {
  introduction:string;
  mail:string;
  password:string;
  userName:string;
  userId:string;
  userImageURL:string;
}
const setting:FC<Props> = ({
  introduction="aaa",
  mail="aaa.gmail.com",
  password="xxx",
  userName="xxx",
  userId="xxx",

}) => {
  const userImageURL = useUser();
  return (
    <div>
        <header className="text-center w-full bg-green-200 p-4 h-16 border-b fixed top-0 z-10 border-gray-200">
          <div className="flex items-center">
          <Link href="/profile"><a href=""><div className="w-8 h-8"><img src="/close.svg" alt="" className="w-full h-full"/></div></a></Link>
          <h2 className="text-2xl mx-auto">設定</h2>
          </div>
        </header>
        <div className=" p-10 mx-auto container mt-16">
          <div className="flex">
            <div className="w-8 h-8">
              <img src={userImageURL} alt="" className="w-full h-full rounded-full"/>
            </div>
            <h3 className="font-semibold text-xl ml-7">{userName}</h3>
          </div>
          <div className="mt-6">
            <h3 className="font-semibold">名前</h3>
            <input type="text" placeholder={userName} className="border w-full h-9 mt-4 rounded-md p-2"/>
          </div>
          <div className="mt-6">
            <h3 className="font-semibold">ユーザーID</h3>
            <input type="text" placeholder={userId} className="border w-full h-9 mt-4 rounded-md p-2"/>
          </div>
          <div className="mt-6">
            <h3 className="font-semibold">自己紹介</h3>
            <textarea name="" id="" placeholder={introduction} className="border w-full h-24 mt-4 rounded-md p-2"></textarea>
          </div>
          <div className="mt-6">
            <h3 className="font-semibold">メールアドレス</h3>
            <input type="text" placeholder={mail} className="border w-full h-9 mt-4 rounded-md p-2"/>
          </div>
          <div className="mt-6">
            <h3 className="font-semibold">パスワード</h3>
            <input type="text" placeholder={password} className="border w-full h-9 mt-4 rounded-md p-2"/>
          </div>
          <div className="text-center mt-6">
          <button type="submit" className=" border rounded-md mx-auto p-2 hover:bg-green-200">送信する</button>
          </div>
        </div>
    </div>
  )
}

export default setting
