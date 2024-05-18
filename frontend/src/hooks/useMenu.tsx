import { corIconeUi, corPrimariaUi, corTextoUi } from '@/config/colorUi'
import { textoMenorUi } from '@/config/fontUi'
import { borderRadiusUi, gapGlobalUi, paddingGlobalUi } from '@/config/measureUi'
import { opacityColor } from '@/utils/opacityColor'
import { Button, Icon } from '@chakra-ui/react'
import { Icon as Icone } from '@phosphor-icons/react'
import { TextoUi } from '../components/TextoUi'
import { useRouter } from 'next/router';
import NextLink from 'next/link'

export const MenuAccessUi = ({ texto, icone, rota, onClose }: IMenuAcessos) => {
  const router = useRouter()
  const isRotaAtiva = rota === '/' ? router.pathname === rota : router.pathname.startsWith(rota!)

  return (
    <NextLink href={rota || '#'} passHref>
      <Button
        display="flex"
        alignItems="center"
        justifyContent={'start'}
        w={{ md: '228px', base: '100%' }}
        borderRadius={borderRadiusUi.lg}
        h={'48px'}
        onClick={onClose}
        bg={isRotaAtiva ? opacityColor({ cor: corPrimariaUi, opacidade: 0.25 }) : ''}
        __css={{
          ':hover': {
            '.icon': {
              color: corPrimariaUi,
            },
            '.texto': {
              color: corPrimariaUi,
            },
          },
          '.texto': {
            color: isRotaAtiva ? corPrimariaUi : corTextoUi.primaria,
          },
        }}
        _hover={{ bg: opacityColor({ cor: corPrimariaUi, opacidade: 0.25 }) }}
        gap={gapGlobalUi}
        p={paddingGlobalUi}
      >
        <Icon
          as={icone}
          color={isRotaAtiva ? corPrimariaUi : corIconeUi.primaria}
          w={'22.17px'}
          h={'22.17px'}
          className="icon"
        />
        <TextoUi {...textoMenorUi} className="texto">
          {texto}
        </TextoUi>
      </Button>
    </NextLink>
  )
}

interface IMenuAcessos {
  texto: string
  icone: Icone
  rota?: string
  onClose?: () => void
}
