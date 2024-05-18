import { Img } from '@chakra-ui/react'
import { FlexColumnUi } from './FlexColumnUi'
import { textoBaseUi } from '@/config/fontUi'
import { TextoUi } from './TextoUi'

export const NaoEncontradoUi = (props: NaoEncontradoUiProps) => {
  return (
    <FlexColumnUi alignItems="center" justifyContent="center" height="full">
      <TextoUi {...textoBaseUi} fontStyle="italic">
        {props.texto}
      </TextoUi>
      {props.descricao && <TextoUi {...textoBaseUi}>{props.descricao}</TextoUi>}
      <Img src="/naoEncontrado.svg" width="350px" />
    </FlexColumnUi>
  )
}

interface NaoEncontradoUiProps {
  texto: string
  descricao?: string
}
