import { LargeNumberLike } from "crypto";

export type Post = {
  body:string;
  title:string;
  authorId:string;
  mainImageURL:string;
  createdAt:number;
  updatedAt:number |null;
  likeCount:number;
  id:string;
  place:string
}

export type Comment = {
  id: string;
  body: string;
  authorId:string;
  createdAt:number;
}