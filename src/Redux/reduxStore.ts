import {applyMiddleware, combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogsReducer";
import postReducer from "./postReducer";
import usersReducer from "./userReducer";
import {profileReducer} from "./profileReducer";
import {authReducer} from "./authReducer";
import thunk from "redux-thunk";
import {reducer as formReducer} from 'redux-form'

const rootReducer = combineReducers({
  dialogsReducer,
  profileReducer,
  postReducer,
  usersReducer,
  authReducer,
  form: formReducer
})

export type AppStateType = ReturnType<typeof rootReducer >
export type DispatchType = typeof store.dispatch
export const store = createStore(rootReducer, applyMiddleware(thunk))

//@ts-ignore
window.store = store

