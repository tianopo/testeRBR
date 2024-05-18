import { useEmployeeCreate } from '@/hooks/Employee/useEmployeeCreate'
import { Flex } from '@chakra-ui/react'
import { FormProvider } from 'react-hook-form'
import { useRouter } from 'next/router';
import { PageCardContent } from '@/components/PageCardContent';
import { FormPatterns } from '@/components/CompositionsPatterns/Form/FormPatterns';
import { FlexColumnUi } from '@/components/FlexColumnUi';
import { TextoUi } from '@/components/TextoUi';
import { textoSubTituloUi } from '@/config/fontUi';
import { gapGlobalUi, paddingGlobalUi } from '@/config/measureUi';
import { corTextoUi } from '@/config/colorUi';
import { EmployeeForm } from '@/components/Forms/EmployeeForm';
import { isErrorForm } from '@/utils/isErrorForm';
import { ButtonSolidUi } from '@/components/Buttons/ButtonSolidUi';
import { ButtonFormUi } from '@/components/Buttons/ButtonFormUi';
import { appRoutes } from '@/config/appRoutes';

export default function CreateEmployee() {
  const { context, isLoading, mutate } = useEmployeeCreate()
  const { formState } = context
  const router = useRouter()
  const isErro = isErrorForm(formState.errors)

  return (
    <PageCardContent title="Criar">
      <FormProvider {...context}>
        <FormPatterns.Form callback={mutate}>
          <FlexColumnUi p={{ md: paddingGlobalUi }} gap={gapGlobalUi} h={'100%'}>
            <TextoUi {...textoSubTituloUi} color={corTextoUi.primaria} py={paddingGlobalUi} letterSpacing={'0.1px'}>
              Criar Funcionário
            </TextoUi>
            <EmployeeForm />
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