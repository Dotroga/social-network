import React from 'react';
import s from './Post.module.css'
import {ActionsType, addLikeAC, PostType} from "../../../../../Redux/store";


type PostPropsType = {
  posts: PostType[]
  dispatch: (action: ActionsType)=>void
}

const Post: React.FC<PostPropsType> = ({posts, dispatch}) => {

  const addLike = (postsId: string) => {
    dispatch(addLikeAC(postsId))
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