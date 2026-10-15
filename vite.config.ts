import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { imagetools } from 'vite-imagetools'
import { readFileSync } from 'node:fs'

// `?pic` on an image import → WebP + JPG at 3 widths (768 fits phones at ~2x), returned as a <picture>-ready object.
export default defineConfig({
  base: '/portfolio/',
  plugins: [
    react(),
    imagetools({
      defaultDirectives: (url) =>
        url.searchParams.has('pic')
          ? new URLSearchParams('w=480;768;960&format=webp;jpg&as=picture')
          : new URLSearchParams(),
    }),
    // Preload the two main fonts so they download with the CSS. (Each page's main photo is preloaded by
    // scripts/prerender.mjs.)
    {
      name: 'preload-critical',
      apply: 'build',
      transformIndexHtml: {
        order: 'post',
        handler(_html, ctx) {
          const files = Object.values(ctx.bundle ?? {})
          const base = '/portfolio/'
          const fonts = files.filter((f) => f.type === 'asset' && /^assets\/(inter|space-grotesk)-[\w-]+\.woff2$/.test(f.fileName))
          const tags: { tag: string; attrs: Record<string, string>; injectTo: 'head' }[] = fonts.map((f) => ({
            tag: 'link',
            attrs: { rel: 'preload', as: 'font', type: 'font/woff2', href: base + f.fileName, crossorigin: '' },
            injectTo: 'head',
          }))
          return tags
        },
      },
    },
    // Share image at a stable URL (/portfolio/og-image.jpg) for the Open Graph tags in index.html.
    {
      name: 'og-image',
      apply: 'build',
      generateBundle() {
        this.emitFile({
          type: 'asset',
          fileName: 'og-image.jpg',
          source: readFileSync('assets/images/og/og-image.jpg'),
        })
      },
    },
  ],
})
