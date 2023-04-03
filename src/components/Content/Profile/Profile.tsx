import React from 'react';

import Loading from "../../../img/loading.svg";
import {ProfileType} from "../../../Redux/profileReducer";


type ProfilePropsType = {
  profile: ProfileType
}

export const Profile: React.FC<ProfilePropsType> = (props) => {
  if (!props.profile) {
    return  <img src={Loading} alt="loading"/>
  }
    return <div className='container'>
      {props.profile.fullName}
      <img src={props.profile.photos.large} alt=""/>
    </div>
  }



