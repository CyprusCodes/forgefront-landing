import { resolve } from 'node:path'
import { defineConfig, type Plugin } from 'vite'
import { renderContact } from './src/pages/contact'
import { renderLanding } from './src/pages/landing'
import { renderNotFound, renderPrivacy } from './src/pages/simple'

const pages: Record<string, () => string> = {
  'index.html': renderLanding,
  'contact/index.html': renderContact,
  'privacy/index.html': renderPrivacy,
  '404.html': renderNotFound,
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
      return render ? html.replace('<div id="app"></div>', `<div id="app">${render()}</div>`) : html
    },
  }
}

export default defineConfig({
  plugins: [prerender()],
  build: {
    rolldownOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        contact: resolve(import.meta.dirname, 'contact/index.html'),
        privacy: resolve(import.meta.dirname, 'privacy/index.html'),
        notFound: resolve(import.meta.dirname, '404.html'),
      },
    },
  },
})
