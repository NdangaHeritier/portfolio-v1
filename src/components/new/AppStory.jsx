import { Icon } from './appHelpers.jsx'
import { portfolio } from './appData.js'

export function AppStory() {
  const experienceItems = portfolio.experience || []
  const educationItems = portfolio.education || []

  const renderItem = (item, kind) => {
    const title = kind === 'experience' ? item.role : item.program
    const organization = kind === 'experience' ? item.company : item.institution
    const summary = kind === 'experience' ? item.summary : item.description
    const details = kind === 'experience' ? item.responsibilities : null

    return (
      <article className="story-item reveal gap-4 border-0" key={`${organization}-${item.period}`}>
        <h4>{title}</h4>
        <h5 className="text-base font-semibold">{organization}</h5>
        {item.location && <span className="story-item-location">{item.location}</span>}
        <p>{summary}</p>

        {details?.length > 0 && (
          <ul className='list list-disc p-3 bg-muted'>
            {details.map((detail) => (
              <li className='list-item' key={detail}>{detail}</li>
            ))}
          </ul>
        )}

        {item.tags?.length > 0 && (
          <div className="tag-cloud compact">
            {item.tags.map((tag) => (
              <span key={tag}><Icon name="check" />{tag}</span>
            ))}
          </div>
        )}
      </article>
    )
  }

  return (
    <section className="story-shell reveal">
      <div className="story-intro">
        <span className="story-eyebrow">Career path</span>
        <h3>Professional experience and education, arranged as a clear progression.</h3>
        <p>
          This timeline highlights the work, support, and learning that shaped my approach to building reliable digital products.
        </p>
      </div>

      <div className="story-grid">
        <div className="story-column">
          <div className="story-column-head">
            <div className="story-column-badge">
              <div className="card-icon rounded-lg">
                <Icon name="briefcase" />
              </div>
              Experience
            </div>
            <p>Delivery, support, operations, and quality-focused roles that connect business needs with practical solutions.</p>
          </div>
          <div className="story-list">
            {experienceItems.map((item) => renderItem(item, 'experience'))}
          </div>
        </div>

        <div className="story-column">
          <div className="story-column-head">
            <div className="story-column-badge">
              <div className="card-icon rounded-lg">
                <Icon name="book" />
              </div>
              Education
            </div>
            <p>Academic foundations and training that continue to strengthen my technical and business perspective.</p>
          </div>
          <div className="story-list">
            {educationItems.map((item) => renderItem(item, 'education'))}
          </div>
        </div>
      </div>
    </section>
  )
}
