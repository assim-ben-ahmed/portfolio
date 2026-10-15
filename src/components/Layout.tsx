import { Suspense, useEffect } from 'react'
import { useLocation, useOutlet } from 'react-router-dom'
import { AnimatePresence, LayoutGroup, m, useReducedMotion } from 'framer-motion'
import { useI18n } from '../i18n'
import { Nav } from './Nav'
import { Footer } from './Footer'
import { Particles } from './Particles'
import { endPrerenderBoot } from './Reveal'

/** Scroll to top on page change, or to the #hash target (e.g. /#contact). */
function useScrollRestore() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      // Wait a frame so the target exists after the page transition.
      const id = window.setTimeout(() => document.getElementById(hash.slice(1))?.scrollIntoView(), 50)
      return () => window.clearTimeout(id)
    }
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname, hash])
}

/**
 * Ends the pre-render takeover. Lives inside <main>'s Suspense boundary because React hydrates that boundary
 * in a later pass than the rest of the app: the flag must stay set until the page content itself is adopted.
 */
function PrerenderBootDone() {
  useEffect(endPrerenderBoot, [])
  return null
}

export function Layout() {
  const { t } = useI18n()
  const location = useLocation()
  const outlet = useOutlet()
  const reduce = useReducedMotion()
  useScrollRestore()

  return (
    <>
      <a href="#main" className="skip-link">
        {t.a11y.skip}
      </a>
      <Particles />
      <Nav />
      <LayoutGroup>
        <AnimatePresence mode="popLayout" initial={false}>
          <m.main
            id="main"
            key={location.pathname}
            style={{ position: 'relative', zIndex: 1 }}
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }}
            exit={reduce ? undefined : { opacity: 0, transition: { duration: 0.18 } }}
          >
            <Suspense fallback={<div style={{ minHeight: '100vh' }} />}>
              <PrerenderBootDone />
              {outlet}
            </Suspense>
          </m.main>
        </AnimatePresence>
      </LayoutGroup>
      <Footer />
    </>
  )
}
