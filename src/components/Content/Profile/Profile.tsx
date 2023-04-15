import React from 'react';

import Loading from "../../../img/loading.svg";
import {ProfileType} from "../../../Redux/profileReducer";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";


type ProfilePropsType = {
  profile: ProfileType
}

export const Profile: React.FC<ProfilePropsType> = (props) => {
  if (!props.profile) {
    return  <img src={Loading} alt="loading"/>
  }
    return <div className='container'>
      <h1>{props.profile.fullName}</h1>
      <img src={props.profile.photos.large} alt=""/>
      <ProfileInfo/>
    </div>
  }



