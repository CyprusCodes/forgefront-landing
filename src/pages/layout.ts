import { common, site } from '../content/en'

// Pages are rendered to static HTML at build time, so paths are resolved here
// rather than through import.meta.env. Change this if the site moves to a sub-path.
const base = '/'

export const paths = {
  home: base,
  product: `${base}product/`,
  agencies: `${base}agencies/`,
  contact: `${base}contact/`,
  logo: `${base}forgefront.svg`,
  mark: `${base}forgefront-mark.svg`,
  privacy: `${base}privacy/`,
}

type Page = 'home' | 'product' | 'agencies' | 'contact' | 'other'

export function header(page: Page) {
  return `
    <a class="skip-link" href="#main">${common.skipLink}</a>
    <header class="site-header">
      <div class="wrap header-layout">
        <a class="brand" href="${paths.home}"><img src="${paths.logo}" alt="ForgeFront home" width="148" height="31"></a>
        <nav class="site-nav" id="site-nav" aria-label="${common.navLabel}">
          <a href="${paths.product}">${common.nav.workflow}</a>
          <a href="${paths.agencies}">${common.nav.agencies}</a>
          <a href="${paths.contact}"${page === 'contact' ? ' aria-current="page"' : ''}>${common.nav.contact}</a>
          <a class="nav-login" href="${site.appUrl}">${common.login}</a>
        </nav>
        <div class="header-actions">
          <a class="text-link header-login" href="${site.appUrl}">${common.login}</a>
          ${page === 'contact' ? '' : `<a class="button button-small" href="${paths.contact}">${common.demo}</a>`}
          <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="site-nav">
            <span class="menu-icon" aria-hidden="true"></span><span class="visually-hidden">${common.menu}</span>
          </button>
        </div>
      </div>
    </header>
  `
}

export function footer() {
  const year = new Date().getFullYear()
  return `
    <footer class="site-footer">
      <div class="wrap footer-layout">
        <div class="footer-brand">
          <a class="brand" href="${paths.home}"><img src="${paths.logo}" alt="ForgeFront home" width="148" height="31"></a>
          <p>${common.footer.tagline}</p>
          <p class="footer-write">${common.footer.write}<a href="mailto:${site.email}">${site.email}</a></p>
        </div>
        <div class="footer-cols">
          <div>
            <h2>${common.footer.product}</h2>
            <ul role="list">
              <li><a href="${paths.product}">${common.nav.workflow}</a></li>
              <li><a href="${paths.agencies}">${common.nav.agencies}</a></li>
              <li><a href="${paths.product}#features">${common.nav.features}</a></li>
              <li><a href="${site.appUrl}">${common.login}</a></li>
            </ul>
          </div>
          <div>
            <h2>${common.footer.company}</h2>
            <ul role="list">
              <li><a href="${paths.contact}">${common.nav.contact}</a></li>
              <li><a href="${paths.contact}">${common.demo}</a></li>
              <li><a href="${paths.privacy}">${common.footer.privacy}</a></li>
            </ul>
          </div>
        </div>
        <p class="footer-legal">© ${year} ForgeFront. ${common.footer.rights}</p>
      </div>
    </footer>
  `
}
