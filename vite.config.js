import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { imagetools } from 'vite-imagetools'

export default defineConfig({
  plugins: [
    vue(),
    // Convierte TODAS las imágenes importadas a WebP comprimido en el build,
    // sin tocar imports ni templates. `include` con (\?.*)? hace que también
    // procese los imports sin query (por defecto solo procesa los que tienen ?).
    imagetools({
      include: /\.(jpe?g|png|webp|gif|tiff?)(\?.*)?$/,
      defaultDirectives: () => new URLSearchParams({ format: 'webp', quality: '75' })
    })
  ],
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
