import { Flex, useDisclosure } from '@chakra-ui/react'
import { FormProvider } from 'react-hook-form'
import { useRouter } from 'next/router';
import { PageCardContent } from '@/components/PageCardContent';
import { FormPatterns } from '@/components/CompositionsPatterns/Form/FormPatterns';
import { FlexColumnUi } from '@/components/FlexColumnUi';
import { TextoUi } from '@/components/TextoUi';
import { textoSubTituloUi } from '@/config/fontUi';
import { fontSizeUi, gapGlobalUi, paddingGlobalUi } from '@/config/measureUi';
import { corTextoUi } from '@/config/colorUi';
import { EmployeeForm } from '@/components/Forms/EmployeeForm';
import { isErrorForm } from '@/utils/isErrorForm';
import { ButtonSolidUi } from '@/components/Buttons/ButtonSolidUi';
import { ButtonFormUi } from '@/components/Buttons/ButtonFormUi';
import { appRoutes } from '@/config/appRoutes';
import { useEmployeeUpdate } from '@/hooks/Employee/useEmployeeUpdate';
import { useEmployeeGetId } from '@/hooks/Employee/useEmployeeGetId';
import { useEffect } from 'react';
import { EditIcon } from '@/components/Icone/Edit';

export default function UpdateEmployee() {
  const router = useRouter()
  const { id } = router.query
  const employeeId = typeof id === 'string' ? id : undefined;

  const { data } = useEmployeeGetId({ id: employeeId! })
  const { context, isLoading, mutate } = useEmployeeUpdate()
  const { setValue, formState } = context
  const isErro = isErrorForm(formState.errors)
  const { isOpen: isEdicao, onToggle: onToggleEdit } = useDisclosure()

  useEffect(() => {
    if (!data) return
    setValue('id', data._id!)
    setValue('nome', data.nome!)
    setValue('cargo', data.cargo!)
    setValue('departamento', data.departamento!)
  }, [data])

  return (
    <PageCardContent title="Gerenciar">
      <FormProvider {...context}>
        <FormPatterns.Form callback={mutate}>
          <FlexColumnUi p={{ md: paddingGlobalUi }} gap={gapGlobalUi} h={'100%'}>
            <Flex w="100%" justify={'space-between'} align={'center'} py={paddingGlobalUi}>
              <TextoUi {...textoSubTituloUi} color={corTextoUi.primaria} letterSpacing={'0.1px'}>
                Gerenciar Funcionário
              </TextoUi>
              <EditIcon size={fontSizeUi['6xl']} editarHabilitado={isEdicao} onClick={onToggleEdit} />
            </Flex>
            <EmployeeForm isEdicao={!isEdicao} />
            <Flex flexDir={{ base: 'column', md: 'row' }} gap={{ base: gapGlobalUi }} justify={'space-between'}>
              <ButtonSolidUi onClick={() => router.push(appRoutes.employeeList)}>
                Voltar
              </ButtonSolidUi>
              <ButtonFormUi isLoading={isLoading} type="submit" isDisabled={isErro || isLoading}>
                Salvar
              </ButtonFormUi>
            </Flex>
          </FlexColumnUi>
        </FormPatterns.Form>
      </FormProvider>
    </PageCardContent>
  )
}