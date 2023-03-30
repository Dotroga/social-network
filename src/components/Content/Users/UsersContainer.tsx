import React from "react";
import axios from "axios";
import {
  follow,
  getUsers,
  setCurrentPage,
  setTotalCount,
  toggleIsFetching, unfollow,
  UsersPageType,
  UserType
} from "../../../Redux/userReducer";
import Users from "./Users";
import Loading from './../../../img/loading.svg'
import {AppStateType} from "../../../Redux/reduxStore";
import {connect} from "react-redux";
import {setUsersId} from "../../../Redux/profileReducer";

type UsersListPropsType = {
  users: UserType []
  pageSize: number
  totalUsersCount: number
  currentPage: number
  isFetching: boolean
  getUsers: (users: UserType[]) => void
  follow: (id: string) => void
  unfollow: (id: string) => void
  setCurrentPage: (currentPage: number) => void
  setTotalCount: (totalCount: number) => void
  toggleIsFetching: (isFetching: boolean) => void
  setUsersId: (id: string) => void
}
class UsersContainer extends React.Component<UsersListPropsType, UserType[]> { // наследуем классову компоненту у реакта

  componentDidMount() {
    this.props.toggleIsFetching(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
      {withCredentials: true})
      .then(response => {
        this.props.toggleIsFetching(false)
        this.props.getUsers(response.data.items)
        this.props.setTotalCount(response.data.totalCount)
      })
  }

  onPageChanged = (p: number) => {
    this.props.toggleIsFetching(true)
    this.props.setCurrentPage(p)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`,
      {withCredentials: true})
      .then(response => {
        this.props.toggleIsFetching(false)
        this.props.getUsers(response.data.items)
      })

  }

  render() {

    let pageCount =  Math.ceil(this.props.totalUsersCount / this.props.pageSize)
    let pages = []
    for (let i = 1; i <= pageCount; i++) {
      pages.push(i)
    }
    return<>
      {this.props.isFetching && <img src={Loading} alt="loading"/>}
      <Users
        users={this.props.users}
        pages={pages}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        setUsersId={this.props.setUsersId}/>
    </>
  }
}

export default connect(
  (state: AppStateType): UsersPageType => ({...state.usersReducer}),
  {getUsers, follow, unfollow, setCurrentPage, setTotalCount, toggleIsFetching, setUsersId}
)(UsersContainer)


