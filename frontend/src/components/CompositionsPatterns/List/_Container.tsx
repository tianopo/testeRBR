import { FlexProps } from '@chakra-ui/react'
import { FlexColumnUi } from '../../FlexColumnUi'
import { corBoxShadowUi, corFundoUi } from '@/config/colorUi'
import { borderRadiusUi, gapGlobalUi } from '@/config/measureUi'

export const _Container = (props: FlexProps) => {

  return (
    <FlexColumnUi
      bg={{ md: corFundoUi.secundaria }}
      boxShadow={{ base: 'initial', md: corBoxShadowUi }}
      borderRadius={{ base: 'initial', md: borderRadiusUi.lg }}
      overflow={{ md: 'hidden' }}
      gap={{ base: gapGlobalUi, md: '0' }}
      {...props}
    />
  )
}
