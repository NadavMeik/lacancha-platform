import type { Request, Response, NextFunction } from 'express'
import { AppError } from '../utils/errors'
import { sendError } from '../utils/response'
import { isDev } from '../config/env'

export function errorHandler(
  err: unknown,
  req: Request,
  res: Response,
  // next is required by Express to recognize this as an error-handling middleware
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction,
): void {
  if (err instanceof AppError) {
    sendError(res, err.message, err.code, err.statusCode)
    return
  }

  if (isDev) {
    // eslint-disable-next-line no-console
    console.error('[Unhandled error]', err)
  }

  sendError(res, 'Internal server error', 'INTERNAL_ERROR', 500)
}
