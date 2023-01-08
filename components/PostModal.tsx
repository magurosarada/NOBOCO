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
import { kMaxLength } from "buffer";
import Button from "./Button";

const PostModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: VoidFunction;
}) => {
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
      place: "",
      title: data.title,
      createdAt: Date.now(),
      updatedAt: null,
      authorId: firebaseUser.uid,
      mainImageURL: "",
      likeCount: 2,
    };

    setDoc(ref, post).then(() => {
      alert("投稿完了");
    });
  };

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-30" onClose={onClose}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md md:max-w-3xl  transform h-96 p-6 text-left align-middle shadow-xl transition-all">
                  <div className="mx-auto container fixed bg-white left-0 top-0 rounded-2xl">
                    <form action="" onSubmit={handleSubmit(submit)}>
                      <div className="flex  items-center border-b text-center p-3">
                        <button onClick={onClose}>
                          <img src="/close.svg" alt="" />
                        </button>
                        <Dialog.Title
                          as="h2"
                          className="font-semibold text-center flex-1 text-xl"
                        >
                          新規投稿
                        </Dialog.Title>
                      </div>
                      <div className=" border-t flex-col mx-auto">
                        <div
                          className={classNames(
                            " w-full text-center",
                            isDragAccept && "bg-green-200"
                          )}
                        >
                          <label
                            className="w-full p-10 text-center"
                            {...getRootProps()}
                          >
                            <input
                              {...getInputProps()}
                              type="file"
                              className="hidden"
                              id="imageURL"
                              {...register("mainImageURL", {})}
                            />
                            {previewImage ? (
                              <img
                                src={previewImage}
                                className="m-auto mt-10"
                              />
                            ) : (
                              <div className="w-full h-full p-10">
                                <p className="text-center">画像や動画を挿入</p>
                                <img
                                  src="/add.svg"
                                  alt=""
                                  className="border rounded-md mx-auto w-14 h-14 mt-2 hover:bg-green-200"
                                />
                              </div>
                            )}
                          </label>
                        </div>
                        {selectedImage && (
                          <ImageEditor name="mainImageURL" control={control} />
                        )}
                        <div className=" w-full border-t ">
                          <input
                            className="w-full"
                            type="text"
                            id="title"
                            placeholder="タイトルを入力"
                            {...register("title", {
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
                            className="w-full h-40"
                            {...register("body", {
                              required: "必須入力です",
                              maxLength: {
                                value: 500,
                                message: "最大500文字までです",
                              },
                            })}
                          ></textarea>
                          {errors.body && (
                            <p className="text-red-500">
                              {errors.body.message}
                            </p>
                          )}
                        </div>
                        <div className="text-right mb-3">
                          <Button
                            type="submit"
                            className=" border p-2 ml-auto hover:bg-green-200"
                            onClick={() => onclose}
                          >
                            投稿する
                          </Button>
                        </div>
                      </div>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
export default PostModal;
