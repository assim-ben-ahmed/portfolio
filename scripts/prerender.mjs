// Pre-render every page of the built site to static HTML (runs after `vite build`, see package.json).
//
// Serves dist/ with `vite preview`, opens it in Chrome, follows every internal link from the home page and
// saves each page's rendered HTML as dist/<path>/index.html. Visitors (and search engines) get real content
// before any JavaScript runs; React then takes over (src/main.tsx). Pages are rendered in English with
// reduced motion, i.e. in their final, static state. Also writes dist/sitemap.xml from the pages found.
//
// Needs Google Chrome (installed on GitHub's ubuntu runners). Override with CHROME_PATH=/path/to/chrome.
import { mkdir, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { preview } from 'vite'
import { chromium } from 'playwright-core'

const SITE = 'https://assim-ben-ahmed.github.io/portfolio/'
const BASE = '/portfolio/'
const PORT = 4179
const origin = `http://localhost:${PORT}`

const server = await preview({ preview: { port: PORT, strictPort: true }, logLevel: 'warn' })
const browser = await chromium.launch({
  ...(process.env.CHROME_PATH ? { executablePath: process.env.CHROME_PATH } : { channel: 'chrome' }),
  // CI containers often can't use Chrome's sandbox; it's only rendering our own pages.
  args: process.env.CI ? ['--no-sandbox'] : [],
})
const context = await browser.newContext({ locale: 'en-US', reducedMotion: 'reduce', viewport: { width: 1280, height: 800 } })
await context.addInitScript(() => {
  window.__PRERENDER__ = true // App.tsx: skip warming up the other pages
})
const page = await context.newPage()
const errors = []
page.on('pageerror', (e) => errors.push(e.message))

const queue = [BASE]
const seen = new Set(queue)
const rendered = new Map() // path → html

while (queue.length) {
  const path = queue.shift()
  await page.goto(origin + path, { waitUntil: 'networkidle' })
  await page.evaluate(() => document.fonts.ready)
  await page.evaluate(findLcpImage)

  const { html, links } = await page.evaluate(
    ({ site, base, path }) => {
      const head = document.head
      // React's per-page <title>/<meta> are dropped again at startup (main.tsx), so they're never duplicated.
      head.querySelectorAll('title, meta[name="description"], meta[name="robots"]').forEach((n) => n.setAttribute('data-prerender-head', ''))
      const url = site + path.slice(base.length)
      const canonical = document.createElement('link')
      canonical.rel = 'canonical'
      canonical.href = url
      head.querySelector('meta[charset]').after(canonical) // early: the app loader reads it (deferAppScript)
      head.querySelector('meta[property="og:url"]')?.setAttribute('content', url)

      // Link previews (LinkedIn, WhatsApp…) use this page's own title and description, and a blog post's cover
      // when it declares one with <meta name="share-image">.
      const setMeta = (selector, value) => value && head.querySelector(selector)?.setAttribute('content', value)
      const description = [...head.querySelectorAll('meta[name="description"]')].pop()?.getAttribute('content')
      for (const sel of ['meta[property="og:title"]', 'meta[name="twitter:title"]']) setMeta(sel, document.title)
      for (const sel of ['meta[property="og:description"]', 'meta[name="twitter:description"]']) setMeta(sel, description)
      const share = head.querySelector('meta[name="share-image"]')
      if (share) {
        const image = site + share.getAttribute('content').slice(base.length)
        for (const sel of ['meta[property="og:image"]', 'meta[name="twitter:image"]']) setMeta(sel, image)
        setMeta('meta[property="og:image:width"]', '1600')
        setMeta('meta[property="og:image:height"]', '900')
        setMeta('meta[property="og:image:alt"]', share.getAttribute('data-alt'))
        setMeta('meta[property="og:type"]', 'article')
        share.setAttribute('data-prerender-head', '')
      }

      // Preload this page's main photo (largest image in the first screen, phone width) so it downloads with
      // the CSS instead of after the layout is known. Measured in a narrow viewport below.
      const hero = window.__lcpImage
      if (hero) {
        const link = document.createElement('link')
        link.rel = 'preload'
        link.as = 'image'
        link.type = 'image/webp'
        link.setAttribute('imagesrcset', hero.srcset)
        link.setAttribute('imagesizes', hero.sizes)
        link.setAttribute('fetchpriority', 'high')
        // After <meta name=viewport>: before it, Chrome sizes the preload for a 980px desktop layout.
        head.querySelector('meta[name="viewport"]').after(link)
        document.querySelector(`img[src="${hero.src}"]`)?.setAttribute('fetchpriority', 'high')
      }

      // Keep adjacent text nodes separate (as React's own server rendering does with <!-- -->), otherwise the
      // HTML parser merges them and hydration no longer matches React's first render.
      const walker = document.createTreeWalker(document.getElementById('root'), NodeFilter.SHOW_TEXT)
      const texts = []
      while (walker.nextNode()) texts.push(walker.currentNode)
      for (const t of texts) if (t.nextSibling?.nodeType === Node.TEXT_NODE) t.after(document.createComment(''))

      // <main>'s content sits in a <Suspense> boundary (Layout.tsx); mark it the way React's server rendering
      // does, so hydration finds the boundary.
      const main = document.getElementById('main')
      main.prepend(document.createComment('$'))
      main.append(document.createComment('/$'))

      const root = document.documentElement
      root.setAttribute('data-prerendered', '')
      root.setAttribute('lang', 'en')
      root.classList.remove('pr-hide')

      const links = [...document.querySelectorAll('a[href]')]
        .map((a) => new URL(a.href))
        .filter((u) => u.origin === location.origin && u.pathname.startsWith(base) && !/\.[a-z0-9]+$/i.test(u.pathname))
        .map((u) => (u.pathname.endsWith('/') ? u.pathname : u.pathname + '/'))
      return { html: '<!doctype html>\n' + root.outerHTML, links }
    },
    { site: SITE, base: BASE, path },
  )

  // Vite inserts lazily-loaded chunks' <link>s with absolute URLs; make them site-relative.
  rendered.set(path, deferAppScript(html.replaceAll(origin, '')))
  for (const link of links) {
    if (!seen.has(link)) {
      seen.add(link)
      queue.push(link)
    }
  }
}

await browser.close()

/** In the page: remember the largest <picture> image visible in a phone-sized first screen. */
async function findLcpImage() {
  const phone = { width: 412, height: 823 }
  const best = [...document.querySelectorAll('picture img')]
    .map((img) => {
      const r = img.getBoundingClientRect()
      // Scale the desktop layout's rect to a phone screen: anything starting in the first ~1.5 screens counts.
      const visible = r.top < phone.height * 1.5 && r.bottom > 0 && r.width > 0
      return { img, area: visible ? r.width * r.height : 0 }
    })
    .filter((x) => x.area > 0)
    .sort((a, b) => b.area - a.area)[0]
  const source = best?.img.parentElement.querySelector('source[type="image/webp"]')
  window.__lcpImage = source ? { srcset: source.getAttribute('srcset'), sizes: source.getAttribute('sizes'), src: best.img.getAttribute('src') } : null
}

/**
 * The pre-rendered page is complete without JavaScript, so English visitors get the app script only after the
 * page has loaded (text, photo and layout first; React takes over right after). French visitors keep it
 * immediate: their page stays hidden (`pr-hide`) until React renders the French version.
 */
function deferAppScript(html) {
  const entry = html.match(/<script type="module" crossorigin="" src="([^"]+)"><\/script>/)
  if (!entry) throw new Error('Pre-render: app entry <script> not found')
  const loader = `<script>
      (function (src) {
        function load() { var s = document.createElement('script'); s.type = 'module'; s.crossOrigin = ''; s.src = src; document.head.appendChild(s) }
        // HTML saved for another address (e.g. an unknown path redirected by 404.html): hide it, load now.
        var c = document.querySelector('link[rel="canonical"]'), trim = function (p) { return p.charAt(p.length - 1) === '/' ? p.slice(0, -1) : p }
        var redirected = location.search.charAt(1) === '/' // 404.html deep-link redirect, not restored yet
        if (redirected || (c && trim(new URL(c.href).pathname) !== trim(location.pathname))) document.documentElement.classList.add('pr-hide')
        if (document.documentElement.classList.contains('pr-hide') || document.readyState === 'complete') load()
        else addEventListener('load', load, { once: true })
      })(${JSON.stringify(entry[1])})
    </script>`
  return html
    .replace(entry[0], () => loader)
    .replace(/<link rel="modulepreload"[^>]*>/g, '') // fetched by the entry when it runs
}
await new Promise((resolve) => server.httpServer.close(resolve))

if (errors.length) {
  console.error('Pre-render failed — page errors:\n' + errors.join('\n'))
  process.exit(1)
}

for (const [path, html] of rendered) {
  const file = join('dist', path.slice(BASE.length), 'index.html')
  await mkdir(dirname(file), { recursive: true })
  await writeFile(file, html)
}

const urls = [...rendered.keys()].sort().map((p) => `  <url><loc>${SITE}${p.slice(BASE.length)}</loc></url>`)
await writeFile(
  'dist/sitemap.xml',
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`,
)
console.log(`Pre-rendered ${rendered.size} pages:\n` + [...rendered.keys()].map((p) => '  ' + p).join('\n'))
