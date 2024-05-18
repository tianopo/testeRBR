import { borderRadiusCardModalUi, gapGlobalUi, paddingGlobalUi } from '@/config/measureUi'
import { Flex, FlexProps } from '@chakra-ui/react'
import { TitleHtml } from './Layout/TitleHtml'
import { FlexColumnUi } from './FlexColumnUi'

export const PageCardContent = (props: PageCardContentProps) => {
  return (
    <Flex p={paddingGlobalUi} width="100%" flexDirection="column" borderRadius={borderRadiusCardModalUi}>
      <TitleHtml title={props.title} />
      <FlexColumnUi gap={gapGlobalUi} paddingY={paddingGlobalUi}>
        {props.children}
      </FlexColumnUi>
    </Flex>
  )
}

interface PageCardContentProps extends FlexProps {
  title: string
}
