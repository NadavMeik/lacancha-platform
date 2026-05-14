import { getLineups as findLineups } from '../../data/lineups'
import { getFixtureContext } from '../competitions/competitionsService'
import type { MatchLineups } from '../../types/lineup'
import type { FixtureContext } from '../../types/competition'

export async function getMatchLineups(
  matchId: string,
): Promise<MatchLineups | null> {
  return findLineups(matchId) ?? null
}

export async function getMatchLineupsWithContext(matchId: string): Promise<{
  lineups: MatchLineups | null
  ctx: FixtureContext | null
}> {
  const [lineups, ctx] = await Promise.all([
    getMatchLineups(matchId),
    getFixtureContext(matchId),
  ])
  return { lineups, ctx }
}
