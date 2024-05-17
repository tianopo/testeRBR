import moduleAlias from 'module-alias'
import path from 'path'

moduleAlias.addAliases({
  '@': path.resolve(__dirname, '.')
})

// eslint-disable-next-line import/first
import server from './server'

server.init()