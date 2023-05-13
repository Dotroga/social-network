import React from 'react';
import {ProfileStatus} from "./ProfileStatus/ProfileStatus";

export type ProfileInfoPropsType = {
  status: string
  updateStatus: (status: string) => void
}

export const ProfileInfo = (props: ProfileInfoPropsType) => {
  return (
    <div>
      <ProfileStatus {...props}/>
    </div>
  );
};
