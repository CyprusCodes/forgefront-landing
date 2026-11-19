import { common, landing, site } from '../content/en'
import { footer, header, paths } from './layout'

type Shot = { src: string; width: number; height: number; alt: string }

const img = (shot: Shot, eager = false) =>
  `<img src="${shot.src}" width="${shot.width}" height="${shot.height}" alt="${shot.alt}"${eager ? ' fetchpriority="high"' : ' loading="lazy"'} decoding="async">`

const status = (tone: string, text: string) => `<span class="status status-${tone}">${text}</span>`

function ask() {
  const a = landing.features.ask
  return `
    <figure class="ask" aria-label="${a.label}">
      <div class="ask-query"><span>${a.query}</span><kbd>↵</kbd></div>
      <div class="ask-summary"><strong>${a.summary}</strong><span class="num">${a.total}</span></div>
      <ul role="list">
        ${a.rows.map(r => `
          <li>
            <span class="ask-unit">${r.unit}</span>
            <span>${r.item}</span>
            <span class="num">${r.amount}</span>
            <span class="ask-late">${r.late}</span>
          </li>`).join('')}
      </ul>
    </figure>
  `
}

function stepPanel(step: (typeof landing.workflow.steps)[number]) {
  if ('image' in step && step.image) return img(step.image)
  if ('plan' in step && step.plan) {
    // TODO: replace with a real payment plan screenshot when one is available.
    const pl = step.plan
    return `
      <div class="shot-head"><strong>${pl.title}</strong><span>${pl.summary}</span></div>
      <table>
        <thead><tr><th scope="col">Instalment</th><th scope="col">Due</th><th scope="col">Amount</th><th scope="col">Status</th></tr></thead>
        <tbody>${pl.rows.map(([n, d, amt, st, tone]) => `<tr><td class="strong">${n}</td><td>${d}</td><td class="num">${amt}</td><td>${status(tone, st)}</td></tr>`).join('')}</tbody>
      </table>`
  }
  return ''
}

function workflowSection() {
  const w = landing.workflow
  return `
    <section class="workflow" id="workflow" aria-labelledby="workflow-title">
      <div class="wrap">
        <div class="section-head">
          <h2 id="workflow-title">${w.title}</h2>
          <p>${w.intro}</p>
        </div>
        <div class="steps" role="tablist" aria-label="${w.title}">
          ${w.steps.map((st, i) => `
            <button type="button" role="tab" class="step" id="tab-wf-${st.id}" aria-controls="panel-wf-${st.id}"
              aria-selected="${i === 0}" tabindex="${i === 0 ? 0 : -1}">
              <span class="step-num">${String(i + 1).padStart(2, '0')}</span>
              <span class="step-title">${st.title}</span>
              <span class="step-detail">${st.detail}</span>
            </button>`).join('')}
        </div>
        <figure class="shot shot-dark" aria-label="${w.shotLabel}">
          ${w.steps.map((st, i) => `<div class="shot-panel${'image' in st ? ' shot-panel-img' : ''}" role="tabpanel" id="panel-wf-${st.id}" aria-labelledby="tab-wf-${st.id}"${i === 0 ? '' : ' hidden'}>${stepPanel(st)}</div>`).join('')}
        </figure>
      </div>
    </section>`
}

function showcase(id: string, data: { title: string; description: string; points: string[]; image: Shot }, tone: string) {
  return `
    <section class="showcase showcase-${tone}" id="${id}" aria-labelledby="${id}-title">
      <div class="wrap">
        <div class="showcase-text">
          <div>
            <h2 id="${id}-title">${data.title}</h2>
            <p class="section-text">${data.description}</p>
          </div>
          <ul class="checks" role="list">${data.points.map(pt => `<li>${pt}</li>`).join('')}</ul>
        </div>
        <figure class="shot shot-img">${img(data.image)}</figure>
      </div>
    </section>`
}

function afterSalesSection() {
  const a = landing.afterSales
  return `
    <section class="after-sales" aria-labelledby="after-title">
      <div class="wrap">
        <div class="section-head section-head-light">
          <h2 id="after-title">${a.title}</h2>
          <p>${a.intro}</p>
        </div>
        <ul class="cards" role="list">${a.items.map(it => `<li><h3>${it.title}</h3><p>${it.detail}</p></li>`).join('')}</ul>
        <figure class="shot shot-img after-shot">${img(a.image)}</figure>
      </div>
    </section>`
}

export function renderLanding() {
  const { hero, heroShot, problem, collections, agencies, features, proof, cta } = landing
  return `
    ${header('home')}
    <main id="main" tabindex="-1">
      <section class="hero" aria-labelledby="hero-title">
        <div class="wrap hero-layout">
          <div class="hero-copy">
            <p class="eyebrow">${hero.label}</p>
            <h1 id="hero-title">${hero.titleStart} <span class="accent">${hero.titleAccent}</span>.</h1>
            <p class="lead">${hero.description}</p>
            <div class="actions">
              <a class="button" href="${paths.contact}">${common.demo}</a>
              <a class="button button-ghost" href="#workflow">${hero.secondary}</a>
            </div>
          </div>
          <figure class="shot shot-img hero-shot">${img(heroShot, true)}</figure>
        </div>
      </section>

      <section class="problem" aria-labelledby="problem-title">
        <div class="wrap split">
          <div>
            <h2 id="problem-title">${problem.title}</h2>
            <p class="section-text">${problem.description}</p>
          </div>
          <ul class="effects" role="list">
            ${problem.effects.map(e => `<li>${e}</li>`).join('')}
          </ul>
        </div>
      </section>

      ${workflowSection()}
      ${showcase('collections', collections, 'light')}
      ${showcase('agencies', agencies, 'white')}
      ${afterSalesSection()}

      <section class="features" id="features" aria-labelledby="features-title">
        <div class="wrap split split-top">
          <div class="features-intro">
            <h2 id="features-title">${features.title}</h2>
            ${ask()}
          </div>
          <ul class="feature-list" role="list">
            ${features.items.map((i, n) => `<li${n === 0 ? ' class="feature-linked"' : ''}><h3>${i.title}</h3><p>${i.detail}</p></li>`).join('')}
          </ul>
        </div>
      </section>

      <section class="closing" aria-labelledby="cta-title">
        <div class="wrap">
          <div class="closing-card">
            <p class="proof"><strong>${proof.value}</strong> <span>${proof.label}</span></p>
            <div class="closing-copy">
              <h2 id="cta-title">${cta.title}</h2>
              <p class="section-text">${cta.description}</p>
              <div class="actions">
                <a class="button" href="${paths.contact}">${common.demo}</a>
                <span class="muted">${cta.or} <a href="mailto:${site.email}">${site.email}</a></span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    ${footer()}
  `
}
