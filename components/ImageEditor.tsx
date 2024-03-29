import { Dialog, Transition } from "@headlessui/react";
import classNames from "classnames";
import { ChangeEvent, Fragment, useCallback, useRef, useState } from "react";
import AvatarEditor from "react-avatar-editor";
import { useDropzone } from "react-dropzone";
import {
  FieldValues,
  useController,
  UseControllerProps,
} from "react-hook-form";

const ImageEditor = <T extends FieldValues>({
  control,
  name,
  isPost,
}: UseControllerProps<T> & { isPost: boolean }) => {
  const [isImageOpen, setIsImageOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<File | null>();
  const [scale, setScale] = useState(1);
  const editorRef = useRef<AvatarEditor | null>(null);

  const onDropAccepted = useCallback((acceptedFiles: File[]) => {
    setSelectedImage(acceptedFiles[0]);
    setIsImageOpen(true);
  }, []);

  const { getRootProps, getInputProps, isDragAccept } = useDropzone({
    onDropAccepted,
    accept: { "image/jpeg": [], "image/png": [] },
  });
  const { field } = useController({
    control,
    name,
  });
  const onClose = () => {
    setIsImageOpen(false);
  };
  const trim = () => {
    const croppedImage = editorRef.current?.getImage();
    const canvas = document.createElement("canvas");
    canvas.width = 80;
    canvas.height = 80;

    const ctx = canvas.getContext("2d");
    ctx!.drawImage(croppedImage!, 0, 0, 80, 80);

    field.onChange(canvas.toDataURL("image/png"));
    console.log(croppedImage);
    onClose();
  };
  const handleScale = (e: ChangeEvent<HTMLInputElement>) => {
    const scale = parseFloat(e.target.value);
    setScale(scale);
  };
  return (
    <>
      <div className="flex">
        <div className="">
          <label
            htmlFor="userImage"
            {...getRootProps()}
            className={classNames("", isDragAccept && "bg-green-200")}
          >
            <input
              {...getInputProps()}
              type="file"
              className="hidden"
              id="userImage"
            />
            {field.value ? (
              <div className="w-30 h-30">
                {isPost ? (
                  <img src={field.value as string} className="w-full h-full" />
                ) : (
                  <img
                    src={field.value as string}
                    className="w-full h-full rounded-full"
                  />
                )}
              </div>
            ) : (
              <div className="">
                <button>
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
                </button>
              </div>
            )}
          </label>
        </div>
      </div>
      <Transition appear show={isImageOpen} as={Fragment}>
        <Dialog as="div" className="relative z-40" onClose={onClose}>
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    画像編集
                  </Dialog.Title>
                  {isPost ? (
                    <AvatarEditor
                      ref={editorRef}
                      image={selectedImage!}
                      width={300}
                      height={300}
                      border={50}
                      color={[255, 255, 255, 0.6]} // RGBA
                      scale={scale}
                      rotate={0}
                    />
                  ) : (
                    <AvatarEditor
                      ref={editorRef}
                      image={selectedImage!}
                      width={300}
                      height={300}
                      border={50}
                      borderRadius={150}
                      color={[255, 255, 255, 0.6]} // RGBA
                      scale={scale}
                      rotate={0}
                    />
                  )}
                  <input
                    name="scale"
                    type="range"
                    onChange={handleScale}
                    min={"1"}
                    max="2"
                    step="0.01"
                    defaultValue="1"
                  />
                  <div className="flex items-center mt-2">
                    <button
                      type="button"
                      className="rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={() => onClose()}
                    >
                      キャンセル
                    </button>
                    <button
                      type="button"
                      className="rounded-md border border-transparent ml-4 bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={trim}
                    >
                      完了
                    </button>
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
export default ImageEditor;
