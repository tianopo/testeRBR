import { FieldValues } from 'react-hook-form'

export const isErrorForm = (errors: FieldValues) => !!Object.keys(errors).length
