import {DispatchType} from "./reduxStore";
import {profileAPI} from "../api/api";
import {ProfilePageType} from "./StateTypes";

const initialState: ProfilePageType= {
  profile: {
    userId: -1,
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
  },
 status: ''
}

export const profileReducer = (state: ProfilePageType = initialState , action:ActionsType):ProfilePageType => {
  switch (action.type) {
    case "SET-USERS-PROFILE":
      return {...state, profile:{...action.profile}}
    case "SET-USERS-ID":
      return {...state, profile:{...state.profile, userId: action.id}}
    case "SET-STATUS":return {...state, status: action.status}
    default: return state
  }
}

type ActionsType =
  ReturnType<typeof setUserProfile>
  | ReturnType<typeof setUserId>
  | ReturnType<typeof setStatus>

export const setUserProfile = (profile: any) => ({type: 'SET-USERS-PROFILE', profile}as const)
export const setUserId = (id: number) => ({type: 'SET-USERS-ID', id}as const)
export const setStatus = (status: string) => ({type: 'SET-STATUS', status}as const)
export const getUserTK = (id: number) => (dispatch: DispatchType) => {
  profileAPI.getUserProfile(id).then(data =>
    dispatch(setUserProfile(data)))
}
export const getStatusTK = (id: number) => (dispatch: DispatchType) => {
  profileAPI.getStatus(id).then((data)=>{
    dispatch(setStatus(data))
  })
}
export const updateStatusTK = (status: string) => (dispatch: DispatchType) => {
  profileAPI.updateStatus(status).then(()=>{
    dispatch(setStatus(status))
  })
}
