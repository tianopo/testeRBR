import { Flex, FlexProps } from '@chakra-ui/react'
import { ForwardRefRenderFunction, forwardRef } from 'react'

const FlexColumnBase: ForwardRefRenderFunction<HTMLDivElement, FlexProps> = (props: FlexProps, ref) => {
  return <Flex flexDirection="column" width="100%" {...props} ref={ref} />
}
export const FlexColumnUi = forwardRef<HTMLDivElement, FlexProps>(FlexColumnBase)
