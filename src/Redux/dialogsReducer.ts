import {v1} from "uuid";

export type DialogsUsersType = {
  id: string
  name: string
}
export type MessagesType = {
  id: string
  message: string
}

export const initialState = {
    dialogsUsers: [
      {id: v1(), name: 'Vasili'},
      {id: v1(), name: 'Evgeniy'},
      {id: v1(), name: 'Igor'},
      {id: v1(), name: 'Boss'},
      {id: v1(), name: 'Dasha'},
      {id: v1(), name: 'Roma'},
      {id: v1(), name: 'Timur'},
      {id: v1(), name: 'Andreu'}
    ] as  DialogsUsersType[],
    messages: [
      {id: v1(), message: 'Hi!'},
      {id: v1(), message: 'Where are you from'},
      {id: v1(), message: 'How are you?'},
      {id: v1(), message: 'I started studying mobile development !'},
      {id: v1(), message: "Cool, and I'm currently studying react, doing a big project"}
    ] as MessagesType[],
    textForInputMessages: ''
}

export type DialogsType = typeof initialState

const dialogsReducer = (state:DialogsType = initialState, action:ActionsType):DialogsType => {
  switch (action.type) {
    case "ADD-MESSAGE": {
      const message = {id: v1(), message: state.textForInputMessages}
      return {...state, messages: [...state.messages, message], textForInputMessages: ''}
    }
    case "WRITING-NEW-MESSAGE": {
      return {...state, textForInputMessages: action.text}
    }
    default:
      return state
  }
}

export type ActionsType = ReturnType<typeof writingNewMessagesAC> | ReturnType<typeof addMessageAC>

export const writingNewMessagesAC = (text: string) => ({type:'WRITING-NEW-MESSAGE', text}) as const
export const addMessageAC = () => ({type: 'ADD-MESSAGE'}) as const

export default dialogsReducer