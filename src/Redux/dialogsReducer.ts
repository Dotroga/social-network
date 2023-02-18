import {v1} from "uuid";
import {ActionsType, DialogsType} from "./store";

const initialState: DialogsType = {
    dialogsUsers: [
      {id: v1(), name: 'Vasili'},
      {id: v1(), name: 'Evgeniy'},
      {id: v1(), name: 'Igor'},
      {id: v1(), name: 'Boss'},
      {id: v1(), name: 'Dasha'},
      {id: v1(), name: 'Roma'},
      {id: v1(), name: 'Timur'},
      {id: v1(), name: 'Andreu'}
    ],
    messages: [
      {id: v1(), message: 'Hi!'},
      {id: v1(), message: 'Where are you from'},
      {id: v1(), message: 'How are you?'},
      {id: v1(), message: 'I started studying mobile development !'},
      {id: v1(), message: "Cool, and I'm currently studying react, doing a big project"}
    ],
    textForInputMessages: ''
}

const dialogsReducer = (state = initialState, action:ActionsType):DialogsType => {
  if (action.type === 'WRITING-NEW-MESSAGE') {
    state = {...state, textForInputMessages: action.text}
  } else if (action.type === 'ADD-MESSAGE') {
    const message = {id: v1(), message: state.textForInputMessages}
    state = {...state, messages: [...state.messages, message], textForInputMessages: ''}
  }
  return state
}

export default dialogsReducer