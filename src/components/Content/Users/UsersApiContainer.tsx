import React from "react";
import axios from "axios";
import {UserType} from "../../../Redux/userReducer";
import Users from "./Users";
import Loading from './../../../img/loading.svg'

type UsersListPropsType = {
  users: UserType []
  pageSize: number
  totalUsersCount: number
  currentPage: number
  isFetching: boolean
  setUsers: (users: UserType[]) => void
  follow: (id: string) => void
  setCurrentPage: (currentPage: number) => void
  setTotalCount: (totalCount: number) => void
  toggleIsFetching: (isFetching: boolean) => void
}

class UsersApiContainer extends React.Component<UsersListPropsType, UserType []> { // наследуем классову компоненту у реакта

  componentDidMount() {
    this.props.toggleIsFetching(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.toggleIsFetching(false)
        this.props.setUsers(response.data.items)
        this.props.setTotalCount(response.data.totalCount)
      })
  }

  onPageChanged = (p: number) => {
    this.props.toggleIsFetching(true)
    this.props.setCurrentPage(p)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.toggleIsFetching(false)
        this.props.setUsers(response.data.items)
      })

  }

  render() {

    let pageCount =  Math.ceil(this.props.totalUsersCount / this.props.pageSize)
    let pages = []
    for (let i = 1; i <= pageCount; i++) {
      pages.push(i)
    }
    return<>
      {this.props.isFetching && <img src={Loading}/>}
      <Users
        users={this.props.users}
        pages={pages}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        follow={this.props.follow}/>
    </>
  }
}
export default UsersApiContainer