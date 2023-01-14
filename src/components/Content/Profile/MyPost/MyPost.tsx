import React from 'react';
import s from './MyPost.module.css'
import Post from "./Post/Post";

export type PostType = {
  id: number
  text: string
}

const  message1: PostType = {
  id: 1,
  text: 'Hi, how are you?',
}
const  message2: PostType = {
  id: 2,
  text: 'I am Better all!',
}

function MyPost() {
  return (
    <div className={s.myPost}>
      <Post message={message1}/>
      <Post message={message2}/>
    </div>
  );
}

export default MyPost;
