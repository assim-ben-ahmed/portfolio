import { Link } from 'react-router-dom'
import { m } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { useI18n, useL } from '../i18n'
import { picFor, type Project } from '../data/projects'
import { Pic } from './Pic'
import s from './ProjectCard.module.css'

/** Glowing project card. The cover and title carry `layoutId`s so the detail page can expand from them. */
/** `headingLevel`: 3 under a section h2 (Home), 2 directly under the page h1 (Projects page). */
export function ProjectCard({ project, headingLevel = 3 }: { project: Project; headingLevel?: 2 | 3 }) {
  const { t, lang } = useI18n()
  const l = useL()
  const title = l(project.title)
  const Heading = headingLevel === 2 ? 'h2' : 'h3'

  return (
    <m.article layoutId={`card-${project.slug}`} className={s.card}>
      <m.div layoutId={`cover-${project.slug}`} className={s.cover}>
        {project.cover ? (
          <Pic pic={picFor(project.cover, lang)} alt={l(project.cover.alt)} sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw" />
        ) : (
          // No photo yet (assets.md): styled cover with the project name.
          <div className={s.placeholder} aria-hidden="true">
            <span>{title.split(' — ')[0]}</span>
          </div>
        )}
      </m.div>

      <div className={s.body}>
        <span className={s.tag}>{t.projects.filters[project.filter]}</span>
        <Heading className={s.title}>
          {/* Stretched link: the whole card is clickable, one tab stop. */}
          <Link to={`/projects/${project.slug}`} className={s.link} data-project-card={project.slug}>
            <m.span layoutId={`title-${project.slug}`} className={s.titleText}>
              {title}
            </m.span>
            <ArrowUpRight size={18} aria-hidden="true" className={s.arrow} />
          </Link>
        </Heading>
        <p className={s.oneLiner}>{l(project.oneLiner)}</p>
        {project.stack.length > 0 && (
          <ul className={s.stack}>
            {project.stack.slice(0, 5).map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
            {project.stack.length > 5 && <li aria-label={`+${project.stack.length - 5}`}>+{project.stack.length - 5}</li>}
          </ul>
        )}
      </div>
    </m.article>
  )
}
