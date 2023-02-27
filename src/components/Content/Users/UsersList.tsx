import React from 'react';
import {UsersType, UserType} from "../../../Redux/userReducer";

type UsersListPropsType = {
  users: UsersType
  setUsers: (users: UserType[]) => void
  follow: (id: string) => void
}

const UsersList: React.FC<UsersListPropsType> = (
  {users, setUsers, follow}) => {

  return (
    <div>
      {users.users.map(u=>{
        return (<div key={u.id}>
          {u.fullName}
          <button onClick={()=>follow(u.id)}>
            {u.follow ? 'Follow' : 'Unfollow'}
          </button>
        </div>)
      })}
    </div>
  );
};

export default UsersList;