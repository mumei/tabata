import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'

const home = await readFile(new URL('../dist/index.html', import.meta.url), 'utf8')
const notFound = await readFile(new URL('../dist/404.html', import.meta.url), 'utf8')

// Inspect the HTML sent to crawlers, without executing the app's JavaScript.
const bodyText = (html) =>
  html
    .split(/<body[^>]*>/i)[1]
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, '')
    .replace(/<[^>]*>/g, ' ')
    .replace(/\s+/g, ' ')

for (const text of ['お品書き', '200円', '390円', '群馬県前橋市上泉町49-2', '9:00〜15:00']) {
  assert.ok(bodyText(home).includes(text), `Home HTML is missing: ${text}`)
}

const robots = (html) => html.match(/<meta\b[^>]*name=["']robots["'][^>]*>/i)?.[0] ?? ''

assert.ok(!robots(home).includes('noindex'), 'Home page must be indexable')
assert.ok(robots(notFound).includes('noindex'), '404 page must have noindex')
assert.ok(
  bodyText(notFound).includes('ページが見つかりません'),
  '404 HTML must contain the error page',
)
assert.ok(!bodyText(notFound).includes('390円'), '404 HTML must not contain the home page')
assert.ok(!home.includes('src="/src/main.ts"'), 'Production HTML must use bundled scripts')
console.log('Static HTML verified: menu, prices, address, hours, and noindex 404')
