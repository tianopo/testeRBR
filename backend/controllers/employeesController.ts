import { Request, Response } from 'express';
import { Employees } from '../models/Employees';
import { ErroLog } from '../utils/errors/ErroLog';
import { handleControllerResponse } from '../utils/handleControllerResponse';

export const employeesController = {

  create: async (req: Request, res: Response) => {
    try {

      const employee = {
        nome: req.body.nome,
        cargo: req.body.cargo,
        departamento: req.body.departamento,
      }
      const { nome, cargo, departamento } = employee
      if (!nome || !cargo || !departamento) return res.status(404).json({msg: "Atributos não encontrados"})

      const response = await Employees.create(employee);

      const controllerResponse = handleControllerResponse(response)
      return res.status(controllerResponse.status).json(controllerResponse.responseController)
    } catch (error) {
      ErroLog('employeesController Create')
      throw error
    }
  },

  getAll: async (_: Request, res: Response) => {
    try {
      const employees = await Employees.find()

      const controllerResponse = handleControllerResponse(employees)
      return res.status(controllerResponse.status).json(controllerResponse.responseController)
    } catch (error) {
      ErroLog('employeesController GetAll')
      throw error
    }
  },

  get: async (req: Request, res: Response) => {
    try {
      const id = req.params.id
      if (!id || id === "undefined") return res.status(404).json({msg: "ID ausente"})
      const employee = await Employees.findById(id);
      if (!employee) return res.status(404).json({msg: "empregado não encontrado"})

      const controllerResponse = handleControllerResponse(employee)

      return res.status(controllerResponse.status).json(controllerResponse.responseController)
    } catch (error) {
      ErroLog('employeesController Get')
    }
  },

  delete: async (req: Request, res: Response) => {
    try {
      const id = req.params.id
      if (!id) return res.status(404).json({msg: "ID ausente"})

      const employee = await Employees.findById(id);
      if (!employee) return res.status(404).json({msg: "empregado não encontrado"})

      const deletedEmployee = await Employees.findByIdAndDelete(id)

      const controllerResponse = handleControllerResponse(deletedEmployee)

      return res.status(controllerResponse.status).json(controllerResponse.responseController)
    } catch (error) {
      ErroLog('employeesController Delete')
    }
  },

  update: async (req: Request, res: Response) => {
    try {
      const id = req.params.id
      const employee = {
        nome: req.body.nome,
        cargo: req.body.cargo,
        departamento: req.body.departamento,
      }
      
      const { nome, cargo, departamento } = employee
      if (!id || !nome || !cargo || !departamento) return res.status(404).json({msg: "Atributos não encontrados"})

      const updateEmployee = await Employees.findByIdAndUpdate(id, employee)
      if (!updateEmployee) return res.status(404).json({msg: "empregado não encontrado"})
        console.log(updateEmployee)

      const controllerResponse = handleControllerResponse(updateEmployee)

      return res.status(controllerResponse.status).json(controllerResponse.responseController)
    } catch (error) {
      ErroLog('employeesController Update')
    }
  }
}