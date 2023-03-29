import React from 'react';
import s from "./Users.module.css";
import profileIcon from "../../../img/profileIconSmall.png";
import {UserType} from "../../../Redux/userReducer";
import {useNavigate} from "react-router-dom";

type UsersPropsType = {
  users: UserType []
  pages: number[]
  currentPage: number
  onPageChanged: (p: number)=>void
  follow: (id: string) => void
  setUsersId: (id: string) => void
}

const Users: React.FC<UsersPropsType> = (props) => {
  const {users, pages, currentPage, onPageChanged, follow, setUsersId} = props
  const navigate = useNavigate()

    return(
  <div>
    {pages.map((p, i) =>
      <span
        key={i}
        className={currentPage === p ? s.activePage : s.page}
        onClick={() => onPageChanged(p)}>
          {p}
        </span>)}
    {users.map(u => {
      const openProfile = () => {
        navigate(`/profile/${u.id}`)
        setUsersId(u.id)
      }
      return (
        <div key={u.id}>
          <div>
            <img
              onClick={openProfile}
              style={{width: '100px'}}
              src={u.photos.small ? u.photos.small : profileIcon}
              alt=""/>
            {u.name}
          </div>
          <button onClick={() => follow(u.id)}>
            {u.follow ? 'Follow' : 'Unfollow'}
          </button>
        </div>)
    })}
  </div>)
};

export default Users;