import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useRef, useState } from 'react';
import AvatarEditor from 'react-avatar-editor';

export default function ImageEditModal({
  isImageOpen,
  onClose,
  image,
  onChange,
} : {
  isImageOpen:boolean;
  onClose:VoidFunction;
  image:File;
  onChange: (image:string) => void;
}) {
  const editorRef = useRef<AvatarEditor | null>(null);

  const trim = () => {
    const croppedImage = editorRef.current!.getImageScaledToCanvas().toDataURL();
    onChange(croppedImage);
    onClose();


  }
  return (
    <>
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
                  >画像編集
                  </Dialog.Title>
                  <AvatarEditor
                    ref={editorRef}
                    image={image}
                    width={300}
                    height={300}
                    border={50}
                    color={[255, 255, 255, 0.6]} // RGBA
                    scale={1.2}
                    rotate={0}
                  />
                  <div className="flex items-center mt-2">
                    <button
                        type="button"
                        className="rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={trim}
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
  )
}
