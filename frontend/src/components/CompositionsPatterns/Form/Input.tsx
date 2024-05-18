import {
  Box,
  Input as InputChakra,
  InputGroup,
  InputProps as InputPropsChakra,
} from '@chakra-ui/react'
import { ForwardRefRenderFunction, forwardRef } from 'react'
import { useFormContext } from 'react-hook-form'
import { useContextSelector } from 'use-context-selector'
import { ContainerContexto } from './Container'
import { textoBaseUi } from '@/config/fontUi'
import { borderRadiusUi, paddingGlobalUi } from '@/config/measureUi'
import { corBordaUi, corErroUi, corFundoUi, corPrimariaUi, corTextoUi } from '@/config/colorUi'
import { opacityColor } from '@/utils/opacityColor'
import { getErroHookForm } from '@/utils/getErroHookForm'

export const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputPatternProps> = (props: InputPatternProps, ref) => {
  const required = useContextSelector(ContainerContexto, (value) => value.required)
  const name = useContextSelector(ContainerContexto, (value) => value.name)
  const disabled = useContextSelector(ContainerContexto, (value) => value.disabled)
  const readOnly = useContextSelector(ContainerContexto, (value) => value.readOnly)
  const htmlFor = useContextSelector(ContainerContexto, (value) => value.htmlFor)

  const formContext = useFormContext()
  const { register, formState } = formContext || {}
  const { errors } = formState || {}
  const { manual, ...rest } = props

  const inputError = getErroHookForm(errors, name)
  const inputRegister = register ? register(name, { required }) : undefined
  return (
    <Box alignItems={'center'} width={'100%'} as="label" {...(htmlFor && { htmlFor, zIndex: 9, cursor: 'pointer' })}>
      <InputGroup>
        <InputChakra
          {...(htmlFor && { pointerEvents: 'none' })}
          id={name}
          ref={ref}
          {...(!manual && inputRegister)}
          onChange={(e) => {
            inputRegister?.onChange(e)
            props.onChange && props.onChange(e)
          }}
          readOnly={readOnly}
          isDisabled={disabled}
          borderRadius={borderRadiusUi.lg}
          borderWidth="1px"
          borderStyle="solid"
          borderColor={corBordaUi}
          bg={corFundoUi.secundaria}
          paddingY={paddingGlobalUi}
          paddingX={paddingGlobalUi}
          h="46px"
          outline="none"
          fontSize={textoBaseUi.fontSize}
          _placeholder={{
            fontFamily: textoBaseUi.fontFamily,
            fontWeight: 400,
            fontStyle: 'normal',
            color: corTextoUi['form-placeholder'],
            fontSize: textoBaseUi.fontSize,
            height: 'fit-content',
            paddingX: { paddingGlobalUi },
          }}
          _hover={{
            ...(!disabled && {
              borderColor: corPrimariaUi,
              _placeholder: {
                opacity: '0',
                transition: 'opacity 0.5s ease',
              },
            }),
          }}
          _disabled={{
            color: opacityColor({ cor: corTextoUi.primaria, opacidade: 0.5 }),
            cursor: 'not-allowed',
          }}
          _focus={{
            borderWidth: '3px',
            color: corPrimariaUi,
          }}
          color={corTextoUi.primaria}
          isInvalid={!!inputError}
          autoFocus={!!inputError}
          focusBorderColor={corPrimariaUi}
          errorBorderColor={corErroUi}
          textOverflow="ellipsis"
          overflow="hidden"
          whiteSpace="nowrap"
          {...rest}
          autoComplete="new-password"
        />
      </InputGroup>
    </Box>
  )
}

InputBase.displayName = 'Input'
export const Input = forwardRef(InputBase)
type OmitInputProps = 'name' | 'disabled'

export type InputPatternProps = Omit<InputPropsChakra, OmitInputProps> & {
  manual?: boolean
}
