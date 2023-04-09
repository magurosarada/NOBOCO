import { LargeNumberLike } from "crypto";

export type Post = {
  body:string;
  title:string;
  authorId:string;
  mainImageURL:string | null;
  createdAt:number;
  updatedAt:number |null;
  id:string;
  likeCount: number;
  place:string
}

export type Comment = {
  id: string;
  body: string;
  authorId:string;
  createdAt:number;
}  