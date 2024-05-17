import { CORES_LOG } from './coresLog'

export const logServer = (host: string, port: number, isHttps?: boolean) => {
  // eslint-disable-next-line no-restricted-syntax
  console.log(
    `\n\n${CORES_LOG.fg.yellow}===${CORES_LOG.fg.blue} SERVER ONLINE ${CORES_LOG.fg.yellow}===${CORES_LOG.reset}`
  )

  // eslint-disable-next-line no-restricted-syntax
  console.log(
    `${CORES_LOG.fg.cyan}Data:${CORES_LOG.reset} ${new Date().toLocaleString('pt-BR', {
      timeZone: 'America/Sao_Paulo'
    })}`
  )

  // eslint-disable-next-line no-restricted-syntax
  console.log(`${CORES_LOG.fg.cyan}Ambiente:${CORES_LOG.reset} ${process.env.NODE_ENV || 'produção'}`)

  if (isHttps) {
    // eslint-disable-next-line no-restricted-syntax
    console.log(`${CORES_LOG.fg.cyan}Url:${CORES_LOG.reset} https://${host}:${port}/`)
  } else {
    // eslint-disable-next-line no-restricted-syntax
    console.log(`${CORES_LOG.fg.cyan}Url:${CORES_LOG.reset} http://${host}:${port}/`)
  }
}
