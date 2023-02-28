import React from 'react';
import s from './Post.module.css'
import {PostType} from "../../../../../Redux/profileReducer";




type PostPropsType = {
  posts: PostType[]
  addLike: (id: string)=>void
}

const Post: React.FC<PostPropsType> = ({posts, addLike}) => {

  return (
    <div>
      {posts.map(p=>
        <div key={p.id} className={s.post}>
          <span className={s.text}>{p.text}</span>
          <span className={s.like} onClick={()=>addLike(p.id)}>{p.like}</span>
        </div>)}
    </div>
  );
}

export default Post;