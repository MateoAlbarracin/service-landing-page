<template>
  <section id="servicios" class="services section-padding">
    <div class="container">
      <h2 class="section-title">Mis Servicios</h2>
      <p class="section-subtitle">
        Servicios profesionales de plomería y gas para hogares y
        comercios en toda la ciudad de Córdoba y alrededores.
      </p>

      <div class="services-main-grid">
        <div
          v-for="service in mainServices"
          :key="service.title"
          class="service-card"
          :class="`service-card--${service.accent}`"
        >
          <div class="service-card__image-wrapper">
            <div class="service-card__icon" :class="`service-card__icon--${service.accent}`">
              <q-icon :name="service.icon" size="40px" color="white" />
            </div>
            <img
              :src="service.image"
              :alt="service.title"
              class="service-card__image"
              loading="lazy"
            />
          </div>
          <div class="service-card__content">
            <h3 class="service-card__title">{{ service.title }}</h3>
            <p class="service-card__text">{{ service.description }}</p>
            <ul class="service-card__list">
              <li v-for="item in service.items" :key="item">
                <q-icon name="check_circle" :color="service.accent === 'blue' ? 'primary' : 'secondary'" size="18px" class="q-mr-xs" />
                {{ item }}
              </li>
            </ul>
            <a
              href="https://wa.me/message/EVCEHGK4VV3GD1"
              target="_blank"
              rel="noopener"
              class="btn-primary service-card__cta"
            >
              <q-icon name="fab fa-whatsapp" class="q-mr-xs" />
              Consultar
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const mainServices = [
  {
    icon: 'plumbing',
    title: 'Plomería Completa',
    accent: 'blue',
    image: '/src/assets/plomeria.jpg',
    description:
      'Reparación de tuberías, desagües, cañerías, grifería, sanitarios y más. Soluciones efectivas para problemas de agua y saneamiento.',
    items: [
      'Reparación de cañerías y tuberías',
      'Destapación de desagües',
      'Instalación de sanitarios',
      'Reparación de grifería',
      'Detección de pérdidas de agua'
    ]
  },
  {
    icon: 'local_fire_department',
    title: 'Gasista Matriculado',
    accent: 'red',
    image: '/src/assets/gasista.jpg',
    description:
      'Instalación y reparación de sistemas de gas. Certificaciones, inspecciones y mantenimiento preventivo para máxima seguridad.',
    items: [
      'Instalación de gas natural',
      'Conexión de artefactos a gas',
      'Certificaciones y habilitaciones',
      'Reparación de pérdidas de gas',
      'Mantenimiento preventivo'
    ]
  }
]
</script>

<style lang="scss" scoped>
.services {
  background-color: #f5f7fa;
}

.services-main-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;

  @media (min-width: 769px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 35px;
  }
}

.service-card {
  background: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.07);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-top: 4px solid transparent;

  &--blue {
    border-top-color: #1a56db;
  }

  &--red {
    border-top-color: #dc2626;
  }

  @media (min-width: 769px) {
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
    }
  }
}

.service-card__image-wrapper {
  position: relative;
}

.service-card__icon {
  position: absolute;
  top: 12px;
  right: 12px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;

  &--blue {
    background: linear-gradient(135deg, #1a56db, #3b82f6);
    box-shadow: 0 4px 15px rgba(26, 86, 219, 0.4);
  }

  &--red {
    background: linear-gradient(135deg, #dc2626, #ef4444);
    box-shadow: 0 4px 15px rgba(220, 38, 38, 0.4);
  }

  @media (min-width: 769px) {
    top: 15px;
    right: 15px;
    width: 55px;
    height: 55px;
  }
}

.service-card__image {
  width: 100%;
  height: 180px;
  object-fit: cover;

  @media (min-width: 480px) {
    height: 200px;
  }

  @media (min-width: 769px) {
    height: 220px;
  }
}

.service-card__content {
  padding: 20px;

  @media (min-width: 769px) {
    padding: 28px;
  }
}

.service-card__title {
  font-size: 1.15rem;
  font-weight: 700;
  margin-bottom: 10px;
  color: #111111;

  @media (min-width: 769px) {
    font-size: 1.3rem;
    margin-bottom: 12px;
  }
}

.service-card__text {
  font-size: 0.9rem;
  color: #4b5563;
  line-height: 1.6;
  margin-bottom: 16px;

  @media (min-width: 769px) {
    font-size: 0.95rem;
    line-height: 1.7;
    margin-bottom: 18px;
  }
}

.service-card__list {
  list-style: none;
  padding: 0;
  margin: 0 0 20px;

  li {
    display: flex;
    align-items: center;
    padding: 5px 0;
    font-size: 0.85rem;
    color: #1f2937;

    @media (min-width: 769px) {
      padding: 6px 0;
      font-size: 0.9rem;
    }
  }
}

.service-card__cta {
  display: inline-flex;
  align-items: center;
  padding: 10px 24px;
  font-size: 0.8rem;
  width: 100%;
  justify-content: center;

  @media (min-width: 480px) {
    width: auto;
  }
}
</style>
