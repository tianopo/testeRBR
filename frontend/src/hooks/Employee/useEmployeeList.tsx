import { IEmployeeAtributos, IEmployeeDTO } from '@/@types/ModelsAtributos'
import { api } from '@/config/api'
import { apiRoutes } from '@/config/apiRoutes'
import { useQuery } from '@tanstack/react-query'

export const useEmployeeList = () => {
  const { data } = useQuery({
    queryKey: ['employee_list'],
    queryFn: endPoint,
  })

  return { data }
}

async function endPoint(): Promise<IEmployeeAtributos[]> {
  const result = await api().get(apiRoutes.employeeGetAll)
  return result.data.data
}
