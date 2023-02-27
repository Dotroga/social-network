import {v1} from "uuid";

type UserType = {
  id: string
  fullName: string
  follow : boolean
  status: string
  country: string
}
type UsersType =  {users: UserType[]}

const initialState: UsersType  = {
  users: [
    {id: v1(),follow: false, fullName: 'Vasili', status: 'I am a Boss', country: 'Belarus'},
    {id: v1(),follow: true, fullName: 'Aleks', status: '', country: 'Belarus'},
    {id: v1(),follow: false, fullName: 'Vladimir', status: 'I am a Boss', country: 'Russia'},
  ]
}

const userReducer = (state: UsersType = initialState, action: TharType ) => {
  switch (action.type) {
    case "FOLLOW": {
      return state.users.map(u=>u.id === action.id ? {...u, follow: !u.follow} : u)
    }
    case "SET-USERS": {
      return {...state, users: [...state.users, ...action.users]}
    }
    default:
      return state
  }
}
type TharType = FollowACType | SetUsersACType
type FollowACType = ReturnType<typeof followAC>
type SetUsersACType = ReturnType<typeof setUsersAC>

export const followAC = (id: string) => ({type: 'FOLLOW', id} as const)
export const setUsersAC = (users: UserType[]) => ({type: 'SET-USERS', users} as const)


export default userReducer


