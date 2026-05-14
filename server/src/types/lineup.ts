export type LineupRole = 'GK' | 'DF' | 'MF' | 'FW'

export type LineupPlayer = {
  playerId: string
  name: string
  number: number
  role: LineupRole
}

export type TeamLineup = {
  formation: string
  starters: LineupPlayer[]
  bench: LineupPlayer[]
}

export type MatchLineups = {
  matchId: string
  home: TeamLineup
  away: TeamLineup
}

export type MatchLineupsWithContext = {
  matchId: string
  home: TeamLineup
  away: TeamLineup
  context: {
    competitionId: string
    competition: string
    homeTeam: string
    awayTeam: string
    venue: string
    kickoffLabel: string
  } | null
}
