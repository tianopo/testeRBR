import { TitleHtml } from '@/components/Layout/TitleHtml';
import { paddingGlobalUi, paddingUi } from '@/config/measureUi';
import { Flex } from '@chakra-ui/react'

export default function CreateEmployee() {
  return (
    <Flex
      h={'100vh'}
      w={'100%'}
      paddingX={paddingGlobalUi}
      justify={'center'}
      p={{ base: 'initial', md: paddingUi['4xl'] }}
      flexDir={{ base: 'column', md: 'row' }}
      alignItems="center"
    >
      <TitleHtml title={'Criar'} />
      <h1>Hello, Next.js!</h1>
    </Flex>
  )
}