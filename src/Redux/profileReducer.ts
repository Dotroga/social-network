
const initialState = {

}

export const profileReducer = (state = initialState , action:ActionsType) => {
  switch (action.type) {
    case "SET-USERS-PROFILE": {
      return {...action.profile}
    }
    default: return state
  }
}

type ActionsType = ReturnType<typeof setUsersProfile>

export const setUsersProfile = (profile: any) => ({type: 'SET-USERS-PROFILE', profile}) as const