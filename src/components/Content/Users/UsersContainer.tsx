import React from "react";
import {connect} from "react-redux";
import UsersList from "./UsersList";
import {AppStateType} from "../../../Redux/reduxStore";
import {followAC, setUsersAC, UsersType, UserType} from "../../../Redux/userReducer";
import {Dispatch} from "redux";
import MessagesContainer from "../Dialogs/Messages/MessegesContainer";




type MapStateToPropsType = {
  users : UsersType
}

const  mapStateToProps = (state: AppStateType):MapStateToPropsType=> {
  return {
    users: state.usersReducer
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setUsers: (users: UserType[]) => dispatch(setUsersAC(users)),
    follow: (id: string) => dispatch(followAC(id))
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersList)

export default UsersContainer ;