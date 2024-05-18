import { corFundoUi, corPrimariaUi, corSecundariaUi } from '@/config/colorUi'
import { textoBaseUi } from '@/config/fontUi'
import { borderRadiusUi, paddingGlobalUi } from '@/config/measureUi'
import { opacityColor } from '@/utils/opacityColor'
import { Button } from '@chakra-ui/react'
import { TextoUi } from '../TextoUi'

export const ButtonSolidUi = ({ children, onClick }: ButtonSolidUiProps) => {

  return (
    <Button
      width={{ base: '100%', md: '85px' }}
      height="46px"
      cursor="pointer"
      _active={{
        transform: 'scale(0.98)',
      }}
      _focus={{}}
      borderWidth={`1px`}
      borderColor={corSecundariaUi}
      borderRadius={borderRadiusUi.lg}
      display="flex"
      p={paddingGlobalUi}
      bg={corFundoUi.primaria}
      _hover={{
        background: opacityColor({ cor: corPrimariaUi, opacidade: 0.25 }),
      }}
      onClick={onClick}
    >
      <TextoUi {...textoBaseUi} letterSpacing={'0.1px'} color={corPrimariaUi}>
        {children}
      </TextoUi>
    </Button>
  )
}

interface ButtonSolidUiProps {
  children?: React.ReactNode
  onClick: () => void
}
