<template>
  <section id="testimonios" class="testimonials section-padding">
    <div class="container">
      <h2 class="section-title">Testimonios de Clientes</h2>
      <p class="section-subtitle">
        Lo que dicen mis clientes sobre el trabajo realizado. Tu opinión es muy
        importante para mí.
      </p>

      <div class="google-reviews">
        <div class="google-reviews__header">
          <img
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
            alt="Google"
            class="google-logo"
          />
          <div class="google-reviews__rating">
            <div class="stars">
              <q-icon
                v-for="n in 5"
                :key="n"
                name="star"
                color="warning"
                size="22px"
              />
            </div>
            <!-- TODO: Actualizar con la calificación real de Google -->
            <span class="rating-text">5.0 basado en reseñas de Google</span>
          </div>
        </div>

        <div class="reviews-grid">
          <div
            v-for="review in reviews"
            :key="review.name"
            class="review-card"
          >
            <div class="review-card__header">
              <q-avatar color="primary" text-color="white" size="40px" font-size="16px">
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
            <p class="review-card__text">{{ review.text }}</p>
          </div>
        </div>

        <!-- TODO: Reemplazar con el link real de Google Reviews de Tomás -->
        <div class="reviews-cta">
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
// TODO: Reemplazar con reseñas reales de clientes de Tomás
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
}

.google-reviews {
  max-width: 900px;
  margin: 0 auto;
}

.google-reviews__header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;

  @media (min-width: 769px) {
    margin-bottom: 40px;
  }
}

.google-logo {
  height: 24px;
  margin-bottom: 10px;

  @media (min-width: 769px) {
    height: 30px;
    margin-bottom: 12px;
  }
}

.google-reviews__rating {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

.stars {
  display: flex;
  gap: 2px;
}

.rating-text {
  font-size: 0.8rem;
  color: #4b5563;

  @media (min-width: 769px) {
    font-size: 0.9rem;
  }
}

.reviews-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  margin-bottom: 32px;

  @media (min-width: 600px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }

  @media (min-width: 1024px) {
    gap: 24px;
    margin-bottom: 40px;
  }
}

.review-card {
  background: #ffffff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  transition: transform 0.3s ease;
  border-left: 3px solid #1a56db;

  @media (min-width: 769px) {
    padding: 24px;

    &:hover {
      transform: translateY(-3px);
    }
  }
}

.review-card__header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;

  @media (min-width: 769px) {
    margin-bottom: 14px;
  }
}

.review-card__name {
  font-size: 0.9rem;
  font-weight: 600;
  color: #111111;
  margin: 0;
}

.review-card__stars {
  display: flex;
  gap: 1px;
  margin-top: 2px;
}

.review-card__text {
  font-size: 0.85rem;
  color: #4b5563;
  line-height: 1.6;
  margin: 0;

  @media (min-width: 769px) {
    font-size: 0.9rem;
  }
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
