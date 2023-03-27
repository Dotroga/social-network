import React, {ChangeEvent, KeyboardEvent} from 'react';
import s from './Profile.module.css'
import MyPost from "./MyPost/MyPost";
import {ProfilePageType, setUsersProfile} from "../../../Redux/profileReducer";




type ProfilePropsType = {
  a: number
  setUsersProfile: (profile: any) => void
  // profile: ProfilePageType
  // writingNewPost: (text: string)=> void
  // addPost: ()=> void
  // addLike: (id: string)=> void
}

export const Profile: React.FC<any> = ({a,setUsersProfile}) => {

  // const textPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    //   const text = e.currentTarget.value
    //   writingNewPost(text)
    // }
    // const pureOnEnter = (e: KeyboardEvent<HTMLTextAreaElement>) =>
    //  e.key === 'Enter' && addPost

    return <div className='container'>
        {/*<div className={s.profile}>*/}
        {/*  Profile*/}
        {/*    <div>*/}
        {/*        <textarea*/}
        {/*          onChange={textPostChange}*/}
        {/*          onKeyDown={pureOnEnter}*/}
        {/*          value={profile.textForInputPost}*/}
        {/*          placeholder={'text'}/>*/}
        {/*      <button*/}
        {/*        onClick={addPost}*/}
        {/*      >Add*/}
        {/*      </button>*/}
        {/*    </div>*/}
        {/*</div>*/}
        {/*<MyPost posts={profile.posts} addLike={addLike}/>*/}
      </div>
  }


