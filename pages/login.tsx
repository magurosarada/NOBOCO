import Link from "next/link";
import ImageEditModal from "../components/ImageEditModal";
import Layout from "../components/Layout";

const login = () => {

  return (
    <div>
      <Layout>
        <div className="mt-16 bg-[url('/signup.jpg')] bg-cover object-fill py-32">
          <div className="mx-auto">
            <div className=" py-10 flex flex-col justify-center bg-white md:w-3/5 mx-auto md:rounded-full">
              <img src="/logo.svg" alt="" className="mx-auto md:w-1/3"/>
              <div className="mt-5 flex flex-col justify-items-center">
                <Link href="/timeline"><button className="border-2 h-12 rounded-full w-full md:w-3/5 mx-auto bg-white border-black border-solid hover:bg-gray-100">Googleアカウントで登録</button></Link>
                <Link href="/test"><button className="border-2 h-12 mt-5 rounded-full w-full md:w-3/5 mx-auto bg-white border-black border-solid hover:bg-[#1DA1F2]">Twitterアカウントで登録</button></Link>
                <Link href=""><button className="border-2 h-12 mt-5 rounded-full w-full md:w-3/5 mx-auto bg-white border-black border-solid hover:bg-[#06c755]">LINEアカウントで登録</button></Link>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default login;
