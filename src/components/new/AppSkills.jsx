import { Icon, skillIconFor } from './appHelpers.jsx'
import { portfolio } from './appData.js'

export function AppSkills() {
  return (
    <div className="content-grid">
      <div className="skills-grid">
        {portfolio.skills.map((group) => (
          <article className="skill-card reveal" key={group.category}>
            <div className="card-icon"><Icon name={skillIconFor(group.category)} /></div>
            <h4>{group.category}</h4>
            <div className="tag-cloud compact">
              {group.items.map((skill) => (
                <span key={skill}><Icon name="check" />{skill}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
