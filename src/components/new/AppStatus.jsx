import { Icon } from './appHelpers.jsx'
import { statusItems } from './appData.js'

export function AppStatus() {
  return (
    <div className="status-grid">
      {statusItems.map((item) => (
        <article className="workload-card reveal" key={item.title}>
          <div className="workload-head">
            <span className="eyebrow"><Icon name={item.icon} />{item.state}</span>
            <strong>{item.load}%</strong>
          </div>
          <h3>{item.title}</h3>
          <p>{item.detail}</p>
          <div className="progress-track" aria-label={`${item.title} workload ${item.load}%`}>
            <span style={{ width: `${item.load}%` }} />
          </div>
        </article>
      ))}
      <article className="availability-card reveal">
        <span className="eyebrow">Client window</span>
        <h3>Best fit right now</h3>
        <p>Small business pages, dashboards, landing pages, estimators, and scoped API integrations.</p>
        <div className="tag-cloud">
          <span><Icon name="phone" />Discovery calls</span>
          <span><Icon name="check" />Fixed scope</span>
          <span><Icon name="rocket" />Milestone delivery</span>
        </div>
      </article>
    </div>
  )
}
