import React from 'react';
import { SiGoogle, SiTwitter } from 'react-icons/si';
import { GoogleAuthProvider, TwitterAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase/client';

const LoginButtons = () => {
  const loginWithProvider = (
    providerName: 'google' | 'twitter'
  ) => {
    const provider = {
      google: new GoogleAuthProvider(),
      twitter: new TwitterAuthProvider()
    };

    return signInWithPopup(auth, provider[providerName]);
  };
  return (
    <div className="mt-16 bg-[url('/signup.jpg')] bg-cover object-fill py-32">
    <div className="mx-auto">
      <div className=" py-10 flex flex-col justify-center bg-white md:w-3/5 mx-auto md:rounded-full">
        <img src="/logo.svg" alt="" className="mx-auto md:w-1/3"/>
        <div className="mt-5 flex flex-col justify-items-center">
          <div>
            <button className="border-2 h-12 rounded-full w-full md:w-3/5 mx-auto bg-white border-black border-solid hover:bg-gray-100"
            onClick={() => loginWithProvider('google')}>Googleアカウントで登録</button>
          </div>
          <div>
            <button className="border-2 h-12 mt-5 rounded-full w-full md:w-3/5 mx-auto bg-white border-black border-solid hover:bg-[#1DA1F2]"
            onClick={() => loginWithProvider('twitter')}>Twitterアカウントで登録</button>
          </div>
          <div>
            <button className="border-2 h-12 mt-5 rounded-full w-full md:w-3/5 mx-auto bg-white border-black border-solid hover:bg-[#06c755]">LINEアカウントで登録</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default LoginButtons;