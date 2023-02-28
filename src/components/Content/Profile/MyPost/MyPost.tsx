import React from 'react';
import s from './MyPost.module.css'
import Post from "./Post/Post";
import {PostType} from "../../../../Redux/profileReducer";

type MyPostPropsType = {
  posts: PostType[]
  addLike: (id: string)=>void
}
const MyPost: React.FC<MyPostPropsType> = ({posts,addLike}) => {
  return (
    <div className={s.myPost}>
      <Post posts={posts} addLike={addLike}/>
    </div>
  );
}

export default MyPost;
