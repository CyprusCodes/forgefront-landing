import * as en from './en.ts'
import translations from './translations.ts'
export type Locale = 'en' | 'tr'

function translate<T>(value: T): T {
  if (typeof value === 'string') return (translations[value] ?? value) as T
  if (Array.isArray(value)) return value.map(translate) as T
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, translate(item)])) as T
  }
  return value
}

const tr = translate(en)
let locale: Locale = typeof document !== 'undefined' && document.documentElement.lang === 'tr' ? 'tr' : 'en'
let pagePath = typeof location !== 'undefined' ? location.pathname : '/'
export let { site, common, landing, contact, privacy, notFound } = locale === 'tr' ? tr : en

export function getLocale() { return locale }
export function languageUrl(target: Locale) {
  const path = pagePath.replace(/^\/tr(?=\/|$)/, '') || '/'
  return target === 'tr' ? '/tr' + path : path
}

// Rendering is synchronous. Restore the previous context after each page.
export function withLocale(language: Locale, path: string, render: () => string) {
  const previousLocale = locale
  const previousPath = pagePath
  function select(next: Locale) {
    locale = next
    ;({ site, common, landing, contact, privacy, notFound } = next === 'tr' ? tr : en)
  }
  select(language)
  pagePath = path
  try { return render() }
  finally { select(previousLocale); pagePath = previousPath }
}
