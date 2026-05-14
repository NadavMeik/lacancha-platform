import type { Request, Response } from 'express'
import { listCompetitions, getCompetitionDetail } from '../services/competitionsService'
import { sendSuccess } from '../utils/response'
import { notFound, badRequest } from '../utils/errors'
import type { CompetitionCategory } from '../types/competition'

const VALID_CATEGORIES = new Set<CompetitionCategory | 'all'>([
  'all',
  'league',
  'tournament',
  'national',
])

export async function getCompetitions(
  req: Request,
  res: Response,
): Promise<void> {
  const raw = req.query.category as string | undefined
  const category = raw ?? 'all'

  if (!VALID_CATEGORIES.has(category as CompetitionCategory | 'all')) {
    throw badRequest(
      `Invalid category "${category}". Valid values: all, league, tournament, national`,
    )
  }

  const data = await listCompetitions(category as CompetitionCategory | 'all')
  sendSuccess(res, data)
}

export async function getCompetitionById(
  req: Request,
  res: Response,
): Promise<void> {
  const { id } = req.params
  const detail = await getCompetitionDetail(id)
  if (!detail) throw notFound(`Competition "${id}"`)
  sendSuccess(res, detail)
}
