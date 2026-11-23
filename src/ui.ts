import { common } from './content/index.ts'

// Small progressive enhancements shared by every page.

export function initMenu() {
  const toggle = document.querySelector<HTMLButtonElement>('.menu-toggle')
  const nav = document.querySelector<HTMLElement>('#site-nav')
  if (!toggle || !nav) return
  const setOpen = (open: boolean) => {
    toggle.setAttribute('aria-expanded', String(open))
    document.documentElement.classList.toggle('menu-open', open)
  }
  toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'))
  nav.addEventListener('click', e => {
    if ((e.target as HTMLElement).closest('a')) setOpen(false)
  })
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      setOpen(false)
      toggle.focus()
    }
  })
}

export function initTabs() {
  for (const list of document.querySelectorAll<HTMLElement>('[role="tablist"]')) {
    const tabs = Array.from(list.querySelectorAll<HTMLButtonElement>('[role="tab"]'))
    const select = (tab: HTMLButtonElement) => {
      for (const t of tabs) {
        const selected = t === tab
        t.setAttribute('aria-selected', String(selected))
        t.tabIndex = selected ? 0 : -1
        const panel = document.getElementById(t.getAttribute('aria-controls')!)
        if (panel) panel.hidden = !selected
      }
    }
    for (const tab of tabs) {
      tab.addEventListener('click', () => select(tab))
      tab.addEventListener('keydown', e => {
        const i = tabs.indexOf(tab)
        const forward = e.key === 'ArrowRight' || e.key === 'ArrowDown'
        const back = e.key === 'ArrowLeft' || e.key === 'ArrowUp'
        const next = forward ? tabs[(i + 1) % tabs.length] : back ? tabs[(i - 1 + tabs.length) % tabs.length] : null
        if (next) {
          e.preventDefault()
          select(next)
          next.focus()
        }
      })
    }
    // Links like /product/#wf-payments open that step.
    const fromHash = () => {
      const match = location.hash.match(/^#wf-([\w-]+)$/)
      const tab = match && tabs.find(t => t.id === `tab-wf-${match[1]}`)
      if (!tab) return
      select(tab)
      history.scrollRestoration = 'manual'
      requestAnimationFrame(() => {
        const top = list.getBoundingClientRect().top + scrollY - 160
        scrollTo({ top, behavior: 'instant' })
      })
    }
    if (document.readyState === 'complete') fromHash()
    else window.addEventListener('load', fromHash, { once: true })
    window.addEventListener('hashchange', fromHash)
  }
}

export function initScreenViewer() {
  const links = document.querySelectorAll<HTMLAnchorElement>('[data-screen]')
  if (!links.length) return

  const dialog = document.createElement('dialog')
  dialog.className = 'screen-dialog'
  dialog.setAttribute('aria-label', common.enlargeScreen)

  const close = document.createElement('button')
  close.className = 'screen-close'
  close.type = 'button'
  close.textContent = common.closeScreen

  const image = document.createElement('img')
  dialog.append(close, image)
  document.body.append(dialog)

  close.addEventListener('click', () => dialog.close())
  dialog.addEventListener('click', event => {
    if (event.target === dialog) dialog.close()
  })
  dialog.addEventListener('close', () => {
    document.documentElement.classList.remove('screen-open')
  })

  for (const link of links) {
    link.addEventListener('click', event => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return
      event.preventDefault()
      image.src = link.href
      image.alt = link.querySelector('img')?.alt ?? ''
      dialog.showModal()
      document.documentElement.classList.add('screen-open')
    })
  }
}

// Home page: show the screen for the step being hovered or focused.
export function initFlow() {
  const links = Array.from(document.querySelectorAll<HTMLAnchorElement>('[data-flow]'))
  const screens = Array.from(document.querySelectorAll<HTMLImageElement>('.flow-screen'))
  if (!links.length) return
  const show = (index: number) => {
    links.forEach((link, i) => link.parentElement?.classList.toggle('is-active', i === index))
    screens.forEach((img, i) => {
      img.classList.toggle('is-active', i === index)
      if (i === index) img.loading = 'eager'
    })
  }
  links.forEach((link, i) => {
    link.addEventListener('mouseenter', () => show(i))
    link.addEventListener('focus', () => show(i))
  })
}
