import { Link, useParams, useSearchParams } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight, Clock, Film, Languages, PenLine, Search, Video } from 'lucide-react'
import { useI18n } from '../i18n'
import { BLOG_CATEGORIES, formatDate, getPost, listPosts, type Block, type BlogCategory, type Lang } from '../lib/blog'
import { BlogAnim, SideAnim } from '../components/blog/Anims'
import { Reveal } from '../components/Reveal'
import s from './Blog.module.css'

export function Blog() {
  const { t, lang } = useI18n()
  const posts = listPosts(lang)
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
            {posts.length > 0 && <LangSwitch />}
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
                      {p.cover && <img className={s.cardCover} src={p.cover} alt="" width={1600} height={900} loading="lazy" />}
                      <p className={s.meta}>
                        <time dateTime={p.date}>{formatDate(p.date, lang)}</time>
                        <span aria-hidden="true">·</span>
                        <span className={s.readTime}>
                          <Clock size={14} aria-hidden="true" />
                          {p.readingMinutes} {t.blog.minRead}
                        </span>
                        {p.languages.map((l) => (
                          <span key={l} className={`${s.langBadge} ${l === lang ? s.langBadgeOn : ''}`} lang={l}>
                            {l.toUpperCase()}
                          </span>
                        ))}
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

/** A clear "Read in: English | Français" choice; it sets the site language, so labels and article stay in sync. */
function LangSwitch() {
  const { t, lang, setLang } = useI18n()
  const options: { value: Lang; label: string }[] = [
    { value: 'en', label: 'English' },
    { value: 'fr', label: 'Français' },
  ]
  return (
    <div className={s.langSwitch} role="group" aria-label={t.blog.readIn}>
      <Languages size={16} aria-hidden="true" />
      <span className={s.langSwitchLabel}>{t.blog.readIn}</span>
      {options.map((o) => (
        <button key={o.value} type="button" lang={o.value} aria-pressed={lang === o.value} onClick={() => setLang(o.value)}>
          {o.label}
        </button>
      ))}
    </div>
  )
}

export function BlogPost() {
  const { slug = '' } = useParams()
  const { t, lang } = useI18n()
  const post = getPost(slug, lang)

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
      {post.cover && <meta name="share-image" content={post.cover} data-alt={post.coverAlt} />}
      <div className={`container ${s.postWrap}`}>
        <Link to="/blog" className={s.back} lang={lang}>
          <ArrowLeft size={18} aria-hidden="true" />
          {t.blog.title}
        </Link>
        <header className={s.postHeader}>
          <div lang={lang}>
            {post.languages.length > 1 ? <LangSwitch /> : post.lang !== lang && <p className={s.untranslated}>{t.blog.untranslated}</p>}
          </div>
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
          {post.cover && <img className={s.cover} src={post.cover} alt={post.coverAlt} width={1600} height={900} />}
        </header>
        {/* Posts are Markdown files Assim writes himself (src/content/blog), rendered at build time. */}
        <div className={s.prose}>
          {post.blocks.map((block, i) => (
            <PostBlock key={i} block={block} />
          ))}
        </div>
      </div>
    </article>
  )
}

function PostBlock({ block }: { block: Block }) {
  if (block.type === 'md') return <div className={s.md} dangerouslySetInnerHTML={{ __html: block.html }} />
  if (block.type === 'anim') return <BlogAnim id={block.id} />
  if (block.type === 'side') {
    return (
      <aside className={s.sideGif}>
        <SideAnim id={block.id} />
      </aside>
    )
  }
  if (block.type === 'gif') {
    if (block.src) {
      return (
        <aside className={s.sideGif}>
          <img src={block.src} alt={block.alt} loading="lazy" />
        </aside>
      )
    }
    // Not chosen yet: a visible slot with the mood and a GIPHY search, so the author can pick one.
    return (
      <aside className={`${s.sideGif} ${s.slot}`} aria-label="GIF placeholder">
        <Film size={20} aria-hidden="true" />
        <span>{block.mood}</span>
        <a href={`https://giphy.com/search/${encodeURIComponent(block.query)}`} target="_blank" rel="noopener noreferrer">
          <Search size={13} aria-hidden="true" /> GIPHY: “{block.query}”
        </a>
      </aside>
    )
  }
  if (block.src) {
    return (
      <figure className={s.rec}>
        <video src={block.src} autoPlay muted loop playsInline />
        {block.text && <figcaption>{block.text}</figcaption>}
      </figure>
    )
  }
  return (
    <div className={`${s.rec} ${s.slot}`} aria-label="Screen recording placeholder">
      <Video size={22} aria-hidden="true" />
      <span>Screen recording to add: {block.text}</span>
    </div>
  )
}
