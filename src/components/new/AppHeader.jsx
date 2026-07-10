import { Icon } from './appHelpers.jsx'
import logoColor from '../../assets/LOGO-Color.png'
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'

export function AppHeader({ activePage, onNavigate, theme, onToggleTheme, pages }) {
  return (
    <header className="topbar">
      <button className="brand" type="button" onClick={() => onNavigate('overview')}>
        <img src={logoColor} alt="" />
        <span className='text-3xl'>danga.</span>
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
