<template>
  <section id="inicio" class="hero">
    <!-- Imagen de fondo -->
    <div class="hero-bg" :style="{ backgroundImage: `url(${heroImg})` }" aria-hidden="true"></div>
    <div class="hero-overlay" aria-hidden="true"></div>
    <div class="hero-grain" aria-hidden="true"></div>

    <div class="container hero-content">
      <div class="hero-text">
        <span class="hero-badge" data-reveal data-reveal-delay="100">
          <q-icon name="workspace_premium" size="16px" />
          Gasista Matriculado · Córdoba
        </span>

        <h1 class="hero-title" data-reveal data-reveal-delay="200">
          Plomería y Gas
          <span class="text-highlight-blue">Profesional</span>
          en
          <span class="text-highlight-red">Córdoba</span>
        </h1>

        <p class="hero-subtitle" data-reveal data-reveal-delay="350">
          Soy <strong>Tomás Casas</strong>, plomero y gasista matriculado.
          Soluciones rápidas, eficientes y garantizadas para tu hogar o comercio,
          disponibles las 24 horas.
        </p>

        <div class="hero-stats" data-reveal data-reveal-delay="450">
          <div class="hero-stat">
            <span class="hero-stat__num">24/7</span>
            <span class="hero-stat__label">Emergencias</span>
          </div>
          <div class="hero-stat">
            <span class="hero-stat__num">100%</span>
            <span class="hero-stat__label">Matriculado</span>
          </div>
        </div>

        <div class="hero-buttons" data-reveal data-reveal-delay="600">
          <a
            href="https://wa.me/message/EVCEHGK4VV3GD1"
            target="_blank"
            rel="noopener"
            class="btn-primary hero-btn"
          >
            <q-icon name="fab fa-whatsapp" class="q-mr-sm" />
            Contactar por WhatsApp
          </a>
          <a href="#servicios" class="btn-ghost hero-btn">
            <q-icon name="build" class="q-mr-sm" />
            Ver servicios
          </a>
        </div>
      </div>
    </div>

    <a href="#servicios" class="hero-scroll" aria-label="Bajar a servicios">
      <span class="hero-scroll__label">Explorar servicios</span>
      <q-icon name="keyboard_arrow_down" size="28px" />
    </a>
  </section>
</template>

<script setup>
import heroImg from 'src/assets/hero.jpg'
</script>

<style lang="scss" scoped>
.hero {
  position: relative;
  min-height: 92vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  color: #fff;
  padding: 120px 0 100px;

  @media (max-width: 768px) {
    min-height: auto;
    padding: 110px 0 80px;
  }
}

.hero-bg {
  position: absolute;
  inset: -5%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transform: scale(1.08);
  animation: heroZoom 18s ease-in-out infinite alternate;
  filter: brightness(0.55) saturate(1.1);
  z-index: 0;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(135deg, rgba(20, 63, 163, 0.78) 0%, rgba(17, 17, 17, 0.65) 55%, rgba(220, 38, 38, 0.35) 100%),
    radial-gradient(ellipse at top right, rgba(220, 38, 38, 0.28), transparent 55%);
  z-index: 1;
}

.hero-grain {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  background-size: 3px 3px;
  opacity: 0.35;
  pointer-events: none;
  mix-blend-mode: overlay;
  z-index: 2;
}

@keyframes heroZoom {
  0% { transform: scale(1.06) translate(0, 0); }
  100% { transform: scale(1.14) translate(-1.5%, -1%); }
}

.hero-content {
  position: relative;
  z-index: 3;
  text-align: left;
}

.hero-text {
  max-width: 780px;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background-color: rgba(255, 255, 255, 0.14);
  border: 1px solid rgba(255, 255, 255, 0.28);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  color: #fff;
  padding: 8px 18px;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  margin-bottom: 22px;

  :deep(.q-icon) {
    color: #fca5a5;
  }
}

.hero-title {
  font-size: 2.2rem;
  font-weight: 800;
  line-height: 1.05;
  margin-bottom: 20px;
  color: #fff;
  letter-spacing: -0.02em;
  text-shadow: 0 4px 24px rgba(0, 0, 0, 0.45);

  @media (min-width: 480px) {
    font-size: 2.6rem;
  }

  @media (min-width: 769px) {
    font-size: 3.6rem;
    margin-bottom: 24px;
  }

  @media (min-width: 1200px) {
    font-size: 4.1rem;
  }
}

.text-highlight-blue,
.text-highlight-red {
  position: relative;
  display: inline-block;
  background: linear-gradient(120deg, currentColor 0%, currentColor 100%);
  background-size: 200% auto;
  background-clip: text;
  -webkit-background-clip: text;
}

.text-highlight-blue {
  color: #93c5fd;
}

.text-highlight-red {
  color: #fca5a5;
}

.hero-subtitle {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.75;
  margin-bottom: 32px;
  max-width: 580px;

  strong {
    color: #fff;
    font-weight: 600;
  }

  @media (min-width: 769px) {
    font-size: 1.12rem;
    margin-bottom: 40px;
  }
}

.hero-stats {
  display: flex;
  gap: 24px;
  margin-bottom: 36px;
  flex-wrap: wrap;

  @media (min-width: 769px) {
    gap: 48px;
    margin-bottom: 44px;
  }
}

.hero-stat {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding-right: 24px;
  border-right: 1px solid rgba(255, 255, 255, 0.2);

  &:last-child {
    border-right: none;
  }

  @media (max-width: 480px) {
    padding-right: 16px;
    flex: 1;
  }
}

.hero-stat__num {
  font-size: 1.6rem;
  font-weight: 800;
  color: #fff;
  line-height: 1;
  letter-spacing: -0.02em;

  @media (min-width: 769px) {
    font-size: 2rem;
  }
}

.hero-stat__label {
  font-size: 0.72rem;
  color: rgba(255, 255, 255, 0.72);
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 500;

  @media (min-width: 769px) {
    font-size: 0.78rem;
  }
}

.hero-buttons {
  display: flex;
  gap: 14px;
  flex-direction: column;

  @media (min-width: 480px) {
    flex-direction: row;
  }
}

.hero-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 15px 30px;
  font-size: 0.82rem;
  width: 100%;

  @media (min-width: 480px) {
    width: auto;
  }
}

.btn-ghost {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 13px 28px;
  border-radius: 6px;
  font-size: 0.82rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  color: #fff;
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.35);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  transition: transform 0.25s ease, background-color 0.25s ease, border-color 0.25s ease;

  &:hover {
    background: #fff;
    border-color: #fff;
    color: #111;
    transform: translateY(-2px);
  }
}

// Flecha inferior
.hero-scroll {
  position: absolute;
  left: 50%;
  bottom: 26px;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  color: rgba(255, 255, 255, 0.85);
  font-size: 0.7rem;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  font-weight: 500;
  z-index: 4;
  animation: bounceDown 2.2s ease-in-out infinite;

  &:hover {
    color: #fff;
  }

  @media (max-width: 768px) {
    display: none;
  }
}

.hero-scroll__label {
  opacity: 0.9;
}
</style>
