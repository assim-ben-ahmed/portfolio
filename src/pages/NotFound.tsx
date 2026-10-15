import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { useI18n } from '../i18n'
import b from '../components/Button.module.css'

/** Catch-all route for unknown addresses. */
export function NotFound() {
  const { t } = useI18n()
  return (
    <section className="container" style={{ paddingBlock: 'var(--space-9)', minHeight: '70vh' }}>
      <title>{`404 — ${t.meta.siteName}`}</title>
      <meta name="robots" content="noindex" />
      <p style={{ fontFamily: 'var(--font-mono)', color: 'var(--primary-text)' }}>404</p>
      <h1 style={{ fontSize: 'var(--fs-h1)', marginTop: 'var(--space-3)' }}>{t.notFound.title}</h1>
      <Link to="/" className={`${b.btn} ${b.secondary}`} style={{ marginTop: 'var(--space-6)' }}>
        <ArrowLeft size={18} aria-hidden="true" />
        {t.notFound.back}
      </Link>
    </section>
  )
}
