import { Download, Mail, MapPin, School } from 'lucide-react'
import { cvByLang, useI18n } from '../i18n'
import { LINKS } from '../lib/links'
import { GitHubIcon, LinkedInIcon } from './Icons'
import { Reveal } from './Reveal'
import b from './Button.module.css'
import s from './ContactSection.module.css'

export function ContactSection() {
  const { t, lang } = useI18n()
  const cv = cvByLang[lang]
  return (
    <section id="contact" className={s.section} aria-labelledby="contact-title">
      <div className="container">
        <Reveal className={s.panel}>
          <h2 id="contact-title" className={s.title}>
            {t.contact.title}
          </h2>
          <p className={s.text}>{t.contact.text}</p>

          <a href={`mailto:${LINKS.email}`} className={`${b.btn} ${b.primary} ${s.main}`}>
            <Mail size={18} aria-hidden="true" />
            {t.contact.mainButton}
          </a>
          <p className={s.secondary}>
            <School size={16} aria-hidden="true" />
            <a href={`mailto:${LINKS.schoolEmail}`}>{t.contact.secondary}</a>
          </p>

          <ul className={s.links}>
            <li>
              <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" className={`${b.btn} ${b.secondary}`}>
                <LinkedInIcon size={18} />
                {t.contact.linkedin}
                <span className="sr-only">{t.a11y.opensNewTab}</span>
              </a>
            </li>
            <li>
              <a href={LINKS.github} target="_blank" rel="noopener noreferrer" className={`${b.btn} ${b.secondary}`}>
                <GitHubIcon size={18} />
                {t.contact.github}
                <span className="sr-only">{t.a11y.opensNewTab}</span>
              </a>
            </li>
            <li>
              <a href={cv.href} download={cv.filename} className={`${b.btn} ${b.secondary}`}>
                <Download size={18} aria-hidden="true" />
                {t.contact.cv}
              </a>
            </li>
          </ul>
          <p className={s.location}>
            <MapPin size={16} aria-hidden="true" />
            {t.contact.location}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
