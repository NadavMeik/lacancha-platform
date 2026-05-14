import type { LineupPlayer } from '../../types/lineup'
import './LineupRoster.css'

type LineupRosterProps = {
  starters: LineupPlayer[]
  bench: LineupPlayer[]
  labelledBy: string
}

function RosterTable({
  players,
  caption,
}: {
  players: LineupPlayer[]
  caption: string
}) {
  return (
    <div className="lineup-roster__block">
      <h3 className="lineup-roster__sub">{caption}</h3>
      <table className="lineup-roster__table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Player</th>
            <th scope="col">Role</th>
          </tr>
        </thead>
        <tbody>
          {players.map((p) => (
            <tr key={p.playerId}>
              <td>{p.number}</td>
              <td>{p.name}</td>
              <td>{p.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function LineupRoster({
  starters,
  bench,
  labelledBy,
}: LineupRosterProps) {
  return (
    <section className="lineup-roster" aria-labelledby={labelledBy}>
      <RosterTable players={starters} caption="Starting XI" />
      <RosterTable players={bench} caption="Bench" />
    </section>
  )
}
