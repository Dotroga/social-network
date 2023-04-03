import {authAPI} from "../api/api";
import {DispatchType} from "./reduxStore";

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

export const authReducer = (state = initialState, action:Actions):AuthType => {
  switch (action.type) {
    case "SET-USER-DATA": {
      return {...state, ...action.data, isAuth: true}
    }
    default: return state
  }
}

type Actions = ReturnType<typeof setUserData>
export const setUserData = (data: AuthType) => ({type: 'SET-USER-DATA', data} as const )
export const getUserData = () => (dispatch: DispatchType) => {
  authAPI.me().then(data => data.resultCode === 0 && dispatch(setUserData(data.data)))
}
