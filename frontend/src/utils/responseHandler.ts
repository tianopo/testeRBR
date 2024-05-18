import { UseToastOptions } from '@chakra-ui/react'
import { AxiosError } from 'axios'
import { toastUi } from './toast'

export function responseError(err: AxiosError<any, any> | string, title?: string) {
  let messageError
  const duration = 5000

  if (err instanceof AxiosError) messageError = err.response?.data ? err.response.data.error : ''
  else messageError = err

  if (err instanceof AxiosError && err.code === 'ERR_NETWORK')
    toastUi({ title: `Server is not coming!`, status: 'error', duration })
  else if (err instanceof AxiosError && err.code === 'ECONNABORTED')
    toastUi({ title: `No answer!`, status: 'error', duration })
  else toastUi({ title, description: messageError, status: 'error', duration })
}

export const responseSuccess = (title: string, options?: UseToastOptions) => toastUi({ title, status: 'success', ...options })
