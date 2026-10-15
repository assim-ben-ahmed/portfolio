import { useI18n } from '../i18n'
import { LINKS } from '../lib/links'
import { GitHubIcon, LinkedInIcon } from './Icons'
import s from './Footer.module.css'

export function Footer() {
  const { t } = useI18n()
  return (
    <footer className={s.footer}>
      <div className={`container ${s.inner}`}>
        <p className={s.copy}>{t.footer.copyright}</p>
        <ul className={s.social}>
          <li>
            <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`LinkedIn ${t.a11y.opensNewTab}`}>
              <LinkedInIcon />
            </a>
          </li>
          <li>
            <a href={LINKS.github} target="_blank" rel="noopener noreferrer" aria-label={`GitHub ${t.a11y.opensNewTab}`}>
              <GitHubIcon />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
