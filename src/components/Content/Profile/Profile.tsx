import React from 'react';

import Loading from "../../../img/loading.svg";


type ProfilePropsType = {
  profile?: any
  setUsersProfile: (profile: any) => void
}

export const Profile: React.FC<ProfilePropsType> = (props) => {
  if (!props.profile) {
    return  <img src={Loading} alt="loading"/>
  }
    return <div className='container'>
      <img src={props.profile.photos.large} alt=""/>
    </div>
  }



