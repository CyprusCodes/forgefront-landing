import { initMenu, initTabs, initScreenViewer } from './ui'

// Page markup is pre-rendered into index.html by the prerender plugin in
// vite.config.ts (see src/pages/landing.ts). This only adds interactivity.
initMenu()
initTabs()

initScreenViewer()
