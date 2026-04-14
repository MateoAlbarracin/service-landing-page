<template>
  <section id="inicio" class="hero">
    <div class="container hero-content">
      <div class="hero-text">
        <span class="hero-badge">
          <q-icon name="workspace_premium" size="16px" />
          Gasista Matriculado
        </span>
        <h1 class="hero-title">
          Plomería y Gas
          <span class="text-highlight-blue">Profesional</span>
          en
          <span class="text-highlight-red">Córdoba</span>
        </h1>
        <p class="hero-subtitle">
          Soy Tomás Casas, plomero y gasista matriculado. Ofrezco soluciones rápidas,
          eficientes y garantizadas para tu hogar o comercio.
        </p>
        <div class="hero-buttons">
          <a
            href="https://wa.me/message/EVCEHGK4VV3GD1"
            target="_blank"
            rel="noopener"
            class="btn-primary hero-btn"
          >
            <q-icon name="fab fa-whatsapp" class="q-mr-sm" />
            Contactar por WhatsApp
          </a>
          <a href="#servicios" class="btn-secondary hero-btn">
            <q-icon name="build" class="q-mr-sm" />
            Ver servicios
          </a>
        </div>
      </div>
      <div class="hero-image">
        <img
          src="/src/assets/hero.jpg"
          alt="Tomás Casas - Plomero y Gasista en Córdoba"
          class="hero-img"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.hero {
  background: linear-gradient(135deg, #f5f7fa 0%, #e8edf5 100%);
  padding: 40px 0 40px;
  display: flex;
  align-items: center;

  @media (min-width: 769px) {
    padding: 80px 0 60px;
    min-height: 80vh;
  }
}

.hero-content {
  display: flex;
  flex-direction: column;
  gap: 30px;
  text-align: center;

  @media (min-width: 769px) {
    flex-direction: row;
    align-items: center;
    gap: 60px;
    text-align: left;
  }
}

.hero-text {
  flex: 1;
  order: 2;

  @media (min-width: 769px) {
    order: 1;
  }
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background-color: #1a56db;
  color: white;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 16px;
}

.hero-title {
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 1.25;
  margin-bottom: 16px;
  color: #111111;

  @media (min-width: 480px) {
    font-size: 2.1rem;
  }

  @media (min-width: 769px) {
    font-size: 2.5rem;
    margin-bottom: 24px;
  }

  @media (min-width: 1024px) {
    font-size: 2.8rem;
  }
}

.text-highlight-blue {
  color: #1a56db;
}

.text-highlight-red {
  color: #dc2626;
}

.hero-subtitle {
  font-size: 1rem;
  color: #4b5563;
  line-height: 1.7;
  margin-bottom: 28px;
  max-width: 520px;

  @media (max-width: 768px) {
    margin-left: auto;
    margin-right: auto;
    font-size: 0.95rem;
  }
}

.hero-buttons {
  display: flex;
  gap: 12px;
  flex-direction: column;

  @media (min-width: 480px) {
    flex-direction: row;
    justify-content: center;
  }

  @media (min-width: 769px) {
    justify-content: flex-start;
  }
}

.hero-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 28px;
  font-size: 0.85rem;
  width: 100%;

  @media (min-width: 480px) {
    width: auto;
  }
}

.hero-image {
  flex: 1;
  display: flex;
  justify-content: center;
  order: 1;

  @media (min-width: 769px) {
    order: 2;
  }
}

.hero-img {
  width: 100%;
  max-width: 450px;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12);

  @media (min-width: 769px) {
    max-width: 550px;
  }
}
</style>
