import { useFormContext } from 'react-hook-form'
import { useContextSelector } from 'use-context-selector'
import { ContainerContexto } from './Container'
import { getErroHookForm } from '@/utils/getErroHookForm'
import { TextoUi } from '@/components/TextoUi'
import { textoMiniUi } from '@/config/fontUi'
import { corErroUi } from '@/config/colorUi'

export const MensagemErro = () => {
  const name = useContextSelector(ContainerContexto, (value) => value.name)
  const formContext = useFormContext()
  const { formState } = formContext || {}
  const { errors } = formState || {}

  const inputError = getErroHookForm(errors, name)
  if (!inputError) {
    return <></>
  }

  return (
    <TextoUi {...textoMiniUi} color={corErroUi}>
      {inputError.message?.toString()}{' '}
    </TextoUi>
  )
}
