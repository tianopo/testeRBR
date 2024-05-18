import { borderRadiusCardModalUi, paddingGlobalUi } from '@/config/measureUi'
import { Flex, FlexProps } from '@chakra-ui/react'
import { TitleHtml } from './Layout/TitleHtml'

export const PageCardContent = (props: PageCardContentProps) => {
  return (
    <Flex p={paddingGlobalUi} width="100%" flexDirection="column" borderRadius={borderRadiusCardModalUi}>
      <TitleHtml title={props.title} />
      {props.children}
    </Flex>
  )
}

interface PageCardContentProps extends FlexProps {
  title: string
}
