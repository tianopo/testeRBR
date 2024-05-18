import { createStandaloneToast } from '@chakra-ui/react'

const { toast } = createStandaloneToast({
  defaultOptions: { position: 'top-right', duration: 2000, isClosable: true },
})

export const toastUi = toast
