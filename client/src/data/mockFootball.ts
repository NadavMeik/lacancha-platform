export type TeamSlug = 'mci' | 'liv'

export type TeamSide = {
  slug: TeamSlug
  name: string
  short: string
  /** Primary kit / brand accent (hex) */
  primaryColor: string
  /** Secondary trim (hex) */
  secondaryColor: string
  goals: number
  xg: number
  possessionPct: number
  shotsOnTarget: number
  passAccuracyPct: number
}

export type MetricLeader = 'home' | 'away' | 'even'

export type MatchMetricLeaders = {
  possession: MetricLeader
  xg: MetricLeader
  shotsOnTarget: MetricLeader
  passAccuracy: MetricLeader
}

export type TimelineEventType = 'goal' | 'yellow_card' | 'substitution'

export type MatchTimelineEvent = {
  minute: number
  type: TimelineEventType
  team: 'home' | 'away'
  label: string
}

export type MatchSummary = {
  id: string
  competition: string
  matchday: string
  kickoffLabel: string
  venue: string
  status: 'Full time' | 'Live' | 'Scheduled'
  home: TeamSide
  away: TeamSide
  metricLeaders: MatchMetricLeaders
  timeline: MatchTimelineEvent[]
}

export const featuredMatch: MatchSummary = {
  id: 'pl-2025-12-mci-liv',
  competition: 'Premier League',
  matchday: 'Matchday 12',
  kickoffLabel: 'Sun 16:30',
  venue: 'Etihad Stadium',
  status: 'Full time',
  home: {
    slug: 'mci',
    name: 'Manchester City',
    short: 'MCI',
    primaryColor: '#6CABDD',
    secondaryColor: '#1C2C5B',
    goals: 2,
    xg: 2.41,
    possessionPct: 58,
    shotsOnTarget: 7,
    passAccuracyPct: 89,
  },
  away: {
    slug: 'liv',
    name: 'Liverpool',
    short: 'LIV',
    primaryColor: '#C8102E',
    secondaryColor: '#00A398',
    goals: 1,
    xg: 1.12,
    possessionPct: 42,
    shotsOnTarget: 4,
    passAccuracyPct: 84,
  },
  metricLeaders: {
    possession: 'home',
    xg: 'home',
    shotsOnTarget: 'home',
    passAccuracy: 'home',
  },
  timeline: [
    { minute: 12, type: 'goal', team: 'home', label: 'Haaland · assist Foden' },
    { minute: 23, type: 'yellow_card', team: 'away', label: 'Mac Allister' },
    { minute: 44, type: 'goal', team: 'away', label: 'Salah · pen won' },
    { minute: 58, type: 'substitution', team: 'home', label: 'Silva → Grealish' },
    { minute: 67, type: 'yellow_card', team: 'home', label: 'Rodri' },
    { minute: 78, type: 'goal', team: 'home', label: 'Álvarez · counter' },
  ],
}

/** Which side leads on the scoreline (for stat strip styling). */
export function scoreLeader(homeGoals: number, awayGoals: number): MetricLeader {
  if (homeGoals === awayGoals) return 'even'
  return homeGoals > awayGoals ? 'home' : 'away'
}
