import { lineups } from '../data/lineups'
import { getFixtureContext } from './competitionsService'
import type { MatchLineups, MatchLineupsWithContext } from '../types/lineup'

export async function getMatchLineups(
  matchId: string,
): Promise<MatchLineups | null> {
  return lineups[matchId] ?? null
}

export async function getMatchLineupsWithContext(
  matchId: string,
): Promise<MatchLineupsWithContext | null> {
  const [matchLineups, ctx] = await Promise.all([
    getMatchLineups(matchId),
    getFixtureContext(matchId),
  ])

  if (!matchLineups) return null

  return {
    matchId: matchLineups.matchId,
    home: matchLineups.home,
    away: matchLineups.away,
    context: ctx
      ? {
          competitionId: ctx.competition.competitionId,
          competition: ctx.competition.name,
          homeTeam: ctx.fixture.home,
          awayTeam: ctx.fixture.away,
          venue: ctx.fixture.venue,
          kickoffLabel: ctx.fixture.kickoffLabel,
        }
      : null,
  }
}
