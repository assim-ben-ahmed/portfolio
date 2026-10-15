import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useReducedMotion } from 'framer-motion'
import { ArrowRight, Download, Mail, Quote } from 'lucide-react'
import { cvByLang, useI18n } from '../i18n'
import { useTypewriter } from '../hooks/useTypewriter'
import { featuredProjects } from '../data/projects'
import { ProjectCard } from '../components/ProjectCard'
import { ContactSection } from '../components/ContactSection'
import { CountUp, Reveal, useStaticFirstRender } from '../components/Reveal'
import { Pic } from '../components/Pic'
import headshot from '../../assets/images/profile/headshot.jpg?pic'
import trophy from '../../assets/images/leadership/bde-echo/01-trophy-grade-master-ceremony.jpg?pic'
import b from '../components/Button.module.css'
import s from './Home.module.css'

export function Home() {
  const { t, lang } = useI18n()
  const cv = cvByLang[lang]
  const [pastHero, setPastHero] = useState(false)
  useEffect(() => {
    const onScroll = () => setPastHero(window.scrollY > window.innerHeight * 0.9)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <>
      <title>{t.meta.homeTitle}</title>
      <meta name="description" content={t.meta.homeDescription} />

      <Hero />

      {/* Highlights */}
      <section aria-label={t.a11y.highlights} className={s.highlights}>
        <ul className={`container ${s.tiles}`}>
          {t.highlights.map((h, i) => (
            <Reveal as="li" key={h.label} index={i} className={s.tile}>
              <p className={s.tileValue}>
                <span aria-hidden="true">
                  <CountUp value={h.value} />
                  {h.suffix}
                </span>
                <span className="sr-only">
                  {h.value}
                  {h.suffix}
                </span>
              </p>
              <p className={s.tileLabel}>{h.label}</p>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* Featured projects */}
      <section className={s.section} aria-labelledby="featured-title">
        <div className="container">
          <Reveal className={s.sectionHead}>
            <h2 id="featured-title" className={s.h2}>
              {t.nav.projects}
            </h2>
            <p className={s.lead}>{t.projects.intro}</p>
          </Reveal>
          <ul className={s.cards}>
            {featuredProjects.map((p, i) => (
              <Reveal as="li" key={p.slug} index={i}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </ul>
          <div className={s.more}>
            <Link to="/projects" className={`${b.btn} ${b.secondary}`}>
              {t.hero.projects}
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Leadership teaser */}
      <section className={`${s.section} ${s.band}`} aria-labelledby="leadership-title">
        <div className={`container ${s.leader}`}>
          <Reveal className={s.leaderMedia}>
            <figure>
              <Pic pic={trophy} alt={t.leadershipTeaser.imageAlt} sizes="(min-width: 900px) 520px, 100vw" />
              <figcaption>{t.leadershipTeaser.caption}</figcaption>
            </figure>
          </Reveal>
          <Reveal index={1} className={s.leaderText}>
            <h2 id="leadership-title" className={s.h2}>
              {t.nav.leadership}
            </h2>
            <p className={s.role}>{t.leadershipTeaser.role}</p>
            <p className={s.lead}>{t.leadershipTeaser.text}</p>
            <Link to="/leadership" className={`${b.btn} ${b.secondary}`}>
              {t.leadershipTeaser.cta}
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className={s.section} aria-labelledby="testimonials-title">
        <div className="container">
          <Reveal className={s.sectionHead}>
            <h2 id="testimonials-title" className={s.h2}>
              {t.testimonials.heading}
            </h2>
          </Reveal>
          <ul className={s.quotes}>
            {t.testimonials.items.map((q, i) => (
              <Reveal as="li" key={q.name} index={i} className={s.quoteCard}>
                <figure>
                  <Quote size={28} aria-hidden="true" className={s.quoteIcon} />
                  <blockquote lang={lang}>
                    <p>{q.quote}</p>
                  </blockquote>
                  <figcaption>
                    <strong>{q.name}</strong>
                    <span>{q.role}</span>
                    {t.testimonials.translatedNote && <em className={s.translated}>{t.testimonials.translatedNote}</em>}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <ContactSection />

      {/* Keeps the CV one click away on small screens after scrolling past the hero. */}
      <a
        href={cv.href}
        download={cv.filename}
        className={`${b.btn} ${b.primary} ${s.fab} ${pastHero ? s.fabOn : ''}`}
        aria-label={t.hero.cv}
        tabIndex={pastHero ? undefined : -1}
        aria-hidden={pastHero ? undefined : true}
      >
        <Download size={20} aria-hidden="true" />
      </a>
    </>
  )
}

function Hero() {
  const { t, lang } = useI18n()
  // Pre-rendered HTML shows the titles as plain text; the typewriter starts once React has taken over.
  const prefersReduced = useReducedMotion()
  const staticFirst = useStaticFirstRender()
  const reduce = prefersReduced || staticFirst
  const typed = useTypewriter(t.hero.titles, !reduce)
  const cv = cvByLang[lang]

  return (
    <section className={s.hero} aria-labelledby="hero-title">
      <div className={`container ${s.heroGrid}`}>
        <div className={s.heroText}>
          <p className={s.status}>
            <span className={s.dot} aria-hidden="true" />
            {t.hero.status}
          </p>
          <h1 id="hero-title" className={s.h1}>
            <span className={s.greeting}>{t.hero.greeting}</span>
            <span className={s.name}>{t.hero.name}</span>
          </h1>

          <p className={s.typed}>
            {reduce ? (
              <span>{t.hero.titles.join(' · ')}</span>
            ) : (
              <>
                <span className="sr-only">{t.hero.titles.join(', ')}</span>
                <span aria-hidden="true">
                  {typed}
                  <span className={s.caret} />
                </span>
              </>
            )}
          </p>

          <p className={s.pitch}>{t.hero.pitch}</p>
          <p className={s.subline}>{t.hero.subline}</p>

          <div className={s.ctas}>
            <a href={cv.href} download={cv.filename} className={`${b.btn} ${b.primary}`}>
              <Download size={18} aria-hidden="true" />
              {t.hero.cv}
            </a>
            <Link to="/projects" className={`${b.btn} ${b.secondary}`}>
              {t.hero.projects}
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link to="/#contact" className={`${b.btn} ${b.ghost}`}>
              <Mail size={18} aria-hidden="true" />
              {t.hero.contact}
            </Link>
          </div>
        </div>

        <div className={s.portraitWrap}>
          <div className={s.portrait}>
            <Pic pic={headshot} alt={t.hero.portraitAlt} eager sizes="(min-width: 900px) 380px, 200px" />
          </div>
        </div>
      </div>
    </section>
  )
}
