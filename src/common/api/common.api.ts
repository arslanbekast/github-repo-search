import axios from 'axios'

// Чтобы запросы к api работали, нужно создать в корне проекта .env файл,
// и создать переменную VITE_GITHUB_TOKEN = 'github токен'

const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN

export const instance = axios.create({
  baseURL: 'https://api.github.com/',
  headers: {
    Authorization: `token ${GITHUB_TOKEN}`,
    Accept: 'application/vnd.github+json',
  },
})
