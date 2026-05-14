import type { Response } from 'express'
import type { ApiSuccess, ApiError } from '../types/api'

export function sendSuccess<T>(res: Response, data: T, status = 200): void {
  const body: ApiSuccess<T> = { success: true, data }
  res.status(status).json(body)
}

export function sendError(
  res: Response,
  message: string,
  code: string,
  status = 500,
): void {
  const body: ApiError = { success: false, error: message, code }
  res.status(status).json(body)
}
