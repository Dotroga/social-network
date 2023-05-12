export type ProfilePageType = {
  profile: ProfileType
  status: string
  face: number
}
export type ProfileType = {
  userId: number
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
