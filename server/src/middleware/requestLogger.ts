import type { Request, Response, NextFunction } from 'express'
import { isDev } from '../config/env'

export function requestLogger(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  if (!isDev) {
    next()
    return
  }

  const start = Date.now()
  res.on('finish', () => {
    const ms = Date.now() - start
    const status = res.statusCode
    const color = status >= 500 ? 31 : status >= 400 ? 33 : status >= 200 ? 32 : 36
    // eslint-disable-next-line no-console
    console.log(`\x1b[${color}m${req.method}\x1b[0m ${req.path} ${status} ${ms}ms`)
  })

  next()
}
