import {v1} from "uuid";
import {ActionsType, ProfilePageType} from "./store";

const profileReducer = (state: ProfilePageType , action:ActionsType) => {
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
