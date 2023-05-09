import {authAPI, MeType} from "../api/api";
import {ThunkDispatchType} from "./reduxStore";
import {FormDataType} from "../components/ Login/Login";
import {getUserTK} from "./profileReducer";

export type AuthType = {
  isInitialized: boolean
  id: number| null
  email: string | null
  login: string | null
  isAuth: boolean
  errorAuth?: string

}
const initialState: AuthType = {
  isInitialized: false,
  id: null,
  email: null,
  login: null,
  isAuth: false
}

export const authReducer = (state: AuthType  = initialState, action: Actions): AuthType => {
  switch (action.type) {
    case "SET-USER-DATA":
      const isAuth = !!action.data.email
      return {...state, ...action.data, isAuth}
    case "SET-ERROR-AUTH": return {...state, errorAuth: action.error}
    case 'SET-IS-INITIALIZED':
      return {...state, isInitialized: action.value}
    default: return state
  }
}
type Actions = ReturnType<typeof setUserData>
  | ReturnType<typeof setErrorAuth>
  | ReturnType<typeof setIsInitializedAC>

export const setUserData = (data: MeType) => ({type: 'SET-USER-DATA', data} as const )
export const setErrorAuth = (error: string) => ({type: 'SET-ERROR-AUTH', error} as const )
export const setIsInitializedAC = (value: boolean) =>
  ({type: 'SET-IS-INITIALIZED', value} as const)
export const getUserData = () => (dispatch: ThunkDispatchType) => {
  authAPI.me()
    .then(data => {
     if (data.resultCode === 0 ) {
       dispatch(setUserData(data.data))
       dispatch(setIsInitializedAC(true))
     }
    })
}
export const login = (data: FormDataType) => (dispatch: ThunkDispatchType) => {
  authAPI.login(data)
    .then((res) => {
     if (res.data.resultCode === 0)  {
       dispatch(getUserData())
     } else {
       dispatch(setErrorAuth(res.data.messages[0]))
     }
    })
}

export const logOut = () => (dispatch: ThunkDispatchType) => {
  debugger
  authAPI.logOut()
    .then((res) => {
      if(res.data.resultCode === 0) {
        dispatch(setUserData({id: null, email: null, login: null}))

      } else {
        console.error(res.data.messages)
      }
    })
}


