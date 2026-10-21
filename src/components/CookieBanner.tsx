import { useEffect, useRef, useState } from 'react'
import { useI18n } from '../i18n'
import { getConsent, onOpenCookieSettings, setConsent, type Consent } from '../lib/analytics'
import btn from './Button.module.css'
import s from './CookieBanner.module.css'

/**
 * Consent banner (CNIL): shown until the visitor chooses, again after 6 months, and from "Cookie settings".
 * Accept and Refuse share the same style so neither is pushed. Rendered after mount only, never pre-rendered.
 */
export function CookieBanner() {
  const { t } = useI18n()
  const [open, setOpen] = useState(false)
  const firstButton = useRef<HTMLButtonElement>(null)
  const fromSettings = useRef(false)

  useEffect(() => {
    if (window.__PRERENDER__) return
    if (getConsent() === null) setOpen(true)
    return onOpenCookieSettings(() => {
      fromSettings.current = true
      setOpen(true)
    })
  }, [])

  useEffect(() => {
    if (open && fromSettings.current) firstButton.current?.focus()
  }, [open])

  if (!open) return null

  const choose = (value: Consent) => {
    setConsent(value)
    setOpen(false)
    fromSettings.current = false
  }

  return (
    <section className={s.banner} role="region" aria-labelledby="cookie-title">
      <div className={s.text}>
        <h2 id="cookie-title" className={s.title}>
          {t.cookies.title}
        </h2>
        <p>{t.cookies.body}</p>
      </div>
      <div className={s.actions}>
        <button ref={firstButton} type="button" className={`${btn.btn} ${btn.secondary}`} onClick={() => choose('denied')}>
          {t.cookies.refuse}
        </button>
        <button type="button" className={`${btn.btn} ${btn.secondary}`} onClick={() => choose('granted')}>
          {t.cookies.accept}
        </button>
      </div>
    </section>
  )
}
