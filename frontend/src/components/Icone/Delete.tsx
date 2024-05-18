import { corErroUi, corFundoUi, corTextoUi } from '@/config/colorUi'
import { fontSizeUi } from '@/config/measureUi'
import { Button, Tooltip } from '@chakra-ui/react'
import { Trash } from '@phosphor-icons/react'

interface DeleteIconProps {
  onClick?: () => void
  disabled?: boolean
}

export const DeleteIcon = ({ onClick, disabled }: DeleteIconProps) => {
  return (
    <Button
      id="botão-deletar"
      onClick={onClick}
      isDisabled={disabled}
      _disabled={{
        opacity: 0.7,
        cursor: 'not-allowed',
        bg: corFundoUi['lista-alternada'],
        _hover: { bg: corFundoUi['lista-alternada'] },
      }}
      bg="none"
      width="fit-content"
      minWidth="fit-content"
      height="fit-content"
      _hover={{ bg: 'none' }}
      border="none"
      padding="0"
      cursor={'pointer'}
    >
      <Tooltip
        color={corTextoUi.primaria}
        label={"Deletar"}
        bg={corErroUi}
        width="fit-content"
        height="fit-content"
      >
        <Trash fontSize={fontSizeUi['6xl']} color={corErroUi} />
      </Tooltip>
    </Button>
  )
}
