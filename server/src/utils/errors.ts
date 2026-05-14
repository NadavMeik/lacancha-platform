export class AppError extends Error {
  constructor(
    message: string,
    public readonly statusCode: number,
    public readonly code: string,
  ) {
    super(message)
    this.name = 'AppError'
    Object.setPrototypeOf(this, AppError.prototype)
  }
}

export function notFound(resource: string): AppError {
  return new AppError(`${resource} not found`, 404, 'NOT_FOUND')
}

export function badRequest(detail: string): AppError {
  return new AppError(detail, 400, 'BAD_REQUEST')
}
