import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../../Redux/reduxStore";
import {
  followAC,
  getUsersAC,
  setCurrentPageAC,
  setTotalCountAC,
  UsersPageType,
  UserType
} from "../../../Redux/userReducer";
import {Dispatch} from "redux";
import Users from "./UsersApiContainer";

type MapDispatchToProps = {
  setUsers: (users: UserType[]) => void
  follow: (id: string) => void
  setCurrentPage: (currentPage: number) => void
  setTotalCount: (totalCount: number) => void
}

const mapStateToProps = (state: AppStateType):UsersPageType=> {
  return {
    users: state.usersReducer.users,
    pageSize: state.usersReducer.pageSize,
    totalUsersCount: state.usersReducer.totalUsersCount,
    currentPage: state.usersReducer.currentPage
  }
}
const mapDispatchToProps = (dispatch: Dispatch):MapDispatchToProps => {
  return {
    setUsers: (users: UserType[]) => dispatch(getUsersAC(users)),
    follow: (id: string) => dispatch(followAC(id)),
    setCurrentPage: (currentPage: number) => dispatch(setCurrentPageAC(currentPage)),
    setTotalCount:  (totalCount: number) => dispatch(setTotalCountAC(totalCount))
  }
}
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

