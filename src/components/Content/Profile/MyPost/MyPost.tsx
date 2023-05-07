import React from 'react';
import Post from "./Post/Post";
import {PostType} from "../../../../Redux/postReducer";
import {SuperTextarea} from "../../../Super/SuperTextarea/SuperTextarea";
import {useFormik} from "formik";
import styled from "styled-components";
import {SuperButton} from "../../../Super/SuperButton/SuperButton";


type MyPostPropsType = {
  posts: PostType[]
  addLike: (id: string)=>void
  addPost: (post: string)=>void
}
export const MyPost: React.FC<MyPostPropsType> = (props) => {
  const  {posts,  addLike, addPost} = props

  const formik = useFormik({
    initialValues: {newPost: '',},
    validate: (values) => {
      let errors: {post?: string} = {}
      if (!values.newPost) errors.post = 'Email required'
      return errors
    },
    onSubmit: values => {
      addPost(values.newPost)

    }
  })
  console.log(formik.values)

  // const pureOnEnter = (e: any) =>
  //  e.key === 'Enter' && addPost

  return (<Wrapper>
      {/*<textarea name="" id="" cols="30" rows="10"></textarea>*/}
      <form onSubmit={formik.handleSubmit}>
        <SuperTextarea
          {...formik.getFieldProps('newPost')}
          error={''}
        />
        <SuperButton title='Add' type='submit'/>
      </form>
      <Post posts={posts} addLike={addLike}/>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 10px 0;
  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    button {
      flex: none;
    }
  }
`

