import { Icon } from './appHelpers.jsx'
import { portfolio, projectImages } from './appData.js'

export function AppWork() {
  return (
    <div className="content-grid">
      <div className="project-grid">
        {portfolio.projects.map((project) => (
          <article className="project-card reveal" key={project.title}>
            <img src={projectImages[project.image] || projectImages.project9} alt={project.title} />
            <div>
              <span className="project-year">{project.year}</span>
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              <div className="tag-cloud compact">
                {project.technologies.map((tech) => (
                  <span key={tech}><Icon name="code" />{tech}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
