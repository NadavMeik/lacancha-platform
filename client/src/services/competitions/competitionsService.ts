import {
  competitions as allCompetitions,
  getCompetition as findCompetition,
  getFixturesForCompetition as findFixtures,
  getFixtureContext as findFixtureContext,
} from '../../data/competitions'
import type {
  Competition,
  CompetitionCategory,
  CompetitionFixture,
  FixtureContext,
} from '../../types/competition'

export async function listCompetitions(
  category?: CompetitionCategory | 'all',
): Promise<Competition[]> {
  if (!category || category === 'all') return allCompetitions
  return allCompetitions.filter((c) => c.category === category)
}

export async function getCompetition(
  competitionId: string,
): Promise<Competition | null> {
  return findCompetition(competitionId) ?? null
}

export async function getFixturesForCompetition(
  competitionId: string,
): Promise<CompetitionFixture[]> {
  return findFixtures(competitionId)
}

export async function getFixtureContext(
  matchId: string,
): Promise<FixtureContext | null> {
  return findFixtureContext(matchId) ?? null
}

export async function getCompetitionDetail(competitionId: string): Promise<{
  competition: Competition | null
  fixtures: CompetitionFixture[]
}> {
  const competition = await getCompetition(competitionId)
  const fixtures = competition ? await getFixturesForCompetition(competitionId) : []
  return { competition, fixtures }
}
