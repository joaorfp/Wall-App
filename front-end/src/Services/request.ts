import axios from 'axios';
import IUser from '../interfaces/IUser';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:8000',
})

export const getToken = async (username: string, password: string) => {
  const data = await api.post('/api-token-auth/', { username, password })
  return data;
}

export const setToken = () => {
  const storage = localStorage.getItem('token')
  
  if (storage) {
    api.defaults.headers.Authorization = `Token ${storage}`
  }
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

export const getPosts = async () => {
  try {
    const { data } = await api.get('/wall/')
    return data
  } catch({ response }) {
    return response;
  }
}

 
export const insertPost = async (postedMessage: string, title: string, owner: string) => {
  try {
    const { data } = await api.post('/wall/', {
      posted_message: postedMessage,
      is_active: true,
      title,
      owner,
    });
    return data;
  } catch ({ response }) {
    return response;
  }
}

// export const updatePost = async () => {
  // setToken()

// }