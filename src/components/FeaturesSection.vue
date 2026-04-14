<template>
  <section class="features">
    <div class="container">
      <div class="features-grid">
        <div
          v-for="feature in features"
          :key="feature.title"
          class="feature-card"
        >
          <div class="feature-icon" :class="`feature-icon--${feature.color}`">
            <q-icon :name="feature.icon" size="32px" color="white" />
          </div>
          <div>
            <h3 class="feature-title">{{ feature.title }}</h3>
            <p class="feature-text">{{ feature.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const features = [
  {
    icon: 'verified',
    title: 'Servicio Garantizado',
    text: 'Todos los trabajos cuentan con garantía. Tu satisfacción es mi prioridad.',
    color: 'blue'
  },
  {
    icon: 'schedule',
    title: 'Respuesta Rápida',
    text: 'Atención inmediata y tiempos de respuesta ágiles para resolver tu urgencia.',
    color: 'red'
  },
  {
    icon: 'workspace_premium',
    title: 'Gasista Matriculado',
    text: 'Profesional matriculado con años de experiencia comprobada en el rubro.',
    color: 'dark'
  }
]
</script>

<style lang="scss" scoped>
.features {
  padding: 40px 0;
  background-color: #ffffff;
  position: relative;
  z-index: 2;

  @media (min-width: 769px) {
    padding: 60px 0;
    margin-top: -40px;
  }
}

.features-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;

  @media (min-width: 600px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }

  @media (min-width: 1024px) {
    gap: 30px;
  }
}

.feature-card {
  background: #ffffff;
  border-radius: 12px;
  padding: 24px 20px;
  text-align: center;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  @media (max-width: 599px) {
    display: flex;
    align-items: center;
    text-align: left;
    gap: 16px;
    padding: 20px;
  }

  @media (min-width: 600px) {
    padding: 35px 30px;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
    }
  }
}

.feature-icon {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  &--blue {
    background: linear-gradient(135deg, #1a56db, #3b82f6);
  }

  &--red {
    background: linear-gradient(135deg, #dc2626, #ef4444);
  }

  &--dark {
    background: linear-gradient(135deg, #111111, #374151);
  }

  @media (min-width: 600px) {
    width: 70px;
    height: 70px;
    margin: 0 auto 20px;
  }
}

.feature-title {
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 4px;
  color: #111111;

  @media (min-width: 600px) {
    font-size: 1.15rem;
    margin-bottom: 10px;
  }
}

.feature-text {
  font-size: 0.85rem;
  color: #4b5563;
  line-height: 1.5;
  margin: 0;

  @media (min-width: 600px) {
    font-size: 0.95rem;
    line-height: 1.6;
  }
}
</style>
