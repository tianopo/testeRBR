import { corTextoUi } from '@/config/colorUi'
import { Text, TextProps } from '@chakra-ui/react'

export const TextoUi = (props: TextProps) => {
  return <Text color={corTextoUi.primaria} {...props} />
}
