import { lazy, useEffect, type ComponentType } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LazyMotion, MotionConfig } from 'framer-motion'
import { I18nProvider } from './i18n'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'

/**
 * A code-split page that can also be loaded *before* React starts: once `preload()` has resolved, it renders
 * synchronously — no Suspense fallback, so a pre-rendered page is never replaced by a blank frame.
 */
function lazyPage<M>(load: () => Promise<M>, pick: (m: M) => ComponentType) {
  let Loaded: ComponentType | null = null
  const preload = () => load().then((m) => (Loaded = pick(m)))
  const Lazy = lazy(() => preload().then((C) => ({ default: C })))
  const Page = () => (Loaded ? <Loaded /> : <Lazy />)
  return Object.assign(Page, { preload })
}

const loadAbout = () => import('./pages/About')
const loadProjects = () => import('./pages/Projects')
const loadDetail = () => import('./pages/ProjectDetail')
const loadLeadership = () => import('./pages/Leadership')
const loadAchievements = () => import('./pages/Achievements')
const loadBlog = () => import('./pages/Blog')

const About = lazyPage(loadAbout, (m) => m.About)
const Projects = lazyPage(loadProjects, (m) => m.Projects)
const ProjectDetail = lazyPage(loadDetail, (m) => m.ProjectDetail)
const Leadership = lazyPage(loadLeadership, (m) => m.Leadership)
const Achievements = lazyPage(loadAchievements, (m) => m.Achievements)
const MoroccoTrip = lazyPage(loadAchievements, (m) => m.MoroccoTrip)
const Blog = lazyPage(loadBlog, (m) => m.Blog)
const BlogPost = lazyPage(loadBlog, (m) => m.BlogPost)

const allPages = [About, Projects, ProjectDetail, Leadership, Achievements, MoroccoTrip, Blog, BlogPost]

/** Load the page(s) a path can render, so the first render is synchronous (see main.tsx). */
export function preloadForPath(pathname: string): Promise<unknown> {
  const section = pathname.replace(import.meta.env.BASE_URL, '/').split('/').filter(Boolean)[0] ?? ''
  const bySection: Record<string, { preload: () => Promise<unknown> }[]> = {
    about: [About],
    projects: [Projects, ProjectDetail],
    leadership: [Leadership],
    achievements: [Achievements, MoroccoTrip],
    blog: [Blog, BlogPost],
  }
  return Promise.all((bySection[section] ?? []).map((p) => p.preload()))
}

const loadMotionFeatures = () => import('./lib/motionFeatures').then((m) => m.default)

/** After the first commit: finish taking over a pre-rendered page, then warm up the other pages. */
function useAfterFirstRender() {
  useEffect(() => {
    document.documentElement.classList.remove('pr-hide')
    // While pre-rendering, keep each page's HTML free of links to the other pages' code.
    if ((window as { __PRERENDER__?: boolean }).__PRERENDER__) return
    const load = () => allPages.forEach((p) => p.preload())
    if ('requestIdleCallback' in window) {
      const id = window.requestIdleCallback(load, { timeout: 3000 })
      return () => window.cancelIdleCallback(id)
    }
    const id = globalThis.setTimeout(load, 1500)
    return () => globalThis.clearTimeout(id)
  }, [])
}

export default function App() {
  useAfterFirstRender()
  return (
    <I18nProvider>
      <LazyMotion features={loadMotionFeatures} strict>
        <MotionConfig reducedMotion="user">
          <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, '')}>
            <Routes>
              <Route element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="projects" element={<Projects />} />
                <Route path="projects/:slug" element={<ProjectDetail />} />
                <Route path="leadership" element={<Leadership />} />
                <Route path="achievements" element={<Achievements />} />
                <Route path="achievements/morocco-2026" element={<MoroccoTrip />} />
                <Route path="blog" element={<Blog />} />
                <Route path="blog/:slug" element={<BlogPost />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </MotionConfig>
      </LazyMotion>
    </I18nProvider>
  )
}
