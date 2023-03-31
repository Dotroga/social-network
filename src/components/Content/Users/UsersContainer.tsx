import React from "react";
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
import {usersAPI} from "../../../api/api";

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
    usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
        this.props.toggleIsFetching(false)
        this.props.getUsers(data.items)
        this.props.setTotalCount(data.totalCount)
      })
  }

  onPageChanged = (pageNumber: number) => {
    this.props.toggleIsFetching(true)
    this.props.setCurrentPage(pageNumber)
    usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
        this.props.toggleIsFetching(false)
        this.props.getUsers(data.items)
      })
  }

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
        setUsersId={this.props.setUsersId}/>
    </>
  }
}

export default connect(
  (state: AppStateType): UsersPageType => ({...state.usersReducer}),
  {getUsers, follow, unfollow, setCurrentPage, setTotalCount, toggleIsFetching, setUsersId}
)(UsersContainer)


