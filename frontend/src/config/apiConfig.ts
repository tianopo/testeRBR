import { QueryClient } from '@tanstack/react-query'

export const queryClient = new QueryClient({ defaultOptions: { queries: { retry: 0 }, mutations: { retry: 0 } } })

const TIMEOUT_SEGUNDOS = 30
const IP = "http://localhost"
const PORTA = ":7000"
const PATH = "/api"

export const apiConfig = {
  ip: IP,
  port: PORTA,
  path: PATH,

  timeout: 1000 * TIMEOUT_SEGUNDOS,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
}
