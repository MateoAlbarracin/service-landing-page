<template>
  <section id="trabajos" class="gallery section-padding">
    <div class="container">
      <div class="gallery-header" data-reveal>
        <span class="section-eyebrow">Portfolio</span>
        <h2 class="section-title">Mis Trabajos</h2>
        <p class="section-subtitle">
          Algunos de los trabajos realizados que demuestran la calidad y profesionalismo
          en cada proyecto.
        </p>
      </div>

      <div class="gallery-grid">
        <div
          v-for="(work, index) in works"
          :key="work.title"
          class="gallery-item"
          data-reveal="zoom"
          :data-reveal-delay="index * 120"
        >
          <img
            :src="work.image"
            :alt="work.title"
            class="gallery-item__image"
            loading="lazy"
          />
          <div class="gallery-item__overlay">
            <span class="gallery-item__tag" :class="`tag--${work.accent}`">{{ work.tag }}</span>
            <h3 class="gallery-item__title">{{ work.title }}</h3>
            <p class="gallery-item__desc">{{ work.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import trabajoBomba from 'src/assets/trabajo-bomba.jpg'
import trabajoCalefon from 'src/assets/trabajo-calefon.jpg'
import trabajoCocina from 'src/assets/trabajo-cocina.jpg'
import trabajoInodoro from 'src/assets/trabajo-inodoro.jpg'

const works = [
  {
    image: trabajoBomba,
    title: 'Instalación de bomba presurizadora',
    description: 'Conexión completa de bomba Rowa con cañerías de polipropileno y llaves de paso.',
    tag: 'Plomería',
    accent: 'blue'
  },
  {
    image: trabajoCalefon,
    title: 'Service de calefón a gas',
    description: 'Mantenimiento y limpieza de quemadores e intercambiador para un funcionamiento seguro.',
    tag: 'Gas',
    accent: 'red'
  },
  {
    image: trabajoCocina,
    title: 'Service de cocina a gas',
    description: 'Desarmado y mantenimiento de cañerías internas, quemadores y válvulas de cocina.',
    tag: 'Gas',
    accent: 'red'
  },
  {
    image: trabajoInodoro,
    title: 'Instalación de inodoro',
    description: 'Colocación de inodoro nuevo con sistema de descarga y conexión a la red cloacal.',
    tag: 'Plomería',
    accent: 'blue'
  }
]
</script>

<style lang="scss" scoped>
.gallery {
  background-color: #ffffff;
  position: relative;
  overflow: hidden;

  // Decoración sutil
  &::before {
    content: '';
    position: absolute;
    top: 10%;
    left: -100px;
    width: 260px;
    height: 260px;
    background: radial-gradient(circle, rgba(26, 86, 219, 0.08), transparent 70%);
    filter: blur(40px);
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 10%;
    right: -100px;
    width: 260px;
    height: 260px;
    background: radial-gradient(circle, rgba(220, 38, 38, 0.08), transparent 70%);
    filter: blur(40px);
    pointer-events: none;
  }
}

.gallery-header {
  text-align: center;
}

.gallery-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  position: relative;

  @media (min-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 22px;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
  }
}

.gallery-item {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  aspect-ratio: 4/5;
  box-shadow: 0 12px 30px rgba(17, 17, 17, 0.1);
  transition: transform 0.4s ease, box-shadow 0.4s ease;

  .gallery-item__overlay {
    opacity: 1;

    @media (min-width: 769px) {
      opacity: 0;
      transform: translateY(20px);
    }
  }

  @media (min-width: 769px) {
    &:hover {
      transform: translateY(-8px);
      box-shadow: 0 24px 60px rgba(17, 17, 17, 0.2);
    }

    &:hover .gallery-item__overlay {
      opacity: 1;
      transform: translateY(0);
    }

    &:hover .gallery-item__image {
      transform: scale(1.08);
    }
  }

  @media (min-width: 1024px) {
    aspect-ratio: 3/4;
  }
}

.gallery-item__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
}

.gallery-item__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(17, 17, 17, 0.95) 0%,
    rgba(17, 17, 17, 0.65) 35%,
    rgba(17, 17, 17, 0.15) 65%,
    transparent 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 18px;
  transition: opacity 0.4s ease, transform 0.4s ease;

  @media (min-width: 769px) {
    padding: 24px;
  }
}

.gallery-item__tag {
  display: inline-block;
  color: white;
  padding: 4px 12px;
  border-radius: 999px;
  font-size: 0.68rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 10px;
  width: fit-content;
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);

  &.tag--blue {
    background-color: rgba(26, 86, 219, 0.95);
  }

  &.tag--red {
    background-color: rgba(220, 38, 38, 0.95);
  }
}

.gallery-item__title {
  color: #ffffff;
  font-size: 1.02rem;
  font-weight: 700;
  margin-bottom: 4px;
  line-height: 1.3;

  @media (min-width: 769px) {
    font-size: 1.15rem;
    margin-bottom: 6px;
  }
}

.gallery-item__desc {
  color: rgba(255, 255, 255, 0.85);
  font-size: 0.78rem;
  margin: 0;
  line-height: 1.5;

  @media (min-width: 769px) {
    font-size: 0.88rem;
  }
}
</style>
