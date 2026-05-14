import type { Request, Response } from 'express'
import { sendSuccess } from '../utils/response'

export function getHealth(req: Request, res: Response): void {
  sendSuccess(res, {
    status: 'ok',
    timestamp: new Date().toISOString(),
    version: '0.1.0',
  })
}
