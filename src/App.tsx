import { useState, useEffect } from 'react'
import PrivacyPolicy from './pages/PrivacyPolicy'
import LegalDisclaimer from './pages/LegalDisclaimer'

function getNormalizedRoute(): string {
  const path = window.location.pathname.toLowerCase().replace(/\/+$/, '')
  const hash = window.location.hash.toLowerCase()

  if (path === '/privacy' || hash === '#/privacy' || hash === '#privacy') {
    return '/privacy'
  }
  if (path === '/disclaimer' || hash === '#/disclaimer' || hash === '#disclaimer') {
    return '/disclaimer'
  }
  return '/'
}

export default function App() {
  const [route, setRoute] = useState<string>(() => getNormalizedRoute())

  useEffect(() => {
    function handleLocationChange() {
      const currentRoute = getNormalizedRoute()
      setRoute(currentRoute)
    }

    // Intercept navigation links
    function handleGlobalClick(e: MouseEvent) {
      const target = (e.target as HTMLElement)?.closest('a')
      if (!target) return

      const href = target.getAttribute('href')
      if (!href) return

      // Handle internal routes
      if (href === '/privacy' || href === '#/privacy' || href === '#privacy') {
        e.preventDefault()
        window.history.pushState({}, '', '/privacy')
        setRoute('/privacy')
        window.scrollTo(0, 0)
      } else if (href === '/disclaimer' || href === '#/disclaimer' || href === '#disclaimer') {
        e.preventDefault()
        window.history.pushState({}, '', '/disclaimer')
        setRoute('/disclaimer')
        window.scrollTo(0, 0)
      } else if (
        (route === '/privacy' || route === '/disclaimer') &&
        (href === '/' || href.startsWith('/#') || href.startsWith('#'))
      ) {
        // Navigating back from subpage to landing page
        e.preventDefault()
        const targetUrl = href.startsWith('#') ? `/${href}` : href
        window.history.pushState({}, '', targetUrl)
        setRoute('/')

        // If target had a hash, scroll to that element
        const hashMatch = targetUrl.match(/#([a-zA-Z0-9_-]+)/)
        if (hashMatch && hashMatch[1]) {
          setTimeout(() => {
            const el = document.getElementById(hashMatch[1])
            if (el) {
              el.scrollIntoView({ behavior: 'smooth' })
            }
          }, 60)
        } else {
          window.scrollTo(0, 0)
        }
      }
    }

    window.addEventListener('popstate', handleLocationChange)
    window.addEventListener('hashchange', handleLocationChange)
    document.addEventListener('click', handleGlobalClick)

    return () => {
      window.removeEventListener('popstate', handleLocationChange)
      window.removeEventListener('hashchange', handleLocationChange)
      document.removeEventListener('click', handleGlobalClick)
    }
  }, [route])

  // Sync landing content visibility with current route
  useEffect(() => {
    const landingEl = document.getElementById('landing-content')
    if (landingEl) {
      if (route === '/privacy' || route === '/disclaimer') {
        landingEl.style.display = 'none'
        document.documentElement.classList.add('route-subpage')
      } else {
        landingEl.style.display = ''
        document.documentElement.classList.remove('route-subpage')
        document.title = 'Azaz & Associates LLP — Legal, Tax & Corporate Consultants'
      }
    }
  }, [route])

  if (route === '/privacy') {
    return <PrivacyPolicy />
  }

  if (route === '/disclaimer') {
    return <LegalDisclaimer />
  }

  return null
}
