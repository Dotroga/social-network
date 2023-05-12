import {AppStateType} from "./reduxStore";

export const getProfile = (state: AppStateType) => {
  console.log('getProfile')
  return {...state.profileReducer.profile}
}

export const getStatus = (state: AppStateType) =>
  state.profileReducer.status


