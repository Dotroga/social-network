import React from "react";
import {
  follow, getUsersTK, setCurrentPage, unfollow,
  UsersPageType, UserType
} from "../../../Redux/userReducer";
import Users from "./Users";
import Loading from './../../../img/loading.svg'
import {AppStateType} from "../../../Redux/reduxStore";
import {connect} from "react-redux";
import {setUserId} from "../../../Redux/profileReducer";

type UsersListPropsType = {
  users: UserType []
  pageSize: number
  totalUsersCount: number
  currentPage: number
  isFetching: boolean
  followingInProgress:  number[]
  follow: (id: number) => void
  unfollow: (id: number) => void
  setCurrentPage: (currentPage: number) => void
  setUserId: (id: number) => void
  getUsersTK: (currentPage: number, pageSize: number) => void
}
class UsersContainer extends React.Component<UsersListPropsType, UserType[]> {

  componentDidMount() {
    this.props.getUsersTK(this.props.currentPage, this.props.pageSize)
  }
  onPageChanged = (pageNumber: number) =>
    this.props.getUsersTK(pageNumber, this.props.pageSize)

  render() {
    const  pageCount =  Math.ceil(this.props.totalUsersCount / this.props.pageSize)
    const currentPage = this.props.currentPage
    const pages = () => {
      const pages = [1]
      for (let i = currentPage - 8; i < currentPage + 8; i++)
        i <= 1 || i < pageCount && pages.push(i)
      pages.push(pageCount)
      return pages
    }
    return<>
      {this.props.isFetching && <img src={Loading} alt="loading"/>}
      <Users
        users={this.props.users}
        pages={pages()}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        setUserId={this.props.setUserId}
        followingInProgress={this.props.followingInProgress}
      />
    </>
  }
}

export default connect(
  (state: AppStateType): UsersPageType => ({...state.usersReducer}),
  {follow, unfollow, setCurrentPage, setUserId, getUsersTK}
)(UsersContainer)


