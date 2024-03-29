import { collection, doc, setDoc } from "@firebase/firestore";
import { useRouter } from "next/router";
import { useAuth } from "../context/UserContext";
import { db } from "../firebase/client";
import { Comment, Post } from "../types/post";

export  const createPost = (data: Post) => {
  const ref = doc(collection(db, "posts"));
  const router = useRouter()
  const {firebaseUser} = useAuth();
  if(!firebaseUser){
    router.push("/signup")
  }
  const post: Post = {
    id: ref.id,
    title: data.title,
    body: data.body,
    createdAt: Date.now(),
    updatedAt: null,
    authorId: firebaseUser!.uid,
    mainImageURL: "",
    likeCount:data.likeCount,
    place: data.place,
  };

  return setDoc(ref, post).then(() => {
    alert("投稿完了");
  });
}

export const createComment = ({postId, body, authorId}: {
  postId: string;
  body: string;
  authorId: string;
}) => {
  const ref = doc(collection(db, `posts/${postId}/comments`));
  const comment: Comment = {
    id: ref.id,
    body,
    createdAt: Date.now(),
    authorId,
  };

  return setDoc(ref, comment).then(() => {
    alert("comment完了");
  });
}