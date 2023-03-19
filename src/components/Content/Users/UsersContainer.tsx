import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../../Redux/reduxStore";
import {
  followAC,
  getUsersAC,
  setCurrentPageAC,
  setTotalCountAC, toggleIsFetchingAC,
  UsersPageType,
} from "../../../Redux/userReducer";
import UsersApiContainer from "./UsersApiContainer";

const mapStateToProps = (state: AppStateType):UsersPageType=> {
  const {users, pageSize, totalUsersCount, currentPage, isFetching} = state.usersReducer
  return {users, pageSize, totalUsersCount, currentPage, isFetching}
}

export const UsersContainer = connect(mapStateToProps, {
  setUsers: getUsersAC,
  follow: followAC,
  setCurrentPage: setCurrentPageAC,
  setTotalCount: setTotalCountAC,
  toggleIsFetching: toggleIsFetchingAC
})(UsersApiContainer)


