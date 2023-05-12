import {AppStateType} from "./reduxStore";
import {createSelector} from "reselect";

export const getProfile = (state: AppStateType) => {
  console.log('getProfile')
  return state.profileReducer.profile
}
export const getProfileSuper = createSelector (getProfile,(profile) => {
  console.log('getProfileSuper')
  return {...profile}
})

export const getStatus = (state: AppStateType) =>
  state.profileReducer.status

export const getStatusSuper = createSelector (getStatus,(status) => {
  console.log('getProfileSuper')
  return status
})


