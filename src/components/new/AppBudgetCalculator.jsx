import { useState } from 'react'
import { Icon, formatMoney } from './appHelpers.jsx'
import { projectTypes, featureLabels } from './appData.js'

export function AppBudgetCalculator() {
  const [projectId, setProjectId] = useState(projectTypes[0].id)
  const [pagesCount, setPagesCount] = useState(3)
  const [timeline, setTimeline] = useState(2)
  const [severity, setSeverity] = useState(2)
  const [features, setFeatures] = useState(['contact'])

  const selectedProject = projectTypes.find((project) => project.id === projectId) || projectTypes[0]
  const featureTotal = features.reduce((total, feature) => total + (selectedProject.featureCost[feature] || 0), 0)
  const pageTotal = Math.max(0, pagesCount - 1) * selectedProject.pageCost
  const urgencyMultiplier = [1, 1.08, 1.16, 1.28][timeline - 1] || 1
  const severityMultiplier = [1, 1.1, 1.22, 1.36][severity - 1] || 1
  const estimate = Math.round((selectedProject.base + pageTotal + featureTotal) * urgencyMultiplier * severityMultiplier)

  const toggleFeature = (feature) => {
    setFeatures((current) =>
      current.includes(feature) ? current.filter((item) => item !== feature) : [...current, feature],
    )
  }

  const selectProject = (id) => {
    const nextProject = projectTypes.find((project) => project.id === id) || projectTypes[0]
    setProjectId(id)
    setFeatures(Object.keys(nextProject.featureCost).slice(0, 1))
  }

  return (
    <div className="calculator-layout">
      <section className="calculator-panel reveal">
        <span className="eyebrow">Project type</span>
        <div className="type-grid">
          {projectTypes.map((project) => (
            <button
              type="button"
              key={project.id}
              className={project.id === projectId ? 'is-active' : ''}
              onClick={() => selectProject(project.id)}
            >
              <Icon name={project.icon} />
              <strong>{project.name}</strong>
              <span>{project.range}</span>
            </button>
          ))}
        </div>
        <p className="calculator-note">{selectedProject.description}</p>

        <div className="control-grid">
          <label>
            <span>Pages or major screens: {pagesCount}</span>
            <input
              type="range"
              min="1"
              max="14"
              value={pagesCount}
              onChange={(event) => setPagesCount(Number(event.target.value))}
            />
          </label>
          <label>
            <span>Timeline pressure: {timeline}/4</span>
            <input
              type="range"
              min="1"
              max="4"
              value={timeline}
              onChange={(event) => setTimeline(Number(event.target.value))}
            />
          </label>
          <label>
            <span>Complexity severity: {severity}/4</span>
            <input
              type="range"
              min="1"
              max="4"
              value={severity}
              onChange={(event) => setSeverity(Number(event.target.value))}
            />
          </label>
        </div>

        <span className="eyebrow">Features</span>
        <div className="feature-grid">
          {Object.entries(selectedProject.featureCost).map(([feature, price]) => (
            <button
              type="button"
              key={feature}
              className={features.includes(feature) ? 'is-active' : ''}
              onClick={() => toggleFeature(feature)}
            >
              <span><Icon name={feature} />{featureLabels[feature]}</span>
              <strong>+{formatMoney(price)}</strong>
            </button>
          ))}
        </div>
      </section>

      <aside className="estimate-card reveal">
        <span className="eyebrow"><Icon name="calculator" />Estimated budget</span>
        <strong>{formatMoney(estimate)}</strong>
        <p>
          This is a planning estimate. Final price depends on exact content, design depth, integrations,
          review rounds, and hosting requirements.
        </p>
        <div className="estimate-lines">
          <div>
            <span>Base</span>
            <strong>{formatMoney(selectedProject.base)}</strong>
          </div>
          <div>
            <span>Pages</span>
            <strong>{formatMoney(pageTotal)}</strong>
          </div>
          <div>
            <span>Features</span>
            <strong>{formatMoney(featureTotal)}</strong>
          </div>
          <div>
            <span>Urgency x Complexity</span>
            <strong>{urgencyMultiplier.toFixed(2)} x {severityMultiplier.toFixed(2)}</strong>
          </div>
        </div>
      </aside>
    </div>
  )
}
