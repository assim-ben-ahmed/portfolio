import { useSearchParams } from 'react-router-dom'
import { AnimatePresence, m, useReducedMotion } from 'framer-motion'
import { useI18n } from '../i18n'
import { projects, type Filter } from '../data/projects'
import { ProjectCard } from '../components/ProjectCard'
import { Reveal } from '../components/Reveal'
import s from './Projects.module.css'

const FILTERS: Filter[] = ['experience', 'hackathons', 'clinic', 'startup', 'side']

export function Projects() {
  const { t } = useI18n()
  const reduce = useReducedMotion()
  // Filter lives in the URL (?filter=clinic) so it survives back navigation and can be shared.
  const [params, setParams] = useSearchParams()
  const raw = params.get('filter')
  const active = FILTERS.includes(raw as Filter) ? (raw as Filter) : null
  const visible = active ? projects.filter((p) => p.filter === active) : projects

  const select = (f: Filter | null) => setParams(f ? { filter: f } : {}, { replace: true, preventScrollReset: true })

  return (
    <>
      <title>{`${t.nav.projects} — ${t.meta.siteName}`}</title>
      <meta name="description" content={t.projects.intro} />

      <section className={s.page} aria-labelledby="projects-title">
        <div className="container">
          <Reveal className={s.head}>
            <h1 id="projects-title" className={s.h1}>
              {t.nav.projects}
            </h1>
            <p className={s.intro}>{t.projects.intro}</p>
          </Reveal>

          <Reveal index={1}>
            <div role="group" aria-label={t.projectsPage.filterLabel} className={s.filters}>
              {[null, ...FILTERS].map((f) => {
                const label = f ? t.projects.filters[f] : t.projectsPage.all
                const count = f ? projects.filter((p) => p.filter === f).length : projects.length
                return (
                  <button
                    key={f ?? 'all'}
                    type="button"
                    className={`${s.chip} ${active === f ? s.chipOn : ''}`}
                    aria-pressed={active === f}
                    onClick={() => select(f)}
                  >
                    {label}
                    <span className={s.count}>{count}</span>
                  </button>
                )
              })}
            </div>
          </Reveal>

          <m.ul layout={!reduce} className={s.grid}>
            <AnimatePresence mode="popLayout" initial={false}>
              {visible.map((p) => (
                <m.li
                  key={p.slug}
                  layout={!reduce}
                  initial={reduce ? false : { opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={reduce ? undefined : { opacity: 0, scale: 0.96, transition: { duration: 0.15 } }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  <ProjectCard project={p} headingLevel={2} />
                </m.li>
              ))}
            </AnimatePresence>
          </m.ul>
        </div>
      </section>
    </>
  )
}
