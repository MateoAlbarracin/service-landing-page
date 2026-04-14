<template>
  <section id="contacto" class="contact section-padding">
    <div class="container">
      <h2 class="section-title">Contacto</h2>
      <p class="section-subtitle">
        Estoy disponible las 24 horas, los 7 días de la semana.
        Contactame por WhatsApp para una respuesta rápida.
      </p>

      <div class="contact-content">
        <!-- Card principal de WhatsApp -->
        <div class="contact-wpp-card">
          <div class="contact-wpp-card__icon">
            <q-icon name="fab fa-whatsapp" size="48px" color="white" />
          </div>
          <h3 class="contact-wpp-card__title">Escribime por WhatsApp</h3>
          <p class="contact-wpp-card__text">
            La forma más rápida de contactarme. Respondemos consultas, presupuestos
            y emergencias al instante.
          </p>
          <a
            href="https://wa.me/message/EVCEHGK4VV3GD1"
            target="_blank"
            rel="noopener"
            class="contact-wpp-btn"
          >
            <q-icon name="fab fa-whatsapp" size="22px" class="q-mr-sm" />
            Abrir WhatsApp
          </a>
        </div>

        <!-- Info adicional -->
        <div class="contact-info">
          <!-- Horarios -->
          <div class="contact-schedule">
            <div class="contact-schedule__icon">
              <q-icon name="schedule" size="28px" color="white" />
            </div>
            <div>
              <h3 class="contact-schedule__title">Horarios de atención</h3>
              <div class="contact-schedule__detail">
                <div class="schedule-row">
                  <span class="schedule-day">Lunes a Domingo</span>
                  <span class="schedule-badge">24 horas</span>
                </div>
              </div>
              <p class="contact-schedule__note">
                <q-icon name="bolt" size="16px" color="secondary" />
                Atención inmediata para emergencias
              </p>
            </div>
          </div>

          <!-- Zona -->
          <div class="contact-zone">
            <div class="contact-zone__icon">
              <q-icon name="location_on" size="28px" color="white" />
            </div>
            <div>
              <h3 class="contact-zone__title">Zona de cobertura</h3>
              <p class="contact-zone__text">Córdoba Capital y alrededores</p>
            </div>
          </div>

          <!-- CTA final -->
          <div class="contact-cta-box">
            <p class="contact-cta-box__text">
              <strong>¿Tenés una emergencia?</strong><br />
              No importa la hora, escribime y te respondo lo antes posible.
            </p>
            <a
              href="https://wa.me/message/EVCEHGK4VV3GD1"
              target="_blank"
              rel="noopener"
              class="btn-primary contact-cta-box__btn"
            >
              <q-icon name="fab fa-whatsapp" class="q-mr-sm" />
              Contactar ahora
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.contact {
  background-color: #ffffff;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
  max-width: 900px;
  margin: 0 auto;

  @media (min-width: 769px) {
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    align-items: start;
  }
}

// ---- Card WhatsApp ----
.contact-wpp-card {
  background: linear-gradient(135deg, #111111, #1f2937);
  border-radius: 16px;
  padding: 32px 24px;
  text-align: center;
  color: white;

  @media (min-width: 769px) {
    padding: 40px 32px;
    position: sticky;
    top: 90px;
  }
}

.contact-wpp-card__icon {
  width: 80px;
  height: 80px;
  background-color: #25d366;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  box-shadow: 0 8px 25px rgba(37, 211, 102, 0.3);
}

.contact-wpp-card__title {
  font-size: 1.3rem;
  font-weight: 700;
  color: white;
  margin-bottom: 12px;

  @media (max-width: 768px) {
    font-size: 1.15rem;
  }
}

.contact-wpp-card__text {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  margin-bottom: 24px;
}

.contact-wpp-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #25d366;
  color: white;
  padding: 14px 32px;
  border-radius: 50px;
  font-family: 'Poppins', sans-serif;
  font-size: 0.95rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: all 0.2s linear;
  width: 100%;

  &:hover {
    background-color: #1fb855;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(37, 211, 102, 0.4);
  }

  @media (min-width: 480px) {
    width: auto;
  }
}

// ---- Info lateral ----
.contact-info {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.contact-schedule,
.contact-zone {
  display: flex;
  gap: 16px;
  align-items: flex-start;
  background: #f5f7fa;
  border-radius: 12px;
  padding: 20px;

  @media (min-width: 769px) {
    padding: 24px;
  }
}

.contact-schedule__icon,
.contact-zone__icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.contact-schedule__icon {
  background: linear-gradient(135deg, #1a56db, #3b82f6);
}

.contact-zone__icon {
  background: linear-gradient(135deg, #dc2626, #ef4444);
}

.contact-schedule__title,
.contact-zone__title {
  font-size: 0.95rem;
  font-weight: 700;
  color: #111111;
  margin: 0 0 8px;
}

.contact-schedule__detail {
  margin-bottom: 8px;
}

.schedule-row {
  display: flex;
  align-items: center;
  gap: 10px;
}

.schedule-day {
  font-size: 0.9rem;
  color: #1f2937;
  font-weight: 500;
}

.schedule-badge {
  background-color: #dc2626;
  color: white;
  padding: 2px 10px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
}

.contact-schedule__note {
  font-size: 0.8rem;
  color: #4b5563;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 4px;
}

.contact-zone__text {
  font-size: 0.9rem;
  color: #4b5563;
  margin: 0;
}

// ---- CTA Box ----
.contact-cta-box {
  background: linear-gradient(135deg, #1a56db, #2563eb);
  border-radius: 12px;
  padding: 24px;
  text-align: center;

  @media (min-width: 769px) {
    padding: 28px;
  }
}

.contact-cta-box__text {
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.9rem;
  line-height: 1.6;
  margin: 0 0 16px;

  strong {
    color: white;
    font-size: 1rem;
  }
}

.contact-cta-box__btn {
  background-color: white;
  color: #1a56db;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 12px 28px;

  &:hover {
    background-color: #f5f7fa;
    color: #1a56db;
  }

  @media (min-width: 480px) {
    width: auto;
  }
}
</style>
