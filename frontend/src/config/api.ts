import axios from 'axios'
import { apiConfig } from './apiConfig'

export const api = () =>
  axios.create({
    baseURL: `${apiConfig.ip}${apiConfig.port}${apiConfig.path}`,
    timeout: apiConfig.timeout,
    headers: {
      ...apiConfig.headers,
    },
  })

