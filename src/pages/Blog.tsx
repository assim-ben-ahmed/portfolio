import { Link, useParams, useSearchParams } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight, Clock, PenLine } from 'lucide-react'
import { useI18n } from '../i18n'
import { BLOG_CATEGORIES, formatDate, getPost, posts, type BlogCategory } from '../lib/blog'
import { Reveal } from '../components/Reveal'
import s from './Blog.module.css'

export function Blog() {
  const { t, lang } = useI18n()
  const [params, setParams] = useSearchParams()
  const raw = params.get('filter')
  const active = BLOG_CATEGORIES.includes(raw as BlogCategory) ? (raw as BlogCategory) : null
  const visible = active ? posts.filter((p) => p.tags.includes(active)) : posts
  const select = (f: BlogCategory | null) => setParams(f ? { filter: f } : {}, { replace: true, preventScrollReset: true })

  return (
    <>
      <title>{`${t.blog.title} — ${t.meta.siteName}`}</title>
      <meta name="description" content={t.blog.intro} />

      <section className={s.page} aria-labelledby="blog-title">
        <div className="container">
          <Reveal className={s.head}>
            <h1 id="blog-title" className={s.h1}>
              {t.blog.title}
            </h1>
            <p className={s.intro}>{t.blog.intro}</p>
          </Reveal>

          {posts.length === 0 ? (
            <Reveal index={1} className={s.empty}>
              <PenLine size={36} aria-hidden="true" className={s.emptyIcon} />
              <p>{t.blog.empty}</p>
            </Reveal>
          ) : (
            <>
              <Reveal index={1}>
                <div role="group" aria-label={t.blog.title} className={s.filters}>
                  {[null, ...BLOG_CATEGORIES].map((f) => (
                    <button
                      key={f ?? 'all'}
                      type="button"
                      className={`${s.chip} ${active === f ? s.chipOn : ''}`}
                      aria-pressed={active === f}
                      onClick={() => select(f)}
                    >
                      {f ? t.blog.filters[f] : t.blog.filters.all}
                    </button>
                  ))}
                </div>
              </Reveal>

              {visible.length === 0 ? (
                <p className={s.noMatch}>{t.blog.noMatch}</p>
              ) : (
                <ul className={s.list}>
                  {visible.map((p, i) => (
                    <Reveal as="li" key={p.slug} index={i % 3} className={s.card}>
                      <p className={s.meta}>
                        <time dateTime={p.date}>{formatDate(p.date, lang)}</time>
                        <span aria-hidden="true">·</span>
                        <span className={s.readTime}>
                          <Clock size={14} aria-hidden="true" />
                          {p.readingMinutes} {t.blog.minRead}
                        </span>
                        <span className={s.langBadge} lang={p.lang}>
                          {p.lang.toUpperCase()}
                        </span>
                      </p>
                      <h2 className={s.cardTitle}>
                        <Link to={`/blog/${p.slug}`} className={s.link} lang={p.lang}>
                          {p.title}
                          <ArrowUpRight size={18} aria-hidden="true" className={s.arrow} />
                        </Link>
                      </h2>
                      {p.summary && (
                        <p className={s.summary} lang={p.lang}>
                          {p.summary}
                        </p>
                      )}
                      {p.tags.length > 0 && (
                        <ul className={s.tags}>
                          {p.tags.map((tag) => (
                            <li key={tag}>
                              {BLOG_CATEGORIES.includes(tag as BlogCategory) ? t.blog.filters[tag as BlogCategory] : tag}
                            </li>
                          ))}
                        </ul>
                      )}
                    </Reveal>
                  ))}
                </ul>
              )}
            </>
          )}
        </div>
      </section>
    </>
  )
}

export function BlogPost() {
  const { slug = '' } = useParams()
  const { t, lang } = useI18n()
  const post = getPost(slug)

  if (!post) {
    return (
      <section className={`container ${s.page}`}>
        <title>{`404 — ${t.meta.siteName}`}</title>
        <p>
          {t.blog.notFound}
        </p>
        <p style={{ marginTop: 24 }}>
          <Link to="/blog">← {t.blog.title}</Link>
        </p>
      </section>
    )
  }

  return (
    <article className={s.page} lang={post.lang}>
      <title>{`${post.title} — ${t.meta.siteName}`}</title>
      {post.summary && <meta name="description" content={post.summary} />}
      <div className={`container ${s.postWrap}`}>
        <Link to="/blog" className={s.back} lang={lang}>
          <ArrowLeft size={18} aria-hidden="true" />
          {t.blog.title}
        </Link>
        <header className={s.postHeader}>
          <p className={s.meta} lang={lang}>
            <time dateTime={post.date}>{formatDate(post.date, lang)}</time>
            <span aria-hidden="true">·</span>
            <span className={s.readTime}>
              <Clock size={14} aria-hidden="true" />
              {post.readingMinutes} {t.blog.minRead}
            </span>
          </p>
          <h1 className={s.postTitle}>{post.title}</h1>
          {post.summary && <p className={s.intro}>{post.summary}</p>}
        </header>
        {/* Posts are Markdown files Assim writes himself (src/content/blog), rendered at build time. */}
        <div className={s.prose} dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </article>
  )
}
