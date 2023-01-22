import React from 'react';
import s from './Post.module.css'
import {PostType} from '../MyPost'

type MyPostPropsType = {
  message: PostType[]
}

function Post(props: MyPostPropsType) {
  return (
    <div className={s.post}>
      {props.message.map(p=><div key={p.id}>{p.text}</div>)}
    </div>
  );
}

export default Post;