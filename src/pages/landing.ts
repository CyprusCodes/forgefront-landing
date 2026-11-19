import { common, landing, site } from '../content/en'
import { footer, header, paths } from './layout'

// TODO: replace this mock with a real product screenshot (reservations list).
function preview() {
  const p = landing.preview
  const d = p.detail
  const pct = Math.round((d.paid / d.total) * 100)
  const item = (name: string) => `<span class="app-item">${name}</span>`
  const tabs = p.tabs.map((t, i) => `
    <button type="button" role="tab" class="app-item" id="tab-${t.id}" aria-controls="panel-${t.id}"
      aria-selected="${i === 0}" tabindex="${i === 0 ? 0 : -1}">${t.name}${t.badge ? `<b>${t.badge}</b>` : ''}</button>`).join('')
  const panels = p.tabs.map((t, i) => `
    <div class="app-panel" role="tabpanel" id="panel-${t.id}" aria-labelledby="tab-${t.id}"${i === 0 ? '' : ' hidden'}>
      <div class="app-top"><strong>${t.name}</strong><span class="app-action">${t.action}</span></div>
      <div class="app-chips">${p.chips.map((c, n) => `<span${n === 0 ? ' class="on"' : ''}>${c}</span>`).join('')}</div>
      <div class="app-kpis">
        ${p.kpis.map(k => `<div><span>${k.label}</span><strong class="num">${k.value}</strong><em class="tone-${k.tone}">${k.note}</em></div>`).join('')}
      </div>
      <table>
        <thead><tr>${t.columns.map(c => `<th scope="col">${c}</th>`).join('')}</tr></thead>
        <tbody>
          ${t.rows.map(r => `
            <tr${'selected' in r && r.selected ? ' class="is-selected"' : ''}>
              <td>${r.cells[0]}</td>
              <td>${r.cells[1]}</td>
              <td class="num">${r.cells[2]}</td>
              <td class="app-agent">${r.cells[3]}</td>
              <td><span class="status status-${r.tone}">${r.status}</span></td>
            </tr>`).join('')}
        </tbody>
      </table>
    </div>`).join('')
  return `
    <figure class="app" aria-label="${p.label}">
      <div class="app-side">
        <div class="app-ws"><i><img src="${paths.mark}" alt=""></i><span>${p.workspace}<small>${p.workspaceSub}</small></span></div>
        ${p.navBefore.map(item).join('')}
        <div role="tablist" aria-orientation="vertical" aria-label="${p.workspace}">${tabs}</div>
        <span class="app-group">${p.financeLabel}</span>
        ${p.navAfter.map(item).join('')}
      </div>
      <div class="app-main">${panels}</div>
      <aside class="app-detail" aria-label="${d.unit}">
        <strong class="app-unit">${d.unit}</strong>
        <span class="app-facts">${d.facts}</span>
        <span class="status status-ok">${d.status}</span>
        <dl>${d.rows.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join('')}</dl>
        <div class="app-plan">
          <div><span>${d.planLabel}</span><strong>${d.paid} of ${d.total}</strong></div>
          <div class="plan-track" aria-hidden="true"><span style="width:${pct}%"></span></div>
        </div>
        <ol class="app-inst">${d.instalments.map(x => `<li class="is-${x.state}"><span>${x.name}</span><span>${x.date}</span></li>`).join('')}</ol>
        <p class="app-reminder">${d.reminder}</p>
      </aside>
    </figure>
  `
}

// TODO: replace with a real "Ask your data" screenshot when available.
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

// TODO: add product screenshots to the workflow steps and the reporting feature.
export function renderLanding() {
  const { hero, problem, workflow, features, proof, cta } = landing
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
          ${preview()}
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

      <section class="workflow" id="workflow" aria-labelledby="workflow-title">
        <div class="wrap">
          <div class="section-head">
            <h2 id="workflow-title">${workflow.title}</h2>
            <p>${workflow.intro}</p>
          </div>
          <ol class="steps">
            ${workflow.steps.map(s => `<li><h3>${s.title}</h3><p>${s.detail}</p></li>`).join('')}
          </ol>
        </div>
      </section>

      <section class="features" id="features" aria-labelledby="features-title">
        <div class="wrap split split-top">
          <div class="features-intro">
            <h2 id="features-title">${features.title}</h2>
            ${ask()}
          </div>
          <ul class="feature-list" role="list">
            ${features.items.map((i, n) => `<li${n === features.items.length - 1 ? ' class="feature-linked"' : ''}><h3>${i.title}</h3><p>${i.detail}</p></li>`).join('')}
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
