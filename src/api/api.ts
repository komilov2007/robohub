import axios from 'axios'

const getCookie = (name: string): string | null => {
  const cookies = document.cookie.split('; ')

  for (const cookie of cookies) {
    const [key, ...rest] = cookie.split('=')
    const value = rest.join('=')

    if (key === name) {
      return decodeURIComponent(value)
    }
  }

  return null
}

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
})

api.interceptors.request.use((config) => {
  const accessToken = getCookie('access_token')

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`
  }

  return config
})