import {DispatchType} from "./reduxStore";
import {profileAPI} from "../api/api";

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

type ActionsType = ReturnType<typeof setUserProfile>
| ReturnType<typeof setUserId>

export const setUserProfile = (profile: any) => ({type: 'SET-USERS-PROFILE', profile}) as const
export const setUserId = (id: string) => ({type: 'SET-USERS-ID', id}) as const
export const getUserTK = (id: string) => (dispatch: DispatchType) => {
  profileAPI.getUserProfile(id).then(data =>
    dispatch(setUserProfile(data)))
}