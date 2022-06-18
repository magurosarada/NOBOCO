import { Menu, Transition } from '@headlessui/react'
import Link from 'next/link'
import { FC, Fragment, useEffect, useRef, useState } from 'react'
import LeaveModal from './LeaveModal'
import PostModal from './PostModal'

let DropDown = () => { 

  let [isOpen, setIsopen] = useState<boolean>(false)
  let [isLeaveOpen, setIsLeaveopen] = useState<boolean>(false)

  return (
    <div>
      <Menu as="div" className="relative inline-block text-right">
        <div>
          <Menu.Button className="focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <div className="items-center w-9 h-9">
              <img src="" className="w-full h-full items-center rounded-full"/>
            </div>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 z-30 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <div>
                    <button type="button"
                      className={`${
                        active ? 'bg-green-500 text-white' : 'text-gray-900'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      onClick={()=> setIsopen(true)}
                    >投稿する
                    </button>
                  </div>
                )}
              </Menu.Item>
              <Link href="/profile"><Menu.Item>
                {({ active }) => (
                  <button
                    className= {`${
                      active ? 'bg-green-500 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    プロフィール
                  </button>
                )}
              </Menu.Item></Link>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-green-500 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    ナイスした投稿
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-green-500 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    設定
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <div onClick={() => setIsLeaveopen(true)}>
                    <button
                      className={`${
                        active ? 'bg-green-500 text-white' : 'text-gray-900'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      退会する
                    </button>
                  </div>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
      <PostModal isOpen={isOpen} onClose={()=> setIsopen(false)}/>
      <LeaveModal isLeaveOpen={isLeaveOpen} onClose={() => setIsLeaveopen(false)}/>
    </div>
  )
}

export default DropDown 