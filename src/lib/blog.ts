import { marked } from 'marked'

// Every `src/content/blog/*.md` is a post (files starting with `_` are ignored — see _TEMPLATE.md).
// A translation sits next to it with a language suffix: `my-post.md` (English) + `my-post.fr.md` (French).
const files = import.meta.glob(['../content/blog/*.md', '!../content/blog/_*.md'], {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

// Media for a post lives next to it, in a folder named after the post: src/content/blog/<slug>/...
const media = import.meta.glob('../content/blog/*/*.{jpg,jpeg,png,webp,gif,mp4,webm}', {
  query: '?url',
  import: 'default',
  eager: true,
}) as Record<string, string>

/** "portfolio-analytics/cover.jpg" -> built URL; full http(s) URLs are returned as they are. */
export function mediaUrl(ref: string): string | undefined {
  if (/^https?:\/\//.test(ref)) return ref
  return media[`../content/blog/${ref.replace(/^\.?\//, '')}`]
}

export type BlogCategory = 'papers' | 'projects' | 'notes'
export const BLOG_CATEGORIES: BlogCategory[] = ['papers', 'projects', 'notes']

/**
 * A post body is a list of blocks: Markdown, plus the custom markers a line can hold on its own:
 *   [SIDE-GIF: funny | mood | search words]   reaction GIF placeholder (side column)
 *   [SIDE-GIF: <url or slug/file.gif> | alt]  the chosen GIF
 *   [ANIM: <id>]                              animated explainer (src/components/blog/Anims.tsx)
 *   [SIDE: <id>]                              small animated visual in the side column (same file)
 *   [REC: description] / [REC: <slug/file.mp4> | caption]   screen recording slot / the recording
 * `{{TEXT}}` anywhere in the Markdown shows as a highlighted to-do.
 */
export type Block =
  | { type: 'md'; html: string }
  | { type: 'gif'; src?: string; alt: string; mood: string; query: string }
  | { type: 'anim'; id: string }
  | { type: 'side'; id: string }
  | { type: 'rec'; src?: string; text: string }

export type Lang = 'en' | 'fr'

export type Post = {
  slug: string
  title: string
  date: string // YYYY-MM-DD
  tags: string[]
  lang: Lang
  languages: Lang[] // every language this post exists in
  summary: string
  readingMinutes: number
  cover?: string
  coverAlt: string
  blocks: Block[]
}

/** Minimal front-matter parser: `key: value` lines, `tags: [a, b]` lists, optional quotes. */
function parseFrontMatter(raw: string): { data: Record<string, string | string[]>; body: string } {
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/)
  if (!m) return { data: {}, body: raw }
  const data: Record<string, string | string[]> = {}
  for (const line of m[1].split(/\r?\n/)) {
    const kv = line.match(/^(\w+):\s*(.*)$/)
    if (!kv) continue
    const value = kv[2].trim()
    const unquote = (v: string) => v.replace(/^["']|["']$/g, '').trim()
    data[kv[1]] = value.startsWith('[')
      ? value.slice(1, -1).split(',').map(unquote).filter(Boolean)
      : unquote(value)
  }
  return { data, body: m[2] }
}

const MARKER = /^\[(SIDE-GIF|SIDE|ANIM|REC):\s*([\s\S]*)\]\s*$/
const isMedia = (s: string) => /^https?:\/\//.test(s) || /\.(gif|jpe?g|png|webp|mp4|webm)$/i.test(s)

function toBlocks(body: string): Block[] {
  const clean = body
    .replace(/<!--[\s\S]*?-->/g, '') // authoring notes never reach the page
    .replace(/^# .*\r?\n/m, '') // the title is already rendered from the front-matter
    .replace(/\{\{([\s\S]*?)\}\}/g, (_, t: string) => `<mark class="todo">${t.trim()}</mark>`)
  const blocks: Block[] = []
  let buffer: string[] = []
  const flush = () => {
    const text = buffer.join('\n').trim()
    if (text) blocks.push({ type: 'md', html: marked.parse(text, { async: false }) as string })
    buffer = []
  }
  for (const line of clean.split(/\r?\n/)) {
    const m = line.trim().match(MARKER)
    if (!m) {
      buffer.push(line)
      continue
    }
    flush()
    const parts = m[2].split('|').map((p) => p.trim().replace(/^"|"$/g, ''))
    if (m[1] === 'ANIM') blocks.push({ type: 'anim', id: parts[0].split(/\s/)[0] })
    else if (m[1] === 'SIDE') blocks.push({ type: 'side', id: parts[0].split(/\s/)[0] })
    else if (m[1] === 'REC') {
      blocks.push(isMedia(parts[0]) ? { type: 'rec', src: mediaUrl(parts[0]), text: parts[1] ?? '' } : { type: 'rec', text: m[2].trim() })
    } else if (isMedia(parts[0])) blocks.push({ type: 'gif', src: mediaUrl(parts[0]), alt: parts[1] ?? '', mood: '', query: '' })
    else blocks.push({ type: 'gif', alt: '', mood: parts[1] ?? parts[0], query: parts[2] ?? parts[1] ?? '' })
  }
  flush()
  return blocks
}

const versions: Post[] = Object.entries(files)
  .map(([path, raw]) => {
    const { data, body } = parseFrontMatter(raw)
    const file = path.split('/').pop()!.replace(/\.md$/, '')
    const suffix = file.match(/\.(en|fr)$/)?.[1] as Lang | undefined
    const prose = body.replace(/<!--[\s\S]*?-->/g, '').replace(/^\[(SIDE-GIF|SIDE|ANIM|REC):.*\]\s*$/gm, '')
    const words = prose.split(/\s+/).filter(Boolean).length
    const cover = data.cover ? mediaUrl(String(data.cover)) : undefined
    return {
      slug: file.replace(/\.(en|fr)$/, ''),
      title: String(data.title ?? 'TODO — title'),
      date: String(data.date ?? ''),
      tags: (Array.isArray(data.tags) ? data.tags : data.tags ? [data.tags] : []).map((t) => t.toLowerCase()),
      lang: suffix ?? (data.lang === 'fr' ? 'fr' : 'en'),
      languages: [],
      summary: String(data.summary ?? ''),
      readingMinutes: data.reading_time ? parseInt(String(data.reading_time), 10) || 1 : Math.max(1, Math.round(words / 200)),
      cover,
      coverAlt: String(data.cover_alt ?? ''),
      blocks: toBlocks(body),
    } satisfies Post
  })
  .sort((a, b) => b.date.localeCompare(a.date))

for (const v of versions) v.languages = versions.filter((o) => o.slug === v.slug).map((o) => o.lang).sort()

/** The post in the reader's language, or its other language when there is no translation. */
export const getPost = (slug: string, lang: Lang) =>
  versions.find((p) => p.slug === slug && p.lang === lang) ?? versions.find((p) => p.slug === slug)

/** One entry per post, in the reader's language when available, newest first. */
export const listPosts = (lang: Lang) =>
  [...new Set(versions.map((p) => p.slug))].map((slug) => getPost(slug, lang)!).sort((a, b) => b.date.localeCompare(a.date))

export function formatDate(date: string, lang: 'en' | 'fr') {
  const d = new Date(date + 'T00:00:00')
  if (Number.isNaN(d.getTime())) return date
  return d.toLocaleDateString(lang === 'fr' ? 'fr-FR' : 'en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
}
