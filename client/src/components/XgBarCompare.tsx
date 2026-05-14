import type { CSSProperties } from 'react'
import './XgBarCompare.css'

export type XgBarCompareProps = {
  homeXg: number
  awayXg: number
  homeColor: string
  awayColor: string
  homeShort: string
  awayShort: string
}

export function XgBarCompare({
  homeXg,
  awayXg,
  homeColor,
  awayColor,
  homeShort,
  awayShort,
}: XgBarCompareProps) {
  const max = Math.max(homeXg, awayXg, 0.01)
  const homeW = (homeXg / max) * 100
  const awayW = (awayXg / max) * 100

  const homeFillStyle = {
    width: `${homeW}%`,
    ['--xg-fill']: homeColor,
  } as CSSProperties

  const awayFillStyle = {
    width: `${awayW}%`,
    ['--xg-fill']: awayColor,
  } as CSSProperties

  return (
    <div
      className="xg-compare"
      role="group"
      aria-label={`Expected goals comparison: ${homeShort} ${homeXg.toFixed(2)}, ${awayShort} ${awayXg.toFixed(2)}`}
    >
      <div className="xg-compare__row">
        <span className="xg-compare__abbr" style={{ color: homeColor }}>
          {homeShort}
        </span>
        <div className="xg-compare__track" aria-hidden>
          <span className="xg-compare__fill" style={homeFillStyle} />
        </div>
        <span className="xg-compare__num">{homeXg.toFixed(2)}</span>
      </div>
      <div className="xg-compare__row">
        <span className="xg-compare__abbr" style={{ color: awayColor }}>
          {awayShort}
        </span>
        <div className="xg-compare__track xg-compare__track--away" aria-hidden>
          <span className="xg-compare__fill" style={awayFillStyle} />
        </div>
        <span className="xg-compare__num">{awayXg.toFixed(2)}</span>
      </div>
    </div>
  )
}
