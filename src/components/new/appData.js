import portfolio from '../../data/portfolio.json'
import project1 from '../../assets/project1.png'
import project2 from '../../assets/project2.png'
import project6 from '../../assets/project6.png'
import project7 from '../../assets/project7.png'
import project8 from '../../assets/project8.png'
import project9 from '../../assets/project9.png'

export const projectImages = {
  project1,
  project2,
  project6,
  project7,
  project8,
  project9,
}

export const pages = [
  { id: 'overview', label: 'Overview', icon: 'spark' },
  { id: 'work', label: 'Work', icon: 'briefcase' },
  { id: 'skills', label: 'Skills', icon: 'layers' },
  { id: 'story', label: 'Story', icon: 'timeline' },
  { id: 'status', label: 'Status', icon: 'activity' },
  { id: 'budget', label: 'Budget', icon: 'calculator' },
  { id: 'contact', label: 'Contact', icon: 'send' },
]

export const achievements = [
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

export const pageHeroes = {
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

export const statusItems = [
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

export const projectTypes = [
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

export const featureLabels = {
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

export { portfolio }
