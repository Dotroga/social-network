

export type UserType = {
  name: string
  id: string
  follow: boolean
  photos: {
    small: string
    large: string
  }
  status: string
}
export type UsersPageType = {
  users: UserType[]
  pageSize: number
  totalUsersCount: number,
  currentPage: number
}
const initialState: UsersPageType  = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1
}


const usersReducer = (state: UsersPageType = initialState, action: TharType ):UsersPageType => {
  switch (action.type) {
    case "FOLLOW": {
      return {...state, users: state.users
          .map(u=>u.id === action.id ? {...u, follow: !u.follow} : u)}
    }
    case "GET-USERS": return {...state, users: action.users}
      // return {...state, users: [...state.users, ...action.users]}
    case "SET-CURRENT-PAGE":  return {...state, currentPage: action.currentPage}
    case "SET-USERS-COUNT": return {...state, totalUsersCount: action.totalCount}
    default:
      return state
  }
}
type TharType = FollowACType
  | GetUsersACType
  | setCurrentPageACType
  | setTotalCountACType
type FollowACType = ReturnType<typeof followAC>
type GetUsersACType = ReturnType<typeof getUsersAC>
type setCurrentPageACType = ReturnType<typeof setCurrentPageAC>
type setTotalCountACType = ReturnType<typeof setTotalCountAC>

export const getUsersAC = (users: UserType[]) => ({type: 'GET-USERS', users} as const)
export const followAC = (id: string) => ({type: 'FOLLOW', id} as const)
export const setCurrentPageAC = (currentPage: number) =>({type: 'SET-CURRENT-PAGE', currentPage} as const )
export const setTotalCountAC = (totalCount: number) => ({type: 'SET-USERS-COUNT', totalCount} as const )

export default usersReducer


