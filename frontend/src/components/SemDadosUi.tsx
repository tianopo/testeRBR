import { Img } from '@chakra-ui/react'
import { FlexColumnUi } from './FlexColumnUi'
import { textoBaseUi } from '@/config/fontUi'
import { TextoUi } from './TextoUi'

export const SemDadosUi = (props: SemDadosUiProps) => {
  return (
    <FlexColumnUi alignItems="center" justifyContent="center" height="full">
      <TextoUi {...textoBaseUi} fontStyle="italic">
        {props.texto}
      </TextoUi>
      {props.descricao && <TextoUi {...textoBaseUi}>{props.descricao}</TextoUi>}
      <Img src="/semDados.svg" maxW={props.maxW} width="350px" />
    </FlexColumnUi>
  )
}

interface SemDadosUiProps {
  texto: string
  descricao?: string
  maxW?: string
}
