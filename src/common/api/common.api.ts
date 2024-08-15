import axios from 'axios'

const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN

export const instance = axios.create({
  baseURL: 'https://api.github.com/',
  headers: {
    Authorization: `token ${GITHUB_TOKEN}`,
    Accept: 'application/vnd.github+json',
  },
})
