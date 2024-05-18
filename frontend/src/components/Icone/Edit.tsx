import { corBoxShadowUi, corFundoUi, corIconeUi, corTextoUi } from '@/config/colorUi'
import { textoMenorUi } from '@/config/fontUi'
import { borderRadiusUi, paddingUi } from '@/config/measureUi'
import { Button, Tooltip } from '@chakra-ui/react'
import { PencilSimple, PencilSimpleSlash } from '@phosphor-icons/react'

interface EditIconProps {
  onClick?: () => void
  editarHabilitado: boolean
  size: string
}

export const EditIcon = ({ onClick, editarHabilitado, size }: EditIconProps) => {
  return (
    <Button
      cursor={'pointer'}
      p="0"
      h="fit-content"
      width="fit-content"
      minWidth="fit-content"
      border="none"
      bg={'none'}
      _hover={{ background: 'none' }}
      onClick={onClick}
    >
      <Tooltip
        label={editarHabilitado ? "Desabilitar Edição" : "Habilitar Edição"}
        width="fit-content"
        height="fit-content"
        padding={paddingUi.md}
        color={corTextoUi.primaria}
        boxShadow={corBoxShadowUi}
        bg={corFundoUi['lista-alternada']}
        borderRadius={borderRadiusUi.lg}
        {...textoMenorUi}
      >
        {editarHabilitado ? (
          <PencilSimpleSlash size={size} color={corIconeUi.primaria} />
        ) : (
          <PencilSimple size={size} color={corIconeUi.primaria} />
        )}
      </Tooltip>
    </Button>
  )
}
