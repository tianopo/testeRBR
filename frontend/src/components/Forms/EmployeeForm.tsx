import { Grid } from '@chakra-ui/react'
import { FormPatterns } from '../CompositionsPatterns/Form/FormPatterns'
import { gapGlobalUi } from '@/config/measureUi'

export const EmployeeForm = ({ isEdicao }: EmployeeFormProps) => {

  return (
    <Grid
      gridTemplateColumns={{
        base: '1fr',
        md: 'repeat(2, 1fr)',
      }}
      gap={gapGlobalUi}
    >
      <FormPatterns.Container name="nome" required disabled={isEdicao}>
        <FormPatterns.Label titulo="Nome" />
        <FormPatterns.Input placeholder={"João Paulo Siqueira"} />
        <FormPatterns.MensagemErro />
      </FormPatterns.Container>
      <FormPatterns.Container name="cargo" required disabled={isEdicao}>
        <FormPatterns.Label titulo="Cargo" />
        <FormPatterns.Input placeholder={"Desenvolvedor Fullstack"} />
        <FormPatterns.MensagemErro />
      </FormPatterns.Container>
      <FormPatterns.Container name="departamento" required disabled={isEdicao}>
        <FormPatterns.Label titulo="Departamento" />
        <FormPatterns.Input placeholder={"TI"} />
        <FormPatterns.MensagemErro />
      </FormPatterns.Container>
    </Grid>
  )
}

interface EmployeeFormProps {
  isEdicao?: boolean
}
