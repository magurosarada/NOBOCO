import { Dialog, Transition } from '@headlessui/react'
import { ChangeEvent, Fragment, useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone';
import ImageEditModal from './ImageEditModal'; 
import classNames from 'classnames';

const PostModal = ({isOpen,onClose} : {
  isOpen:boolean;
  onClose:VoidFunction;
}) => {
  const [isImageOpen, setIsImageOpen] = useState<boolean>(true)
  const [selectedImage,setSelectedImage] = useState<any>()
  const [previewImage, setpreviewImage] = useState<string>()

  const onDrop = useCallback((acceptedFiles:File[]) => {
    setSelectedImage(acceptedFiles[0]);
    setIsImageOpen(true);
  }, []);

  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});

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
                <Dialog.Panel className="w-full max-w-md md:max-w-3xl transform h-96 p-6 text-left align-middle shadow-xl transition-all">
                
                  <div className="mx-auto container fixed bg-white left-0 top-0 rounded-2xl">
                    <div className="flex justify-between items-center border-b p-3">
                      <button onClick={onClose}>
                        <img src="/close.svg" alt=""/>
                      </button>
                      <Dialog.Title
                        as="h2"
                        className="font-semibold ml-10 md:ml-14 text-xl"
                      >新規投稿</Dialog.Title>
                      <div className="">
                        <button type="submit" className="rounded-full border p-2 hover:bg-green-200">投稿する</button>
                      </div>
                    </div>
                    <div className="flex border-t md:flex-row flex-col h-96">
                      <div className={classNames( "md:w-1/2 w-full text-center", isDragActive && "bg-green-200")}>
                        <label 
                        className="md:w-1/2 w-full p-10 text-center"
                        {...getRootProps()}>
                          <input  
                          {...getRootProps()}
                          type="file" 
                          className="hidden"/>                       
                          {previewImage ? 
                          (<img src={previewImage} className="m-auto mt-10"/>
                          ) : (
                          <div className="w-full h-full p-20">
                            <p className="text-center">画像や動画を挿入</p>
                            <img src="/add.svg" alt="" className="border rounded-md mx-auto w-14 h-14 mt-2 hover:bg-green-200"/>
                          </div>)}
                        </label>
                      </div>
                      {selectedImage && (<ImageEditModal 
                      isImageOpen={isImageOpen} 
                      onClose={() => setIsImageOpen(false)} 
                      image={selectedImage}
                      onChange={(image) => setpreviewImage(image)}
                      />
                      )}
                      <div className="md:w-1/2 w-full border-l-2">
                        <div className="flex py-3 items-center pl-3  border-b">
                          <div className="w-10 h-10">
                            <img src="" alt="" className="w-full h-full rounded-full"/>
                          </div>
                          <h3 className="font-semibold ml-4">aaa</h3>
                        </div>
                        <textarea name="" id="" placeholder="本文を入力" className="w-full h-72"></textarea>
                      </div>
                    </div>
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
export default PostModal;
