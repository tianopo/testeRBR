import { Box, FormLabel, FormLabelProps } from '@chakra-ui/react'
import { useContextSelector } from 'use-context-selector'
import { ContainerContexto } from './Container'
import { paddingUi } from '@/config/measureUi'
import { TextoUi } from '@/components/TextoUi'
import { textoMenorUi } from '@/config/fontUi'
import { corErroUi, corTextoUi } from '@/config/colorUi'

export const Label = (props: LabelProps) => {
  const required = useContextSelector(ContainerContexto, (value) => value.required)
  const name = useContextSelector(ContainerContexto, (value) => value.name)
  const disabled = useContextSelector(ContainerContexto, (value) => value.disabled)
  const htmlFor = useContextSelector(ContainerContexto, (value) => value.htmlFor)

  return (
    <FormLabel
      htmlFor={htmlFor || name}
      margin={0}
      paddingX={paddingUi.px}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      whiteSpace={'nowrap'}
      {...props.LabelProps}
    >
      {/* #DEV sm */}
      <TextoUi {...textoMenorUi} color={corTextoUi.primaria}>
        {props.titulo}
        {required && !disabled && (
          <Box as="span" color={corErroUi}>
            *
          </Box>
        )}
      </TextoUi>
      {props.children}
    </FormLabel>
  )
}

interface LabelProps {
  children?: React.ReactNode
  titulo: string
  LabelProps?: FormLabelProps
}
