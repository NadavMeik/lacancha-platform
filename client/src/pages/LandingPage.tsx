import { Link } from '../router'
import './LandingPage.css'

const features = [
  {
    title: 'AI Match Insights',
    description:
      'Turn raw match data into clear narratives—momentum shifts, key duels, and decisive moments surfaced automatically.',
  },
  {
    title: 'xG & Shot Analytics',
    description:
      'Model shot quality and build-up patterns so coaches and analysts can compare performance with league context.',
  },
  {
    title: 'Tactical Intelligence',
    description:
      'See shape, pressing triggers, and rest-defense at a glance with explainable signals built for the touchline.',
  },
] as const

export function LandingPage() {
  return (
    <div className="page">
      <main>
        <section className="hero" aria-labelledby="hero-heading">
          <p className="hero__eyebrow">SportsTech · Football intelligence</p>
          <h1 id="hero-heading" className="hero__title">
            The operating layer for modern football analytics
          </h1>
          <p className="hero__lede">
            LaCancha AI unifies match understanding, expected goals modeling, and
            tactical signals—built for clubs that need speed, depth, and trust.
          </p>
          <div className="hero__ctas">
            <Link className="btn btn--primary btn--lg" to="/dashboard">
              Open dashboard
            </Link>
            <a className="btn btn--outline btn--lg" href="#features">
              See capabilities
            </a>
          </div>
          <div className="hero__glow" aria-hidden="true" />
        </section>

        <section
          id="features"
          className="features"
          aria-labelledby="features-heading"
        >
          <div className="section-head">
            <h2 id="features-heading">Built for performance staff</h2>
            <p>
              One stack from ingestion to insight—so your team spends less time
              wrangling data and more time winning margins on the pitch.
            </p>
          </div>
          <ul className="feature-grid">
            {features.map((item) => (
              <li key={item.title} className="feature-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="platform" className="band" aria-labelledby="band-heading">
          <div className="band__inner">
            <h2 id="band-heading">Ready when your season is</h2>
            <p>
              Secure pipelines, reproducible models, and dashboards tuned for
              analysts, coaches, and executives—without compromising clarity.
            </p>
            <div className="band__ctas">
              <a className="btn btn--primary" href="#contact">
                Talk to us
              </a>
              <Link className="btn btn--ghost" to="/competitions">
                Browse competitions
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="footer">
        <div className="footer__row">
          <span className="footer__brand">LaCancha AI</span>
          <span className="footer__meta">© {new Date().getFullYear()}</span>
        </div>
        <p className="footer__note">
          Enterprise pilots · Custom integrations · League-wide deployments
        </p>
      </footer>
    </div>
  )
}
