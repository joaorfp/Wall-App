import axios from 'axios';
import IUser from '../interfaces/IUser';

// const setToken = () => {
//   Authorization: `Token ${sessionStorage.userToken}`,
// }

export const api = axios.create({
  baseURL: 'http://127.0.0.1:8000',
})

export const getToken = (username: string, password: string) => {
  api.post('/api-token-auth/', { username, password })
}

export const insertUser = async ({ username, password, email }: IUser) => {
  try {
    const { data } = await api.post('/', {
      username,
      password,
      email
    })
    return data;
  } catch ({ response }) {
    return response;
  }
}

// export const requestLogin = async (username: string, password: string) => {
//   try {
//     const { data } = await api.post('/', {
//       username,
//       password
//     })
//     return data
//   } catch({ response }) {
//     return response;
//   }
// }

// export const getPosts = async () => {
//   try {
//     const { data } = await api.get('/wall', {
//       setToken(),
//     })
//     return data
//   } catch({ response }) {
//     return response;
//   }
// }

//  
// export const insertPost = async () => {
  // setToken()

// }

// export const updatePost = async () => {
  // setToken()

// }