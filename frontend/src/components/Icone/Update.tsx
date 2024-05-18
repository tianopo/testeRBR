import { corBoxShadowUi, corFundoUi, corIconeUi, corTextoUi } from '@/config/colorUi'
import { textoMenorUi } from '@/config/fontUi'
import { borderRadiusUi, fontSizeUi, paddingUi } from '@/config/measureUi'
import { Button, Tooltip } from '@chakra-ui/react'
import { GearSix } from '@phosphor-icons/react'

interface UpdateIconProps {
  onClick?: () => void
  color?: string
}

export const UpdateIcon = ({ onClick }: UpdateIconProps) => {

  return (
    <Button
      id="botão-visualizar"
      onClick={onClick}
      bg="none"
      _hover={{ bg: 'none' }}
      width="fit-content"
      minWidth="fit-content"
      height={{ base: '84px', md: 'fit-content' }}
      cursor={'pointer'}
      p={{ md: '0' }}
      px={{ base: paddingUi.md }}
      py={{ base: paddingUi.xxl }}
    >
      <Tooltip
        width="fit-content"
        height="fit-content"
        padding={paddingUi.md}
        color={corTextoUi.primaria}
        boxShadow={corBoxShadowUi}
        label={"Gerenciar"}
        bg={corFundoUi['lista-alternada']}
        borderRadius={borderRadiusUi.lg}
        {...textoMenorUi}
      >
        <GearSix size={fontSizeUi['6xl']} color={corIconeUi.primaria} />
      </Tooltip>
    </Button>
  )
}
