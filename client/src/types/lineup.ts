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
