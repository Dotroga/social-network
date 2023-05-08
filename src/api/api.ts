import axios from "axios";
import {FormDataType} from "../components/ Login/Login";

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {'API-KEY': '7bc2302e-d37a-46c7-ba9d-fd7a4a394831'}
})

export const usersAPI = {
  getUsers: (currentPage:number = 1, pageSize: number = 10) => instance.get(
      `users?page=${currentPage}&count=${pageSize}`)
      .then(response => response.data)
  ,
  follow: (id: string) => instance.post(`follow/${id}`)
      .then(response => response.data.resultCode)
  ,
  unfollow: (id: string) => instance.delete(`follow/${id}`)
      .then(response => response.data.resultCode)
}

export const authAPI = {
  me: () => instance.get<ResponseType<MeType>>('auth/me')
    .then(response => response.data),
  login: (data: FormDataType) =>
    instance.post<ResponseType<{userId: number}>>('auth/login',data),
  logOut: () =>
    instance.delete<ResponseType>('auth/login')
}

export const profileAPI = {
  getUserProfile: (userId: string) => instance.get(`profile/${userId}`)
    .then(response => response.data),
  getStatus: (userId: string) =>  instance.get(`profile/status/${userId}`)
    .then(response => response.data),
  updateStatus: (status: string) => instance.put(`profile/status/`, {status})
}

type ResponseType<T = {}> = {
  resultCode: number
  fieldsErrors: string[]
  messages: string[]
  data: T
}

export type MeType = {
  id: number | null
  email: string | null
  login: string | null
}



