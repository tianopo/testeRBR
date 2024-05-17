import cors from 'cors'
import express, { Application } from 'express'
import { setRoutes } from './setRoutes'
import { handleControllerResponse } from './utils/handleControllerResponse'
import { logServer } from './utils/logServer'
import { RouteNotFoundError } from './utils/errors/RouteNotFoundError'

class Server {
  expressApp: Application = express()

  constructor() {
    this.config()
    this.routes()
  }

  private config() {
    this.expressApp.use(cors({ origin: '*' }))
    this.expressApp.use(express.json())
    this.expressApp.use(express.urlencoded({ extended: true }))

    this.expressApp.use((_, res, next) => {
      res.header('Access-Control-Allow-Origin', '*')
      res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
      next()
    })
  }

  private routes() {
    setRoutes('/api', this.expressApp)

    this.expressApp.use((_, response) => {
      const controllerResponse = handleControllerResponse(new RouteNotFoundError())
      return response.status(controllerResponse.status).json(controllerResponse.responseController)
    })
  }

  init() {
    const PORT = 7000
    const HOST = 'localhost'

    this.expressApp.listen(PORT, async () => {
      logServer(HOST, PORT)
    })
  }
}

export default new Server()