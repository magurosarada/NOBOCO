import React from "react";
import Post from "./Post";
import PostZone from "./PostZone";

const PostList = () => {
  return (
    <div className=" grid gap-y-4  xl:max-w-[450px] w-full ">
      <PostZone />
      <Post
        id="xxx"
        title="bouldering"
        userName="Hinata Kawaguchi"
        place="関東"
        mainimageURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAzZ7C_iutlGej5D2y5y7_8Z8OiD4BkUK1qg&usqp=CAU"
        mainText="xxx"
        userId="xxx"
        createdAt={Date.now()}
        likeCount={1}
        commentCount={1}
      />
      <Post
        id="xxx"
        title="bouldering"
        place="関東"
        userName="Hinata Kawaguchi"
        userId="xxx"
        mainimageURL="https://img.freepik.com/free-photo/young-woman-climbing-a-tall-indoor-man-made-rock-climbing-wall_1153-5475.jpg?w=1480&t=st=1665285644~exp=1665286244~hmac=d4d6b34971a051b0641cd22fc354f574cca9ab3d2b409aa26345fff37a9c8f1c"
        mainText="xxx"
        createdAt={Date.now()}
        likeCount={1}
        commentCount={1}
      />
      <Post
        id="xxx"
        title="bouldering"
        place="中部"
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
        title="bouldering"
        place="北海道"
        userName="Hinata Kawaguchi"
        userId="xxx"
        mainimageURL=""
        mainText="xxx"
        createdAt={Date.now()}
        likeCount={1}
        commentCount={1}
      />
    </div>
  );
};

export default PostList;
