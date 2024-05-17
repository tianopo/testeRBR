import { Request, Response, Router } from 'express'
import { employeesController } from '../controllers/employeesController'

export const employeesRouter = (): Router => {
  const router = Router()

  router.post(
    "/employees",
    async (req: Request, res: Response) => await employeesController.create(req, res),
  )

  router.get(
    "/employees",
    async (req: Request, res: Response) => await employeesController.getAll(req, res),
  )

  router.get(
    "/employees/:id",
    async (req: Request, res: Response) => await employeesController.get(req, res),
  )

  router.delete(
    "/employees/:id",
    async (req: Request, res: Response) => await employeesController.delete(req, res),
  )

  router.put(
    "/employees/:id",
    async (req: Request, res: Response) => await employeesController.update(req, res),
  )

  return router
}