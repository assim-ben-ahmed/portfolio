import { marked } from 'marked'

// Every `src/content/blog/*.md` is a post (files starting with `_` are ignored — see _TEMPLATE.md).
const files = import.meta.glob(['../content/blog/*.md', '!../content/blog/_*.md'], {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

export type BlogCategory = 'papers' | 'projects' | 'notes'
export const BLOG_CATEGORIES: BlogCategory[] = ['papers', 'projects', 'notes']

export type Post = {
  slug: string
  title: string
  date: string // YYYY-MM-DD
  tags: string[]
  lang: 'en' | 'fr'
  summary: string
  readingMinutes: number
  html: string
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

export const posts: Post[] = Object.entries(files)
  .map(([path, raw]) => {
    const { data, body } = parseFrontMatter(raw)
    const words = body.split(/\s+/).filter(Boolean).length
    return {
      slug: path.split('/').pop()!.replace(/\.md$/, ''),
      title: String(data.title ?? 'TODO — title'),
      date: String(data.date ?? ''),
      tags: (Array.isArray(data.tags) ? data.tags : data.tags ? [data.tags] : []).map((t) => t.toLowerCase()),
      lang: data.lang === 'fr' ? 'fr' : 'en',
      summary: String(data.summary ?? ''),
      readingMinutes: Math.max(1, Math.round(words / 200)),
      html: marked.parse(body, { async: false }) as string,
    } satisfies Post
  })
  .sort((a, b) => b.date.localeCompare(a.date))

export const getPost = (slug: string) => posts.find((p) => p.slug === slug)

export function formatDate(date: string, lang: 'en' | 'fr') {
  const d = new Date(date + 'T00:00:00')
  if (Number.isNaN(d.getTime())) return date
  return d.toLocaleDateString(lang === 'fr' ? 'fr-FR' : 'en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
}
