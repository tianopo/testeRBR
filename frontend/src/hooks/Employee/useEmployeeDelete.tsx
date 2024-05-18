import { api } from '@/config/api'
import { queryClient } from '@/config/apiConfig'
import { apiRoutes } from '@/config/apiRoutes'
import { responseError, responseSuccess } from '@/utils/responseHandler'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export const useEmployeeDelete = () => {
  const { mutate, status, isLoading } = useMutation(endPoint, {
    onSuccess: () => {
      queryClient.refetchQueries(['employee-delete'])
      responseSuccess('Funcionário deletado com sucesso')
    },
    onError: (erro: AxiosError) => responseError(erro),
  })

  return { mutate, status, isLoading }
}
async function endPoint(id?: string): Promise<void> {
  const result = await api().delete(apiRoutes.employeeDelete(id!))
  return result.data.data
}
