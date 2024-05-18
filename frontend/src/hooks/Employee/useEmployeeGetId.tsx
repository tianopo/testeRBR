import { IEmployeeDTO } from '@/@types/ModelsAtributos'
import { api } from '@/config/api'
import { apiRoutes } from '@/config/apiRoutes'
import { useQuery } from '@tanstack/react-query'

export const useEmployeeGetId = ({ id }: { id?: string }) => {
  const { data, status } = useQuery({
    queryKey: [`employee_get_id`, id],
    queryFn: async () => await endPoint(id),
  })

  return { data, status }
}

async function endPoint(id?: string): Promise<IEmployeeDTO> {
  const result = await api().get(apiRoutes.employeeGetId(id!))
  return result.data.data
}
