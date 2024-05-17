/* c8 ignore start */

import { CustomError } from './errors/CustomError'
import { GenericError } from './errors/GenericError'
import { RouteNotFoundError } from './errors/RouteNotFoundError'

export function handleControllerResponse(response: unknown | Error): IResponseType {
  if (response instanceof Error) {
    switch (true) {
      case response instanceof RouteNotFoundError:
        return { status: 404, responseController: { error: response.message } }

      case response instanceof CustomError:
        return { status: 500, responseController: { error: response.message } }

      default:
        return { status: 500, responseController: { error: new GenericError().message } }
    }
  }

  return { status: 200, responseController: { data: response } }
}

interface IResponseType {
  responseController: IResponseSuccess | IResponseError
  status: number
}
interface IResponseSuccess {
  data: unknown
}
interface IResponseError {
  error: string
}

/* c8 ignore end */
