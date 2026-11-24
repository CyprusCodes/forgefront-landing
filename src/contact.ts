import { contact, site, getLocale } from './content/index.ts'
import { fieldLabels, formMarkup, sentMarkup } from './pages/contact.ts'
import { initMenu } from './ui.ts'

// Markup is pre-rendered into contact/index.html by the prerender plugin in
// vite.config.ts. This file only adds validation and submission.

const errors = contact.form.errors
type Control = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement

function isControl(el: unknown): el is Control {
  return el instanceof HTMLInputElement || el instanceof HTMLSelectElement || el instanceof HTMLTextAreaElement
}

// Sends the lead to Campa as well. Errors are ignored so the visitor never notices.
function sendToCampa(form: HTMLFormElement) {
  const url = form.dataset.campaWebhook
  const field = (n: string) => form.elements.namedItem(n) as HTMLInputElement | null
  if (!url || field('website')?.value) return // honeypot filled: do not send
  const value = (n: string) => field(n)?.value.trim() || undefined
  fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: value('name'),
      email: value('email'),
      phone: value('phone'),
    }),
    keepalive: true,
  }).catch(() => {})
}

function validate(form: HTMLFormElement) {
  let firstInvalid: Control | null = null
  for (const el of Array.from(form.elements)) {
    if (!isControl(el)) continue
    el.value = el.value.trim()
    let message = ''
    if (el.required && !el.value) message = errors.required
    else if (el.type === 'email' && el.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(el.value)) message = errors.email
    const error = form.querySelector<HTMLElement>(`#${el.id}-error`)
    if (error) error.textContent = message
    el.setAttribute('aria-invalid', String(Boolean(message)))
    if (message && !firstInvalid) firstInvalid = el
  }
  return firstInvalid
}

function buildMailto(data: FormData) {
  const company = String(data.get('company') ?? '')
  const lines = Object.entries(fieldLabels())
    .map(([key, label]) => [label, String(data.get(key) ?? '').trim()] as const)
    .filter(([, value]) => value)
    .map(([label, value]) => `${label}: ${value}`)
  const subject = `${getLocale() === 'tr' ? 'Demo talebi' : 'Demo request'} – ${company}`
  const greeting = getLocale() === 'tr' ? 'Merhaba ForgeFront ekibi,\n\nDemo talep etmek istiyorum.' : 'Hello ForgeFront team,\n\nI would like to request a demo.'
  const body = `${greeting}\n\n${lines.join('\n')}\n`
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

function bindForm(saved?: FormData) {
  const form = document.querySelector<HTMLFormElement>('#demo-form')
  if (!form) return
  const summary = form.querySelector<HTMLElement>('#form-error')!
  summary.tabIndex = -1

  if (saved) {
    for (const [key, value] of saved.entries()) {
      const el = form.elements.namedItem(key)
      if (isControl(el)) el.value = String(value)
    }
  }

  form.addEventListener('input', e => {
    const el = e.target
    if (!isControl(el) || el.getAttribute('aria-invalid') !== 'true') return
    el.setAttribute('aria-invalid', 'false')
    const error = form.querySelector<HTMLElement>(`#${el.id}-error`)
    if (error) error.textContent = ''
    if (!form.querySelector('[aria-invalid="true"]')) summary.hidden = true
  })

  form.addEventListener('submit', async e => {
    e.preventDefault()
    const invalid = validate(form)
    summary.hidden = !invalid
    summary.textContent = contact.form.errors.summary
    if (invalid) {
      invalid.focus()
      return
    }
    // Campa runs next to the normal submission and never blocks or breaks it.
    sendToCampa(form)

    const data = new FormData(form)
    const viaMail = !site.formEndpoint

    if (viaMail) {
      window.location.href = buildMailto(data)
    } else {
      const button = form.querySelector<HTMLButtonElement>('button[type="submit"]')!
      button.disabled = true
      button.textContent = contact.form.sending
      try {
        const body = new URLSearchParams()
        for (const [key, value] of data.entries()) body.append(key, String(value))
        body.append('page', location.href)
        // Apps Script does not send CORS headers for every response, so the
        // request is sent as a simple form post and treated as delivered.
        await fetch(site.formEndpoint, { method: 'POST', mode: 'no-cors', body })
      } catch {
        button.disabled = false
        button.textContent = contact.form.submit
        summary.innerHTML = `${contact.form.errors.send} <a href="mailto:${site.email}">${site.email}</a>.`
        summary.hidden = false
        summary.focus()
        return
      }
    }

    const slot = document.querySelector<HTMLElement>('#form-slot')!
    slot.innerHTML = sentMarkup(viaMail)
    slot.querySelector<HTMLElement>('#sent')!.focus()
    slot.querySelector('#edit-request')!.addEventListener('click', () => {
      slot.innerHTML = formMarkup()
      bindForm(viaMail ? data : undefined)
    })
  })
}

initMenu()
bindForm()
