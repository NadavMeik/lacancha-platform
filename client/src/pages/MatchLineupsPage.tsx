import { Link } from '../router'
import { LineupSidePanel } from '../components/lineups/LineupSidePanel'
import { MatchLineupHeader } from '../components/lineups/MatchLineupHeader'
import { getFixtureContext } from '../data/competitions'
import { getLineups } from '../data/lineups'
import '../styles/workspace-page.css'
import './MatchLineupsPage.css'

type MatchLineupsPageProps = {
  matchId: string
}

export function MatchLineupsPage({ matchId }: MatchLineupsPageProps) {
  const data = getLineups(matchId)
  const ctx = getFixtureContext(matchId)

  if (!data) {
    return (
      <div className="workspace-page">
        <main className="workspace-page__main">
          <h1 className="mlineups__title">Lineups unavailable</h1>
          <p className="workspace-page__intro">
            No mock lineup for <code>{matchId}</code>.{' '}
            <Link to="/competitions">Browse competitions</Link> or{' '}
            <Link to="/dashboard">return to the dashboard</Link>.
          </p>
        </main>
      </div>
    )
  }

  const homeName = ctx?.fixture.home ?? 'Home'
  const awayName = ctx?.fixture.away ?? 'Away'

  return (
    <div className="workspace-page">
      <main className="workspace-page__main">
        <p className="mlineups__crumb">
          <Link to="/competitions">Competitions</Link>
          {ctx ? (
            <>
              {' '}
              /{' '}
              <Link to={`/competitions/${ctx.competition.competitionId}`}>
                {ctx.competition.name}
              </Link>
            </>
          ) : null}{' '}
          / Lineups
        </p>

        <MatchLineupHeader
          competitionName={ctx?.competition.name ?? 'Fixture'}
          home={homeName}
          away={awayName}
          venue={ctx?.fixture.venue ?? 'Venue TBC'}
          kickoffLabel={ctx?.fixture.kickoffLabel ?? 'Kickoff TBC'}
        />

        <div className="mlineups__grid workspace-page__grid workspace-page__grid--two">
          <LineupSidePanel teamName={homeName} lineup={data.home} />
          <LineupSidePanel teamName={awayName} lineup={data.away} />
        </div>
      </main>
    </div>
  )
}
