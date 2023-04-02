import React from 'react';
import profileIcon from "../../../../img/profileIconSmall.png";
import {usersAPI} from "../../../../api/api";
import {useNavigate} from "react-router-dom";
import {UserType} from "../../../../Redux/userReducer";

type UserPropsType = {
  user: UserType
  disabled: boolean
  follow: (id: string) => void
  unfollow: (id: string) => void
  setUsersId: (id: string) => void
  toggleIsFollowingProgress: (progress: boolean, id: string) => void
}

const User: React.FC<UserPropsType> = (props) => {
  const {user: user, follow, unfollow, setUsersId,
    toggleIsFollowingProgress, disabled} = props
  const navigate = useNavigate()
  const openProfile = () => {
    navigate(`/profile/${user.id}`)
    setUsersId(user.id)
  }
  return (
          <div >
            <div>
              <img
                onClick={openProfile}
                style={{width: '100px'}}
                src={user.photos.small ? user.photos.small : profileIcon}
                alt=""/>
              {user.name}
            </div>
            {user.followed
              ? <button
                onClick={() => {
                  toggleIsFollowingProgress(true, user.id)
                  usersAPI.follow(user.id).then(code => {
                    if (code === 0 ) {
                      unfollow(user.id)
                      toggleIsFollowingProgress(false, user.id)
                    }})}}
              disabled={disabled}
              >
                {user.followed ? 'Unfollow' : 'Follow'}
              </button>
              : <button
                onClick={() => {
                  toggleIsFollowingProgress(true, user.id)
                  usersAPI.unfollow(user.id).then(code => {
                      if (code === 0 ) {
                        follow(user.id)
                        toggleIsFollowingProgress(false, user.id)
                      }})}}
                disabled={disabled}
              >
                {user.followed ? 'Unfollow' : 'Follow'}
              </button>
            }
          </div>
  );
};

export default User;