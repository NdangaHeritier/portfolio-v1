/* eslint-disable react/prop-types */
import { useEffect, useMemo, useState } from 'react'
import { AppHeader } from './components/new/AppHeader.jsx'
import { AppOverview } from './components/new/AppOverview.jsx'
import { AppPageHero } from './components/new/AppPageHero.jsx'
import { AppWork } from './components/new/AppWork.jsx'
import { AppSkills } from './components/new/AppSkills.jsx'
import { AppStory } from './components/new/AppStory.jsx'
import { AppStatus } from './components/new/AppStatus.jsx'
import { AppBudgetCalculator } from './components/new/AppBudgetCalculator.jsx'
import { AppContact } from './components/new/AppContact.jsx'
import { CursorSignature } from './components/new/CursorSignature.jsx'
import { pages, pageHeroes } from './components/new/appData.js'
import portfolio from './data/portfolio.json'

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
      <AppHeader
        activePage={activePage}
        onNavigate={openPage}
        theme={theme}
        onToggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        pages={pages}
      />
      <section className="page-stage">
        <div className="page-panel" key={activePage}>
          {activeHero && <AppPageHero {...activeHero} />}
          {activePage === 'overview' && <AppOverview onNavigate={openPage} />}
          {activePage === 'work' && <AppWork />}
          {activePage === 'skills' && <AppSkills />}
          {activePage === 'story' && <AppStory />}
          {activePage === 'status' && <AppStatus />}
          {activePage === 'budget' && <AppBudgetCalculator />}
          {activePage === 'contact' && <AppContact />}
        </div>
      </section>
      <footer className="footer">
        <span>© Ndanga Heritier. All rights reserved.</span>
        <span>@{portfolio.profile.handle}</span>
      </footer>
    </main>
  )
}

export default App
