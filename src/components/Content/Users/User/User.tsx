import React from 'react';
import profileIcon from "../../../../img/profileIconSmall.png";
import {useNavigate} from "react-router-dom";
import {UserType} from "../../../../Redux/userReducer";

type UserPropsType = {
  user: UserType
  disabled: boolean
  follow: (id: string) => void
  unfollow: (id: string) => void
  setUsersId: (id: string) => void
}

const User: React.FC<UserPropsType> = (props) => {
  const {user: user, follow, unfollow, setUsersId, disabled} = props
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
                onClick={() => unfollow(user.id)}
                disabled={disabled}
              >Unfollow</button>
              : <button
                onClick={() => follow(user.id)}
                disabled={disabled}
              >Follow</button>
            }
          </div>
  );
};

export default User;