import React from 'react';
import s from './MyPost.module.css'
import Post from "./Post/Post";

export type PostType = {
  id: number
  text: string
}

const postElements: PostType[] = [
  {id: 1, text: 'Hi, how are you?',},
  {id: 2, text: 'I am Better all!',}
]


function MyPost() {
  return (
    <div className={s.myPost}>
      <Post message={postElements}/>
    </div>
  );
}

export default MyPost;
