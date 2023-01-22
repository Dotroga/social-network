import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export type PostType = {
  id: number
  text: string
}
export type DialogsUsersType = {
  id: number
  name: string
}
export type MessagesType = {
  id: number
  message: string
}
export type DialogsType = {
  dialogsUsers: DialogsUsersType[]
  messages: MessagesType[]
}
export type StateType ={
  posts: PostType[]
  dialogs: DialogsType
}

const state: StateType = {
  posts: [
    {id: 1, text: 'Hi, how are you?',},
    {id: 2, text: 'I am Better all!',}
  ],
  dialogs: {
    dialogsUsers: [
      {id: 0, name: 'Vasili'},
      {id: 1, name: 'Evgeniy'},
      {id: 2, name: 'Igor'},
      {id: 3, name: 'Boss'},
      {id: 4, name: 'Dasha'},
      {id: 5, name: 'Roma'},
      {id: 6, name: 'Timur'},
      {id: 7, name: 'Andreu'}
    ],
    messages: [
      { id: 1, message: 'Hi!' },
      { id: 2, message: 'Where are you from' },
      { id: 3, message: 'How are you?' },
      { id: 4, message: 'I started studying mobile development !' },
      { id: 5, message: "Cool, and I'm currently studying react, doing a big project" }
    ]
  }
}

ReactDOM.render(
    <App state={state}/>,
  document.getElementById('root')
);