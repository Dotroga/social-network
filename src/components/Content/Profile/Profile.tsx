import React from 'react';
import s from './Profile.module.css'
import MyPost from "./MyPost/MyPost";

function Profile() {
  return (
      <div className='container'>
        <div className={s.profile}>
          Profile
        </div>
        <MyPost/>
      </div>

  );
}

export default Profile;