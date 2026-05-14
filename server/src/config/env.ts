import dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.resolve(__dirname, '../../.env') })

export const PORT = parseInt(process.env.PORT ?? '3001', 10)
export const NODE_ENV = process.env.NODE_ENV ?? 'development'
export const CORS_ORIGIN = process.env.CORS_ORIGIN ?? 'http://localhost:5173'
export const isDev = NODE_ENV === 'development'
