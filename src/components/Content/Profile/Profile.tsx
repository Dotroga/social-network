import React, {ChangeEvent, KeyboardEvent} from 'react';
import s from './Profile.module.css'
import MyPost from "./MyPost/MyPost";
import {ProfilePageType} from "../../../Redux/store";


type ProfilePropsType = {
  profilePage: ProfilePageType
  textPostHandler: (text: string) => void
  addNewPost: () => void
}
const Profile: React.FC<ProfilePropsType> = (
  {
    profilePage,
    textPostHandler,
    addNewPost
  }) => {

  const textPostChange = (e: ChangeEvent<HTMLTextAreaElement>) =>
    textPostHandler(e.currentTarget.value)

  const pureOnEnter = (e: KeyboardEvent<HTMLTextAreaElement>) =>
   e.key === 'Enter' && addNewPost()

  return (
    <div className='container'>
      <div className={s.profile}>
        Profile
        <div>
            <textarea
              onChange={textPostChange}
              onKeyDown={pureOnEnter}
              value={profilePage.textForInputPost}
              placeholder={'text'}/>
          <button
            onClick={addNewPost}
          >Add
          </button>
        </div>
      </div>
      <MyPost posts={profilePage.posts}/>
    </div>

  );
}

export default Profile;