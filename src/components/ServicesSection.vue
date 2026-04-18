<template>
  <section id="servicios" class="services section-padding">
    <div class="container">
      <div class="services-header" data-reveal>
        <span class="section-eyebrow">Servicios</span>
        <h2 class="section-title">Soluciones integrales</h2>
        <p class="section-subtitle">
          Servicios profesionales de plomería y gas para hogares y
          comercios en toda la ciudad de Córdoba y alrededores.
        </p>
      </div>

      <div class="services-main-grid">
        <div
          v-for="(service, i) in mainServices"
          :key="service.title"
          class="service-card"
          :class="`service-card--${service.accent}`"
          data-reveal
          :data-reveal-delay="i * 150"
        >
          <div class="service-card__image-wrapper">
            <div class="service-card__icon" :class="`service-card__icon--${service.accent}`">
              <q-icon :name="service.icon" size="36px" color="white" />
            </div>
            <img
              :src="service.image"
              :alt="service.title"
              class="service-card__image"
              loading="lazy"
            />
            <div class="service-card__gradient" :class="`service-card__gradient--${service.accent}`"></div>
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
import plomeriaImg from 'src/assets/plomeria.jpg'
import gasistaImg from 'src/assets/gasista.jpg'

const mainServices = [
  {
    icon: 'plumbing',
    title: 'Plomería Completa',
    accent: 'blue',
    image: plomeriaImg,
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
    image: gasistaImg,
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
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -100px;
    right: -100px;
    width: 400px;
    height: 400px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(26, 86, 219, 0.08), transparent 70%);
    filter: blur(40px);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -100px;
    left: -100px;
    width: 400px;
    height: 400px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(220, 38, 38, 0.08), transparent 70%);
    filter: blur(40px);
  }
}

.services-header {
  position: relative;
  z-index: 1;
  text-align: center;
}

.services-main-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 28px;
  position: relative;
  z-index: 1;

  @media (min-width: 769px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 36px;
  }
}

.service-card {
  background: #ffffff;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 35px rgba(17, 17, 17, 0.08);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  position: relative;
  border: 1px solid rgba(17, 17, 17, 0.04);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 5px;
    background: linear-gradient(90deg, transparent, currentColor, transparent);
    opacity: 0.85;
  }

  &--blue {
    color: #1a56db;
  }

  &--red {
    color: #dc2626;
  }

  @media (min-width: 769px) {
    &:hover {
      transform: translateY(-10px);
      box-shadow: 0 28px 65px rgba(17, 17, 17, 0.16);
    }

    &:hover .service-card__image {
      transform: scale(1.08);
    }

    &:hover .service-card__icon {
      transform: rotate(-8deg) scale(1.08);
    }
  }
}

.service-card__image-wrapper {
  position: relative;
  overflow: hidden;
}

.service-card__icon {
  position: absolute;
  top: 16px;
  right: 16px;
  width: 58px;
  height: 58px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  transition: transform 0.4s ease;

  &--blue {
    background: linear-gradient(135deg, #1a56db, #3b82f6);
    box-shadow: 0 10px 30px rgba(26, 86, 219, 0.5);
  }

  &--red {
    background: linear-gradient(135deg, #dc2626, #ef4444);
    box-shadow: 0 10px 30px rgba(220, 38, 38, 0.5);
  }

  @media (min-width: 769px) {
    top: 20px;
    right: 20px;
    width: 66px;
    height: 66px;
  }
}

.service-card__image {
  width: 100%;
  height: 220px;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);

  @media (min-width: 480px) {
    height: 240px;
  }

  @media (min-width: 769px) {
    height: 260px;
  }
}

.service-card__gradient {
  position: absolute;
  inset: 0;
  pointer-events: none;

  &--blue {
    background: linear-gradient(180deg, transparent 60%, rgba(26, 86, 219, 0.25));
  }

  &--red {
    background: linear-gradient(180deg, transparent 60%, rgba(220, 38, 38, 0.25));
  }
}

.service-card__content {
  padding: 24px;

  @media (min-width: 769px) {
    padding: 32px;
  }
}

.service-card__title {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 10px;
  color: #111111;
  letter-spacing: -0.01em;

  @media (min-width: 769px) {
    font-size: 1.45rem;
    margin-bottom: 12px;
  }
}

.service-card__text {
  font-size: 0.92rem;
  color: #4b5563;
  line-height: 1.65;
  margin-bottom: 18px;

  @media (min-width: 769px) {
    font-size: 0.97rem;
    line-height: 1.75;
    margin-bottom: 22px;
  }
}

.service-card__list {
  list-style: none;
  padding: 0;
  margin: 0 0 24px;

  li {
    display: flex;
    align-items: center;
    padding: 7px 0;
    font-size: 0.88rem;
    color: #1f2937;
    transition: transform 0.25s ease;

    &:hover {
      transform: translateX(4px);
    }

    @media (min-width: 769px) {
      font-size: 0.93rem;
    }
  }
}

.service-card__cta {
  display: inline-flex;
  align-items: center;
  padding: 12px 28px;
  font-size: 0.78rem;
  width: 100%;
  justify-content: center;

  @media (min-width: 480px) {
    width: auto;
  }
}
</style>
