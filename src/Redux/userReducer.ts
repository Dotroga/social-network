

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
  totalUsersCount: number
  currentPage: number
  isFetching: boolean
}
const initialState: UsersPageType  = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false
}


const usersReducer = (state: UsersPageType = initialState, action: TharType ):UsersPageType => {
  switch (action.type) {
    case "FOLLOW": {
      const usersFollow = state.users.map(u=>u.id === action.id ? {...u, follow: !u.follow} : u)
      return {...state, users: usersFollow}
    }
    case "GET-USERS": return {...state, users: action.users}
    case "SET-CURRENT-PAGE":  return {...state, currentPage: action.currentPage}
    case "SET-USERS-COUNT": return {...state, totalUsersCount: action.totalCount}
    case "TOGGLE-IS-FETCHING": return {...state, isFetching: action.isFetching}
    default: return state
  }
}

type TharType = FollowACType
  | GetUsersACType
  | setCurrentPageACType
  | setTotalCountACType
  | toggleIsFetchingACType

type FollowACType = ReturnType<typeof follow>
type GetUsersACType = ReturnType<typeof getUsers>
type setCurrentPageACType = ReturnType<typeof setCurrentPage>
type setTotalCountACType = ReturnType<typeof setTotalCount>
type toggleIsFetchingACType = ReturnType<typeof toggleIsFetching>

export const getUsers = (users: UserType[]) => ({type: 'GET-USERS', users} as const)
export const follow = (id: string) => ({type: 'FOLLOW', id} as const)
export const setCurrentPage = (currentPage: number) =>({type: 'SET-CURRENT-PAGE', currentPage} as const )
export const setTotalCount = (totalCount: number) => ({type: 'SET-USERS-COUNT', totalCount} as const )
export const toggleIsFetching = (isFetching: boolean) => ({type: 'TOGGLE-IS-FETCHING', isFetching} as const)
export default usersReducer


