import { Icon } from './appHelpers.jsx'
import { portfolio } from './appData.js'

export function AppStory() {
  return (
    <div className="timeline-layout">
      <div className="timeline">
        {[...portfolio.experience, ...portfolio.education].map((item) => (
          <article className="timeline-item reveal" key={`${item.company || item.institution}-${item.period}`}>
            <span>{item.period}</span>
            <h4>{item.role || item.program}</h4>
            <strong>{item.company || item.institution}</strong>
            <p>{item.summary || item.description}</p>
            <div className="tag-cloud compact">
              {item.tags.map((tag) => (
                <span key={tag}><Icon name="check" />{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
