import axios from 'axios'

export const authAxios = axios.create({
  baseURL: process.env.API_URL,
})

authAxios.interceptors.request.use(function (config) {
  const accessToken = sessionStorage.getItem('ecom-app-access-token')
  config.headers.Authorization = accessToken

  return config
})

authAxios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response?.status === 401) window.location.replace('/login')

    return Promise.reject(error)
  }
)

export const publicAxios = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  },
})
