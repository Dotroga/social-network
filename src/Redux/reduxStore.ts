import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./userReducer";



const rootReducer = combineReducers({
  dialogsReducer,
  profileReducer,
  usersReducer
})

export type AppStateType = ReturnType<typeof rootReducer >

export const store = createStore(rootReducer)
