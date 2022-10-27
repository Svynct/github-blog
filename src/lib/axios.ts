import axios from 'axios'

export const githubApi = axios.create({
  baseURL: 'https://api.github.com',
})

export const axiosClient = axios.create()
