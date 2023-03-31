import React from 'react';
import s from "./Users.module.css";
import {UserType} from "../../../Redux/userReducer";
import User from "./User/User";

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
  return (
    <div>
      {pages.map((p, i) =>
       <span
         key={i}
         className={currentPage === p ? s.activePage : s.page}
         onClick={() => onPageChanged(p)}>
         {p}
       </span>)}
      {users.map(u =>
        <User user={u} follow={follow} unfollow={unfollow} setUsersId={setUsersId}/>
      )}
    </div>)
};

export default Users;