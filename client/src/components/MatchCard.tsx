import type { CSSProperties } from 'react'
import type { MatchSummary } from '../data/mockFootball'
import { MatchTimeline } from './MatchTimeline'
import { MetricPair } from './MetricPair'
import { PossessionBar } from './PossessionBar'
import { TeamCrest } from './TeamCrest'
import { XgBarCompare } from './XgBarCompare'
import './MatchCard.css'

type MatchCardProps = {
  match: MatchSummary
}

export function MatchCard({ match }: MatchCardProps) {
  const { home, away } = match
  const scoreLine = `${home.goals} — ${away.goals}`

  const shellStyle = {
    '--home-accent': home.primaryColor,
    '--away-accent': away.primaryColor,
  } as CSSProperties

  return (
    <article
      className="match-card"
      style={shellStyle}
      aria-labelledby={`match-${match.id}-title`}
    >
      <header className="match-card__head">
        <div>
          <p className="match-card__meta">
            {match.competition} · {match.matchday}
          </p>
          <h2 id={`match-${match.id}-title`} className="match-card__title">
            {home.short} vs {away.short}
          </h2>
          <p className="match-card__venue">
            {match.venue} · {match.kickoffLabel}
          </p>
        </div>
        <span className="match-card__status">{match.status}</span>
      </header>

      <div className="match-card__scoreboard">
        <div className="match-card__team match-card__team--home">
          <div className="match-card__team-row">
            <TeamCrest
              short={home.short}
              primaryColor={home.primaryColor}
              secondaryColor={home.secondaryColor}
              title={home.name}
              side="home"
            />
            <div className="match-card__team-copy">
              <span className="match-card__team-name">{home.name}</span>
              <span
                className="match-card__team-abbr"
                style={{ color: home.primaryColor }}
              >
                {home.short}
              </span>
            </div>
          </div>
        </div>
        <div className="match-card__score" aria-label="Match score">
          {scoreLine}
        </div>
        <div className="match-card__team match-card__team--away">
          <div className="match-card__team-row match-card__team-row--away">
            <TeamCrest
              short={away.short}
              primaryColor={away.primaryColor}
              secondaryColor={away.secondaryColor}
              title={away.name}
              side="away"
            />
            <div className="match-card__team-copy">
              <span className="match-card__team-name">{away.name}</span>
              <span
                className="match-card__team-abbr"
                style={{ color: away.primaryColor }}
              >
                {away.short}
              </span>
            </div>
          </div>
        </div>
      </div>

      <dl className="match-card__metrics">
        <div className="match-card__metric match-card__metric--wide">
          <dt>Possession</dt>
          <dd className="match-card__metric-body">
            <PossessionBar
              homePct={home.possessionPct}
              awayPct={away.possessionPct}
              homeColor={home.primaryColor}
              awayColor={away.primaryColor}
              homeLabel={home.short}
              awayLabel={away.short}
            />
            <p className="match-card__metric-caption">
              <MetricPair
                home={`${home.possessionPct}%`}
                away={`${away.possessionPct}%`}
                leader={match.metricLeaders.possession}
              />
            </p>
          </dd>
        </div>
        <div className="match-card__metric match-card__metric--wide">
          <dt>xG (non-pen)</dt>
          <dd className="match-card__metric-body">
            <XgBarCompare
              homeXg={home.xg}
              awayXg={away.xg}
              homeColor={home.primaryColor}
              awayColor={away.primaryColor}
              homeShort={home.short}
              awayShort={away.short}
            />
            <p className="match-card__metric-caption">
              <MetricPair
                home={home.xg.toFixed(2)}
                away={away.xg.toFixed(2)}
                leader={match.metricLeaders.xg}
              />
            </p>
          </dd>
        </div>
        <div>
          <dt>Shots on target</dt>
          <dd>
            <MetricPair
              home={String(home.shotsOnTarget)}
              away={String(away.shotsOnTarget)}
              leader={match.metricLeaders.shotsOnTarget}
            />
          </dd>
        </div>
        <div>
          <dt>Pass accuracy</dt>
          <dd>
            <MetricPair
              home={`${home.passAccuracyPct}%`}
              away={`${away.passAccuracyPct}%`}
              leader={match.metricLeaders.passAccuracy}
            />
          </dd>
        </div>
      </dl>

      <MatchTimeline events={match.timeline} />
    </article>
  )
}
