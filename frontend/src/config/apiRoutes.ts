export const apiRoutes = {
  employeeGetAll: "/employees",
  employeeGetId: (id: string) => `/employees/${id}`,
  employeeCreate: "/employees",
  employeePut: (id: string) => `/employees/${id}`,
  employeeDelete: (id: string) => `/employees/${id}`,
}