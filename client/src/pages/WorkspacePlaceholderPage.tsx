import '../styles/workspace-page.css'
import './WorkspacePlaceholderPage.css'

type WorkspacePlaceholderPageProps = {
  title: string
  description: string
}

export function WorkspacePlaceholderPage({
  title,
  description,
}: WorkspacePlaceholderPageProps) {
  return (
    <div className="workspace-page">
      <main className="workspace-page__main">
        <h1 className="wsph__title">{title}</h1>
        <p className="workspace-page__intro">{description}</p>
        <p className="wsph__note">
          Mock shell only—this area will connect to live fixtures and reporting
          pipelines in a later iteration.
        </p>
      </main>
    </div>
  )
}
