import './MatchLineupHeader.css'

type MatchLineupHeaderProps = {
  competitionName: string
  home: string
  away: string
  venue: string
  kickoffLabel: string
}

export function MatchLineupHeader({
  competitionName,
  home,
  away,
  venue,
  kickoffLabel,
}: MatchLineupHeaderProps) {
  return (
    <header className="mlh">
      <p className="mlh__crumb">{competitionName}</p>
      <h1 className="mlh__title">
        {home} vs {away}
      </h1>
      <p className="mlh__meta">
        {venue} · {kickoffLabel}
      </p>
    </header>
  )
}
