import React, {ChangeEvent, KeyboardEvent} from 'react';
import s from './Profile.module.css'
import MyPost from "./MyPost/MyPost";
import {
  ActionsType, addPostAC,
  changeNewPostTextAC,
  ProfilePageType
} from "../../../Redux/store";


type ProfilePropsType = {
  profilePage: ProfilePageType
  dispatch: (action: ActionsType)=>void
}
const Profile: React.FC<ProfilePropsType> = (
  {
    profilePage,
    dispatch
  }) => {

  const textPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.currentTarget.value
    dispatch(changeNewPostTextAC(text))
  }
  const pureOnEnter = (e: KeyboardEvent<HTMLTextAreaElement>) =>
   e.key === 'Enter' && addPost

  const addPost = () => dispatch(addPostAC())

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
            onClick={addPost}
          >Add
          </button>
        </div>
      </div>
      <MyPost posts={profilePage.posts}/>
    </div>

  );
}

export default Profile;