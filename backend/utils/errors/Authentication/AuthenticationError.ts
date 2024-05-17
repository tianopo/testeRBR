/* c8 ignore start */
export class AuthenticationError extends Error {
  constructor() {
    super('Não autorizado, realize o login.')
  }
}
