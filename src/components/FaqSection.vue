<template>
  <section id="preguntas" class="faq section-padding">
    <div class="container">
      <div class="faq-header" data-reveal>
        <span class="section-eyebrow">FAQ</span>
        <h2 class="section-title">Preguntas frecuentes</h2>
        <p class="section-subtitle">
          Respuestas a las consultas más comunes sobre gasista matriculado,
          urgencias y plomería en Córdoba.
        </p>
      </div>

      <div class="faq-list">
        <details
          v-for="(item, i) in faqs"
          :key="item.q"
          class="faq-item"
          data-reveal
          :data-reveal-delay="i * 80"
        >
          <summary class="faq-question">
            <span>{{ item.q }}</span>
            <AppIcon name="expand_more" size="24px" class="faq-icon" />
          </summary>
          <div class="faq-answer">
            <p>{{ item.a }}</p>
          </div>
        </details>
      </div>
    </div>
  </section>
</template>

<script setup>
import { faqs } from 'src/config/faq'
</script>

<style lang="scss" scoped>
.faq {
  background-color: #ffffff;
  position: relative;
}

.faq-header {
  text-align: center;
}

.faq-list {
  max-width: 820px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.faq-item {
  background: #f5f7fa;
  border: 1px solid rgba(17, 17, 17, 0.05);
  border-radius: 14px;
  overflow: hidden;
  transition: box-shadow 0.25s ease, border-color 0.25s ease;

  &[open] {
    border-color: rgba(26, 86, 219, 0.25);
    box-shadow: 0 12px 30px rgba(17, 17, 17, 0.08);
  }
}

.faq-question {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 20px 22px;
  font-size: 1rem;
  font-weight: 600;
  color: #111111;
  cursor: pointer;
  list-style: none;
  user-select: none;

  // Oculta el marcador nativo del <details>
  &::-webkit-details-marker {
    display: none;
  }

  @media (min-width: 769px) {
    font-size: 1.08rem;
    padding: 22px 26px;
  }
}

.faq-icon {
  color: #1a56db;
  flex-shrink: 0;
  transition: transform 0.3s ease;

  .faq-item[open] & {
    transform: rotate(180deg);
  }
}

.faq-answer {
  padding: 0 22px 20px;
  color: #4b5563;
  line-height: 1.7;
  font-size: 0.95rem;

  p {
    margin: 0;
  }

  @media (min-width: 769px) {
    padding: 0 26px 24px;
  }
}
</style>
