import React from "react";
import { useAuth } from "../context/UserContext";
import { createComment } from "../lib/post";

const Addcomment = () => {
  const { user } = useAuth();
  if (!user) {
    return null;
  }
  return (
    <div className="flex border-t pt-4 items-center ">
      <img src={user.userImage} alt="" className="rounded-full h-10 w-10" />
      <input type="text" className="h-10 flex-1" placeholder="コメントを追加" />
      <button className="border rounded-full px-3 py-1">追加</button>
    </div>
  );
};

export default Addcomment;
