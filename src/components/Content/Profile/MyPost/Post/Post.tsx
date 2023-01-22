import React from 'react';
import s from './Post.module.css'
import {PostType} from "../../../../../Redux/state";


type PostPropsType = {
  posts: PostType[]
}

const Post: React.FC<PostPropsType> = ({posts}) => {
  return (
    <div className={s.post}>
      {posts.map(p=><div key={p.id}>{p.text}</div>)}
    </div>
  );
}

export default Post;