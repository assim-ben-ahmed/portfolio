import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useI18n } from '../i18n'
import s from './Nav.module.css'

export function Nav() {
  const { t, lang, toggle } = useI18n()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname, hash } = useLocation()

  useEffect(() => setOpen(false), [pathname, hash])
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const items = [
    { to: '/', label: t.nav.home, end: true },
    { to: '/about', label: t.nav.about },
    { to: '/projects', label: t.nav.projects },
    { to: '/leadership', label: t.nav.leadership },
    { to: '/achievements', label: t.nav.achievements },
    { to: '/blog', label: t.nav.blog },
  ]
  const isContact = pathname === '/' && hash === '#contact'

  return (
    <header className={`${s.header} ${scrolled || open ? s.scrolled : ''}`}>
      <div className={`container ${s.bar}`}>
        <Link to="/" className={s.logo}>
          <span className={s.logoMark} aria-hidden="true">AB</span>
          <span className={s.logoText}>Assim Ben Ahmed</span>
        </Link>

        <nav aria-label={t.a11y.mainNav} className={`${s.nav} ${open ? s.open : ''}`} id="main-nav">
          <ul className={s.list}>
            {items.map((it) => (
              <li key={it.to}>
                <NavLink
                  to={it.to}
                  end={it.end}
                  className={({ isActive }) => `${s.link} ${isActive && !isContact ? s.active : ''}`}
                >
                  {it.label}
                </NavLink>
              </li>
            ))}
            <li>
              <Link
                to="/#contact"
                className={`${s.link} ${isContact ? s.active : ''}`}
                aria-current={isContact ? 'location' : undefined}
              >
                {t.nav.contact}
              </Link>
            </li>
          </ul>
        </nav>

        <div className={s.actions}>
          {/* Visible text stays part of the accessible name ("FR / EN — Passer le site en français"). */}
          <button type="button" className={s.lang} onClick={toggle}>
            <span className={lang === 'fr' ? s.langOn : ''}>FR</span>
            <span className={s.langSep}>/</span>
            <span className={lang === 'en' ? s.langOn : ''}>EN</span>
            <span className="sr-only"> — {t.a11y.switchLang}</span>
          </button>
          <button
            type="button"
            className={s.burger}
            aria-expanded={open}
            aria-controls="main-nav"
            aria-label={open ? t.a11y.menuClose : t.a11y.menuOpen}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </div>
    </header>
  )
}
