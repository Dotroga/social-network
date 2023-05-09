import {usersAPI} from "../api/api";
import {DispatchType} from "./reduxStore";

export type UserType = {
  name: string
  id: number
  followed: boolean
  photos: {
    small: string
    large: string
  }
  status: string
}
export type UsersPageType = {
  users: UserType[]
  pageSize: number
  totalUsersCount: number
  currentPage: number
  isFetching: boolean
  followingInProgress: number[]
}
const initialState: UsersPageType  = {
  users: [],
  pageSize: 20,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: []
}

const usersReducer = (state: UsersPageType = initialState, action: TharType ):UsersPageType => {
  switch (action.type) {
    case "FOLLOW": {
      const usersFollow = state.users.map(u=>u.id === action.id ? {...u, followed: true} : u)
      return {...state, users: usersFollow}
    }
    case "UNFOLLOW": {
      const usersUnfollow = state.users.map(u=>u.id === action.id ? {...u, followed: false} : u)
      return {...state, users: usersUnfollow}
    }
    case "TOGGLE-IS-FOLLOWING-PROGRESS":  {
      return action.progress ? {...state, followingInProgress: [...state.followingInProgress, action.id]}
        : {...state, followingInProgress: state.followingInProgress.filter((id) => id !== action.id)}
  }
    case "GET-USERS": return {...state, users: action.users}
    case "SET-CURRENT-PAGE":  return {...state, currentPage: action.currentPage}
    case "SET-USERS-COUNT": return {...state, totalUsersCount: action.totalCount}
    case "TOGGLE-IS-FETCHING": return {...state, isFetching: action.isFetching}

    default: return state
  }
}

type TharType = | ReturnType<typeof followSuccess>
  | ReturnType<typeof unfollowSuccess>
  | ReturnType<typeof getUsers>
  | ReturnType<typeof setCurrentPage>
  | ReturnType<typeof setTotalCount>
  | ReturnType<typeof toggleIsFetching>
  | ReturnType<typeof toggleIsFollowingProgress>

export const getUsers = (users: UserType[]) => ({type: 'GET-USERS', users} as const)
export const followSuccess = (id: number) => ({type: 'FOLLOW', id} as const)
export const unfollowSuccess  = (id: number) => ({type: 'UNFOLLOW', id} as const)
export const setCurrentPage = (currentPage: number) =>({type: 'SET-CURRENT-PAGE', currentPage} as const )
export const setTotalCount = (totalCount: number) => ({type: 'SET-USERS-COUNT', totalCount} as const )
export const toggleIsFetching = (isFetching: boolean) => ({type: 'TOGGLE-IS-FETCHING', isFetching} as const)
export const toggleIsFollowingProgress = (progress: boolean, id: number) =>
  ({type: 'TOGGLE-IS-FOLLOWING-PROGRESS', progress, id} as const )


export const getUsersTK = (currentPage: number, pageSize: number) => (dispatch: DispatchType) => {
    dispatch(toggleIsFetching(true))
    usersAPI.getUsers(currentPage, pageSize).then(data => {
      dispatch(toggleIsFetching(false))
      dispatch(getUsers(data.items))
      dispatch(setTotalCount(data.totalCount))
      dispatch(setCurrentPage(currentPage))
    })
  }
export const follow = (id: number) => (dispatch: DispatchType) => {
  dispatch(toggleIsFollowingProgress(true, id))
    usersAPI.follow(id).then(code => {
      if (code === 0 ) {
        dispatch(followSuccess(id))
        dispatch(toggleIsFollowingProgress(false, id))
      }
    })
}
export const unfollow = (id: number) => (dispatch: DispatchType) => {
  dispatch(toggleIsFollowingProgress(true, id))
  usersAPI.unfollow(id).then(code => {
    if (code === 0 ) {
      dispatch(unfollowSuccess(id))
      dispatch(toggleIsFollowingProgress(false, id))
    }
  })
}

export default usersReducer

// this.props.toggleIsFetching(true)
// usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
//   this.props.toggleIsFetching(false)
//   this.props.getUsers(data.items)
//   this.props.setTotalCount(data.totalCount)
// })


