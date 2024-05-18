import { useState, useEffect } from 'react'
import { ButtonCreateUi } from '@/components/Buttons/ButtonCreateUi'
import { ListagemPatterns } from '@/components/CompositionsPatterns/List/ListPatterns'
import { DivisorUi } from '@/components/DivisorUi'
import { FlexColumnUi } from '@/components/FlexColumnUi'
import { DeleteIcon } from '@/components/Icone/Delete'
import { UpdateIcon } from '@/components/Icone/Update'
import { NaoEncontradoUi } from '@/components/NaoEncontradoUi'
import { PageCardContent } from '@/components/PageCardContent'
import { SemDadosUi } from '@/components/SemDadosUi'
import { TextoUi } from '@/components/TextoUi'
import { appRoutes } from '@/config/appRoutes'
import { corTextoUi } from '@/config/colorUi'
import { textoBaseUi, textoSubTituloUi } from '@/config/fontUi'
import { gapGlobalUi } from '@/config/measureUi'
import { useEmployeeDelete } from '@/hooks/Employee/useEmployeeDelete'
import { useEmployeeList } from '@/hooks/Employee/useEmployeeList'
import { useBreakpoints } from '@/hooks/useBreakpoints'
import { Flex, Grid, Input, Button } from '@chakra-ui/react'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()

  const { data } = useEmployeeList()
  const { mutate } = useEmployeeDelete()

  const { currentBreakpoint } = useBreakpoints()
  const templateColumnsDesktop = '1fr 1fr 1fr 80px'
  const templateAreasDesktop = `"nome cargo departamento acoes"`
  const templateAreasMobile = `"nome acoes" "cargo acoes" "departamento acoes"`

  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 5

  const handleSearchChange = (e: any) => {
    setSearchTerm(e.target.value)
  }

  useEffect(() => {
    setCurrentPage(1)
  }, [searchTerm])

  const filteredData = data?.reverse().filter(item =>
    item.nome.toLowerCase().includes(searchTerm.toLowerCase())
  ) || []

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentData = filteredData.slice(indexOfFirstItem, indexOfLastItem)

  const totalPages = Math.ceil(filteredData.length / itemsPerPage)

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prevPage => prevPage + 1)
    }
  }

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1)
    }
  }

  return (
    <>
      <PageCardContent title="Listar">
        <TextoUi {...textoSubTituloUi}>Listar Funcionários</TextoUi>
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
          <Input
            placeholder="Buscar..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <ButtonCreateUi onClick={() => router.push(appRoutes.employeeCreate)} />
        </Grid>
        <FlexColumnUi gap={gapGlobalUi}>
          {!data?.length && (
            <SemDadosUi
              texto={'Nenhum funcionário cadastrado'}
              descricao={'Clique no botão acima para cadastrar um novo funcionário'}
            />
          )}
          {!currentData.length ? (
            <NaoEncontradoUi
              texto={'Nenhum funcionário encontrado'}
              descricao={'Tente novamente com outros termos de busca'}
            />
          ) : (
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

              {currentData.map((item) => (
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
          )}

          {filteredData.length > itemsPerPage && (
            <Flex justifyContent="center" mt={4}>
              <Button
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
                mr={2}
              >
                Anterior
              </Button>
              <Button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
              >
                Próximo
              </Button>
            </Flex>
          )}
        </FlexColumnUi>
      </PageCardContent>
    </>
  )
}
