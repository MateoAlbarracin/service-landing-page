<template>
  <section id="trabajos" class="gallery section-padding">
    <div class="container">
      <h2 class="section-title">Mis Trabajos</h2>
      <p class="section-subtitle">
        Algunos de los trabajos realizados que demuestran la calidad y profesionalismo
        en cada proyecto.
      </p>

      <div class="gallery-grid">
        <div
          v-for="(work, index) in works"
          :key="index"
          class="gallery-item"
        >
          <!-- TODO: Reemplazar con fotos reales de trabajos de Tomás -->
          <img
            :src="work.image"
            :alt="work.title"
            class="gallery-item__image"
            loading="lazy"
          />
          <div class="gallery-item__overlay">
            <span class="gallery-item__tag">{{ work.tag }}</span>
            <h3 class="gallery-item__title">{{ work.title }}</h3>
            <p class="gallery-item__desc">{{ work.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const works = [
  {
    image: 'https://via.placeholder.com/600x400?text=Trabajo+1',
    title: 'Instalación de cañerías',
    description: 'Instalación completa de cañerías en vivienda nueva',
    tag: 'Plomería'
  },
  {
    image: 'https://via.placeholder.com/600x400?text=Trabajo+2',
    title: 'Trabajos de gas',
    description: 'Habilitación y conexión de gas natural en departamento',
    tag: 'Gas'
  },
  {
    image: 'https://via.placeholder.com/600x400?text=Trabajo+3',
    title: 'Reparación de baño',
    description: 'Reparación completa de grifería y sanitarios',
    tag: 'Plomería'
  },
  {
    image: 'https://via.placeholder.com/600x400?text=Trabajo+4',
    title: 'Mantenimiento de calefón',
    description: 'Service y mantenimiento de calefón a gas',
    tag: 'Gas'
  }
]
</script>

<style lang="scss" scoped>
.gallery {
  background-color: #ffffff;
}

.gallery-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;

  @media (min-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  @media (min-width: 1024px) {
    gap: 24px;
  }
}

.gallery-item {
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  aspect-ratio: 3/2;

  .gallery-item__overlay {
    opacity: 1;

    @media (min-width: 769px) {
      opacity: 0;
    }
  }

  @media (min-width: 769px) {
    border-radius: 12px;

    &:hover .gallery-item__overlay {
      opacity: 1;
    }

    &:hover .gallery-item__image {
      transform: scale(1.05);
    }
  }
}

.gallery-item__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.gallery-item__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(17, 17, 17, 0.9) 0%,
    rgba(17, 17, 17, 0.3) 50%,
    transparent 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 16px;
  transition: opacity 0.3s ease;

  @media (min-width: 769px) {
    padding: 25px;
  }
}

.gallery-item__tag {
  display: inline-block;
  background-color: #dc2626;
  color: white;
  padding: 3px 10px;
  border-radius: 4px;
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 8px;
  width: fit-content;
}

.gallery-item__title {
  color: #ffffff;
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 3px;

  @media (min-width: 769px) {
    font-size: 1.2rem;
    margin-bottom: 5px;
  }
}

.gallery-item__desc {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.8rem;
  margin: 0;

  @media (min-width: 769px) {
    font-size: 0.9rem;
  }
}
</style>
