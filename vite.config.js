import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      src: '/src'
    }
  },
  // Opciones de vite-ssg (las lee del config de Vite)
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
    // Sitio de una sola página: renderizamos solo la home y evitamos el
    // artefacto ".html" que genera la ruta hija vacía.
    includedRoutes: () => ['/']
  }
})
