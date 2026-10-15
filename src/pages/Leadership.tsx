import { HeartHandshake, Users } from 'lucide-react'
import { useI18n, useL } from '../i18n'
import { bdeGallery, bdeHero, volunteeringPhotos } from '../data/leadership'
import { Gallery } from '../components/Gallery'
import { Pic } from '../components/Pic'
import { Reveal } from '../components/Reveal'
import s from './Leadership.module.css'

export function Leadership() {
  const { t } = useI18n()
  const l = useL()
  const p = t.leadershipPage

  return (
    <>
      <title>{`${p.title} — ${t.meta.siteName}`}</title>
      <meta name="description" content={p.metaDescription} />

      {/* Trophy photo first, then the BDE story */}
      <section className={s.hero} aria-labelledby="leadership-title">
        <div className={`container ${s.heroGrid}`}>
          <Reveal className={s.heroMedia}>
            <figure>
              <Pic pic={bdeHero.pic} alt={l(bdeHero.alt)} eager sizes="(min-width: 900px) 460px, 100vw" />
              <figcaption>{l(bdeHero.caption)}</figcaption>
            </figure>
          </Reveal>
          <div className={s.heroText}>
            <Reveal>
              <h1 id="leadership-title" className={s.h1}>
                {p.title}
              </h1>
            </Reveal>
            <Reveal index={1}>
              <h2 className={s.role}>
                <Users size={18} aria-hidden="true" />
                {p.bdeHeading}
              </h2>
            </Reveal>
            <Reveal index={2}>
              <p className={s.story}>{p.bdeText}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Events gallery */}
      <section className={s.section} aria-labelledby="events-title">
        <div className="container">
          <Reveal>
            <h2 id="events-title" className={s.h2}>
              {p.eventsHeading}
            </h2>
          </Reveal>
          <Gallery items={bdeGallery} />
        </div>
      </section>

      {/* Volunteering */}
      <section className={`${s.section} ${s.band}`} aria-labelledby="volunteering-title">
        <div className={`container ${s.volunteer}`}>
          <Reveal className={s.volunteerText}>
            <HeartHandshake size={32} aria-hidden="true" className={s.icon} />
            <h2 id="volunteering-title" className={s.h2}>
              {p.volunteeringHeading}
            </h2>
            <p className={s.story}>{p.volunteeringText}</p>
          </Reveal>
          <div className={s.volunteerPhotos}>
            <Gallery items={volunteeringPhotos} />
          </div>
        </div>
      </section>
    </>
  )
}
