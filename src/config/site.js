// =============================================================================
// Datos del negocio — FUENTE ÚNICA DE VERDAD
// =============================================================================
// Completá los campos faltantes a medida que los tengas.
//
// REGLA DEL SITIO: si un dato está vacío ('', null o []), ese elemento NO se
// muestra en la web. Los componentes ya están preparados para mostrarlo
// automáticamente apenas lo completes acá. No hace falta tocar nada más.

export const site = {
  // --- Identidad ---
  name: 'Tomás Casas',
  role: 'Gasista Matriculado y Plomero',
  city: 'Córdoba Capital',

  // --- Contacto ---
  // Teléfono real (es el mismo del WhatsApp). Ej: '+54 351 123 4567'.
  // Al completarlo aparece el botón "Llamar" (tel:) en navbar, contacto y footer.
  phone: '',

  // Link de WhatsApp (link corto actual; no expone el número).
  whatsapp: 'https://wa.me/message/EVCEHGK4VV3GD1',

  // Email de contacto. Ej: 'contacto@gasistacba.com'.
  email: '',

  // --- Credenciales / confianza ---
  // Matrícula profesional. Ej: 'Mat. Nº 12345' o 'Mat. Enargas Nº 12345'.
  matricula: '',

  // Años de experiencia (número). Ej: 10.
  yearsExperience: null,

  // --- Cobertura ---
  // Barrios / zonas de Córdoba que cubrís.
  // Ej: ['Nueva Córdoba', 'Cerro de las Rosas', 'Alta Córdoba', 'Centro'].
  serviceAreas: [],

  // --- Redes y Google ---
  social: {
    facebook: 'https://www.facebook.com/share/18f7wJqdbM/?mibextid=wwXIfr',
    instagram: 'https://www.instagram.com/gasistacba?igsh=MW1sano3ZnVrMzlsZw%3D%3D&utm_source=qr'
  },

  // Link para que los clientes dejen reseñas (lo da el panel de Google Business).
  googleReviewUrl: '',

  // URL pública de la ficha de Google, cuando exista.
  googleBusinessUrl: ''
}

// Link tel: derivado del teléfono (deja solo dígitos y "+"). Vacío si no hay teléfono.
export const phoneHref = site.phone
  ? `tel:${site.phone.replace(/[^\d+]/g, '')}`
  : ''

// Link mailto: derivado del email. Vacío si no hay email.
export const emailHref = site.email ? `mailto:${site.email}` : ''
