import {v1} from "uuid";

export type PostType = {
  id: string
  text: string
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
  changeNewTextPost: (text: string) => void
  addNewPost: ()=>void
  _onChange: ()=>void
  subscribe: (callBack: ()=> void)=>void
  getState: ()=> StateType
}

const store: StoreType  = {
  _state: {
    profilePage: {
      posts: [
        {id: v1(), text: 'Hi, how are you?'},
        {id: v1(), text: 'I am Better all!'}
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
      ]
    }
  },
  changeNewTextPost(text){
    this._state = {...this._state, profilePage: {...this._state.profilePage, textForInputPost: text}}
    console.log(this._state.profilePage.textForInputPost)
    this._onChange()
  },
  addNewPost() {
    const newPost = {id: v1(), text: this._state.profilePage.textForInputPost}
    this._state = {...this._state,
      profilePage: {...this._state.profilePage,
        posts:[newPost, ...this._state.profilePage.posts], textForInputPost: ''}}
    this._onChange()
  },
  _onChange() {
    console.log(' state change')
  },
  subscribe (callBack) {
    this._onChange = callBack
  },
  getState() {
    return  this._state
  }
}

export default store