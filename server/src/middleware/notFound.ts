import type { Request, Response } from 'express'
import { sendError } from '../utils/response'

export function notFoundHandler(req: Request, res: Response): void {
  sendError(res, `Route ${req.method} ${req.path} not found`, 'NOT_FOUND', 404)
}
