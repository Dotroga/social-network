import {v1} from "uuid";
import {log} from "util";

export type PostType = {
  id: string
  text: string
  like: number
}
export type DialogsUsersType = {
  id: string
  name: string
}
export type MessagesType = {
  id: string
  message: string
}
export type DialogsType = {
  dialogsUsers: DialogsUsersType[]
  messages: MessagesType[]
  textForInputMessages: string
}
export type ProfilePageType = {
  posts: PostType[]
  textForInputPost: string
}
export type StateType ={
  profilePage: ProfilePageType
  dialogs: DialogsType
}

export type StoreType = {
  _state: StateType
  _onChange: ()=>void
  subscribe: (callBack: ()=> void)=>void
  getState: ()=> StateType
  dispatch: (action: ActionsType) => void
}

export type ActionsType =
  ReturnType<typeof writingNewPostAC>
  | ReturnType<typeof addPostAC>
  | ReturnType<typeof writingNewMessagesAC>
  | ReturnType<typeof addMessageAC>
  | ReturnType<typeof addLikeAC>


const store: StoreType  = {
  _state: {
    profilePage: {
      posts: [
        {id: v1(), text: 'Hi, how are you?',like: 7},
        {id: v1(), text: 'I am Better all!',like: 2}
      ],
      textForInputPost: ''
    },
    dialogs: {
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
  },
  _onChange() {
    console.log('state change')
  },

  subscribe (callBack) {
    this._onChange = callBack
  },
  getState() {
    return  this._state
  },

  dispatch(action) {
    if (action.type === 'WRITING-NEW_POST') {
      this._state = {...this._state, profilePage: {...this._state.profilePage,
          textForInputPost: action.text}}
      this._onChange()
    } else if (action.type === 'ADD-POST') {
      const newPost = {id: v1(), text: this._state.profilePage.textForInputPost,like: 0}
      this._state = {...this._state,
        profilePage: {...this._state.profilePage,
          posts:[newPost, ...this._state.profilePage.posts], textForInputPost: ''}}
      this._onChange()
    } else if (action.type === 'WRITING-NEW-MESSAGE') {
      this._state = {...this._state, dialogs:{...this._state.dialogs,
          textForInputMessages: action.text} }
      this._onChange()
    } else if (action.type === 'ADD-MESSAGE') {
      const message = {id: v1(), message: this._state.dialogs.textForInputMessages}
      this._state = {...this._state, dialogs: {...this._state.dialogs,
        messages: [...this._state.dialogs.messages, message], textForInputMessages: ''}}
      this._onChange()
    } else if (action.type === 'ADD-LIKE') {
      this._state = {...this._state, profilePage: {...this._state.profilePage,
          posts: this._state.profilePage.posts.map(p=>p.id === action.postId
              ? {...p, like: p.like + 1} : p)}}
      this._onChange()
    }
  }
}

export const writingNewPostAC = (text: string) => ({type:'WRITING-NEW_POST', text}) as const
export const addPostAC = () =>  ({type:'ADD-POST'}) as const
export const writingNewMessagesAC = (text: string) => ({type:'WRITING-NEW-MESSAGE', text}) as const
export const addMessageAC = () => ({type: 'ADD-MESSAGE'}) as const
export const addLikeAC = (postId: string) => ({type: 'ADD-LIKE', postId}) as const


export default store