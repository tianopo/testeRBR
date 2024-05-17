/* c8 ignore start */
export class InsuficientPermissionsError extends Error {
  constructor() {
    super('Você não tem permissões suficiente.')
  }
}
