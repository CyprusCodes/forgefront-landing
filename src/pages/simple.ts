import { common, notFound, privacy } from '../content/en'
import { footer, header, paths } from './layout'

export function renderPrivacy() {
  return `
    ${header('other')}
    <main id="main" tabindex="-1" class="page">
      <article class="wrap prose">
        ${privacy.draft ? `<p class="draft-note">${privacy.draftNote}</p>` : ''}
        <h1>${privacy.title}</h1>
        <p class="updated">${privacy.updated}</p>
        ${privacy.sections.map(s => `
          <section>
            <h2>${s.title}</h2>
            ${s.body.map(p => `<p>${p}</p>`).join('')}
          </section>`).join('')}
      </article>
    </main>
    ${footer()}
  `
}

export function renderNotFound() {
  return `
    ${header('other')}
    <main id="main" tabindex="-1" class="page page-center">
      <div class="wrap">
        <p class="eyebrow">404</p>
        <h1>${notFound.title}</h1>
        <p class="lead">${notFound.body}</p>
        <div class="actions">
          <a class="button" href="${paths.home}">${notFound.home}</a>
          <a class="button button-ghost" href="${paths.contact}">${common.demo}</a>
        </div>
      </div>
    </main>
    ${footer()}
  `
}
