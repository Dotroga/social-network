import React, {ChangeEvent} from 'react';
import s from './MyPost.module.css'
import Post from "./Post/Post";
import {PostType} from "../../../../Redux/postReducer";


type MyPostPropsType = {
  posts: PostType[]
  textForInputPost: string
  addLike: (id: string)=>void
  writingNewPost: (text: string)=>void
  addPost: ()=>void
}
export const MyPost: React.FC<MyPostPropsType> = (props) => {
  const  {posts, textForInputPost, addLike, writingNewPost, addPost} = props

  const textPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.currentTarget.value
    writingNewPost(text)
  }
  const pureOnEnter = (e: any) =>
   e.key === 'Enter' && addPost
  return (<div className={s.myPost}>
      <div>
        <textarea
          onChange={textPostChange}
          onKeyDown={pureOnEnter}
          value={textForInputPost}
          placeholder={'text'}/>
        <button onClick={addPost}>Add</button>
      </div>
      <Post posts={posts} addLike={addLike}/>
    </div>
  );
}

