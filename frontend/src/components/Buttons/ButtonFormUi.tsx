import { corPrimariaUi, corSecundariaUi, corTextoUi } from '@/config/colorUi'
import { borderRadiusUi, paddingGlobalUi } from '@/config/measureUi'
import { Button, ButtonProps } from '@chakra-ui/react'
import React from 'react'

export type IButtonFormUi = {
  children: React.ReactNode
  isDisabled?: boolean
  type?: ButtonProps['type']
  isLoading: boolean
}

export const ButtonFormUi = (props: IButtonFormUi) => {
  const { children, type = 'button', ...rest } = props

  return (
    <Button
      w={{ base: '100%', md: '85px' }}
      height="46px"
      p={paddingGlobalUi}
      cursor="pointer"
      type={type}
      fontWeight={'400'}
      _active={{
        transform: 'scale(0.98)',
      }}
      _focus={{}}
      borderRadius={borderRadiusUi.lg}
      _hover={{ background: corSecundariaUi }}
      background={corPrimariaUi}
      color={corTextoUi['com-fundo-primario']}
      {...rest}
    >
      {children}
    </Button>
  )
}
