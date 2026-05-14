export type CompetitionCategory = 'league' | 'tournament' | 'national'

export type Competition = {
  competitionId: string
  name: string
  category: CompetitionCategory
  country?: string
  season: string
  blurb: string
}

export type CompetitionFixture = {
  matchId: string
  home: string
  away: string
  kickoffLabel: string
  venue: string
}

export type FixtureContext = {
  competition: Competition
  fixture: CompetitionFixture
}
