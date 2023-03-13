
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

// const initialState: UserType[] = [
//     {id: v1(),follow: false, name: 'Vasili', status: 'I am a Boss',photos:{ small: '', large: ''}},
//     {id: v1(),follow: true, name: 'Aleks', status: '',photos:{ small: '', large: ''}},
//     {id: v1(),follow: false, name: 'Vladimir', status: 'I am a Boss',photos:{ small: '', large: ''}},
//   ]

const usersReducer = (state: UserType[] = [], action: TharType ):UserType[] => {
  switch (action.type) {
    case "FOLLOW": {
      return state.map(u=>u.id === action.id ? {...u, follow: !u.follow} : u)
    }
    case "SET-USERS": {
      return [...state, ...action.users]
    }
    default:
      return state
  }
}
type TharType = FollowACType | SetUsersACType
type FollowACType = ReturnType<typeof followAC>
type SetUsersACType = ReturnType<typeof setUsersAC>

export const setUsersAC = (users: UserType[]) => ({type: 'SET-USERS', users} as const)
export const followAC = (id: string) => ({type: 'FOLLOW', id} as const)


export default usersReducer


