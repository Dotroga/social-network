import React from 'react';
import {UserType} from "../../../Redux/userReducer";
import User from "./User/User";
import Pagination from "./Pagination";

type UsersPropsType = {
  users: UserType []
  pages: number[]
  currentPage: number
  followingInProgress: number[]
  onPageChanged: (p: number)=>void
  follow: (id: number) => void
  unfollow: (id: number) => void
  setUserId: (id: number) => void
}

const Users: React.FC<UsersPropsType> = (props) => {
  const {users, pages, currentPage, onPageChanged, follow, unfollow, setUserId, followingInProgress} = props

  return (
    <div>
      <Pagination pages={pages} currentPage={currentPage} callBack={onPageChanged}/>
      {users.map(u =>
        <User
          disabled={followingInProgress.some(id=>id === u.id)}
          key={u.id}
          user={u}
          follow={follow}
          unfollow={unfollow}
          setUsersId={setUserId}
        />
      )}
    </div>)
};

export default Users;