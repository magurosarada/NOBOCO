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
    watch,
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
      likeCount: 2,
    };

    setDoc(ref, post).then(() => {
      alert("投稿完了");
    });
  };

  return (
    <div className="shadow-sm rounded-md  w-full bg-white">
      <div className=" ">
        <div className=" ">
          <div className="border-b flex justify-between">
            <h2 className="p-2  ">新規投稿</h2>
            <select name="place" id="" className="border rounded-md">
              <option value="北海道">地域を選択</option>
              <option value="東北">東北</option>
              <option value="関東">関東</option>
              <option value="">近畿</option>
              <option value="">四国</option>
              <option value="">九州</option>
            </select>
          </div>

          <form action="" onSubmit={handleSubmit(submit)}>
            <div className="w-full">
              <input
                className="w-full p-2 border mt-4 rounded-md"
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
                className="w-full max-h-40 mt-2 border rounded-md p-2"
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
                  <ImageEditor name="mainImageURL" control={control} />
                </label>
              </div>
              <Button className="hover:bg-green-500 hover:text-white">
                投稿する
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default PostZone;
