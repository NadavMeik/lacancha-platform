import { competitions, fixtures } from '../data/competitions'
import type {
  Competition,
  CompetitionCategory,
  CompetitionFixture,
  CompetitionDetail,
  FixtureContext,
} from '../types/competition'

export async function listCompetitions(
  category?: CompetitionCategory | 'all',
): Promise<Competition[]> {
  if (!category || category === 'all') return competitions
  return competitions.filter((c) => c.category === category)
}

export async function getCompetitionById(
  competitionId: string,
): Promise<Competition | null> {
  return competitions.find((c) => c.competitionId === competitionId) ?? null
}

export async function getFixturesForCompetition(
  competitionId: string,
): Promise<CompetitionFixture[]> {
  return fixtures[competitionId] ?? []
}

export async function getCompetitionDetail(
  competitionId: string,
): Promise<CompetitionDetail | null> {
  const competition = await getCompetitionById(competitionId)
  if (!competition) return null
  const fixtureList = await getFixturesForCompetition(competitionId)
  return { competition, fixtures: fixtureList }
}

export async function getFixtureContext(
  matchId: string,
): Promise<FixtureContext | null> {
  for (const competition of competitions) {
    const fx = (fixtures[competition.competitionId] ?? []).find(
      (f) => f.matchId === matchId,
    )
    if (fx) return { competition, fixture: fx }
  }
  return null
}
