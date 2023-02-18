import {v1} from "uuid";
import {ActionsType, ProfilePageType} from "./store";

const initialState: ProfilePageType = {
  posts: [
    {id: v1(), text: 'Hi, how are you?',like: 7},
    {id: v1(), text: 'I am Better all!',like: 2}
  ],
    textForInputPost: ''
}

const profileReducer = (state= initialState, action:ActionsType) => {
  if (action.type === 'WRITING-NEW_POST') {
    state = {...state, textForInputPost: action.text}
  } else if (action.type === 'ADD-POST') {
    const newPost = {id: v1(), text: state.textForInputPost, like: 0}
    state = {...state, posts: [newPost, ...state.posts], textForInputPost: ''}
  } else if (action.type === 'ADD-LIKE') {
    state = {...state, posts: state.posts
        .map(p => p.id === action.postId ? {...p, like: p.like + 1} : p)
    }
  }
  return state
}

export default profileReducer
