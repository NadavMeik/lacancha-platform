import { Router } from 'express'
import {
  getCompetitions,
  getCompetitionById,
} from '../controllers/competitionsController'
import { asyncHandler } from '../utils/asyncHandler'

const router = Router()

router.get('/', asyncHandler(getCompetitions))
router.get('/:id', asyncHandler(getCompetitionById))

export default router
