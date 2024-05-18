import { ButtonFormUi } from '@/components/Buttons/ButtonFormUi'
import { ButtonSolidUi } from '@/components/Buttons/ButtonSolidUi'
import { ListagemPatterns } from '@/components/CompositionsPatterns/List/ListPatterns'
import { DivisorUi } from '@/components/DivisorUi'
import { FlexColumnUi } from '@/components/FlexColumnUi'
import { DeleteIcon } from '@/components/Icone/Delete'
import { UpdateIcon } from '@/components/Icone/Update'
import { TitleHtml } from '@/components/Layout/TitleHtml'
import { NaoEncontradoUi } from '@/components/NaoEncontradoUi'
import { PageCardContent } from '@/components/PageCardContent'
import { SemDadosUi } from '@/components/SemDadosUi'
import { TextoUi } from '@/components/TextoUi'
import { appRoutes } from '@/config/appRoutes'
import { corTextoUi } from '@/config/colorUi'
import { textoBaseUi, textoSubTituloUi } from '@/config/fontUi'
import { gapGlobalUi, paddingGlobalUi, paddingUi } from '@/config/measureUi'
import { useEmployeeDelete } from '@/hooks/Employee/useEmployeeDelete'
import { useEmployeeList } from '@/hooks/Employee/useEmployeeList'
import { useBreakpoints } from '@/hooks/useBreakpoints'
import { Flex, Grid } from '@chakra-ui/react'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()

  const { data } = useEmployeeList()
  const { mutate } = useEmployeeDelete()

  const { currentBreakpoint } = useBreakpoints()
  const templateColumnsDesktop = '1fr 1fr 1fr 80px'
  const templateAreasDesktop = `"nome cargo departamento acoes"`
  const templateAreasMobile = `"nome acoes" "cargo acoes" "departamento acoes"`

  return (
    <>
      <PageCardContent title="Listar">
        <Flex w="100%" justify={'space-between'}>
          <TextoUi {...textoSubTituloUi}>Listar Funcionários</TextoUi>
        </Flex>
        <DivisorUi />
        <Grid
          width="full"
          alignItems="center"
          justifyContent="space-between"
          gap={{ base: gapGlobalUi, md: 'none' }}
          gridTemplateColumns={{
            base: '1fr',
            md: '0.5fr 150px',
          }}
        >
          {/* <InputBuscaUi /> */}
          <ButtonSolidUi onClick={() => router.push(appRoutes.employeeCreate)} />
        </Grid>
        <FlexColumnUi gap={gapGlobalUi}>
          {data?.length === 0 && (
            <SemDadosUi
              texto={'Nenhuma unidade de medida cadastrada'}
              descricao={'Clique no botão acima para cadastrar uma nova unidade de medida'}
            />
          )}
          {data?.length === 0 && (
            <NaoEncontradoUi
              texto={'Nenhuma unidade de medida encontrada'}
              descricao={'Tente novamente com outros termos de busca'}
            />
          )}
          <ListagemPatterns.Container>
            {!!data?.length && (
              <ListagemPatterns.Titulo gridGap={gapGlobalUi}
                hidden={['sm'].includes(currentBreakpoint)}
                templateColumns={templateColumnsDesktop}
              >
                <TextoUi {...textoBaseUi}>Nome</TextoUi>
                <TextoUi {...textoBaseUi}>Cargo</TextoUi>
                <TextoUi {...textoBaseUi}>Departamento</TextoUi>
              </ListagemPatterns.Titulo>
            )}

            {data?.map((item) => (
              <ListagemPatterns.Item
                templateColumns={{ base: '1fr', md: templateColumnsDesktop }}
                templateAreas={{ base: templateAreasMobile, md: templateAreasDesktop }}
                key={item.id}
              >
                <Flex minW={0} gridArea={'nome'}>
                  <TextoUi maxW={'100%'} whiteSpace={'nowrap'} overflow={'hidden'} textOverflow={'ellipsis'} {...textoBaseUi} color={corTextoUi.primaria}>
                    {['sm'].includes(currentBreakpoint)
                      ? `Nome: ${item.nome}`
                      : `${item.nome}`}
                  </TextoUi>
                </Flex>
                <Flex minW={0} gridArea={'cargo'}>
                  <TextoUi maxW={'100%'} whiteSpace={'nowrap'} overflow={'hidden'} textOverflow={'ellipsis'} {...textoBaseUi} color={corTextoUi.primaria}>
                    {['sm'].includes(currentBreakpoint)
                      ? `Cargo: ${item.cargo}`
                      : `${item.cargo}`}
                  </TextoUi>
                </Flex>
                <Flex minW={0} gridArea={'departamento'}>
                  <TextoUi maxW={'100%'} whiteSpace={'nowrap'} overflow={'hidden'} textOverflow={'ellipsis'} {...textoBaseUi} color={corTextoUi.primaria}>
                    {['sm'].includes(currentBreakpoint)
                      ? `Departamento: ${item.departamento}`
                      : `${item.departamento}`}
                  </TextoUi>
                </Flex>
                <Flex
                  gridArea={'acoes'}
                  flexDir={['sm'].includes(currentBreakpoint) ? 'column' : 'row'}
                  align={'center'}
                  justify={'center'}
                  gap={gapGlobalUi}
                >
                  <UpdateIcon onClick={() => router.push(appRoutes.employeeGet(item.id!))} />
                  <DeleteIcon
                    onClick={() => {
                    }}
                  />
                </Flex>
              </ListagemPatterns.Item>
            ))}
          </ListagemPatterns.Container>
        </FlexColumnUi>
      </PageCardContent>
    </>
  )
}