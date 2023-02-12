import {v1} from "uuid";
import {ActionsType, DialogsType} from "./store";

const dialogsReducer = (state: DialogsType, action:ActionsType) => {
  if (action.type === 'WRITING-NEW-MESSAGE') {
    state = {...state, textForInputMessages: action.text}
  } else if (action.type === 'ADD-MESSAGE') {
    const message = {id: v1(), message: state.textForInputMessages}
    state = {...state, messages: [...state.messages, message], textForInputMessages: ''}
  }
  return state
}

export default dialogsReducer