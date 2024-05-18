export interface IAbstractModelAtributos {
  _id: string
  criadoEm?: Date
  atualizadoEm?: Date
}

// ############ Employee
export interface IEmployeeAtributos extends IAbstractModelAtributos {
  nome: string
  cargo: string
  departamento: string
}

export interface IEmployeeDTO extends Partial<IEmployeeAtributos> {
  _id: string
}