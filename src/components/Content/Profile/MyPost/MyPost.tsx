import React from 'react';
import s from './MyPost.module.css'
import Post from "./Post/Post";
import {ActionsType, PostType} from "../../../../Redux/store";

type MyPostPropsType = {
  posts: PostType[]
  dispatch: (action: ActionsType)=>void
}
const MyPost: React.FC<MyPostPropsType> = ({posts,dispatch}) => {
  return (
    <div className={s.myPost}>
      <Post posts={posts} dispatch={dispatch}/>
    </div>
  );
}

export default MyPost;
