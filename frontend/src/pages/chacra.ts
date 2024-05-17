import { extendTheme } from '@chakra-ui/react';
import { defineStyle } from '@chakra-ui/react'
import { GlobalStyleProps } from '@chakra-ui/theme-tools'
import { corBordaUi, corFundoUi, corTextoUi } from './config/coresUi'

const theme = extendTheme({
  breakpoints: {
    sm: '320px',
    md: '768px',
    lg: '940px',
    xl: '1280px',
  },
  styles: {
    'html, body': {
      bg: corFundoUi.primaria,
      color: corTextoUi.primaria,
      height: '100vh',
      width: '100%',
      fontFamily: 'roboto',
    },
    '::-webkit-scrollbar': {
      display: 'block',
      width: '5px',
    },
    '::-webkit-scrollbar-thumb': {
      background: '#888',
      borderRadius: '999px',
      display: 'block',
    },
    '::-webkit-scrollbar-thumb:hover': {
      background: '#555',
      display: 'block',
    },

    control: defineStyle({
      border: '1px',
      borderColor: corBordaUi,
      borderRadius: 'base',
      _disabled: {
        bg: 'gray.200',
        color: 'black.100',
        borderColor: 'gray.300',
        _checked: {
          bg: 'gray.100',
          borderColor: 'gray.100',
        },
        _hover: {
          bg: 'gray.50',
          color: 'black.100',
          borderColor: 'black.100',
        },
      },
      _checked: {
        bg: 'blue.700',
        borderColor: 'blue.700',
        _hover: {
          bg: 'blue.500',
          color: 'blue.100',
          borderColor: 'blue.100',
        },
      },
    }),
  },
  config: {
    initialColorMode: 'light',
    useSystemColorMode: true,
  },
});

export default theme;