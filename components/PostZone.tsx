import { Dialog, Transition } from "@headlessui/react";
import { ChangeEvent, Fragment, useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import ImageEditor from "./ImageEditor";
import { useForm } from "react-hook-form";
import classNames from "classnames";
import { useAuth } from "../context/UserContext";
import { Post } from "../types/post";
import { collection, doc, setDoc } from "@firebase/firestore";
import { db } from "../firebase/client";
import Button from "./Button";

const PostZone = () => {
  const [isImageOpen, setIsImageOpen] = useState<boolean>(true);
  const [selectedImage, setSelectedImage] = useState<any>();
  const [previewImage, setpreviewImage] = useState<string>();

  const {
    register,
    reset,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<Post>();

  const onDropAccepted = useCallback((acceptedFiles: File[]) => {
    setSelectedImage(acceptedFiles[0]);
    setIsImageOpen(true);
  }, []);

  const { getRootProps, getInputProps, isDragAccept } = useDropzone({
    onDropAccepted,
  });

  const { firebaseUser, user } = useAuth();
  if (!user || !firebaseUser) {
    return null;
  }

  const submit = (data: Post) => {
    const ref = doc(collection(db, "posts"));
    const post: Post = {
      id: ref.id,
      body: data.body,
      title: data.title,
      createdAt: Date.now(),
      updatedAt: null,
      authorId: firebaseUser.uid,
      mainImageURL: "",
      place: data.place,
    };

    setDoc(ref, post).then(() => {
      alert("投稿完了");
    });
  };

  return (
    <div className="shadow-sm rounded-md  w-full bg-white">
      <div className=" ">
        <div className=" ">
          <h2 className="p-2 font- border-b">新規投稿</h2>
          <form action="" onSubmit={handleSubmit(submit)}>
            {previewImage ? (
              <img src={previewImage} className="m-auto" />
            ) : (
              <div></div>
            )}
            <div className="w-full">
              <input
                className="w-full p-2 border-b"
                type="text"
                id="title"
                placeholder="場所を入力"
                {...register("title", {
                  maxLength: {
                    value: 50,
                    message: "最大50文字までです",
                  },
                })}
              />
              <input
                className="w-full p-2 border-b"
                type="text"
                id="place"
                placeholder="タイトルを入力"
                {...register("place", {
                  required: "必須入力です",
                  maxLength: {
                    value: 50,
                    message: "最大50文字までです",
                  },
                })}
              />
              <textarea
                id="body"
                placeholder="本文を入力"
                className="w-full max-h-40 p-2"
                {...register("body", {
                  required: "必須入力です",
                  maxLength: {
                    value: 500,
                    message: "最大500文字までです",
                  },
                })}
              ></textarea>
              {errors.body && (
                <p className="text-red-500">{errors.body.message}</p>
              )}
            </div>

            <div className=" border-t mx-auto flex justify-between px-3 items-center py-2">
              <div className={classNames("  ", isDragAccept && "bg-green-200")}>
                <label className="inline-block" {...getRootProps()}>
                  <input
                    {...getInputProps()}
                    type="file"
                    className="hidden"
                    id="imageURL"
                    {...register("mainImageURL", {})}
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="gray"
                    className="w-7 h-7 hover:stroke-black"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                    />
                  </svg>
                </label>
              </div>
              <Button>投稿する</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default PostZone;
