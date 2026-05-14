import type { CSSProperties } from 'react'
import './PossessionBar.css'

export type PossessionBarProps = {
  homePct: number
  awayPct: number
  homeColor: string
  awayColor: string
  homeLabel: string
  awayLabel: string
}

export function PossessionBar({
  homePct,
  awayPct,
  homeColor,
  awayColor,
  homeLabel,
  awayLabel,
}: PossessionBarProps) {
  const safeHome = Math.min(100, Math.max(0, homePct))
  const safeAway = Math.min(100, Math.max(0, awayPct))

  const homeSegStyle = {
    width: `${safeHome}%`,
    ['--poss-fill']: homeColor,
  } as CSSProperties

  const awaySegStyle = {
    width: `${safeAway}%`,
    ['--poss-fill']: awayColor,
  } as CSSProperties

  return (
    <div
      className="possession-bar"
      role="group"
      aria-label={`Possession split: ${homeLabel} ${safeHome} percent, ${awayLabel} ${safeAway} percent`}
    >
      <div className="possession-bar__track" aria-hidden>
        <div
          className="possession-bar__seg possession-bar__seg--home"
          style={homeSegStyle}
        />
        <div
          className="possession-bar__seg possession-bar__seg--away"
          style={awaySegStyle}
        />
      </div>
      <div className="possession-bar__labels" aria-hidden>
        <span style={{ color: homeColor }}>{homeLabel}</span>
        <span style={{ color: awayColor }}>{awayLabel}</span>
      </div>
    </div>
  )
}
