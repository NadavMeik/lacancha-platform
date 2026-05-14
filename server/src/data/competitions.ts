import type { Competition, CompetitionFixture } from '../types/competition'

export const competitions: Competition[] = [
  {
    competitionId: 'premier-league',
    name: 'Premier League',
    category: 'league',
    country: 'England',
    season: '2025/26',
    blurb:
      'Domestic first tier—high tempo transitions, set-piece volume, and compact rest-defense separate contenders.',
  },
  {
    competitionId: 'laliga',
    name: 'LaLiga',
    category: 'league',
    country: 'Spain',
    season: '2025/26',
    blurb:
      'Technical security in build-up and wide overload patterns—ideal for modeling progressive carries vs line-breaking passes.',
  },
  {
    competitionId: 'champions-league',
    name: 'UEFA Champions League',
    category: 'tournament',
    season: '2025/26',
    blurb:
      'Knockout-caliber variance—rotation risk, travel density, and opponent quality swings captured in a single matchweek lens.',
  },
  {
    competitionId: 'world-cup',
    name: 'FIFA World Cup',
    category: 'national',
    season: '2026',
    blurb:
      'International windows—compressed prep cycles, hybrid club minutes, and travel-adjusted readiness profiles.',
  },
]

export const fixtures: Record<string, CompetitionFixture[]> = {
  'premier-league': [
    {
      matchId: 'pl-2025-12-mci-liv',
      home: 'Manchester City',
      away: 'Liverpool',
      kickoffLabel: 'Sun 16:30',
      venue: 'Etihad Stadium',
    },
    {
      matchId: 'pl-2025-12-ars-tot',
      home: 'Arsenal',
      away: 'Tottenham',
      kickoffLabel: 'Sun 14:00',
      venue: 'Emirates Stadium',
    },
  ],
  laliga: [
    {
      matchId: 'laliga-2025-elc-sev',
      home: 'Elche',
      away: 'Sevilla',
      kickoffLabel: 'Sat 18:30',
      venue: 'Martínez Valero',
    },
  ],
  'champions-league': [
    {
      matchId: 'ucl-2025-md5-fcb-bay',
      home: 'Barcelona',
      away: 'Bayern Munich',
      kickoffLabel: 'Tue 21:00',
      venue: 'Estadi Olímpic Lluís Companys',
    },
  ],
  'world-cup': [
    {
      matchId: 'wc-2026-sf-usa-arg',
      home: 'USA',
      away: 'Argentina',
      kickoffLabel: 'Tue 20:00',
      venue: 'SoFi Stadium',
    },
  ],
}
