import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";

const rootReducer = combineReducers({
  dialogsReducer,
  profileReducer
})

export type AppStateType = ReturnType<typeof rootReducer >

export const store = createStore(rootReducer)
