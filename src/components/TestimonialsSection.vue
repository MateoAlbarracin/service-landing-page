<template>
  <section id="testimonios" class="testimonials section-padding">
    <div class="container">
      <div class="testimonials-header" data-reveal>
        <span class="section-eyebrow">Testimonios</span>
        <h2 class="section-title">Lo que dicen mis clientes</h2>
        <p class="section-subtitle">
          Tu opinión es muy importante para mí. Estas son algunas de las
          experiencias de quienes ya confiaron en el servicio.
        </p>
      </div>

      <div class="google-reviews">
        <div class="google-reviews__header" data-reveal>
          <img
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
            alt="Google"
            class="google-logo"
          />
          <div class="google-reviews__rating">
            <div class="stars">
              <q-icon
                v-for="n in 4"
                :key="n"
                name="star"
                color="warning"
                size="22px"
              />
              <q-icon
                  v-for="n in 1"
                  :key="n"
                  name="star_half"
                  color="warning"
                  size="22px"
              />
            </div>
            <span class="rating-text">4.6 basado en reseñas de Google</span>
          </div>
        </div>

        <div class="reviews-grid">
          <div
            v-for="(review, i) in reviews"
            :key="review.name"
            class="review-card"
            data-reveal
            :data-reveal-delay="i * 150"
          >
            <q-icon name="format_quote" size="36px" class="review-card__quote" />
            <p class="review-card__text">{{ review.text }}</p>
            <div class="review-card__header">
              <q-avatar
                :color="i % 2 === 0 ? 'primary' : 'secondary'"
                text-color="white"
                size="44px"
                font-size="16px"
              >
                {{ review.name.charAt(0) }}
              </q-avatar>
              <div>
                <h4 class="review-card__name">{{ review.name }}</h4>
                <div class="review-card__stars">
                  <q-icon
                    v-for="n in review.stars"
                    :key="n"
                    name="star"
                    color="warning"
                    size="14px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="reviews-cta" data-reveal>
          <a
            href="https://g.page/NEGOCIO/review"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-primary reviews-cta-btn"
          >
            <q-icon name="rate_review" class="q-mr-sm" />
            Dejanos una reseña
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const reviews = [
  {
    name: 'María García',
    stars: 5,
    text: 'Excelente servicio, muy profesional y puntual. Resolvió el problema de las cañerías rápidamente. Totalmente recomendable.'
  },
  {
    name: 'Carlos López',
    stars: 5,
    text: 'Muy buen trabajo con la instalación de gas. Prolijo, honesto y con precios justos. Lo volvería a contratar sin dudarlo.'
  },
  {
    name: 'Ana Martínez',
    stars: 5,
    text: 'Llegó rápido ante una urgencia de pérdida de agua. Solucionó todo en poco tiempo y dejó todo limpio. 100% recomendado.'
  }
]
</script>

<style lang="scss" scoped>
.testimonials {
  background-color: #f5f7fa;
  position: relative;
}

.testimonials-header {
  text-align: center;
}

.google-reviews {
  max-width: 980px;
  margin: 0 auto;
}

.google-reviews__header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 32px;

  @media (min-width: 769px) {
    margin-bottom: 44px;
  }
}

.google-logo {
  height: 26px;
  margin-bottom: 10px;

  @media (min-width: 769px) {
    height: 32px;
    margin-bottom: 14px;
  }
}

.google-reviews__rating {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
}

.stars {
  display: flex;
  gap: 3px;
}

.rating-text {
  font-size: 0.82rem;
  color: #4b5563;
  font-weight: 500;

  @media (min-width: 769px) {
    font-size: 0.92rem;
  }
}

.reviews-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 18px;
  margin-bottom: 36px;

  @media (min-width: 600px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 22px;
  }

  @media (min-width: 1024px) {
    gap: 26px;
    margin-bottom: 44px;
  }
}

.review-card {
  position: relative;
  background: #ffffff;
  border-radius: 16px;
  padding: 28px 22px 22px;
  box-shadow: 0 10px 30px rgba(17, 17, 17, 0.06);
  transition: transform 0.35s ease, box-shadow 0.35s ease;
  border: 1px solid rgba(17, 17, 17, 0.04);
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: linear-gradient(180deg, #1a56db, #dc2626);
  }

  @media (min-width: 769px) {
    padding: 32px 28px 26px;

    &:hover {
      transform: translateY(-6px);
      box-shadow: 0 22px 50px rgba(17, 17, 17, 0.12);
    }
  }
}

.review-card__quote {
  color: rgba(26, 86, 219, 0.12);
  margin-bottom: -8px;
}

.review-card__text {
  font-size: 0.9rem;
  color: #374151;
  line-height: 1.7;
  margin: 0 0 20px;
  font-style: italic;

  @media (min-width: 769px) {
    font-size: 0.95rem;
  }
}

.review-card__header {
  display: flex;
  align-items: center;
  gap: 12px;
  padding-top: 16px;
  border-top: 1px solid rgba(17, 17, 17, 0.06);
}

.review-card__name {
  font-size: 0.92rem;
  font-weight: 600;
  color: #111111;
  margin: 0;
}

.review-card__stars {
  display: flex;
  gap: 1px;
  margin-top: 2px;
}

.reviews-cta {
  text-align: center;
}

.reviews-cta-btn {
  display: inline-flex;
  align-items: center;
  width: 100%;
  justify-content: center;

  @media (min-width: 480px) {
    width: auto;
  }
}
</style>
