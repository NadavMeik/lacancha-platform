import './FormationBadge.css'

type FormationBadgeProps = {
  label: string
}

export function FormationBadge({ label }: FormationBadgeProps) {
  return (
    <span className="formation-badge" title={`Formation ${label}`}>
      {label}
    </span>
  )
}
