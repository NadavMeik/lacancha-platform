import { Router } from 'express'
import { getFeatured, getLineups } from '../controllers/matchesController'
import { asyncHandler } from '../utils/asyncHandler'

const router = Router()

router.get('/featured', asyncHandler(getFeatured))
router.get('/:id/lineups', asyncHandler(getLineups))

export default router
