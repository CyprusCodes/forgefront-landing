import { contact, site } from '../content/index.ts'
import { footer, header, paths } from './layout.ts'


type FieldOptions = {
  id: string
  label: string
  type?: string
  required?: boolean
  autocomplete?: string
  options?: string[]
  hint?: string
  wide?: boolean
  textarea?: boolean
}

function field(o: FieldOptions) {
  const f = contact.form
  const req = o.required ? ' required aria-required="true"' : ''
  const desc = [o.hint ? `${o.id}-hint` : '', `${o.id}-error`].filter(Boolean).join(' ')
  const attrs = `id="${o.id}" name="${o.id}"${req} aria-describedby="${desc}"${o.autocomplete ? ` autocomplete="${o.autocomplete}"` : ''}`
  let control: string
  if (o.options) {
    control = `<select ${attrs}><option value="">${f.select}</option>${o.options.map(v => `<option>${v}</option>`).join('')}</select>`
  } else if (o.textarea) {
    control = `<textarea ${attrs} rows="4"></textarea>`
  } else {
    control = `<input ${attrs} type="${o.type ?? 'text'}">`
  }
  return `
    <div class="field${o.wide ? ' field-wide' : ''}">
      <label for="${o.id}">${o.label}${o.required ? '' : ` <small>(${f.optional})</small>`}</label>
      ${control}
      ${o.hint ? `<span class="hint" id="${o.id}-hint">${o.hint}</span>` : ''}
      <span class="error" id="${o.id}-error" aria-live="polite"></span>
    </div>
  `
}

export function fieldLabels(): Record<string, string> {
  const f = contact.form
  return {
  name: f.name, email: f.email, company: f.company,
  phone: f.phone, units: f.units, message: f.message,
  }
}

export function formMarkup() {
  const f = contact.form
  return `
    <form class="form-card" id="demo-form" novalidate>
      <div class="form-error" id="form-error" role="alert" hidden>${f.errors.summary}</div>
      <div class="hp" aria-hidden="true"><label>Website <input type="text" name="website" tabindex="-1" autocomplete="off"></label></div>
      <div class="fields">
        ${field({ id: 'name', label: f.name, required: true, autocomplete: 'name' })}
        ${field({ id: 'email', label: f.email, type: 'email', required: true, autocomplete: 'email' })}
        ${field({ id: 'company', label: f.company, required: true, autocomplete: 'organization' })}
        ${field({ id: 'phone', label: f.phone, type: 'tel', autocomplete: 'tel' })}
        ${field({ id: 'units', label: f.units, options: f.unitRanges, wide: true })}
        ${field({ id: 'message', label: f.message, hint: f.messageHint, textarea: true, wide: true })}
      </div>
      <div class="form-footer">
        <button class="button" type="submit">${f.submit}</button>
        <p>${f.privacy} <a href="${paths.privacy}">${f.privacyLink}</a></p>
      </div>
    </form>
  `
}

export function sentMarkup(viaMail: boolean) {
  const sentText = viaMail ? contact.sentMail : contact.sent
  return `
    <div class="form-card sent" id="sent" tabindex="-1">
      <h2>${sentText.title}</h2>
      <p>${sentText.body}</p>
      ${'fallback' in sentText ? `<p>${sentText.fallback} <a href="mailto:${site.email}">${site.email}</a>.</p>` : ''}
      <button class="button" type="button" id="edit-request">${sentText.again}</button>
    </div>
  `
}

export function renderContact() {
  return `
    ${header('contact')}
    <main id="main" tabindex="-1" class="contact-page">
      <div class="wrap contact-layout">
        <section class="contact-aside" aria-labelledby="contact-title">
          <h1 id="contact-title">${contact.title}</h1>
          <p class="lead">${contact.intro}</p>
          <div class="expect">
            <h2>${contact.expectTitle}</h2>
            <ol>${contact.expect.map(e => `<li>${e}</li>`).join('')}</ol>
          </div>
          <p class="direct-email">${contact.emailLabel} <a href="mailto:${site.email}">${site.email}</a></p>
        </section>
        <div id="form-slot">${formMarkup()}</div>
      </div>
    </main>
    ${footer()}
  `
}
