import { corPrimariaUi, corTextoUi } from '@/config/colorUi'
import { textoMenorUi } from '@/config/fontUi'
import { borderRadiusGlobalUi, fontSizeUi } from '@/config/measureUi'
import { opacityColor } from '@/utils/opacityColor'
import { Button, Icon } from '@chakra-ui/react'
import { PlusCircle } from '@phosphor-icons/react'
import { TextoUi } from '../TextoUi'

export const ButtonCreateUi = (props: ButtonCreateUiProps) => {
  return (
    <Button
      width="100%"
      height="35px"
      cursor="pointer"
      _active={{
        ...(!props.disabled && {
          transform: 'scale(0.98)',
        }),
      }}
      _focus={{}}
      borderRadius={borderRadiusGlobalUi}
      display="flex"
      gap="5px"
      background={corPrimariaUi}
      _hover={{
        ...(!props.disabled && { background: opacityColor({ cor: corPrimariaUi, opacidade: 0.8 }) }),
      }}
      color={corTextoUi['com-fundo-primario']}
      onClick={props.onClick}
      isDisabled={props.disabled}
      _disabled={{
        opacity: 0.5,
        cursor: 'not-allowed',
      }}
    >
      <TextoUi {...textoMenorUi} color="inherit">
        Criar
      </TextoUi>
      <Icon as={PlusCircle} fontSize={fontSizeUi['5xl']} />
    </Button>
  )
}

interface ButtonCreateUiProps {
  disabled?: boolean
  onClick: () => void
}
