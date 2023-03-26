import React from 'react';
import s from "./Users.module.css";
import profileIcon from "../../../img/profileIconSmall.png";
import {UserType} from "../../../Redux/userReducer";
import {NavLink} from "react-router-dom";

type UsersPropsType = {
  users: UserType []
  pages: number[]
  currentPage: number
  onPageChanged: (p: number)=>void
  follow: (id: string) => void
}

const Users: React.FC<UsersPropsType> = (props) => {
  const {users, pages, currentPage, onPageChanged, follow} = props
  return  <div>
    {pages.map((p, i)=>
      <span
        key={i}
        className={currentPage === p ? s.activePage : s.page}
        onClick={()=>onPageChanged(p)}>
          {p}
        </span>)}
    {users.map(u=>{
      return (
        <div key={u.id}><div>
          <NavLink to={`/profile/${u.id}`}>
            <img
              style={{width: '100px'}}
              src={u.photos.small ? u.photos.small : profileIcon}
              alt=""/>
          </NavLink>
          {u.name}
        </div>
        <button onClick={()=>follow(u.id)}>
          {u.follow ? 'Follow' : 'Unfollow'}
        </button>
      </div>)
    })}
  </div>
};

export default Users;