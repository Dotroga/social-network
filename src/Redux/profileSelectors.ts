import {AppStateType} from "./reduxStore";

export const getProfile = (state: AppStateType) =>
  ({...state.profileReducer.profile})
export const getStatus = (state: AppStateType) =>
  state.profileReducer.status


