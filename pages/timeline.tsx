import React from 'react'
import MainLayout from '../components/MainLayout'
import Post from '../components/Post'

const timeline = () => {
  return (
    <div>
     <div className="bg-gray-100">
        <MainLayout
          userImageURL="https://pbs.twimg.com/profile_images/3406268893/54b7e1f981b7df7c817af48d1b96ad5e_400x400.jpeg">
          <div className="mt-16">
            <Post
            id="xxx"
            userImageURL="https://pbs.twimg.com/profile_images/3406268893/54b7e1f981b7df7c817af48d1b96ad5e_400x400.jpeg"
            userName="Hinata Kawaguchi"
            mainimageURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAzZ7C_iutlGej5D2y5y7_8Z8OiD4BkUK1qg&usqp=CAU"
            mainText="xxx"
            userId="xxx"
            createdAt={Date.now()}
            likeCount={1}
            commentCount={1}
            />
            <Post 
            id="xxx"
            userImageURL="https://pbs.twimg.com/profile_images/3406268893/54b7e1f981b7df7c817af48d1b96ad5e_400x400.jpeg"
            userName="Hinata Kawaguchi"
            userId="xxx"
            mainimageURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAzZ7C_iutlGej5D2y5y7_8Z8OiD4BkUK1qg&usqp=CAU"
            mainText="xxx"
            createdAt={Date.now()}
            likeCount={1}
            commentCount={1}
            />
            <Post 
            id="xxx"
            userImageURL="https://pbs.twimg.com/profile_images/3406268893/54b7e1f981b7df7c817af48d1b96ad5e_400x400.jpeg"
            userName="Hinata Kawaguchi"
            userId="xxx"
            mainimageURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKJ0ZeOOZbMbeZbrcQ3BaDZhuz-cYfvKkPBg&usqp=CAU"
            mainText="xxx"
            createdAt={Date.now()}
            likeCount={1}
            commentCount={1}
            />
            <Post 
            id="xxx"
            userImageURL="https://pbs.twimg.com/profile_images/3406268893/54b7e1f981b7df7c817af48d1b96ad5e_400x400.jpeg"
            userName="Hinata Kawaguchi"
            userId="xxx"
            mainimageURL=""
            mainText="xxx"
            createdAt={Date.now()}
            likeCount={1}
            commentCount={1}
            />
          </div>
        </MainLayout>
      </div>
    </div>
  )
}

export default timeline
