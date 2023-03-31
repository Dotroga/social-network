
const initialState= {
  userId: '25874',
  lookingForAJob: false,
  lookingForAJobDescription: '',
  fullName: '',
  contacts: {},
  github: '',
  vk: '',
  facebook: '',
  instagram: '',
  twitter: '',
  website: '',
  youtube: '',
  mainLink: '',
  photos: {
    small: '',
    large: ''
  }
}

export type ProfileType = typeof initialState

export const profileReducer = (state:ProfileType = initialState , action:ActionsType):ProfileType => {
  switch (action.type) {
    case "SET-USERS-PROFILE":
      return {...action.profile}
    case "SET-USERS-ID":
      return {...state, userId: action.id}
    default: return state
  }
}

type ActionsType = ReturnType<typeof setUsersProfile>
| ReturnType<typeof setUsersId>

export const setUsersProfile = (profile: any) => ({type: 'SET-USERS-PROFILE', profile}) as const
export const setUsersId = (id: string) => ({type: 'SET-USERS-ID', id}) as const