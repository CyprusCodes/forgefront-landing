import { withLocale } from './src/content/index.ts'
import { resolve } from 'node:path'
import { defineConfig, type Plugin } from 'vite'
import { renderContact } from './src/pages/contact.ts'
import { renderLanding, renderProduct, renderAgencies } from './src/pages/landing.ts'
import { renderNotFound, renderPrivacy } from './src/pages/simple.ts'

const pages: Record<string, () => string> = {
  'index.html': renderLanding,
  'product/index.html': renderProduct,
  'agencies/index.html': renderAgencies,
  'contact/index.html': renderContact,
  'privacy/index.html': renderPrivacy,
  '404.html': renderNotFound,
  'tr/index.html': renderLanding,
  'tr/product/index.html': renderProduct,
  'tr/agencies/index.html': renderAgencies,
  'tr/contact/index.html': renderContact,
  'tr/privacy/index.html': renderPrivacy,
  'tr/404.html': renderNotFound,
}

// Writes each page's markup into its HTML file, in dev and in the build, so
// the content is in the HTML search engines and link previews receive.
// Edits under src/pages or src/content restart the dev server automatically.
function prerender(): Plugin {
  return {
    name: 'forgefront-prerender',
    transformIndexHtml(html, ctx) {
      const key = ctx.path.replace(/^\//, '')
      const render = pages[key]
      const locale = key.startsWith('tr/') ? 'tr' : 'en'
      return render ? html.replace('<div id="app"></div>', `<div id="app">${withLocale(locale, ctx.path.replace(/index\.html$/, ''), render)}</div>`) : html
    },
  }
}

export default defineConfig({
  plugins: [prerender()],
  build: {
    rolldownOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        trHome: resolve(import.meta.dirname, 'tr/index.html'),
        trProduct: resolve(import.meta.dirname, 'tr/product/index.html'),
        trAgencies: resolve(import.meta.dirname, 'tr/agencies/index.html'),
        trContact: resolve(import.meta.dirname, 'tr/contact/index.html'),
        trPrivacy: resolve(import.meta.dirname, 'tr/privacy/index.html'),
        trNotFound: resolve(import.meta.dirname, 'tr/404.html'),
        product: resolve(import.meta.dirname, 'product/index.html'),
        agencies: resolve(import.meta.dirname, 'agencies/index.html'),
        contact: resolve(import.meta.dirname, 'contact/index.html'),
        privacy: resolve(import.meta.dirname, 'privacy/index.html'),
        notFound: resolve(import.meta.dirname, '404.html'),
      },
    },
  },
})
