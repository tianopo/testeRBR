import { IEmployeeDTO } from '@/@types/ModelsAtributos'
import { api } from '@/config/api'
import { apiRoutes } from '@/config/apiRoutes'
import Yup from '@/utils/Yup'
import { responseError, responseSuccess } from '@/utils/responseHandler'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router';

export const useEmployeeUpdate = () => {
  const router = useRouter()

  const { mutate, isLoading, status } = useMutation(endPoint, {
    onSuccess: () => {
      router.back();
      responseSuccess("Funcionário criado com sucesso")
    },
    onError: (erro: AxiosError) => responseError(erro),
  })

  const schema = Yup.object().shape({
    id: Yup.string().uuid().required().label('Id'),
    nome: Yup.string().required().label("nome"),
    cargo: Yup.string().required().label("cargo"),
    departamento: Yup.string().required().label("departamento"),
  })

  type Schema = Yup.InferType<typeof schema>

  const context = useForm({
    resolver: yupResolver(schema),
    reValidateMode: 'onChange',
  })

  async function endPoint(data: Schema): Promise<IEmployeeDTO> {
    const result = await api().put(apiRoutes.employeePut(data.id), data)
    return result.data.data
  }

  return { mutate, isLoading, context, status }
}
