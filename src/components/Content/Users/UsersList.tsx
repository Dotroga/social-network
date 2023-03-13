import React from 'react';
import {UserType} from "../../../Redux/userReducer";
import axios from "axios";
import profileIcon from './../../../img/profileIconSmall.png'

type UsersListPropsType = {
  users: UserType []
  setUsers: (users: UserType[]) => void
  follow: (id: string) => void
}

const UsersList: React.FC<UsersListPropsType> = (
  {users, setUsers, follow}) => {
  const setUsersHandler = () => {
    if (users.length === 0) {
      axios.get('https://social-network.samuraijs.com/api/1.0/users')
        .then(response => {
          setUsers(response.data.items)
        })
    }
  }
  return (
    <div>
      <button onClick={setUsersHandler}>Set users</button>
      {users.map(u=>{
        return (<div key={u.id}>
          <div>
            <img
              style={{width: '100px'}}
              src={u.photos.small ? u.photos.small : profileIcon}
              alt=""
            />
            {u.name}
          </div>
          <button onClick={()=>follow(u.id)}>
            {u.follow ? 'Follow' : 'Unfollow'}
          </button>
        </div>)
      })}
    </div>
  );
};

export default UsersList;