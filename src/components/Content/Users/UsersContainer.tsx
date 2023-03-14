import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../../Redux/reduxStore";
import {followAC, getUsersAC, UserType} from "../../../Redux/userReducer";
import {Dispatch} from "redux";
import Users from "./Users";


type MapStateToPropsType = {
  users : UserType []
}
type MapDispatchToProps = {
  setUsers: (users: UserType[]) => void
  follow: (id: string) => void
}

const  mapStateToProps = (state: AppStateType):MapStateToPropsType=> {
  return {
    users: state.usersReducer
  }
}

const mapDispatchToProps = (dispatch: Dispatch):MapDispatchToProps => {
  return {
    setUsers: (users: UserType[]) => dispatch(getUsersAC(users)),
    follow: (id: string) => dispatch(followAC(id))
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer ;