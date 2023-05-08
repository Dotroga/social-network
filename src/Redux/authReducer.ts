import {authAPI, MeType} from "../api/api";
import {DispatchType, ThunkDispatchType} from "./reduxStore";
import {FormDataType} from "../components/ Login/Login";

export type AuthType = {
  id: number| null
  email: string | null
  login: string | null
  isAuth: boolean
}
const initialState: AuthType = {
  id: null,
  email: null,
  login: null,
  isAuth: false
}

export const authReducer = (state = initialState, action: Actions): AuthType => {
  switch (action.type) {
    case "SET-USER-DATA":
      return {...state, ...action.data, isAuth: true}
    default: return state
  }
}
type Actions = ReturnType<typeof setUserData>

export const setUserData = (data: MeType) => ({type: 'SET-USER-DATA', data} as const )
export const getUserData = () => (dispatch: ThunkDispatchType) => {
  authAPI.me()
    .then(data => {
      console.log(data)
      data.resultCode === 0 &&
      dispatch(setUserData(data.data))})
}
export const login = (data: FormDataType) => (dispatch: ThunkDispatchType) => {
  authAPI.login(data)
    .then((res) => {
      res.data.resultCode === 0
        ? dispatch(getUserData())
        : console.error(res.data.messages)
    })
}

export const logOut = () => (dispatch: ThunkDispatchType) => {
  authAPI.logOut()
    .then((res) => {
      res.data.resultCode === 0
        ? setUserData({id: null, email: null, login: null})
        : console.error(res.data.messages)
    })
}


