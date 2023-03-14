
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
    case "GET-USERS": {
      return [...state, ...action.users]
    }
    default:
      return state
  }
}
type TharType = FollowACType | GetUsersACType
type FollowACType = ReturnType<typeof followAC>
type GetUsersACType = ReturnType<typeof getUsersAC>

export const getUsersAC = (users: UserType[]) => ({type: 'GET-USERS', users} as const)
export const followAC = (id: string) => ({type: 'FOLLOW', id} as const)


export default usersReducer


