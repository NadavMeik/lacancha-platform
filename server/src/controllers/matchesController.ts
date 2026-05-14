import type { Request, Response } from 'express'
import { getFeaturedMatch } from '../services/matchesService'
import { getMatchLineupsWithContext } from '../services/lineupsService'
import { sendSuccess } from '../utils/response'
import { notFound } from '../utils/errors'

export async function getFeatured(req: Request, res: Response): Promise<void> {
  const match = await getFeaturedMatch()
  sendSuccess(res, match)
}

export async function getLineups(req: Request, res: Response): Promise<void> {
  const { id } = req.params
  const data = await getMatchLineupsWithContext(id)
  if (!data) throw notFound(`Lineups for match "${id}"`)
  sendSuccess(res, data)
}
