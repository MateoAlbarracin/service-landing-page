import { onMounted, onBeforeUnmount } from 'vue'

/**
 * Aplica animaciones de entrada a los elementos con el atributo [data-reveal]
 * cuando entran en el viewport. Admite variantes via data-reveal="up|left|right|zoom"
 * y un retraso opcional con data-reveal-delay="200" (ms).
 */
export function useScrollReveal(options = {}) {
  const { threshold = 0.15, rootMargin = '0px 0px -60px 0px' } = options
  let observer

  onMounted(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      document.querySelectorAll('[data-reveal]').forEach((el) => el.classList.add('is-revealed'))
      return
    }

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target
            const delay = el.dataset.revealDelay
            if (delay) el.style.transitionDelay = `${delay}ms`
            el.classList.add('is-revealed')
            observer.unobserve(el)
          }
        })
      },
      { threshold, rootMargin }
    )

    document.querySelectorAll('[data-reveal]').forEach((el) => observer.observe(el))
  })

  onBeforeUnmount(() => {
    observer?.disconnect()
  })
}
