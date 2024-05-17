import { Application } from 'express'
import { setRoutesEmployees } from './routes/setRoutesEmployees'

export function setRoutes(baseUrlPath: string, expressApp: Application) {
  setRoutesEmployees(baseUrlPath, expressApp)
}
