import type { MatchTimelineEvent } from '../data/mockFootball'
import './MatchTimeline.css'

export type MatchTimelineProps = {
  events: MatchTimelineEvent[]
  /** Normalization span for horizontal layout (e.g. 90 or 96 with stoppage). */
  spanMinutes?: number
}

function EventIcon({ type }: { type: MatchTimelineEvent['type'] }) {
  if (type === 'goal') {
    return (
      <svg className="match-timeline__icon" viewBox="0 0 16 16" aria-hidden>
        <circle cx="8" cy="8" r="6.5" fill="currentColor" opacity="0.2" />
        <circle cx="8" cy="8" r="3.2" fill="currentColor" />
      </svg>
    )
  }
  if (type === 'yellow_card') {
    return (
      <svg className="match-timeline__icon" viewBox="0 0 16 16" aria-hidden>
        <rect x="4" y="2.5" width="8" height="11" rx="1.2" fill="currentColor" />
      </svg>
    )
  }
  return (
    <span className="match-timeline__glyph" aria-hidden>
      ⇄
    </span>
  )
}

export function MatchTimeline({ events, spanMinutes = 93 }: MatchTimelineProps) {
  const span = Math.max(spanMinutes, 1)

  return (
    <section className="match-timeline" aria-label="Match event timeline">
      <div className="match-timeline__head">
        <h3 className="match-timeline__title">Key events</h3>
        <span className="match-timeline__scale">0′—{span}′</span>
      </div>
      <div className="match-timeline__track" role="list">
        <div className="match-timeline__rail" aria-hidden />
        {events.map((ev, idx) => {
          const left = Math.min(100, Math.max(0, (ev.minute / span) * 100))
          const mod = ev.type === 'goal' ? 'goal' : ev.type === 'yellow_card' ? 'card' : 'sub'
          return (
            <div
              key={`${idx}-${ev.minute}-${ev.type}`}
              className={`match-timeline__marker match-timeline__marker--${ev.team} match-timeline__marker--${mod}`}
              style={{ left: `${left}%` }}
              role="listitem"
            >
              <div
                className="match-timeline__dot"
                title={`${ev.minute}′ · ${ev.label}`}
              >
                <EventIcon type={ev.type} />
              </div>
              <span className="match-timeline__minute">{ev.minute}′</span>
            </div>
          )
        })}
      </div>
      <ul className="match-timeline__legend">
        {events.map((ev, idx) => (
          <li key={`${idx}-${ev.minute}-legend`}>
            <span className="match-timeline__legend-minute">{ev.minute}′</span>
            <span className="match-timeline__legend-text">
              {ev.type === 'goal' ? 'Goal' : ev.type === 'yellow_card' ? 'Yellow' : 'Sub'}{' '}
              · {ev.team === 'home' ? 'Home' : 'Away'} · {ev.label}
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}
