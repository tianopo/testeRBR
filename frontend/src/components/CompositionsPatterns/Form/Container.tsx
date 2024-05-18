import { gapUi } from '@/config/measureUi'
import { Flex, FlexProps } from '@chakra-ui/react'
import { createContext } from 'use-context-selector'

export const ContainerContexto = createContext<IContainerContexto>({
  required: false,
  name: '',
  disabled: false,
  readOnly: false,
  htmlFor: '',
})

export const ContainerProvider = (props: ContainerProps) => {
  const { required, name, disabled, readOnly, htmlFor } = props

  return (
    <ContainerContexto.Provider value={{ required, name, disabled, readOnly, htmlFor }}>
      <Flex flexDirection="column" width="full" gap={gapUi.md} userSelect="none" {...props} />
    </ContainerContexto.Provider>
  )
}

interface IContainerContexto {
  required?: boolean
  disabled?: boolean
  readOnly?: boolean
  name: string
  htmlFor?: string
}

type ContainerProps = FlexProps & IContainerContexto
