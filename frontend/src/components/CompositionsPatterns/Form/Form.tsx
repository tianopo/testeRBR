import { FormHTMLAttributes, forwardRef } from 'react'
import { useFormContext } from 'react-hook-form'

export const Form = forwardRef<HTMLFormElement, IForm>(({ callback, ...rest }, ref) => {
  const formContext = useFormContext()
  const { handleSubmit } = formContext || {}

  return <form onSubmit={handleSubmit(callback)} style={{ width: '100%' }} {...rest} ref={ref} />
})

Form.displayName = 'Form'
interface IForm {
  children: React.ReactNode
  callback: (data: any) => void
}
export interface IContainerFormulario extends FormHTMLAttributes<HTMLFormElement> {}

export default Form
