import {AppStateType} from "./reduxStore";
import {createSelector} from "reselect";

export const getProfile = (state: AppStateType) => {
  return state.profileReducer.profile
}
export const getProfileSuper = createSelector (getProfile,(profile) => {
  return {...profile}
})

export const getStatus = (state: AppStateType) =>
  state.profileReducer.status

export const getStatusSuper = createSelector (getStatus,(status) => {
  return status
})


