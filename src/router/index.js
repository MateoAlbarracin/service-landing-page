// vite-ssg construye el router internamente (memory-history en build, web-history en cliente).
// Por eso acá solo exportamos las rutas y el scrollBehavior.

export const routes = [
  {
    path: '/',
    component: () => import('../layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('../pages/IndexPage.vue') }
    ]
  }
]

export function scrollBehavior(to) {
  if (to.hash) {
    return { el: to.hash, behavior: 'smooth' }
  }
  return { top: 0 }
}
