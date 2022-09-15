import Link from 'next/link'
import React, { FC } from 'react'

type Props = {
  postImageURL:string;
  postId:string;
  postURL:string;
}
let ProfilePost:FC<Props> = ({
  postImageURL,
  postURL
}) => {
  return (
    <div>
      <div className="grid-cols-3">
        <Link href={postURL}><a><img src={postImageURL} alt=""/></a></Link>
        <Link href={postURL}><a><img src={postImageURL} alt=""/></a></Link>
      </div>  
    </div>
  )
}

export default ProfilePost
