<template>
  <section id="contacto" class="contact section-padding">
    <div class="container">
      <div class="contact-header" data-reveal>
        <span class="section-eyebrow">Contacto</span>
        <h2 class="section-title">Hablemos de tu proyecto</h2>
        <p class="section-subtitle">
          Estoy disponible las 24 horas, los 7 días de la semana.
          Contactame por WhatsApp para una respuesta inmediata.
        </p>
      </div>

      <div class="contact-content">
        <!-- Card principal de WhatsApp -->
        <div class="contact-wpp-card" data-reveal="left">
          <div class="contact-wpp-card__glow" aria-hidden="true"></div>
          <div class="contact-wpp-card__icon">
            <q-icon name="fab fa-whatsapp" size="48px" color="white" />
          </div>
          <h3 class="contact-wpp-card__title">Escribime por WhatsApp</h3>
          <p class="contact-wpp-card__text">
            La forma más rápida de contactarme. Respondo consultas, presupuestos
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
        <div class="contact-info" data-reveal="right">
          <!-- Horarios -->
          <div class="contact-schedule">
            <div class="contact-schedule__icon">
              <q-icon name="schedule" size="26px" color="white" />
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
              <q-icon name="location_on" size="26px" color="white" />
            </div>
            <div>
              <h3 class="contact-zone__title">Zona de cobertura</h3>
              <p class="contact-zone__text">Córdoba Capital y alrededores</p>
            </div>
          </div>

          <!-- CTA final -->
          <div class="contact-cta-box">
            <div class="contact-cta-box__glow" aria-hidden="true"></div>
            <p class="contact-cta-box__text">
              <strong>¿Tenés una emergencia?</strong><br />
              No importa la hora, escribime y te respondo lo antes posible.
            </p>
            <a
              href="https://wa.me/message/EVCEHGK4VV3GD1"
              target="_blank"
              rel="noopener"
              class="btn-white contact-cta-box__btn"
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
  position: relative;
  overflow: hidden;
}

.contact-header {
  text-align: center;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 28px;
  max-width: 960px;
  margin: 0 auto;

  @media (min-width: 769px) {
    grid-template-columns: 1.05fr 1fr;
    gap: 32px;
    align-items: start;
  }
}

// ---- Card WhatsApp ----
.contact-wpp-card {
  position: relative;
  background: linear-gradient(135deg, #0b1120 0%, #1f2937 100%);
  border-radius: 20px;
  padding: 36px 26px;
  text-align: center;
  color: white;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 18px 50px rgba(17, 17, 17, 0.25);

  @media (min-width: 769px) {
    padding: 48px 36px;
    position: sticky;
    top: 100px;
  }
}

.contact-wpp-card__glow {
  position: absolute;
  width: 280px;
  height: 280px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(37, 211, 102, 0.45), transparent 70%);
  filter: blur(60px);
  top: -80px;
  right: -80px;
  pointer-events: none;
}

.contact-wpp-card__icon {
  width: 86px;
  height: 86px;
  background: linear-gradient(135deg, #25d366, #128c5a);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 22px;
  box-shadow: 0 12px 30px rgba(37, 211, 102, 0.45);
  position: relative;
  animation: pulse 2.4s infinite;
}

.contact-wpp-card__title {
  font-size: 1.4rem;
  font-weight: 700;
  color: white;
  margin-bottom: 12px;
  letter-spacing: -0.01em;
  position: relative;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
}

.contact-wpp-card__text {
  font-size: 0.92rem;
  color: rgba(255, 255, 255, 0.72);
  line-height: 1.7;
  margin-bottom: 26px;
  position: relative;
}

.contact-wpp-btn {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #25d366, #1fb855);
  color: white;
  padding: 15px 36px;
  border-radius: 999px;
  font-family: 'Poppins', sans-serif;
  font-size: 0.92rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.6px;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  width: 100%;
  box-shadow: 0 10px 26px rgba(37, 211, 102, 0.42);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 18px 40px rgba(37, 211, 102, 0.55);
    color: #fff;
  }

  @media (min-width: 480px) {
    width: auto;
  }
}

// ---- Info lateral ----
.contact-info {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.contact-schedule,
.contact-zone {
  display: flex;
  gap: 18px;
  align-items: flex-start;
  background: #f5f7fa;
  border-radius: 16px;
  padding: 22px;
  border: 1px solid rgba(17, 17, 17, 0.04);
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 14px 30px rgba(17, 17, 17, 0.08);
  }

  @media (min-width: 769px) {
    padding: 26px;
  }
}

.contact-schedule__icon,
.contact-zone__icon {
  width: 52px;
  height: 52px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.contact-schedule__icon {
  background: linear-gradient(135deg, #1a56db, #3b82f6);
  box-shadow: 0 8px 20px rgba(26, 86, 219, 0.35);
}

.contact-zone__icon {
  background: linear-gradient(135deg, #dc2626, #ef4444);
  box-shadow: 0 8px 20px rgba(220, 38, 38, 0.35);
}

.contact-schedule__title,
.contact-zone__title {
  font-size: 1rem;
  font-weight: 700;
  color: #111111;
  margin: 0 0 8px;
}

.contact-schedule__detail {
  margin-bottom: 10px;
}

.schedule-row {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}

.schedule-day {
  font-size: 0.92rem;
  color: #1f2937;
  font-weight: 500;
}

.schedule-badge {
  background: linear-gradient(135deg, #dc2626, #ef4444);
  color: white;
  padding: 3px 12px;
  border-radius: 999px;
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  box-shadow: 0 4px 12px rgba(220, 38, 38, 0.3);
}

.contact-schedule__note {
  font-size: 0.82rem;
  color: #4b5563;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 6px;
}

.contact-zone__text {
  font-size: 0.92rem;
  color: #4b5563;
  margin: 0;
}

// ---- CTA Box ----
.contact-cta-box {
  position: relative;
  background: linear-gradient(135deg, #1a56db, #2563eb);
  border-radius: 16px;
  padding: 26px;
  text-align: center;
  overflow: hidden;
  box-shadow: 0 14px 35px rgba(26, 86, 219, 0.3);

  @media (min-width: 769px) {
    padding: 30px;
  }
}

.contact-cta-box__glow {
  position: absolute;
  width: 240px;
  height: 240px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.2), transparent 70%);
  top: -80px;
  right: -80px;
  pointer-events: none;
}

.contact-cta-box__text {
  position: relative;
  color: rgba(255, 255, 255, 0.92);
  font-size: 0.92rem;
  line-height: 1.65;
  margin: 0 0 18px;

  strong {
    color: white;
    font-size: 1.05rem;
    display: inline-block;
    margin-bottom: 4px;
  }
}

.btn-white.contact-cta-box__btn {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  color: #1a56db;
  padding: 12px 28px;
  border-radius: 6px;
  font-family: 'Poppins', sans-serif;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  width: 100%;
  transition: transform 0.25s ease, box-shadow 0.25s ease, color 0.25s ease;

  &:hover {
    background-color: #f9fafb;
    color: #1a56db;
    transform: translateY(-2px);
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.15);
  }

  @media (min-width: 480px) {
    width: auto;
  }
}
</style>
