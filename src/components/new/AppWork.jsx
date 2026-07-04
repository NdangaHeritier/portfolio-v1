import { Icon } from './appHelpers.jsx'
import { portfolio, projectImages } from './appData.js'
import { ArrowUpRightIcon } from '@heroicons/react/24/solid'

export function AppWork() {
  return (
    <div className="content-grid">
      <div className="project-grid">
        {portfolio.projects.map((project) => (
          <article className="project-card reveal relative" key={project.title}>
            <div className="img">
              <img src={projectImages[project.image] || projectImages.project9} alt={project.title} />
            </div>
            <section className="relative">
              <a href={project.url || '#'} target='_blank' className="absolute top-4 right-8 border rounded-full h-10 w-10 flex items-center justify-center hover:opacity-80">
                <ArrowUpRightIcon className="h-5 w-5" />
              </a>
            </section>
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
