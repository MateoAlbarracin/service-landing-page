<template>
  <q-header class="navbar" :class="{ 'navbar--scrolled': scrolled }" bordered>
    <q-toolbar class="container navbar-toolbar">
      <a href="#inicio" class="navbar-logo" aria-label="Inicio">
        <img
          :src="logoImg"
          alt="Tomás Casas - Plomero y Gasista Matriculado"
          class="logo-img"
        />
      </a>

      <q-space />

      <!-- Desktop menu -->
      <div class="desktop-menu gt-sm">
        <a
          v-for="item in menuItems"
          :key="item.label"
          :href="item.link"
          class="menu-link"
        >
          {{ item.label }}
        </a>
        <a
          href="https://wa.me/message/EVCEHGK4VV3GD1"
          target="_blank"
          rel="noopener"
          class="btn-primary menu-cta"
        >
          <q-icon name="fab fa-whatsapp" class="q-mr-xs" />
          WhatsApp
        </a>
      </div>

      <!-- Mobile: WhatsApp + hamburger -->
      <div class="lt-md mobile-actions">
        <q-btn
          flat
          dense
          round
          icon="fab fa-whatsapp"
          class="mobile-wpp-btn"
          href="https://wa.me/message/EVCEHGK4VV3GD1"
          target="_blank"
          tag="a"
        />
        <q-btn
          flat
          dense
          round
          icon="menu"
          class="mobile-menu-btn"
          @click="mobileMenu = true"
        />
      </div>

    </q-toolbar>

    <!-- Mobile drawer (fuera del toolbar, teleportado al body) -->
    <Teleport to="body">
      <Transition name="drawer-fade">
        <div
          v-if="mobileMenu"
          class="mobile-drawer-backdrop"
          @click="mobileMenu = false"
        ></div>
      </Transition>
      <Transition name="drawer-slide">
        <aside v-if="mobileMenu" class="mobile-drawer" role="dialog" aria-label="Menú">
          <header class="mobile-drawer__header">
            <img :src="logoImg" alt="Tomás Casas" class="mobile-drawer__logo" />
            <button
              class="mobile-drawer__close"
              aria-label="Cerrar menú"
              @click="mobileMenu = false"
            >
              <q-icon name="close" size="22px" />
            </button>
          </header>

          <nav class="mobile-drawer__nav">
            <a
              v-for="item in menuItems"
              :key="item.label"
              :href="item.link"
              class="mobile-drawer__link"
              @click="mobileMenu = false"
            >
              <q-icon :name="item.icon" size="20px" class="mobile-drawer__link-icon" />
              <span class="mobile-drawer__link-label">{{ item.label }}</span>
            </a>
          </nav>

          <div class="mobile-drawer__footer">
            <a
              href="https://wa.me/message/EVCEHGK4VV3GD1"
              target="_blank"
              rel="noopener"
              class="btn-primary mobile-drawer__cta"
            >
              <q-icon name="fab fa-whatsapp" class="q-mr-sm" />
              Contactar por WhatsApp
            </a>
          </div>
        </aside>
      </Transition>
    </Teleport>
  </q-header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import logoImg from 'src/assets/logo.png'

const mobileMenu = ref(false)
const scrolled = ref(false)

// Bloquear scroll del body mientras el drawer está abierto
watch(mobileMenu, (open) => {
  if (typeof document === 'undefined') return
  document.body.style.overflow = open ? 'hidden' : ''
})

const menuItems = [
  { label: 'Inicio', link: '#inicio', icon: 'home' },
  { label: 'Servicios', link: '#servicios', icon: 'build' },
  { label: 'Trabajos', link: '#trabajos', icon: 'photo_library' },
  { label: 'Testimonios', link: '#testimonios', icon: 'star' },
  { label: 'Contacto', link: '#contacto', icon: 'contact_phone' }
]

const handleScroll = () => {
  scrolled.value = window.scrollY > 40
}

onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style lang="scss" scoped>
.navbar {
  background-color: transparent;
  height: 72px;
  box-shadow: none;
  border-bottom: 1px solid transparent;
  transition: background-color 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease, height 0.3s ease;

  @media (min-width: 1024px) {
    height: 80px;
  }

  // Antes de hacer scroll: translúcido sobre el hero oscuro
  :deep(.q-toolbar) {
    background: transparent;
  }

  .menu-link {
    color: rgba(255, 255, 255, 0.88);
  }
}

.navbar--scrolled {
  background-color: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(16px) saturate(1.4);
  -webkit-backdrop-filter: blur(16px) saturate(1.4);
  box-shadow: 0 8px 24px rgba(17, 17, 17, 0.08);
  border-bottom-color: rgba(17, 17, 17, 0.06);
  height: 64px;

  @media (min-width: 1024px) {
    height: 72px;
  }

  .menu-link {
    color: #1f2937;

    &:hover {
      color: #1a56db;
    }

    &::after {
      background-color: #1a56db;
    }
  }

  .mobile-menu-btn {
    color: #111;
  }
}

.navbar-toolbar {
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
  padding: 0 16px;

  @media (min-width: 1024px) {
    padding: 0 24px;
  }
}

.navbar-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  transition: transform 0.25s ease;

  &:hover {
    transform: scale(1.03);
  }
}

.logo-img {
  height: 44px;
  width: auto;
  border-radius: 32px;
  object-fit: contain;
  zoom: 120%;

  @media (min-width: 1024px) {
    height: 52px;
  }

  .navbar--scrolled & {
    height: 40px;

    @media (min-width: 1024px) {
      height: 48px;
    }
  }
}

.desktop-menu {
  display: flex;
  align-items: center;
  gap: 4px;
}

.menu-link {
  position: relative;
  padding: 8px 14px;
  color: rgba(255, 255, 255, 0.88);
  font-size: 0.9rem;
  font-weight: 500;
  transition: color 0.25s ease;
  font-family: 'Poppins', sans-serif;

  &::after {
    content: '';
    position: absolute;
    left: 14px;
    right: 14px;
    bottom: 4px;
    height: 2px;
    background-color: #fff;
    transform: scaleX(0);
    transform-origin: center;
    transition: transform 0.3s ease;
    border-radius: 2px;
  }

  &:hover {
    color: #fff;

    &::after {
      transform: scaleX(1);
    }
  }
}

.menu-cta {
  margin-left: 12px;
  padding: 10px 22px;
  font-size: 0.74rem;
}

.mobile-actions {
  display: flex;
  align-items: center;
  gap: 4px;
}

.mobile-wpp-btn {
  color: #25d366;
  font-size: 20px;

  .navbar--scrolled & {
    color: #25d366;
  }
}

.mobile-menu-btn {
  color: #fff;
  font-size: 20px;
  transition: color 0.3s ease;
}

// ----- Mobile drawer (custom, teleportado al body) -----
</style>

<style lang="scss">
// Nota: estilos globales porque el drawer está teleportado al body
.mobile-drawer-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(17, 17, 17, 0.55);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  z-index: 5000;
}

.mobile-drawer {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: min(320px, 88vw);
  background: #ffffff;
  z-index: 5001;
  display: flex;
  flex-direction: column;
  box-shadow: -12px 0 40px rgba(17, 17, 17, 0.2);
  font-family: 'Poppins', sans-serif;
  overflow-y: auto;
  overscroll-behavior: contain;
}

.mobile-drawer__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 18px;
  background: linear-gradient(135deg, #111111, #1f2937);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.mobile-drawer__logo {
  height: 44px;
  width: auto;
  border-radius: 6px;
  object-fit: contain;
}

.mobile-drawer__close {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: #fff;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: rotate(90deg);
  }
}

.mobile-drawer__nav {
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  flex: 1;
}

.mobile-drawer__link {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 14px 22px;
  color: #1f2937;
  font-size: 0.98rem;
  font-weight: 500;
  text-decoration: none;
  border-left: 3px solid transparent;
  transition: background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease;

  &:hover,
  &:active {
    background-color: rgba(26, 86, 219, 0.06);
    color: #1a56db;
    border-left-color: #1a56db;
  }
}

.mobile-drawer__link-icon {
  color: #1a56db;
  flex-shrink: 0;
}

.mobile-drawer__link-label {
  flex: 1;
}

.mobile-drawer__footer {
  padding: 16px 18px 22px;
  border-top: 1px solid rgba(17, 17, 17, 0.06);
}

.mobile-drawer__cta {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 14px;
  font-size: 0.82rem;
}

// Transiciones
.drawer-fade-enter-active,
.drawer-fade-leave-active {
  transition: opacity 0.3s ease;
}
.drawer-fade-enter-from,
.drawer-fade-leave-to {
  opacity: 0;
}

.drawer-slide-enter-active,
.drawer-slide-leave-active {
  transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
}
.drawer-slide-enter-from,
.drawer-slide-leave-to {
  transform: translateX(100%);
}
</style>
