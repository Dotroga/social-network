import React from 'react';
import profileIcon from "../../../../img/profileIconSmall.png";
import {usersAPI} from "../../../../api/api";
import {useNavigate} from "react-router-dom";
import {UserType} from "../../../../Redux/userReducer";

type UserPropsType = {
  user: UserType
  follow: (id: string) => void
  unfollow: (id: string) => void
  setUsersId: (id: string) => void
}

const User: React.FC<UserPropsType> = (props) => {
  const {user: user, follow, unfollow, setUsersId} = props
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
                  usersAPI.follow(user.id).then(code => code === 0 && unfollow(user.id))}}>
                {user.followed ? 'Unfollow' : 'Follow'}
              </button>
              : <button
                onClick={() => {
                  usersAPI.unfollow(user.id).then(code => code === 0 && follow(user.id))}}>
                {user.followed ? 'Unfollow' : 'Follow'}
              </button>
            }
          </div>
  );
};

export default User;