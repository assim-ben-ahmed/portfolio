import { Link } from 'react-router-dom'
import { Download } from 'lucide-react'
import { cvByLang, useI18n } from '../i18n'
import { Reveal } from '../components/Reveal'
import { Pic } from '../components/Pic'
import headshot from '../../assets/images/profile/headshot.jpg?pic'
import b from '../components/Button.module.css'
import s from './About.module.css'

// "Used in" names (content.md → Skills) → project detail pages.
const usedInSlug: Record<string, string> = {
  WellPack: 'wellpack-manager',
  'La Galite': 'la-galite-voyage',
  Beparentalis: 'beparentalis',
  Pitchboy: 'pitchboy',
  'Aivancity Hub': 'aivancity-hub',
  AquaNova: 'aquanova',
  'Shift Technology': 'shift-technology',
  'Gmail AI Assistant': 'gmail-ai-assistant',
}

export function About() {
  const { t, lang } = useI18n()
  const cv = cvByLang[lang]

  return (
    <>
      <title>{`${t.nav.about} — ${t.meta.siteName}`}</title>
      <meta name="description" content={t.about.metaDescription} />

      {/* Story */}
      <section className={s.intro} aria-labelledby="about-title">
        <div className={`container ${s.introGrid}`}>
          <Reveal className={s.photo}>
            <Pic pic={headshot} alt={t.hero.portraitAlt} eager sizes="(min-width: 900px) 360px, 240px" />
          </Reveal>
          <div>
            <Reveal>
              <h1 id="about-title" className={s.h1}>
                {t.nav.about}
              </h1>
            </Reveal>
            {t.about.story.map((p, i) => (
              <Reveal key={i} index={i + 1}>
                <p className={i === 0 ? s.storyLead : s.story}>{p}</p>
              </Reveal>
            ))}
            <Reveal index={4}>
              <a href={cv.href} download={cv.filename} className={`${b.btn} ${b.primary} ${s.cv}`}>
                <Download size={18} aria-hidden="true" />
                {t.hero.cv}
              </a>
            </Reveal>
          </div>
        </div>

        <div className="container">
          <dl className={s.facts}>
            {t.about.facts.map((f, i) => (
              <Reveal key={f.label} index={i} className={s.fact}>
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      {/* Experience timeline */}
      <section className={s.section} aria-labelledby="experience-title">
        <div className="container">
          <Reveal>
            <h2 id="experience-title" className={s.h2}>
              {t.experience.heading}
            </h2>
          </Reveal>
          <ol className={s.timeline}>
            {t.experience.items.map((e, i) => (
              <Reveal as="li" key={e.org} index={i} className={s.entry}>
                <span className={s.node} aria-hidden="true" />
                <p className={s.meta}>
                  {e.period} · {e.place}
                </p>
                <h3 className={s.h3}>
                  {e.slug ? (
                    <Link to={`/projects/${e.slug}`} className={s.orgLink}>
                      {e.org}
                    </Link>
                  ) : (
                    e.org
                  )}
                  <span className={s.role}> — {e.role}</span>
                </h3>
                <p className={s.text}>{e.text}</p>
                {e.bullets.length > 0 && (
                  <ul className={s.bullets}>
                    {e.bullets.map((bl) => (
                      <li key={bl.slug}>
                        <Link to={`/projects/${bl.slug}`} className={s.bulletName}>
                          {bl.name}
                        </Link>{' '}
                        {bl.text}
                      </li>
                    ))}
                  </ul>
                )}
                {e.stack && <p className={s.stack}>{e.stack}</p>}
              </Reveal>
            ))}
          </ol>

          <Reveal className={s.education}>
            <h3 className={s.h3}>{t.experience.educationHeading}</h3>
            {t.experience.education.map((line) => (
              <p key={line} className={s.text}>
                {line}
              </p>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Skills */}
      <section className={`${s.section} ${s.band}`} aria-labelledby="skills-title">
        <div className="container">
          <Reveal>
            <h2 id="skills-title" className={s.h2}>
              {t.skills.heading}
            </h2>
          </Reveal>
          <ul className={s.skills}>
            {t.skills.groups.map((g, i) => (
              <Reveal as="li" key={g.name} index={i} className={s.skill}>
                <h3 className={s.skillName}>{g.name}</h3>
                <ul className={s.tools}>
                  {/* Split on commas outside parentheses: "REST APIs (Gmail, Pipedrive)" stays one chip. */}
                  {g.tools.split(/,\s*(?![^()]*\))/).map((tool) => (
                    <li key={tool}>{tool}</li>
                  ))}
                </ul>
                <p className={s.usedIn}>
                  <span>{t.skills.usedIn}</span>{' '}
                  {g.usedIn.map((name, j) => (
                    <span key={name}>
                      {j > 0 && ' · '}
                      {usedInSlug[name] ? <Link to={`/projects/${usedInSlug[name]}`}>{name}</Link> : name}
                    </span>
                  ))}
                </p>
              </Reveal>
            ))}
          </ul>
          <Reveal>
            <p className={s.training}>{t.skills.training}</p>
          </Reveal>
        </div>
      </section>
    </>
  )
}
