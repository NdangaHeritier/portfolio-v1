/* eslint-disable react/prop-types */
import { useEffect, useMemo, useState } from 'react'
import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  ArrowTopRightOnSquareIcon,
  AtSymbolIcon,
  BanknotesIcon,
  BookOpenIcon,
  BriefcaseIcon,
  BuildingStorefrontIcon,
  CalculatorIcon,
  ChartBarIcon,
  CheckCircleIcon,
  ClipboardDocumentCheckIcon,
  ClockIcon,
  CodeBracketSquareIcon,
  CommandLineIcon,
  CursorArrowRaysIcon,
  EnvelopeIcon,
  HomeModernIcon,
  IdentificationIcon,
  LifebuoyIcon,
  LinkIcon,
  MapPinIcon,
  MoonIcon,
  PaperAirplaneIcon,
  PhoneIcon,
  PresentationChartLineIcon,
  RectangleGroupIcon,
  RocketLaunchIcon,
  ShoppingBagIcon,
  SignalIcon,
  SparklesIcon,
  Squares2X2Icon,
  SunIcon,
  WalletIcon,
  WindowIcon,
} from '@heroicons/react/24/solid'
import portfolio from './data/portfolio.json'
import logoColor from './assets/LOGO-Color.png'
import profilePhoto from '/ndanga.png'
import project1 from './assets/project1.png'
import project2 from './assets/project2.png'
import project6 from './assets/project6.png'
import project7 from './assets/project7.png'
import project8 from './assets/project8.png'
import project9 from './assets/project9.png'

const projectImages = {
  project1,
  project2,
  project6,
  project7,
  project8,
  project9,
}

const icons = {
  activity: SignalIcon,
  analytics: ChartBarIcon,
  auth: IdentificationIcon,
  badge: IdentificationIcon,
  blog: BookOpenIcon,
  book: AcademicCapIcon,
  booking: ClipboardDocumentCheckIcon,
  briefcase: BriefcaseIcon,
  browser: WindowIcon,
  calculator: CalculatorIcon,
  cart: ShoppingBagIcon,
  certificates: CheckCircleIcon,
  cms: CodeBracketSquareIcon,
  code: CommandLineIcon,
  contact: EnvelopeIcon,
  courses: BookOpenIcon,
  dashboard: PresentationChartLineIcon,
  delivery: PaperAirplaneIcon,
  email: EnvelopeIcon,
  filters: CursorArrowRaysIcon,
  gallery: RectangleGroupIcon,
  home: HomeModernIcon,
  layers: Squares2X2Icon,
  link: LinkIcon,
  listings: BuildingStorefrontIcon,
  map: MapPinIcon,
  newsletter: AtSymbolIcon,
  notifications: SignalIcon,
  payments: BanknotesIcon,
  phone: PhoneIcon,
  products: BuildingStorefrontIcon,
  progress: ChartBarIcon,
  quizzes: ClipboardDocumentCheckIcon,
  reports: PresentationChartLineIcon,
  rocket: RocketLaunchIcon,
  roles: IdentificationIcon,
  send: PaperAirplaneIcon,
  spark: SparklesIcon,
  support: LifebuoyIcon,
  timeline: ClockIcon,
  vendors: BuildingStorefrontIcon,
  wallet: WalletIcon,
  work: BriefcaseIcon,
}

const pages = [
  { id: 'overview', label: 'Overview', icon: 'spark' },
  { id: 'work', label: 'Work', icon: 'briefcase' },
  { id: 'skills', label: 'Skills', icon: 'layers' },
  { id: 'story', label: 'Story', icon: 'timeline' },
  { id: 'status', label: 'Status', icon: 'activity' },
  { id: 'budget', label: 'Budget', icon: 'calculator' },
  { id: 'contact', label: 'Contact', icon: 'send' },
]

const achievements = [
  {
    value: '2026',
    label: 'Current Role',
    icon: 'badge',
    detail: 'After-Sales Assistant & PDI Coordinator at Hanlink Engineering.',
  },
  {
    value: '6+',
    label: 'Product Builds',
    icon: 'rocket',
    detail: 'Telemedicine, commerce, developer tools, booking, and ride-sharing systems.',
  },
  {
    value: '40+',
    label: 'Practical Skills',
    icon: 'layers',
    detail: 'Frontend, backend, APIs, support, QA, productivity, and collaboration.',
  },
  {
    value: '2029',
    label: 'BBIT Track',
    icon: 'book',
    detail: 'Bachelor of Business and Information Technology expected graduation.',
  },
]

const pageHeroes = {
  work: {
    label: 'Selected work',
    title: 'Projects shaped around dashboards, flows, and practical launches.',
    stat: '6+',
    detail: 'Featured builds',
    icon: 'briefcase',
  },
  skills: {
    label: 'Capability map',
    title: 'A grouped view of the stack, tools, support skills, and delivery habits.',
    stat: '8',
    detail: 'Skill groups',
    icon: 'layers',
  },
  story: {
    label: 'Journey',
    title: 'Software development, technical support, quality inspection, and business IT.',
    stat: '2029',
    detail: 'BBIT goal',
    icon: 'timeline',
  },
  status: {
    label: 'Availability',
    title: 'A transparent look at current focus, workload, and what clients can request.',
    stat: 'Open',
    detail: 'For scoped work',
    icon: 'activity',
  },
  budget: {
    label: 'Estimator',
    title: 'Estimate project cost from project type, size, urgency, severity, and features.',
    stat: 'RWF',
    detail: 'Dynamic budget',
    icon: 'calculator',
  },
  contact: {
    label: 'Start here',
    title: 'Share the idea, timeline, and outcome you want. I will help shape the next step.',
    stat: '24h',
    detail: 'Typical reply',
    icon: 'send',
  },
}

const statusItems = [
  {
    title: 'After-sales and PDI operations',
    state: 'Active',
    icon: 'support',
    load: 72,
    detail: 'Customer support, warranty coordination, vehicle inspection, reporting, and technical follow-up.',
  },
  {
    title: 'Smart Round Clinic dashboard',
    state: 'In progress',
    icon: 'dashboard',
    load: 58,
    detail: 'Admin dashboard improvements, API connected workflows, and platform review cycles.',
  },
  {
    title: 'UremboHub platform features',
    state: 'Planning',
    icon: 'cart',
    load: 36,
    detail: 'Payment, live video, delivery, and marketplace flow improvements.',
  },
  {
    title: 'Portfolio and client tooling',
    state: 'Shipping',
    icon: 'rocket',
    load: 44,
    detail: 'Budget estimator, status page, project presentation, and contact improvements.',
  },
]

const projectTypes = [
  {
    id: 'single-page',
    name: 'Business Single Page App',
    icon: 'browser',
    base: 200000,
    range: '150,000 - 650,000 RWF',
    description: 'Fast portfolio, brand, service, campaign, or company presence.',
    pageCost: 25000,
    featureCost: {
      contact: 35000,
      map: 30000,
      blog: 80000,
      newsletter: 55000,
      analytics: 45000,
      cms: 120000,
    },
  },
  {
    id: 'fintech',
    name: 'Fintech Platform',
    icon: 'wallet',
    base: 950000,
    range: '900,000 - 2,000,000 RWF',
    description: 'Secure account flows, payment logic, dashboards, and integrations.',
    pageCost: 55000,
    featureCost: {
      auth: 120000,
      payments: 180000,
      dashboard: 160000,
      notifications: 85000,
      reports: 140000,
      roles: 130000,
    },
  },
  {
    id: 'edtech',
    name: 'Education Tech',
    icon: 'book',
    base: 650000,
    range: '550,000 - 1,600,000 RWF',
    description: 'Learning portals, course pages, student dashboards, and content workflows.',
    pageCost: 45000,
    featureCost: {
      auth: 90000,
      courses: 150000,
      quizzes: 120000,
      progress: 110000,
      certificates: 95000,
      cms: 120000,
    },
  },
  {
    id: 'real-estate',
    name: 'Real Estate Site',
    icon: 'home',
    base: 500000,
    range: '450,000 - 1,350,000 RWF',
    description: 'Property listings, filters, media-rich pages, leads, and agent workflows.',
    pageCost: 40000,
    featureCost: {
      listings: 140000,
      filters: 90000,
      map: 75000,
      booking: 85000,
      gallery: 70000,
      cms: 120000,
    },
  },
  {
    id: 'commerce',
    name: 'Commerce Marketplace',
    icon: 'cart',
    base: 850000,
    range: '750,000 - 1,950,000 RWF',
    description: 'Catalogs, carts, checkout, vendor views, and delivery-oriented flows.',
    pageCost: 50000,
    featureCost: {
      products: 130000,
      cart: 110000,
      payments: 170000,
      vendors: 160000,
      delivery: 120000,
      dashboard: 150000,
    },
  },
]

const featureLabels = {
  analytics: 'Analytics',
  auth: 'Authentication',
  blog: 'Blog and Newsletter',
  booking: 'Booking Requests',
  cart: 'Cart and Checkout',
  certificates: 'Certificates',
  cms: 'CMS Editing',
  contact: 'Contact Form',
  courses: 'Course Management',
  dashboard: 'Admin Dashboard',
  delivery: 'Delivery Workflow',
  filters: 'Advanced Filters',
  gallery: 'Premium Gallery',
  listings: 'Property Listings',
  map: 'Map Integration',
  newsletter: 'Newsletter',
  notifications: 'Notifications',
  payments: 'Payment Integration',
  products: 'Product Catalog',
  progress: 'Progress Tracking',
  quizzes: 'Quizzes',
  reports: 'Reports',
  roles: 'Roles and Permissions',
  vendors: 'Vendor Portal',
}

function App() {
  const [activePage, setActivePage] = useState('overview')
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark')
  const [cursor, setCursor] = useState({ x: -120, y: -120 })

  const activeHero = useMemo(() => pageHeroes[activePage], [activePage])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    const onMove = (event) => setCursor({ x: event.clientX, y: event.clientY })
    window.addEventListener('pointermove', onMove)
    return () => window.removeEventListener('pointermove', onMove)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-visible')
        })
      },
      { threshold: 0.16 },
    )

    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [activePage])

  const openPage = (pageId) => {
    setActivePage(pageId)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <main className="site-shell">
      <CursorSignature cursor={cursor} />
      <Header
        activePage={activePage}
        onNavigate={openPage}
        theme={theme}
        onToggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      />
      <section className="page-stage">
        <div className="page-panel" key={activePage}>
          {activeHero && <PageHero {...activeHero} />}
          {activePage === 'overview' && <Overview onNavigate={openPage} />}
          {activePage === 'work' && <Work />}
          {activePage === 'skills' && <Skills />}
          {activePage === 'story' && <Story />}
          {activePage === 'status' && <Status />}
          {activePage === 'budget' && <BudgetCalculator />}
          {activePage === 'contact' && <Contact />}
        </div>
      </section>
      <footer className="footer">
        <span>© Ndanga Heritier. All rights reserved.</span>
        <span>@{portfolio.profile.handle}</span>
      </footer>
    </main>
  )
}

function Header({ activePage, onNavigate, theme, onToggleTheme }) {
  return (
    <header className="topbar">
      <button className="brand" type="button" onClick={() => onNavigate('overview')}>
        <img src={logoColor} alt="" />
        <span>danga.</span>
      </button>
      <nav className="nav-links" aria-label="Main navigation">
        {pages.map((page) => (
          <button
            type="button"
            key={page.id}
            className={page.id === activePage ? 'is-active' : ''}
            onClick={() => onNavigate(page.id)}
          >
            <Icon name={page.icon} />
            {page.label}
          </button>
        ))}
      </nav>
      <button className="theme-toggle" type="button" onClick={onToggleTheme}>
        {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
        <span>{theme === 'dark' ? 'Light' : 'Dark'}</span>
      </button>
    </header>
  )
}

function Overview({ onNavigate }) {
  const { profile } = portfolio

  return (
    <>
      <section className="hero">
        <div className="smoke smoke-one" />
        <div className="smoke smoke-two" />
        <div className="smoke smoke-three" />
        <div className="hero-grid">
          <div className="hero-copy reveal">
            <span className="eyebrow">Full-stack developer / Technical support / QA-minded builder</span>
            <h1>{profile.displayName}</h1>
            <p>{profile.tagline}</p>
            <div className="hero-actions">
              <button type="button" className="primary-action" onClick={() => onNavigate('work')}>
                <BriefcaseIcon />
                View Work
              </button>
              <button type="button" className="secondary-action" onClick={() => onNavigate('budget')}>
                <CalculatorIcon />
                Estimate Budget
              </button>
              <a className="secondary-action" href={profile.resumeFile} target="_blank" rel="noreferrer">
                <ArrowDownTrayIcon />
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
      <div className="content-grid overview-grid">
        {achievements.map((item) => (
          <article className="metric-card reveal" key={item.label}>
            <span className="card-icon"><Icon name={item.icon} /></span>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
            <p>{item.detail}</p>
          </article>
        ))}
        <article className="wide-card reveal">
          <span className="eyebrow">About</span>
          <h3>Developer thinking with operational discipline.</h3>
          {portfolio.about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </article>
        <article className="focus-card reveal">
          <span className="eyebrow">Focus</span>
          <div className="tag-cloud">
            {portfolio.about.focusAreas.map((area) => (
              <span key={area}>{area}</span>
            ))}
          </div>
        </article>
        <article className="focus-card reveal">
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

function PageHero({ label, title, stat, detail, icon }) {
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

function Work() {
  return (
    <div className="content-grid">
      <div className="project-grid">
        {portfolio.projects.map((project) => (
          <article className="project-card reveal" key={project.title}>
            <img src={projectImages[project.image] || project9} alt={project.title} />
            <div>
              <span className="project-year">{project.year}</span>
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              <div className="tag-cloud compact">
                {project.technologies.map((tech) => (
                  <span key={tech}><CommandLineIcon />{tech}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

function Skills() {
  return (
    <div className="content-grid">
      <div className="skills-grid">
        {portfolio.skills.map((group) => (
          <article className="skill-card reveal" key={group.category}>
            <div className="card-icon"><Icon name={skillIconFor(group.category)} /></div>
            <h4>{group.category}</h4>
            <div className="tag-cloud compact">
              {group.items.map((skill) => (
                <span key={skill}><CheckCircleIcon />{skill}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

function Story() {
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
                <span key={tag}><CheckCircleIcon />{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

function Status() {
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
          <span><PhoneIcon />Discovery calls</span>
          <span><ClipboardDocumentCheckIcon />Fixed scope</span>
          <span><RocketLaunchIcon />Milestone delivery</span>
        </div>
      </article>
    </div>
  )
}

function BudgetCalculator() {
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
        <span className="eyebrow"><CalculatorIcon />Estimated budget</span>
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

function Contact() {
  const { profile } = portfolio

  return (
    <div className="contact-layout">
      <article className="contact-card reveal">
        <span className="eyebrow">Let us build</span>
        <h3>Available for web projects, dashboards, API integrations, and support-focused tools.</h3>
        <p>{profile.summary}</p>
        <div className="contact-actions">
          <a className="primary-action" href={`mailto:${profile.email}`}>
            <EnvelopeIcon />
            Email Me
          </a>
          <a className="secondary-action" href={`tel:${profile.phone}`}>
            <PhoneIcon />
            Call
          </a>
        </div>
      </article>
      <aside className="contact-sidebar reveal">
        <div>
          <span><EnvelopeIcon />Email</span>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </div>
        <div>
          <span><PhoneIcon />Phone</span>
          <a href={`tel:${profile.phone}`}>{profile.phoneDisplay}</a>
        </div>
        <div>
          <span><MapPinIcon />Location</span>
          <strong>{profile.location}</strong>
        </div>
        <div className="social-grid">
          {profile.socials.map((social) => (
            <a href={social.url} target="_blank" rel="noreferrer" key={social.name}>
              <ArrowTopRightOnSquareIcon />
              {social.name}
            </a>
          ))}
        </div>
      </aside>
    </div>
  )
}

function CursorSignature({ cursor }) {
  return (
    <div
      className="cursor-signature"
      style={{ transform: `translate3d(${cursor.x}px, ${cursor.y}px, 0)` }}
      aria-hidden="true"
    >
      <span>craftsmanship</span>
    </div>
  )
}

function formatMoney(value) {
  return `${new Intl.NumberFormat('en-RW').format(value)} RWF`
}

function Icon({ name }) {
  const HeroIcon = icons[name] || SparklesIcon
  return <HeroIcon aria-hidden="true" />
}

function skillIconFor(category) {
  const key = category.toLowerCase()

  if (key.includes('frontend')) return 'browser'
  if (key.includes('backend')) return 'code'
  if (key.includes('database')) return 'dashboard'
  if (key.includes('api')) return 'link'
  if (key.includes('devops')) return 'rocket'
  if (key.includes('productivity')) return 'work'
  if (key.includes('method')) return 'timeline'
  if (key.includes('soft')) return 'support'

  return 'spark'
}

export default App
