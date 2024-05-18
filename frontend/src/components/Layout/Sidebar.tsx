// components/Sidebar.tsx
import { Img, Flex, Icon } from '@chakra-ui/react';
import { FlexColumnUi } from '../FlexColumnUi';
import { DivisorUi } from '../DivisorUi';
import { borderRadiusUi, fontSizeUi, gapGlobalUi, paddingGlobalUi } from '@/config/measureUi';
import { corBordaUi, corBoxShadowUi, corFundoUi } from '@/config/colorUi';
import { MenuAccessUi } from '../../hooks/useMenu';
import { ListBullets, ListPlus, X } from '@phosphor-icons/react'
import styled from '@emotion/styled'

interface ISidebar {
  isOpen?: boolean
  onClose?: () => void
}

export const Sidebar = ({ isOpen, onClose }: ISidebar) => {

  const Slide = styled.div`
    z-index: 1000;
    @keyframes slideIn {
      from {
        transform: translateY(100vh);
      }
      to {
        transform: translateY(15vh);
      }
    }

    @keyframes slideOut {
      from {
        transform: translateY(0);
      }
      to {
        transform: translateY(100vh);
      }
    }

    animation: ${isOpen ? 'slideIn' : 'slideOut'} 0.5s normal both;

    @media (min-width: 48em) {
      animation: none;
    }
  `
  return (
    <Slide>
      <FlexColumnUi
        alignItems={'start'}
        position={'absolute'}
        w={{ base: '100%', md: '252px' }}
        h={{ base: isOpen ? '85vh' : '100vh', md: '100%' }}
        gap={gapGlobalUi}
        bg={corFundoUi.secundaria}
        padding={paddingGlobalUi}
        backgroundSize="cover"
        boxShadow={corBoxShadowUi}
        borderTopEndRadius={{ base: borderRadiusUi['2xl'], md: borderRadiusUi.lg }}
        borderTopStartRadius={{ base: borderRadiusUi['2xl'], md: 'initial' }}
        borderBottomEndRadius={{ base: 'initial', md: borderRadiusUi.lg }}
      >
        <Img src="/logo.jpg" alignSelf={'center'} display={{ base: 'none', md: 'inline' }} />
        {!isOpen && <DivisorUi />}
        <FlexColumnUi gap={gapGlobalUi} h={{ base: 'auto', md: '100%' }}>
          <MenuAccessUi
            texto={"Listar"}
            icone={ListBullets}
            rota={'/'}
            onClose={onClose}
          />
          <MenuAccessUi
            texto={"Criar"}
            icone={ListPlus}
            rota={'/criar'}
            onClose={onClose}
          />
        </FlexColumnUi>
        <Flex w={'100%'} h={'35px'} justify={'center'} display={{ base: 'flex', md: 'none' }}>
          <Icon onClick={onClose} as={X} fontSize={fontSizeUi['8xl']} color={corBordaUi} cursor={'pointer'} />
        </Flex>
      </FlexColumnUi>
    </Slide>
  )
};
