import axios from "axios";

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
  isAuthorizationMe: () => instance.get('auth/me')
    .then(response => response.data)
}

export const profileAPI = {
  getUserProfile: (userId: string) => instance.get(`profile/${userId}`)
    .then(response => response.data)
}


