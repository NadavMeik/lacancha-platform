import { Router } from 'express'
import healthRouter from './health'
import matchesRouter from './matches'
import competitionsRouter from './competitions'

const router = Router()

router.use('/health', healthRouter)
router.use('/matches', matchesRouter)
router.use('/competitions', competitionsRouter)

export default router
