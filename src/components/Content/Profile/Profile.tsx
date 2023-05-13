import React from 'react';

import Loading from "../../../img/loading.svg";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfileType} from "../../../Redux/StateTypes";


type ProfilePropsType = {
  profile: ProfileType
  status: string
  updateStatus: (status: string) => void
}

export const Profile: React.FC<ProfilePropsType> = (props) => {
  if (!props.profile) {
    return  <img src={Loading} alt="loading"/>
  }
    return <div className='container'>
      <h1>{props.profile.fullName}</h1>
      <img src={props.profile.photos.large} alt=""/>
      <ProfileInfo status={props.status} updateStatus={props.updateStatus}/>
    </div>
  }



