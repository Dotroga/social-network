import {DispatchType} from "./reduxStore";
import {profileAPI} from "../api/api";
import {ProfilePageType} from "./StateTypes";

const initialState: ProfilePageType= {
  profile: {
    userId: 0,
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
 status: '',
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

//
// export const getUser = (id: number) => (dispatch: DispatchType) => {
//   profileAPI.getUserProfile(id).then(data =>
//     dispatch(setUserProfile(data)))
// }
// export const getStatus = (id: number) => (dispatch: DispatchType) => {
//   profileAPI.getStatus(id).then((data)=>{
//     dispatch(setStatus(data))
//   })
// }

export const getDataUser = (id: number) => (dispatch: DispatchType) => {
  Promise.all([profileAPI.getUserProfile(id),profileAPI.getStatus(id)])
    .then((res)=> {
      dispatch(setUserProfile(res[0]))
      dispatch(setStatus(res[1]))
    })
}
export const updateStatus = (status: string) => (dispatch: DispatchType) => {
  profileAPI.updateStatus(status).then(()=>{
    dispatch(setStatus(status))
  })
}
