import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogsReducer";
import postReducer from "./postReducer";
import usersReducer from "./userReducer";
import {profileReducer} from "./profileReducer";
import {authReducer} from "./authReducer";



const rootReducer = combineReducers({
  dialogsReducer,
  profileReducer,
  postReducer,
  usersReducer,
  authReducer
})

export type AppStateType = ReturnType<typeof rootReducer >

export const store = createStore(rootReducer)

//@ts-ignore
window.store = store.getState()
