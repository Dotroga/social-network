import React from 'react';
import s from './Profile.module.css'
import MyPost from "./MyPost/MyPost";
import {PostType} from "../../../index";

type ProfilePropsType = {
  posts: PostType[]
}
const Profile: React.FC<ProfilePropsType> = ({posts}) => {
  return (
      <div className='container'>
        <div className={s.profile}>
          Profile
        </div>
        <MyPost posts={posts}/>
      </div>

  );
}

export default Profile;