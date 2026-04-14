<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <!-- Columna 1: Sobre Tomás -->
        <div class="footer-col footer-col--about">
          <img
            src="/src/assets/logo.png"
            alt="Tomás Casas - Plomero y Gasista"
            class="footer-logo"
          />
          <p class="footer-text">
            Plomero y gasista matriculado en Córdoba.
            Soluciones profesionales, rápidas y garantizadas para tu hogar o comercio.
            Disponible las 24 horas.
          </p>
          <div class="footer-social">
            <!-- TODO: Reemplazar con los links reales de redes sociales de Tomás -->
            <a href="#" target="_blank" rel="noopener" class="social-link" aria-label="Facebook">
              <q-icon name="fab fa-facebook-f" size="18px" />
            </a>
            <a href="#" target="_blank" rel="noopener" class="social-link" aria-label="Instagram">
              <q-icon name="fab fa-instagram" size="18px" />
            </a>
            <a href="https://wa.me/message/EVCEHGK4VV3GD1" target="_blank" rel="noopener" class="social-link social-link--whatsapp" aria-label="WhatsApp">
              <q-icon name="fab fa-whatsapp" size="18px" />
            </a>
          </div>
        </div>

        <!-- Columna 2: Links rápidos -->
        <div class="footer-col">
          <h4 class="footer-col__title">Links Rápidos</h4>
          <ul class="footer-links">
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#servicios">Servicios</a></li>
            <li><a href="#trabajos">Mis Trabajos</a></li>
            <li><a href="#testimonios">Testimonios</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </div>

        <!-- Columna 3: Servicios -->
        <div class="footer-col">
          <h4 class="footer-col__title">Servicios</h4>
          <ul class="footer-links">
            <li><a href="#servicios">Plomería completa</a></li>
            <li><a href="#servicios">Gasista matriculado</a></li>
            <li><a href="#servicios">Reparación de cañerías</a></li>
            <li><a href="#servicios">Instalación de gas</a></li>
            <li><a href="#servicios">Emergencias 24/7</a></li>
          </ul>
        </div>

        <!-- Columna 4: Contacto -->
        <div class="footer-col">
          <h4 class="footer-col__title">Contacto</h4>
          <ul class="footer-contact">
            <li>
              <q-icon name="fab fa-whatsapp" class="q-mr-sm" />
              <a href="https://wa.me/message/EVCEHGK4VV3GD1" target="_blank" rel="noopener">WhatsApp</a>
            </li>
            <li>
              <q-icon name="location_on" class="q-mr-sm" />
              Córdoba, Argentina
            </li>
            <li>
              <q-icon name="schedule" class="q-mr-sm" />
              24hs - Todos los días
            </li>
          </ul>
        </div>
      </div>

      <q-separator dark class="q-my-md" />

      <!-- Línea roja y azul como el logo -->
      <div class="footer-accent-line">
        <div class="footer-accent-line__red"></div>
        <div class="footer-accent-line__blue"></div>
      </div>

      <div class="footer-bottom">
        <p>&copy; {{ currentYear }} Tomás Casas — Plomero y Gasista Matriculado. Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear()
</script>

<style lang="scss" scoped>
.footer {
  background-color: #111111;
  padding: 40px 0 24px;
  color: #e5e7eb;

  @media (min-width: 769px) {
    padding: 60px 0 30px;
  }
}

.footer-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;

  @media (min-width: 769px) {
    grid-template-columns: 1.5fr 1fr 1fr 1fr;
    gap: 40px;
  }
}

.footer-col--about {
  grid-column: 1 / -1;

  @media (min-width: 769px) {
    grid-column: auto;
  }
}

.footer-logo {
  height: 46px;
  margin-bottom: 14px;

  @media (min-width: 769px) {
    height: 54px;
    margin-bottom: 16px;
  }
}

.footer-text {
  font-size: 0.85rem;
  color: rgba(229, 231, 235, 0.65);
  line-height: 1.7;
  margin-bottom: 16px;

  @media (min-width: 769px) {
    font-size: 0.9rem;
    margin-bottom: 20px;
  }
}

.footer-social {
  display: flex;
  gap: 10px;
}

.social-link {
  width: 38px;
  height: 38px;
  background-color: #1a56db;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  transition: background-color 0.2s;

  &:hover {
    background-color: #dc2626;
  }

  &--whatsapp:hover {
    background-color: #25d366;
  }
}

.footer-col__title {
  font-size: 0.95rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 16px;
  position: relative;
  padding-bottom: 10px;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 30px;
    height: 2px;
    background-color: #dc2626;
  }

  @media (min-width: 769px) {
    font-size: 1rem;
    margin: 0 0 20px;
  }
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    margin-bottom: 8px;

    @media (min-width: 769px) {
      margin-bottom: 10px;
    }
  }

  a {
    color: rgba(229, 231, 235, 0.65);
    font-size: 0.85rem;
    transition: color 0.2s;

    &:hover {
      color: #3b82f6;
    }

    @media (min-width: 769px) {
      font-size: 0.9rem;
    }
  }
}

.footer-contact {
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    color: rgba(229, 231, 235, 0.65);
    font-size: 0.85rem;

    @media (min-width: 769px) {
      margin-bottom: 12px;
      font-size: 0.9rem;
    }
  }

  a {
    color: rgba(229, 231, 235, 0.65);
    transition: color 0.2s;

    &:hover {
      color: #25d366;
    }
  }
}

.footer-accent-line {
  display: flex;
  height: 3px;
  margin-bottom: 16px;
  border-radius: 2px;
  overflow: hidden;

  &__red {
    flex: 1;
    background-color: #dc2626;
  }

  &__blue {
    flex: 1;
    background-color: #1a56db;
  }
}

.footer-bottom {
  text-align: center;

  p {
    color: rgba(229, 231, 235, 0.4);
    font-size: 0.8rem;
    margin: 0;

    @media (min-width: 769px) {
      font-size: 0.85rem;
    }
  }
}
</style>
