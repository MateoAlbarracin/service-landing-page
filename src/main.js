import { createApp } from 'vue'
import { Quasar } from 'quasar'
import router from './router'

import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/fontawesome-v6/fontawesome-v6.css'
import 'quasar/src/css/index.sass'
import './css/app.scss'

import App from './App.vue'

const app = createApp(App)

app.use(Quasar, {
  plugins: {},
  config: {
    brand: {
      primary: '#1a56db',
      secondary: '#dc2626',
      accent: '#111111',
      dark: '#111111',
      positive: '#16a34a',
      negative: '#dc2626',
      info: '#1a56db',
      warning: '#f59e0b'
    }
  }
})

app.use(router)
app.mount('#app')
