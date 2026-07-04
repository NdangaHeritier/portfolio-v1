import { Icon } from './appHelpers.jsx'
import { portfolio } from './appData.js'

export function AppContact() {
  const { profile } = portfolio

  return (
    <div className="contact-layout">
      <article className="contact-card reveal">
        <span className="eyebrow">Let us build</span>
        <h3>Available for web projects, dashboards, API integrations, and support-focused tools.</h3>
        <p>{profile.summary}</p>
        <div className="contact-actions">
          <a className="primary-action" href={`mailto:${profile.email}`}>
            <Icon name="email" />
            Email Me
          </a>
          <a className="secondary-action" href={`tel:${profile.phone}`}>
            <Icon name="phone" />
            Call
          </a>
        </div>
      </article>
      <aside className="contact-sidebar reveal">
        <div>
          <span><Icon name="email" />Email</span>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </div>
        <div>
          <span><Icon name="phone" />Phone</span>
          <a href={`tel:${profile.phone}`}>{profile.phoneDisplay}</a>
        </div>
        <div>
          <span><Icon name="map" />Location</span>
          <strong>{profile.location}</strong>
        </div>
        <div className="social-grid">
          {profile.socials.map((social) => (
            <a href={social.url} target="_blank" rel="noreferrer" key={social.name}>
              <Icon name="external" />
              {social.name}
            </a>
          ))}
        </div>
      </aside>
    </div>
  )
}
