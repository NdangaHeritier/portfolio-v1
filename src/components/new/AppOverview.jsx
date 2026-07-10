import { Icon } from './appHelpers.jsx'
import { portfolio, achievements } from './appData.js'
import profilePhoto from '/ndangah.png'

export function AppOverview({ onNavigate }) {
  const { profile } = portfolio

  return (
    <>
      <section className="hero lg:-mx-8 dark:rounded-[50px] ">
        <div className="smoke smoke-one" />
        <div className="smoke smoke-two" />
        <div className="smoke smoke-three" />
        <div className="hero-grid">
          <div className="hero-copy reveal">
            <span className="eyebrow">Full-stack developer / Technical support</span>
            <h1 className='font-extrabold'>{profile.displayName}</h1>
            <p>{profile.tagline}</p>
            <div className="hero-actions">
              <button type="button" className="primary-action" onClick={() => onNavigate('work')}>
                <Icon name="briefcase" />
                View Work
              </button>
              <button type="button" className="secondary-action" onClick={() => onNavigate('budget')}>
                <Icon name="calculator" />
                Estimate Budget
              </button>
              <a className="secondary-action" href={profile.resumeFile} target="_blank" rel="noreferrer">
                <Icon name="download" />
                Resume
              </a>
            </div>
          </div>
          <div className="portrait-card reveal">
            <div className="portrait-frame">
              <img src={profilePhoto} alt={profile.name} />
            </div>
            <div className="status-card">
              <span>Currently</span>
              <strong>Building practical systems across web, support, and operations.</strong>
            </div>
          </div>
        </div>
      </section>
      <div className="content-grid overview-grid py-10 gap-5">
        {achievements.map((item) => (
          <article className="metric-card reveal" key={item.label}>
            <div className="card-icon"><Icon name={item.icon} /></div>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
            <p>{item.detail}</p>
          </article>
        ))}
        <article className="wide-card reveal flex flex-col gap-3">
          <span className="eyebrow">About</span>
          <h3>Developer thinking with operational discipline.</h3>
          {portfolio.about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </article>
        <article className="focus-card reveal flex flex-col gap-3">
          <span className="eyebrow">Focus</span>
          <div className="tag-cloud">
            {portfolio.about.focusAreas.map((area) => (
              <span key={area}>{area}</span>
            ))}
          </div>
        </article>
        <article className="focus-card reveal flex flex-col gap-3">
          <span className="eyebrow">Highlights</span>
          <div className="stack-list">
            {portfolio.highlights.map((item) => (
              <div key={item.label}>
                <strong>{item.label}</strong>
                <span>{item.value}</span>
              </div>
            ))}
          </div>
        </article>
      </div>
    </>
  )
}
