import React from 'react';
import s from './Post.module.css'
import {addLikeAC, PostType} from "../../../../../Redux/profileReducer";
import {ActionsType} from "../../../../../Redux/profileReducer";



type PostPropsType = {
  posts: PostType[]
  dispatch: (action: ActionsType)=>void
}

const Post: React.FC<PostPropsType> = ({posts, dispatch}) => {

  const addLike = (postId: string) => {
    dispatch(addLikeAC(postId))
  }

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