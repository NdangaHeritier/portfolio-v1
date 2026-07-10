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
  external: ArrowTopRightOnSquareIcon,
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
  download: ArrowDownTrayIcon,
  check: CheckCircleIcon,
  checklist: ClipboardDocumentCheckIcon,
}

export function Icon({ name }) {
  const HeroIcon = icons[name] || SparklesIcon
  return <HeroIcon aria-hidden="true" />
}

export function formatMoney(value) {
  return `${new Intl.NumberFormat('en-RW').format(value)} RWF`
}

export function skillIconFor(category) {
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
