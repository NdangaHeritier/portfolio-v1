import { Icon } from './appHelpers.jsx'

export function AppPageHero({ label, title, stat, detail, icon }) {
  return (
    <section className="mini-hero reveal">
      <div>
        <span className="eyebrow">{label}</span>
        <h1>{title}</h1>
      </div>
      <div className="mini-hero-card">
        <span className="mini-hero-icon"><Icon name={icon} /></span>
        <span>{detail}</span>
        <strong>{stat}</strong>
        <div className="mini-orbit" />
      </div>
    </section>
  )
}
