import { Box, Button, Flex, Grid, Icon, useDisclosure } from '@chakra-ui/react'
import { List } from '@phosphor-icons/react'
import { useEffect, useMemo, ReactNode } from 'react'
import { FlexColumnUi } from '../FlexColumnUi'
import { Sidebar } from './Sidebar'
import { useRouter } from 'next/router';
import { useBreakpoints } from '@/hooks/useBreakpoints'
import { borderRadiusUi, fontSizeUi, gapGlobalUi, paddingGlobalUi } from '@/config/measureUi'
import { corBordaUi, corFundoUi } from '@/config/colorUi'

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const { currentBreakpoint } = useBreakpoints()
  const { isOpen, onToggle } = useDisclosure()
  const location = useRouter()

  useEffect(() => {
    if (!['sm'].includes(currentBreakpoint)) onToggle()
  }, [location])

  const LayoutDesktop = useMemo(
    () => (
      <Grid gridTemplateColumns="252px 1fr" height="100%" gap={gapGlobalUi}>
        <Sidebar />
        <FlexColumnUi margin={'0 auto'} maxW="1280px" height={'100vh'} overflow={'auto'} flexDir={'column'}>
          <Flex width="full" maxW="1280px" margin={'0 auto'}>
            {children}
          </Flex>
        </FlexColumnUi>
      </Grid>
    ),
    [isOpen],
  )

  const LayoutMobile = (
    <Grid gridTemplateColumns="1fr" h="100%" overflowY={'hidden'}>
      <Sidebar isOpen={isOpen} onClose={onToggle} />
      <FlexColumnUi height={'100vh'} overflow={'auto'} flexDir={'column'}>
        <FlexColumnUi width="full" maxW="1280px" margin={'0 auto'}>
          {isOpen && <Box position="fixed" w={'100%'} h={'100%'} bg={'rgba(0, 0, 0, 0.5)'} zIndex={500} onClick={onToggle} />}
          {children}
        </FlexColumnUi>
        <Flex
          p={paddingGlobalUi}
          borderTop={`1px solid ${corBordaUi}`}
          bg={corFundoUi.secundaria}
          margin={'auto 0 0 0'}
          justify={'center'}
          h={'auto'}
          width={'100%'}
          borderTopRadius={borderRadiusUi.lg}
        >
          <Button
            bg={corFundoUi.secundaria}
            display={isOpen ? 'none' : 'flex'}
            alignItems={'center'}
            justifyContent={'center'}
            __css={{}}
            onClick={onToggle}
          >
            <Icon as={List} fontSize={fontSizeUi['8xl']} color={corBordaUi} />
          </Button>
        </Flex>
      </FlexColumnUi>
    </Grid>
  )

  return ['sm'].includes(currentBreakpoint) ? LayoutMobile : LayoutDesktop
}
