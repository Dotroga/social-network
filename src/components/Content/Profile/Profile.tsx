import React, {ChangeEvent, KeyboardEvent} from 'react';
import s from './Profile.module.css'
import MyPost from "./MyPost/MyPost";
import {ProfilePageType} from "../../../Redux/profileReducer";




type ProfilePropsType = {
  profile: ProfilePageType
  writingNewPost: (text: string)=> void
  addPost: ()=> void
  addLike: (id: string)=> void
}
const Profile: React.FC<ProfilePropsType> = (
  {
    profile,
    writingNewPost,
    addPost,
    addLike,
  }) => {

  const textPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.currentTarget.value
    writingNewPost(text)
  }
  const pureOnEnter = (e: KeyboardEvent<HTMLTextAreaElement>) =>
   e.key === 'Enter' && addPost

  return (
    <div className='container'>
      <div className={s.profile}>
        Profile
        <div>
            <textarea
              onChange={textPostChange}
              onKeyDown={pureOnEnter}
              value={profile.textForInputPost}
              placeholder={'text'}/>
          <button
            onClick={addPost}
          >Add
          </button>
        </div>
      </div>
      <MyPost posts={profile.posts} addLike={addLike}/>
    </div>

  );
}

export default Profile;