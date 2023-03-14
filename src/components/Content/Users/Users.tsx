import React from "react";
import profileIcon from "../../../img/profileIconSmall.png";
import axios from "axios";
import {UserType} from "../../../Redux/userReducer";

type UsersListPropsType = {
  users: UserType []
  setUsers: (users: UserType[]) => void
  follow: (id: string) => void
}

class Users extends React.Component<UsersListPropsType, UserType []> { // наследуем классову компоненту у реакта

  componentDidMount() {
    axios.get('https://social-network.samuraijs.com/api/1.0/users')
      .then(response => this.props.setUsers(response.data.items))
  }

  render() {
    return  <div>
      {this.props.users.map(u=>{
        return (<div key={u.id}>
          <div>
            <img
              style={{width: '100px'}}
              src={u.photos.small ? u.photos.small : profileIcon}
              alt=""
            />
            {u.name}
          </div>
          <button onClick={()=>this.props.follow(u.id)}>
            {u.follow ? 'Follow' : 'Unfollow'}
          </button>
        </div>)
      })}
    </div>
  }
}
export default Users