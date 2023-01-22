import React from 'react';
import s from './MyPost.module.css'
import Post from "./Post/Post";
import {PostType} from "../../../../index";

type MyPostPropsType = {
  posts: PostType[]
}
const MyPost: React.FC<MyPostPropsType> = ({posts}) => {
  return (
    <div className={s.myPost}>
      <Post posts={posts}/>
    </div>
  );
}

export default MyPost;
