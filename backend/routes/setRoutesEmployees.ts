import { Application } from 'express'
import { employeesRouter } from './employeesRoutes'

export function setRoutesEmployees(baseUrlPath: string, expressApp: Application) {
  expressApp.use(baseUrlPath, employeesRouter())
}
