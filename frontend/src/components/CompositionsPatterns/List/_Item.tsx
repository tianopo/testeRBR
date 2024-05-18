import { corBoxShadowUi, corFundoUi } from '@/config/colorUi'
import { borderRadiusCardModalUi, gapGlobalUi, gapUi, paddingGlobalUi, paddingUi } from '@/config/measureUi'
import { Grid, GridItemProps, GridProps } from '@chakra-ui/react'

export const _Item = (props: _ItemProps) => {
  return (
    <Grid
      alignItems="center"
      width="full"
      h={{ base: 'auto', md: '56px' }}
      gap={{ base: gapGlobalUi, md: gapUi.xxl }}
      backgroundColor={{ base: corFundoUi.secundaria }}
      borderRadius={{ base: borderRadiusCardModalUi, md: 'initial' }}
      boxShadow={{ base: corBoxShadowUi, md: 'initial' }}
      p={{ base: paddingGlobalUi, md: paddingUi['4xl'] }}
      {...props}
    />
  )
}

interface _ItemProps extends GridItemProps {
  templateColumns?: GridProps['templateColumns']
  templateAreas?: GridProps['templateAreas']
  children: React.ReactNode
}
