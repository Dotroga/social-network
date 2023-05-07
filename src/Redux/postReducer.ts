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
}
export type ProfilePageType = typeof initialState

const postReducer = (state:ProfilePageType = initialState, action:ActionsType):ProfilePageType => {
  switch (action.type) {
    case "ADD-LIKE": {
      return {...state, posts: state.posts
          .map(p => p.id === action.postId ? {...p, like: p.like + 1} : p)}
    }
    case "ADD-POST": {
      const newPost = {id: v1(), text: action.post ,  like: 0}
      return  {...state, posts: [newPost, ...state.posts]}
    }
    default: return state
  }
}

export type ActionsType = ReturnType<typeof addPost> | ReturnType<typeof addLike>


export const addPost = (post: string) =>  ({type:'ADD-POST', post}) as const
export const addLike = (postId: string) => ({type: 'ADD-LIKE', postId}) as const

export default postReducer
