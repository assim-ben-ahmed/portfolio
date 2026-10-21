// Exports cv-en.html / cv-fr.html to the A4 PDFs the site serves (assets/cv/).
// Run: node cv-source/build-cv.mjs   (needs Google Chrome, like the pre-render; override with CHROME_PATH)
import { chromium } from 'playwright-core'
import { fileURLToPath, pathToFileURL } from 'node:url'
import path from 'node:path'

const here = path.dirname(fileURLToPath(import.meta.url))
const out = path.resolve(here, '../assets/cv')

const browser = await chromium.launch(
  process.env.CHROME_PATH ? { executablePath: process.env.CHROME_PATH } : { channel: 'chrome' },
)
const page = await browser.newPage()
for (const lang of ['en', 'fr']) {
  await page.goto(pathToFileURL(path.join(here, `cv-${lang}.html`)).href)
  await page.evaluate(() => document.fonts.ready)
  const file = path.join(out, `assim-ben-ahmed-cv-${lang}.pdf`)
  await page.pdf({ path: file, format: 'A4', printBackground: true, preferCSSPageSize: true, tagged: true })
  console.log(`${lang}: ${file}`)
}
await browser.close()
