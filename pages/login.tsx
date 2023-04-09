import { ReactElement } from "react";
import { FaGoogle, FaTwitter } from "react-icons/fa";
import Button from "../components/Button";
import Layout from "../components/Layout";
import AuthLine from "../components/LineLoginButton";
import { loginWithProvider } from "../lib/requireAuth";
import { NextPageWithLayout } from "./_app";

const login: NextPageWithLayout = () => {
  return (
    <div className="mt-16 bg-[url('/signup.jpg')] bg-cover object-fill py-32">
      <div className="mx-auto">
        <div className=" py-10 flex flex-col justify-center bg-white md:w-2/5 mx-auto">
          <h3 className="text-center text-[36px]">NOBOCOにログイン</h3>
          <div className="mt-5 flex flex-col justify-center">
            <div className="flex justify-center">
              <Button
                Icon={FaGoogle}
                className="h-12 rounded-full w-4/6 mx-auto text-black border border-black  bg-white  px-1 py-1 flex hover:border-none items-center  hover:bg-[#dc4e40] hover:text-white"
                onClick={() => loginWithProvider("google")}
              >
                Googleアカウントでログイン
              </Button>
            </div>
            <div className="flex justify-center">
              <Button
                Icon={FaTwitter}
                className="h-12 mt-5 rounded-full w-4/6 mx-auto px-1 py-1 flex border border-black text-white hover:border-none bg-blue-400 hover:bg-[#1DA1F2] hover:text-white"
                onClick={() => loginWithProvider("twitter")}
              >
                Twitterアカウントでログイン
              </Button>
            </div>
            <AuthLine />
          </div>
        </div>
      </div>
    </div>
  );
};
login.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
export default login;
