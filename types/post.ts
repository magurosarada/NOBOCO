export type Post = {
  body:string;
  title:string;
  authorId:string;
  mainImageURL:string;
  createdAt:number;
  updatedAt:number |null;
  id:string;
  place:string
}

export type Comment = {
  id: string;
  body: string;
  authorId:string;
  createdAt:number;
}