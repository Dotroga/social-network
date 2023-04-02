import React from 'react';
import {UserType} from "../../../Redux/userReducer";
import User from "./User/User";
import Pagination from "./Pagination";

type UsersPropsType = {
  users: UserType []
  pages: number[]
  currentPage: number
  followingInProgress: string[]
  onPageChanged: (p: number)=>void
  follow: (id: string) => void
  unfollow: (id: string) => void
  setUsersId: (id: string) => void
}

const Users: React.FC<UsersPropsType> = (props) => {
  const {users, pages, currentPage, onPageChanged, follow, unfollow, setUsersId, followingInProgress} = props

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
          setUsersId={setUsersId}
        />
      )}
    </div>)
};

export default Users;