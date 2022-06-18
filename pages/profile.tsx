import React from 'react'
import MainLayout from '../components/MainLayout'
import Post from '../components/Post'
import ProfileMain from '../components/ProfileAbout'
import { UserContentProvider } from './UserContext'


const profile = () => {
  return (
    <div>
      <div className="bg-gray-100">
        <UserContentProvider
         userImageURL="https://docs.microsoft.com/ja-jp/windows/apps/design/controls/images/image-licorice.jpg"
         userId="k-hinata"
         userName="Hinata Kawaguchi">
          <MainLayout userImageURL="https://docs.microsoft.com/ja-jp/windows/apps/design/controls/images/image-licorice.jpg">
            <ProfileMain 
            userName="Hinata Kawaguchi"
            userImageURL="https://pbs.twimg.com/profile_images/3406268893/54b7e1f981b7df7c817af48d1b96ad5e_400x400.jpeg"
            introduction="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora earum rem at! Totam dicta quis tempora et corporis aperiam facilis eveniet. Quaerat doloremque consequuntur quis! Numquam aliquid fugit adipisci dolorem?"
            userId="k-hinata"
            postCount={3}
            followCount={2}
            followerCount={10} />
            <div>
              <Post
              id="xxx"
              userImageURL="https://pbs.twimg.com/profile_images/3406268893/54b7e1f981b7df7c817af48d1b96ad5e_400x400.jpeg"
              userName="HinataKawaguchi"
              mainText="xxxx"
              userId="K hinata"
              mainimageURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKJ0ZeOOZbMbeZbrcQ3BaDZhuz-cYfvKkPBg&usqp=CAU"
              createdAt={Date.now()}
              likeCount={2}
              commentCount={3}/>
              <Post
              id="xxx"
              userImageURL="https://pbs.twimg.com/profile_images/3406268893/54b7e1f981b7df7c817af48d1b96ad5e_400x400.jpeg"
              userName="HinataKawaguchi"
              mainText="xxxx"
              userId="K hinata"
              mainimageURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKJ0ZeOOZbMbeZbrcQ3BaDZhuz-cYfvKkPBg&usqp=CAU"
              createdAt={Date.now()}
              likeCount={2}
              commentCount={3}/>
              <Post
              id="xxx"
              userImageURL="https://pbs.twimg.com/profile_images/3406268893/54b7e1f981b7df7c817af48d1b96ad5e_400x400.jpeg"
              userName="HinataKawaguchi"
              mainText="xxxx"
              userId="K hinata"
              mainimageURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKJ0ZeOOZbMbeZbrcQ3BaDZhuz-cYfvKkPBg&usqp=CAU"
              createdAt={Date.now()}
              likeCount={2}
              commentCount={3}/>
            </div>
          </MainLayout>
        </UserContentProvider>
      </div>
    </div>
  )
}

export default profile
