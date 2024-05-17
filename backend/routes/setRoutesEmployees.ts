import { Application } from 'express'

export function setRoutesEmployees(baseUrlPath: string, expressApp: Application) {
  expressApp.use(baseUrlPath, /*rota aqui*/)
}
