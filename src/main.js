import { ViteSSG } from 'vite-ssg'

// Fuentes de íconos (paquetes de CSS independientes, no dependen del core de Quasar).
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/fontawesome-v6/fontawesome-v6.css'
import './css/app.scss'

import App from './App.vue'
import AppIcon from './components/AppIcon.vue'
import { routes, scrollBehavior } from './router'

// ViteSSG genera el HTML estático en build e hidrata en el cliente.
export const createApp = ViteSSG(
  App,
  { routes, scrollBehavior },
  ({ app }) => {
    app.component('AppIcon', AppIcon)
  }
)
