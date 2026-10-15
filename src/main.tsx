import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './styles/global.css'
import App, { preloadForPath } from './App'

const root = document.getElementById('root')!
const prerendered = root.hasChildNodes()
// The static HTML must be *this* page's (a server may answer an unknown path with the home page's HTML).
const trim = (p: string) => p.replace(/\/$/, '')
const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
const htmlIsForThisPage = !!canonical && trim(new URL(canonical.href).pathname) === trim(window.location.pathname)

// Pre-rendered pages (scripts/prerender.mjs) carry their own <title>/<meta>; React renders fresh ones,
// so drop the static copies to avoid duplicates (and an English title on the French site).
if (prerendered) document.querySelectorAll('[data-prerender-head]').forEach((n) => n.remove())

const app = (
  <StrictMode>
    <App />
  </StrictMode>
)

// Load the current page's code first, then:
// - English visitor on a pre-rendered page → hydrate: React adopts the existing HTML (no re-paint);
// - otherwise (French visitor, or no pre-render) → render from scratch; French pages stay hidden until then.
// Let the browser paint the static HTML first: React's takeover would otherwise run before the first frame.
const afterFirstPaint = () => new Promise((resolve) => requestAnimationFrame(() => setTimeout(resolve, 0)))

Promise.all([preloadForPath(window.location.pathname).catch(() => {}), prerendered ? afterFirstPaint() : null])
  .then(() => {
    if (prerendered && htmlIsForThisPage && document.documentElement.lang === 'en') hydrateRoot(root, app)
    else createRoot(root).render(app)
  })
