import { doc, setDoc } from "@firebase/firestore";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadString,
} from "@firebase/storage";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/UserContext";
import { db, storage } from "../firebase/client";
import userDetail from "../pages/users/[id]";
import { User } from "../types/user";
import Button from "./Button";
import ImageEditor from "./ImageEditor";
import LeaveModal from "./LeaveModal";

const ProfileForm = ({ isEditMode }: { isEditMode: boolean }) => {
  const {
    register,
    reset,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<User>();
  const { firebaseUser, user } = useAuth();
  let [isLeaveOpen, setIsLeaveopen] = useState<boolean>(false);
  useEffect(() => {
    if (isEditMode && user) {
      reset(user);
    }
  }, [user]);

  const router = useRouter();

  if (!firebaseUser) {
    return null;
  }

  const submit = async (data: User) => {
    const user: User = {
      id: firebaseUser.uid,
      name: data.name,
      followerCount: data.followerCount,
      followCount: data.followCount,
      handleName: data.handleName,
      email: data.email,
      introduction: data.introduction,
      createdAt: Date.now(),
      userImage: data.userImage,
    };

    if (data.userImage?.match(/^data:/)) {
      const imageRef = ref(storage, `users/${firebaseUser.uid}/avatar`);
      await uploadString(imageRef, data.userImage, "data_url");
      data.userImage = await getDownloadURL(imageRef);
    }
    if (!data.userImage && user.userImage) {
      const imageRef = ref(storage, `users/${firebaseUser.uid}/avatar`);
      await deleteObject(imageRef);
    }

    const documentRef = doc(db, `users/${firebaseUser.uid}`);
    return setDoc(documentRef, user).then(() => {
      alert(isEditMode ? "更新しました" : "ユーザーを作成しました");
      if (!isEditMode) {
        router.push("/timeline");
      }
    });
  };
  return (
    <div className=" py-4 mx-auto container mt-6 px-15 max-w-xl">
      <h2 className="text-2xl font-semibold">
        ユーザー情報{isEditMode ? "編集" : "入力"}
      </h2>
      <form
        onSubmit={handleSubmit(submit, () => {
          console.log("失敗");
        })}
        className="mt-5"
      >
        <div className="flex justify-center">
          <div className="mr-6">
            <label htmlFor="">
              <ImageEditor name="userImage" control={control} isPost={false} />
              <p className="text-center text-[#93a5b1] mt-2">変更する</p>
            </label>
          </div>
          <div className="w-full ">
            <div className="">
              <label className=" block" htmlFor="name">
                <h3 className=" text-sm">
                  ユーザーネーム<span className="text-red-500">*</span>
                </h3>
                <input
                  id="name"
                  type="text"
                  autoComplete="name"
                  defaultValue={firebaseUser.displayName || ""}
                  {...register("name", {
                    required: "必須項目です",
                    maxLength: {
                      value: 50,
                      message: "最大50文字です",
                    },
                  })}
                  className="border w-full h-9 mt-2 rounded-md px-[10.5px] py-[9px] bg-[#f1f5f9]"
                />
              </label>
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name?.message}</p>
              )}
            </div>
            <div className="mt-6">
              <label className=" block" htmlFor="handleName">
                ユーザーID<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="handleName"
                autoComplete="off"
                {...register("handleName", {
                  required: "必須項目です",
                  pattern: {
                    value: /^[a-zA-Z]+$|\D|/,
                    message: "半角英数字のみです",
                  },
                  maxLength: {
                    value: 50,
                    message: "最大50文字です",
                  },
                })}
                className="border w-full h-9 mt-2 rounded-md  px-[10.5px] py-[9px] bg-[#f1f5f9]"
              />
              {errors.handleName && (
                <p className="text-red-500 text-sm">
                  {errors.handleName.message}
                </p>
              )}
              <p className="text-right">半角英数字のみ</p>
            </div>
            <div className="mt-6">
              <label className="block" htmlFor="introduction">
                自己紹介文<span className="text-red-500">*</span>
              </label>
              <textarea
                id="introduction"
                placeholder=""
                autoComplete="off"
                {...register("introduction", {
                  required: "必須項目です",
                  maxLength: {
                    value: 400,
                    message: "最大400文字です",
                  },
                })}
                className="border w-full h-24 mt-2 rounded-md p-2  bg-[#f1f5f9]"
              ></textarea>
              {errors.introduction && (
                <p className="text-red-500 text-sm">
                  {errors.introduction?.message}
                </p>
              )}
            </div>
            <div className="mt-6">
              <label className=" block" htmlFor="mail">
                メールアドレス
              </label>
              <input
                id="mail"
                type="email"
                autoComplete="email"
                placeholder=""
                defaultValue={firebaseUser.email || ""}
                {...register("email")}
                className="border w-full h-9 mt-2 rounded-md  px-[10.5px] py-[9px]  bg-[#f1f5f9]"
              />
            </div>
            <div className="mt-6 mr-auto">
              <Button type="submit" disabled={isSubmitting} className="ml-auto">
                {isEditMode ? "更新" : "登録"}する
              </Button>
            </div>
          </div>
        </div>
      </form>
      {isEditMode && (
        <div className="mt-8  flex flex-col">
          <h3 className="text-2xl">退会</h3>
          <p className="mt-4 ">
            退会すると投稿などの全てのデータが削除されます
          </p>
          <div className="flex ">
            <Button
              className="  rounded-md p-2  bg-red-100  mt-4 hover:bg-red-500 hover:text-white hover:border-none"
              onClick={() => setIsLeaveopen(true)}
            >
              退会する
            </Button>
          </div>
          <LeaveModal
            isLeaveOpen={isLeaveOpen}
            onClose={() => setIsLeaveopen(false)}
          />
        </div>
      )}
    </div>
  );
};

export default ProfileForm;
