/**
 * Google Analytics 4, CNIL-compliant.
 *
 * - Nothing from Google is loaded until the visitor clicks "Accept": gtag.js is injected only then.
 * - Google Consent Mode v2: every consent type starts "denied"; accepting grants analytics_storage only
 *   (no advertising). Refusing after accepting switches it back off and deletes the GA cookies.
 * - The choice is kept in localStorage for 6 months, then the banner asks again.
 * - Never active on localhost (dev server, preview, pre-render).
 */

export const GA_MEASUREMENT_ID = 'G-T992ZZ4VV2'

const CONSENT_KEY = 'analytics-consent'
const SIX_MONTHS_MS = 182 * 24 * 60 * 60 * 1000
const COOKIE_MAX_AGE_S = 13 * 30 * 24 * 60 * 60 // CNIL: audience cookies last 13 months at most
const OPEN_SETTINGS_EVENT = 'analytics:open-settings'

export type Consent = 'granted' | 'denied'
type Stored = { value: Consent; at: number }
type Gtag = (...args: unknown[]) => void

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: Gtag
    __PRERENDER__?: boolean
    [key: `ga-disable-${string}`]: boolean | undefined
  }
}

/** False on localhost, private hosts and during the pre-render: nothing is ever sent from there. */
export function trackingAllowedHere(): boolean {
  if (typeof window === 'undefined' || window.__PRERENDER__) return false
  const host = window.location.hostname
  return !(host === 'localhost' || host === '127.0.0.1' || host === '[::1]' || host === '' || host.endsWith('.local'))
}

// ── Stored choice ────────────────────────────────────────────────────────────

export function getConsent(): Consent | null {
  try {
    const raw = localStorage.getItem(CONSENT_KEY)
    if (!raw) return null
    const stored = JSON.parse(raw) as Stored
    if ((stored.value !== 'granted' && stored.value !== 'denied') || Date.now() - stored.at > SIX_MONTHS_MS) {
      localStorage.removeItem(CONSENT_KEY)
      return null // expired after 6 months: ask again
    }
    return stored.value
  } catch {
    return null
  }
}

function storeConsent(value: Consent): void {
  try {
    localStorage.setItem(CONSENT_KEY, JSON.stringify({ value, at: Date.now() } satisfies Stored))
  } catch {
    // storage blocked: the choice applies to this visit only
  }
}

// ── gtag ─────────────────────────────────────────────────────────────────────

let loaded = false

/** dataLayer + gtag stub with every consent denied. Calls are queued; nothing is sent without gtag.js. */
function initConsentDefaults(): Gtag {
  if (window.gtag) return window.gtag
  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag() {
    // gtag.js expects the `arguments` object itself, not an array.
    window.dataLayer!.push(arguments)
  }
  window.gtag('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'denied',
    functionality_storage: 'denied',
    personalization_storage: 'denied',
    security_storage: 'denied',
  })
  return window.gtag
}

function loadGoogleAnalytics(): void {
  if (loaded || !trackingAllowedHere()) return
  loaded = true
  const gtag = initConsentDefaults()
  window[`ga-disable-${GA_MEASUREMENT_ID}`] = false
  gtag('consent', 'update', { analytics_storage: 'granted' })
  gtag('js', new Date())
  gtag('config', GA_MEASUREMENT_ID, {
    send_page_view: false, // page views are sent on each route change (see usePageViews)
    cookie_expires: COOKIE_MAX_AGE_S,
  })
  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
  document.head.appendChild(script)
}

function deleteGoogleCookies(): void {
  const names = document.cookie.split(';').map((c) => c.split('=')[0].trim()).filter((n) => n === '_ga' || n.startsWith('_ga_'))
  const host = window.location.hostname
  const domains = ['', host, `.${host}`, `.${host.split('.').slice(-2).join('.')}`]
  for (const name of names) {
    for (const domain of domains) {
      document.cookie = `${name}=; Max-Age=0; path=/${domain ? `; domain=${domain}` : ''}`
    }
  }
}

/** Record the visitor's choice and apply it immediately. */
export function setConsent(value: Consent): void {
  storeConsent(value)
  if (!trackingAllowedHere()) return
  if (value === 'granted') {
    loadGoogleAnalytics()
    trackPageView() // count the page on which the visitor accepted
  } else if (loaded) {
    window.gtag?.('consent', 'update', { analytics_storage: 'denied' })
    window[`ga-disable-${GA_MEASUREMENT_ID}`] = true
    deleteGoogleCookies()
  }
}

/** On start-up: load GA only if the visitor accepted within the last 6 months. */
export function initAnalytics(): void {
  if (trackingAllowedHere() && getConsent() === 'granted') loadGoogleAnalytics()
}

function active(): boolean {
  return loaded && trackingAllowedHere() && getConsent() === 'granted' && !!window.gtag
}

// ── Measurements ─────────────────────────────────────────────────────────────

/** page_view with the full path, /portfolio/ base included (BrowserRouter strips it from its own location). */
export function trackPageView(): void {
  if (!active()) return
  window.gtag!('event', 'page_view', {
    page_path: window.location.pathname + window.location.search,
    page_location: window.location.href,
    page_title: document.title,
    language: document.documentElement.lang,
  })
}

export function trackEvent(name: string, params: Record<string, string> = {}): void {
  if (active()) window.gtag!('event', name, params)
}

/**
 * One click listener for the whole site:
 * - CV download (language FR / EN), e-mail, LinkedIn and GitHub links, wherever they appear;
 * - project cards (`data-project-card="<slug>"`).
 */
export function trackClicks(event: MouseEvent): void {
  if (!active()) return
  const link = (event.target as Element | null)?.closest?.('a')
  if (!link) return
  const href = link.getAttribute('href') ?? ''
  const where = link.closest('footer') ? 'footer' : link.closest('#contact') ? 'contact' : 'page'

  const slug = link.getAttribute('data-project-card')
  if (slug) return trackEvent('project_open', { project_slug: slug })

  if (link.hasAttribute('download') && /cv/i.test(href + (link.getAttribute('download') ?? ''))) {
    const lang = /-fr\b|_fr\b|fr\.pdf/i.test(link.getAttribute('download') ?? href) ? 'FR' : 'EN'
    return trackEvent('cv_download', { language: lang, link_location: where })
  }
  if (href.startsWith('mailto:')) return trackEvent('email_click', { link_location: where })
  if (/linkedin\.com/i.test(href)) return trackEvent('linkedin_click', { link_location: where })
  if (/github\.com/i.test(href)) return trackEvent('github_click', { link_location: where, link_url: href })
}

// ── "Cookie settings" link → reopen the banner ──────────────────────────────

export function openCookieSettings(): void {
  window.dispatchEvent(new Event(OPEN_SETTINGS_EVENT))
}

export function onOpenCookieSettings(handler: () => void): () => void {
  window.addEventListener(OPEN_SETTINGS_EVENT, handler)
  return () => window.removeEventListener(OPEN_SETTINGS_EVENT, handler)
}
