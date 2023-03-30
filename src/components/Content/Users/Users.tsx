import React from 'react';
import s from "./Users.module.css";
import profileIcon from "../../../img/profileIconSmall.png";
import {UserType} from "../../../Redux/userReducer";
import {useNavigate} from "react-router-dom";
import axios from "axios";

type UsersPropsType = {
  users: UserType []
  pages: number[]
  currentPage: number
  onPageChanged: (p: number)=>void
  follow: (id: string) => void
  unfollow: (id: string) => void
  setUsersId: (id: string) => void
}

const Users: React.FC<UsersPropsType> = (props) => {
  const {users, pages, currentPage, onPageChanged, follow, unfollow, setUsersId} = props
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
          {u.followed
          ?  <button onClick={() => {
              axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                {withCredentials: true,
                  headers: {'API-KEY': '7bc2302e-d37a-46c7-ba9d-fd7a4a394831'}
                })
                .then(response => {
                  response.data.resultCode === 0 && unfollow(u.id)
                })
            }}>{u.followed ?  'Unfollow'  :  'Follow' }</button>
          :  <button onClick={() => {
              console.log(u)
              axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                {}, {withCredentials: true,
                  headers: {'API-KEY': '7bc2302e-d37a-46c7-ba9d-fd7a4a394831'}})
                .then(response => {
                  response.data.resultCode === 0 && follow(u.id)
                  console.log(u.name)
                  console.log(u.followed)
                })
            }}>{u.followed ? 'Unfollow' : 'Follow' }</button>
              }
        </div>)
    })}
  </div>)
};

export default Users;