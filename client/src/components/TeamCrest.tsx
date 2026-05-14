import type { CSSProperties } from 'react'
import './TeamCrest.css'

export type TeamCrestProps = {
  short: string
  primaryColor: string
  secondaryColor: string
  title: string
  side: 'home' | 'away'
}

export function TeamCrest({
  short,
  primaryColor,
  secondaryColor,
  title,
  side,
}: TeamCrestProps) {
  const initials = short.slice(0, 2).toUpperCase()

  return (
    <div
      className={`team-crest team-crest--${side}`}
      style={
        {
          '--crest-primary': primaryColor,
          '--crest-secondary': secondaryColor,
        } as CSSProperties
      }
      title={title}
      role="img"
      aria-label={`${title} crest placeholder`}
    >
      <span className="team-crest__ring" aria-hidden />
      <span className="team-crest__initials">{initials}</span>
    </div>
  )
}
