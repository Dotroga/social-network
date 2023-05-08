import {authAPI, MeType} from "../api/api";
import {ThunkDispatchType} from "./reduxStore";
import {FormDataType} from "../components/ Login/Login";

export type AuthType = {
  id: number| null
  email: string | null
  login: string | null
  isAuth: boolean
  errorAuth?: string
}
const initialState: AuthType = {
  id: null,
  email: null,
  login: null,
  isAuth: false
}

export const authReducer = (state: AuthType  = initialState, action: Actions): AuthType => {
  switch (action.type) {
    case "SET-USER-DATA":
      const isAuth = !!action.data.email
      return {...action.data, isAuth}
    case "SET-ERROR-AUTH": return {...state, errorAuth: action.error}
    default: return state
  }
}
type Actions = ReturnType<typeof setUserData> | ReturnType<typeof setErrorAuth>

export const setUserData = (data: MeType) => ({type: 'SET-USER-DATA', data} as const )
export const setErrorAuth = (error: string) => ({type: 'SET-ERROR-AUTH', error} as const )
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
        : dispatch(setErrorAuth(res.data.messages[0]))
    })
}

export const logOut = () => (dispatch: ThunkDispatchType) => {
  debugger
  authAPI.logOut()
    .then((res) => {
      res.data.resultCode === 0
        ? dispatch(setUserData({id: null, email: null, login: null}))
        : console.error(res.data.messages)
    })
}


