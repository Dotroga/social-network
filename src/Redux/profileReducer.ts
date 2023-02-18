import {v1} from "uuid";

export type PostType = {
  id: string
  text: string
  like: number
}

const initialState = {
  posts: [
    {id: v1(), text: 'Hi, how are you?',like: 7},
    {id: v1(), text: 'I am Better all!',like: 2}
  ] as PostType[],
    textForInputPost: ''
}
export type ProfilePageType = typeof initialState

const profileReducer = (state:ProfilePageType = initialState, action:ActionsType):ProfilePageType => {
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

export type ActionsType =
  ReturnType<typeof writingNewPostAC>
  | ReturnType<typeof addPostAC>
  | ReturnType<typeof addLikeAC>

export const writingNewPostAC = (text: string) => ({type:'WRITING-NEW_POST', text}) as const
export const addPostAC = () =>  ({type:'ADD-POST'}) as const
export const addLikeAC = (postId: string) => ({type: 'ADD-LIKE', postId}) as const

export default profileReducer
