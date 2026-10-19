import type { CSSProperties } from 'react'
import { Link, useParams } from 'react-router-dom'
import { m, useReducedMotion } from 'framer-motion'
import { ArrowLeft, ExternalLink, FileText, Images, PlayCircle } from 'lucide-react'
import { useI18n, useL } from '../i18n'
import { getProject, picFor, type Media, type ProjectLink } from '../data/projects'
import { projectDetails } from '../data/projectDetails'
import { GitHubIcon } from '../components/Icons'
import { Pic } from '../components/Pic'
import { Reveal } from '../components/Reveal'
import { richBlock } from '../lib/rich'
import b from '../components/Button.module.css'
import s from './ProjectDetail.module.css'

export function ProjectDetail() {
  const { slug = '' } = useParams()
  const { t, lang } = useI18n()
  const l = useL()
  const project = getProject(slug)

  if (!project) {
    return (
      <section className="container" style={{ paddingBlock: 96, minHeight: '60vh' }}>
        <title>{`404 — ${t.meta.siteName}`}</title>
        <p>
          {t.projectsPage.notFound}
        </p>
        <p style={{ marginTop: 24 }}>
          <Link to="/projects">← {t.projectsPage.back}</Link>
        </p>
      </section>
    )
  }

  const title = l(project.title)
  // Approved text, then the extra sections from the old site; a closing *italic* verdict (AI Clinic 20/20) stays last.
  const approved = l(project.detail)
  const extra = projectDetails[project.slug] ? l(projectDetails[project.slug]) : []
  const verdict = approved.length > 1 && /^\*[^*]/.test(approved[approved.length - 1]) ? approved.slice(-1) : []
  const blocks = [...approved.slice(0, approved.length - verdict.length), ...extra, ...verdict]
  // The cover is already shown full-width at the top, so the gallery skips it.
  const gallery = project.media.filter((m) => !(project.cover && m.kind === 'image' && m.pic === project.cover.pic))

  return (
    <article className={s.page}>
      <title>{`${title} — ${t.meta.siteName}`}</title>
      <meta name="description" content={l(project.oneLiner)} />

      <div className="container">
        <Link to="/projects" className={s.back}>
          <ArrowLeft size={18} aria-hidden="true" />
          {t.projectsPage.back}
        </Link>

        <header className={s.header}>
          <span className={s.tag}>{t.projects.filters[project.filter]}</span>
          <h1 className={s.h1}>
            <m.span layoutId={`title-${project.slug}`} className={s.titleText}>
              {title}
            </m.span>
          </h1>
          <p className={s.oneLiner}>{l(project.oneLiner)}</p>
          {project.links.length > 0 && (
            <ul className={s.links}>
              {project.links.map((link) => (
                <li key={link.kind}>
                  <LinkButton link={link} />
                </li>
              ))}
            </ul>
          )}
        </header>

        <m.div layoutId={`cover-${project.slug}`} className={s.cover} style={coverStyle(project.cover && picFor(project.cover, lang))}>
          {project.cover ? (
            <Pic pic={picFor(project.cover, lang)} alt={l(project.cover.alt)} eager sizes="(min-width: 1160px) 1160px, 100vw" />
          ) : (
            <div className={s.placeholder} aria-hidden="true">
              <span>{title.split(' — ')[0]}</span>
            </div>
          )}
        </m.div>

        <div className={s.body}>
          <Reveal className={s.text}>
            {blocks.map((para, i) => richBlock(para, i, s.h3))}
          </Reveal>

          {project.stack.length > 0 && (
            <Reveal index={1} className={s.aside}>
              <h2 className={s.h2}>{t.projectsPage.stack}</h2>
              <ul className={s.stack}>
                {project.stack.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </Reveal>
          )}
        </div>

        {gallery.length > 0 && (
          <section id="media" className={s.media} aria-labelledby="media-title">
            <h2 id="media-title" className={`${s.h2} sr-only`}>
              {t.projectsPage.media}
            </h2>
            <ul className={s.gallery}>
              {gallery.map((m, i) => (
                <Reveal as="li" key={i} index={i} className={galleryClass(m)}>
                  <MediaItem media={m} />
                </Reveal>
              ))}
            </ul>
          </section>
        )}
      </div>
    </article>
  )
}

/**
 * Cover frame keeps the image's own shape, but never taller than 16:10. Near-square images (e.g. a logo)
 * are shown whole on the dark background instead of being cropped.
 */
function coverStyle(pic?: Picture): CSSProperties | undefined {
  if (!pic) return undefined
  const ratio = pic.img.w / pic.img.h
  return {
    aspectRatio: String(Math.max(ratio, 16 / 10)),
    ['--cover-fit' as string]: ratio < 1.2 ? 'contain' : 'cover',
  }
}

/** Video: full row. Phone screenshot (tall image): narrow column. Photo: half row. */
function galleryClass(m: Media) {
  if (m.kind === 'video') return s.wide
  return m.pic.img.h > m.pic.img.w * 1.3 ? s.tall : s.half
}

function MediaItem({ media }: { media: Media }) {
  const l = useL()
  const { lang } = useI18n()
  const reduce = useReducedMotion()
  const alt = l(media.alt)
  if (media.kind === 'video') {
    // Muted loop; poster shows until it plays (and stays when motion is reduced).
    return (
      <figure className={s.figure}>
        <video
          src={media.src}
          poster={media.poster.img.src}
          width={media.poster.img.w}
          height={media.poster.img.h}
          muted
          loop
          playsInline
          autoPlay={!reduce}
          controls={!!reduce}
          preload="metadata"
          aria-label={alt}
        />
        <figcaption>{alt}</figcaption>
      </figure>
    )
  }
  return (
    <figure className={s.figure}>
      <a href={picFor(media, lang).img.src} target="_blank" rel="noopener noreferrer" className={s.zoom}>
        <Pic
          pic={picFor(media, lang)}
          alt={alt}
          sizes={galleryClass(media) === s.tall ? '(min-width: 768px) 280px, 50vw' : '(min-width: 900px) 560px, 100vw'}
        />
      </a>
      <figcaption>{alt}</figcaption>
    </figure>
  )
}

function LinkButton({ link }: { link: ProjectLink }) {
  const { t } = useI18n()
  const label = t.projects.links[link.kind]
  if (link.kind === 'githubComing') {
    return (
      <span className={`${b.btn} ${b.secondary} ${s.disabled}`} aria-disabled="true">
        <GitHubIcon size={18} />
        {label}
      </span>
    )
  }
  if (link.kind === 'demo' || link.kind === 'photos' || link.kind === 'screenshots') {
    const Icon = link.kind === 'demo' ? PlayCircle : Images
    return (
      <a href={link.href} className={`${b.btn} ${b.primary}`}>
        <Icon size={18} aria-hidden="true" />
        {label}
      </a>
    )
  }
  return (
    <a href={link.href} target="_blank" rel="noopener noreferrer" className={`${b.btn} ${b.primary}`}>
      {link.kind === 'github' ? <GitHubIcon size={18} /> : <FileText size={18} aria-hidden="true" />}
      {label}
      <ExternalLink size={14} aria-hidden="true" />
      <span className="sr-only">{t.a11y.opensNewTab}</span>
    </a>
  )
}
