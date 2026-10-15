import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight, Award, Globe2, GraduationCap, Medal, Plane, Rocket, Trophy, type LucideIcon } from 'lucide-react'
import { useI18n, useL } from '../i18n'
import { achievements, morocco, moroccoGallery, type AchievementIcon } from '../data/achievements'
import { Gallery } from '../components/Gallery'
import { Pic } from '../components/Pic'
import { Reveal } from '../components/Reveal'
import s from './Achievements.module.css'

const icons: Record<AchievementIcon, LucideIcon> = {
  perfect: Award,
  podium: Trophy,
  medal: Medal,
  rank: GraduationCap,
  trip: Plane,
  startup: Rocket,
  event: Globe2,
}

export function Achievements() {
  const { t } = useI18n()
  const l = useL()

  return (
    <>
      <title>{`${t.nav.achievements} — ${t.meta.siteName}`}</title>
      <meta name="description" content={l(achievements[0].text)} />

      <section className={s.page} aria-labelledby="achievements-title">
        <div className="container">
          <Reveal>
            <h1 id="achievements-title" className={s.h1}>
              {t.nav.achievements}
            </h1>
          </Reveal>

          <ul className={s.grid}>
            {achievements.map((a, i) => {
              const Icon = icons[a.icon]
              return (
                <Reveal as="li" key={a.id} index={i % 3} className={`${s.card} ${a.cover ? s.withCover : ''}`}>
                  {a.cover && (
                    <div className={s.cover}>
                      <Pic pic={a.cover.pic} alt={l(a.cover.alt)} sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw" />
                    </div>
                  )}
                  <div className={s.body}>
                    <span className={s.icon} aria-hidden="true">
                      <Icon size={22} />
                    </span>
                    <h2 className={s.title}>
                      {a.to ? (
                        <Link to={a.to} className={s.link}>
                          {l(a.title)}
                          <ArrowUpRight size={18} aria-hidden="true" className={s.arrow} />
                        </Link>
                      ) : (
                        l(a.title)
                      )}
                    </h2>
                    <p className={s.text}>{l(a.text)}</p>
                  </div>
                </Reveal>
              )
            })}
          </ul>
        </div>
      </section>
    </>
  )
}

export function MoroccoTrip() {
  const { t } = useI18n()
  const l = useL()
  const title = l(morocco.title)

  return (
    <article className={s.page}>
      <title>{`${title} — ${t.meta.siteName}`}</title>
      <meta name="description" content={l(morocco.text).slice(0, 155)} />
      <div className="container">
        <Link to="/achievements" className={s.back}>
          <ArrowLeft size={18} aria-hidden="true" />
          {t.nav.achievements}
        </Link>
        <header className={s.tripHeader}>
          <Reveal>
            <p className={s.dates}>
              <Plane size={16} aria-hidden="true" />
              {l(morocco.dates)}
            </p>
            <h1 className={s.h1}>{title}</h1>
          </Reveal>
          <Reveal index={1}>
            <p className={s.tripText}>{l(morocco.text)}</p>
          </Reveal>
        </header>
        <Gallery items={moroccoGallery} />
      </div>
    </article>
  )
}
