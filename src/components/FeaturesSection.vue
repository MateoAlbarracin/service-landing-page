<template>
  <section class="features">
    <div class="container">
      <div class="features-grid">
        <div
          v-for="(feature, i) in features"
          :key="feature.title"
          class="feature-card"
          data-reveal
          :data-reveal-delay="i * 120"
        >
          <div class="feature-icon" :class="`feature-icon--${feature.color}`">
            <q-icon :name="feature.icon" size="30px" color="white" />
          </div>
          <div>
            <h3 class="feature-title">{{ feature.title }}</h3>
            <p class="feature-text">{{ feature.text }}</p>
          </div>
          <div class="feature-glow" :class="`feature-glow--${feature.color}`" aria-hidden="true"></div>
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
  padding: 48px 0 32px;
  background-color: transparent;
  position: relative;
  z-index: 3;

  @media (min-width: 769px) {
    padding: 70px 0 40px;
    margin-top: -60px;
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
    gap: 28px;
  }
}

.feature-card {
  position: relative;
  background: #ffffff;
  border-radius: 16px;
  padding: 26px 22px;
  text-align: center;
  box-shadow: 0 14px 40px rgba(17, 17, 17, 0.08);
  transition: transform 0.35s ease, box-shadow 0.35s ease;
  overflow: hidden;
  border: 1px solid rgba(17, 17, 17, 0.04);

  @media (max-width: 599px) {
    display: flex;
    align-items: center;
    text-align: left;
    gap: 18px;
    padding: 22px;
  }

  @media (min-width: 600px) {
    padding: 36px 28px;

    &:hover {
      transform: translateY(-8px);
      box-shadow: 0 22px 55px rgba(17, 17, 17, 0.14);
    }
  }
}

.feature-icon {
  width: 54px;
  height: 54px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
  z-index: 1;
  transition: transform 0.35s ease;

  &--blue {
    background: linear-gradient(135deg, #1a56db, #3b82f6);
    box-shadow: 0 10px 24px rgba(26, 86, 219, 0.32);
  }

  &--red {
    background: linear-gradient(135deg, #dc2626, #ef4444);
    box-shadow: 0 10px 24px rgba(220, 38, 38, 0.32);
  }

  &--dark {
    background: linear-gradient(135deg, #111111, #374151);
    box-shadow: 0 10px 24px rgba(17, 17, 17, 0.32);
  }

  @media (min-width: 600px) {
    width: 68px;
    height: 68px;
    margin: 0 auto 22px;
  }
}

.feature-card:hover .feature-icon {
  transform: rotate(-6deg) scale(1.06);
}

.feature-title {
  font-size: 1.02rem;
  font-weight: 700;
  margin-bottom: 4px;
  color: #111111;
  position: relative;
  z-index: 1;

  @media (min-width: 600px) {
    font-size: 1.18rem;
    margin-bottom: 10px;
  }
}

.feature-text {
  font-size: 0.88rem;
  color: #4b5563;
  line-height: 1.6;
  margin: 0;
  position: relative;
  z-index: 1;

  @media (min-width: 600px) {
    font-size: 0.95rem;
    line-height: 1.7;
  }
}

.feature-glow {
  position: absolute;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  filter: blur(70px);
  opacity: 0;
  transition: opacity 0.4s ease;
  top: -40px;
  right: -40px;
  z-index: 0;
  pointer-events: none;

  &--blue { background: rgba(26, 86, 219, 0.35); }
  &--red { background: rgba(220, 38, 38, 0.32); }
  &--dark { background: rgba(17, 17, 17, 0.3); }
}

.feature-card:hover .feature-glow {
  opacity: 0.45;
}
</style>
