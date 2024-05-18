import { gapUi, paddingUi } from '@/config/measureUi'
import { useBreakpoints } from '@/hooks/useBreakpoints'
import { Grid } from '@chakra-ui/react'
import { GridProps } from '@chakra-ui/styled-system'

export const _Titulo = (props: _TituloProps) => {
  const { currentBreakpoint } = useBreakpoints()

  return (
    <Grid
      hidden={['sm'].includes(currentBreakpoint)}
      p={paddingUi['4xl']}
      gap={gapUi.xxl}
      width="full"
      userSelect="none"
      {...props}
    />
  )
}

interface _TituloProps extends GridProps {
  templateColumns?: string
  templateAreas?: string
  children: React.ReactNode
  hidden?: boolean
  gap?: string
}
