import express from 'express'
import cors from 'cors'
import { CORS_ORIGIN } from './config/env'
import { requestLogger } from './middleware/requestLogger'
import { notFoundHandler } from './middleware/notFound'
import { errorHandler } from './middleware/errorHandler'
import apiRouter from './routes/index'

const app = express()

app.use(cors({ origin: CORS_ORIGIN, credentials: true }))
app.use(express.json())
app.use(requestLogger)

app.use('/api', apiRouter)

app.use(notFoundHandler)
app.use(errorHandler)

export default app
