import { breakpoints } from '@/config/breakpoints'
import { useMediaQuery } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

type Breakpoints = 'sm' | 'md' | 'lg' | 'xl'
export const useBreakpoints = () => {
  const [currentBreakpoint, setCurrentBreakpoint] = useState<Breakpoints>('sm')
  const [sm, md, lg, xl] = useMediaQuery([
    `(min-width: ${breakpoints.sm})`,
    `(min-width: ${breakpoints.md})`,
    `(min-width: ${breakpoints.lg})`,
    `(min-width: ${breakpoints.xl})`,
  ])

  useEffect(() => {
    if (xl) setCurrentBreakpoint('xl')
    else if (lg) setCurrentBreakpoint('lg')
    else if (md) setCurrentBreakpoint('md')
    else if (sm) setCurrentBreakpoint('sm')
    else setCurrentBreakpoint('sm')
  }, [sm, md, lg, xl])

  return { currentBreakpoint }
}
