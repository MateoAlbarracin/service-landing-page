<script>
import { h } from 'vue'
import { site } from 'src/config/site'
import { faqs } from 'src/config/faq'

const URL = 'https://www.gasistacba.com/'

// Schema LocalBusiness (tipo Plumber). Solo incluye los campos que tienen dato:
// si no hay teléfono/email/zonas, no se emiten (nada de datos vacíos o falsos).
// NO se emite aggregateRating porque todavía no hay reseñas reales verificables.
function buildLocalBusiness() {
  const data = {
    '@type': 'Plumber',
    '@id': `${URL}#business`,
    name: site.name,
    url: URL,
    description:
      'Gasista matriculado y plomero en Córdoba Capital. Instalación y reparación de gas, detección de pérdidas, habilitaciones, service de calefones y cocinas, y plomería integral. Urgencias las 24 horas.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Córdoba',
      addressRegion: 'Córdoba',
      addressCountry: 'AR'
    },
    areaServed: site.serviceAreas.length
      ? ['Córdoba Capital', ...site.serviceAreas].map((name) => ({ '@type': 'Place', name }))
      : { '@type': 'City', name: 'Córdoba Capital' },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59'
    },
    founder: { '@type': 'Person', name: 'Tomás Casas' },
    sameAs: [site.social.facebook, site.social.instagram].filter(Boolean)
  }

  if (site.phone) data.telephone = site.phone
  if (site.email) data.email = site.email
  if (site.matricula) data.hasCredential = site.matricula

  return data
}

function buildFaqPage() {
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a }
    }))
  }
}

// Componente sin marcado visible: emite un <script type="application/ld+json">.
// Se usa render function porque Vue no permite <script> en el <template>.
export default {
  name: 'StructuredData',
  setup() {
    const json = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [buildLocalBusiness(), buildFaqPage()]
    })
    return () => h('script', { type: 'application/ld+json', innerHTML: json })
  }
}
</script>
