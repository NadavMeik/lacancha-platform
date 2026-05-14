import type { TeamLineup } from '../../data/lineups'
import { FormationBadge } from './FormationBadge'
import { LineupRoster } from './LineupRoster'
import './LineupSidePanel.css'

type LineupSidePanelProps = {
  teamName: string
  lineup: TeamLineup
}

function sideId(teamName: string) {
  return `lineup-${teamName.replace(/[^a-zA-Z0-9]+/g, '-').toLowerCase()}`
}

export function LineupSidePanel({ teamName, lineup }: LineupSidePanelProps) {
  const headingId = sideId(teamName)

  return (
    <div className="lineup-side">
      <div className="lineup-side__head">
        <h2 id={headingId} className="lineup-side__team">
          {teamName}
        </h2>
        <FormationBadge label={lineup.formation} />
      </div>
      <p className="lineup-side__hint" aria-hidden="true">
        Mock XI · positions are illustrative for the SportsTech shell.
      </p>
      <LineupRoster
        labelledBy={headingId}
        starters={lineup.starters}
        bench={lineup.bench}
      />
    </div>
  )
}
