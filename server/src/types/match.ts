export type TeamSlug = string

export type TeamSide = {
  slug: TeamSlug
  name: string
  short: string
  primaryColor: string
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
  competitionId: string
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
