import {AnyAction, applyMiddleware, combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogsReducer";
import postReducer from "./postReducer";
import usersReducer from "./userReducer";
import {profileReducer} from "./profileReducer";
import {authReducer} from "./authReducer";
import thunk, {ThunkDispatch} from "redux-thunk";
import {useDispatch} from "react-redux";

const rootReducer = combineReducers({
  dialogsReducer,
  profileReducer,
  postReducer,
  usersReducer,
  authReducer,
})



export type ThunkDispatchType = ThunkDispatch<AppStateType, any, AnyAction>
export const useAppDispatch = () => useDispatch<ThunkDispatchType>()
export type AppStateType = ReturnType<typeof rootReducer >
export type DispatchType = typeof store.dispatch
export const store = createStore(rootReducer, applyMiddleware(thunk))

//@ts-ignore
window.store = store

