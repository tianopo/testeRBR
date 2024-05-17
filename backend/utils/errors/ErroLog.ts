/* c8 ignore start */
import { CORES_LOG } from '../coresLog'
export function ErroLog(message: string, reset?: boolean) {
  const date = new Date().toLocaleString('pt-br')
  if (reset) {
    // eslint-disable-next-line no-console, no-restricted-syntax
    console.warn(`${CORES_LOG.fg.green}${date}${CORES_LOG.reset} - ${message}`)
  } else {
    // eslint-disable-next-line no-console, no-restricted-syntax
    console.warn(
      `${CORES_LOG.fg.green}${date}${CORES_LOG.reset} - ${CORES_LOG.fg.red}LOG ERROR ${CORES_LOG.fg.cyan}${message}${CORES_LOG.reset}`,
    )
  }
}
/* c8 ignore end */
