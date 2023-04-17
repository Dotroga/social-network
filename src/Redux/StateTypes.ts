export type ProfilePageType = {
  profile: ProfileType
  status: string
}
export type ProfileType = {
  userId: string
  lookingForAJob: boolean
  lookingForAJobDescription: string
  fullName: string
  contacts: {},
  github: string
  vk: string
  facebook: string
  instagram: string
  twitter: string
  website: string
  youtube: string
  mainLink: string
  photos: {
    small: string
    large: string
  }
}
