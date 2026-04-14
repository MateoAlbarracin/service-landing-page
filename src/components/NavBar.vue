<template>
  <q-header class="navbar" bordered>
    <q-toolbar class="container navbar-toolbar">
      <a href="#inicio" class="navbar-logo">
        <img
          src="/src/assets/logo.png"
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

      <!-- Mobile drawer -->
      <q-drawer
        v-model="mobileMenu"
        side="right"
        overlay
        behavior="mobile"
        :width="280"
        class="mobile-drawer"
      >
        <q-list>
          <q-item class="drawer-header">
            <q-item-section>
              <q-item-label class="text-h6 text-weight-bold">Menú</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-btn flat round dense icon="close" @click="mobileMenu = false" />
            </q-item-section>
          </q-item>

          <q-separator />

          <q-item
            v-for="item in menuItems"
            :key="item.label"
            clickable
            :href="item.link"
            tag="a"
            @click="mobileMenu = false"
            class="drawer-item"
          >
            <q-item-section avatar>
              <q-icon :name="item.icon" color="primary" />
            </q-item-section>
            <q-item-section class="drawer-item-label">{{ item.label }}</q-item-section>
          </q-item>

          <q-separator class="q-my-sm" />

          <q-item class="drawer-cta-wrapper">
            <q-item-section>
              <a
                href="https://wa.me/message/EVCEHGK4VV3GD1"
                target="_blank"
                rel="noopener"
                class="btn-primary drawer-cta"
              >
                <q-icon name="fab fa-whatsapp" class="q-mr-sm" />
                Contactar por WhatsApp
              </a>
            </q-item-section>
          </q-item>
        </q-list>
      </q-drawer>
    </q-toolbar>
  </q-header>
</template>

<script setup>
import { ref } from 'vue'

const mobileMenu = ref(false)

const menuItems = [
  { label: 'Inicio', link: '#inicio', icon: 'home' },
  { label: 'Servicios', link: '#servicios', icon: 'build' },
  { label: 'Trabajos', link: '#trabajos', icon: 'photo_library' },
  { label: 'Testimonios', link: '#testimonios', icon: 'star' },
  { label: 'Contacto', link: '#contacto', icon: 'contact_phone' }
]
</script>

<style lang="scss" scoped>
.navbar {
  background-color: #ffffff;
  height: 64px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.06);

  @media (min-width: 1024px) {
    height: 70px;
  }
}

.navbar-toolbar {
  max-width: 1200px;
  margin: 0 auto;
  height: 64px;
  padding: 0 16px;

  @media (min-width: 1024px) {
    height: 70px;
    padding: 0 20px;
  }
}

.navbar-logo {
  display: flex;
  align-items: center;
}

.logo-img {
  height: 42px;
  width: auto;

  @media (min-width: 1024px) {
    height: 50px;
  }
}

.desktop-menu {
  display: flex;
  align-items: center;
  gap: 8px;
}

.menu-link {
  padding: 8px 16px;
  color: #1f2937;
  font-size: 0.9rem;
  font-weight: 500;
  transition: color 0.2s linear;
  font-family: 'Poppins', sans-serif;

  &:hover {
    color: #1a56db;
  }
}

.menu-cta {
  margin-left: 8px;
  padding: 10px 20px;
  font-size: 0.75rem;
  display: inline-flex;
  align-items: center;
}

.mobile-actions {
  display: flex;
  align-items: center;
  gap: 4px;
}

.mobile-wpp-btn {
  color: #25d366;
  font-size: 20px;
}

.mobile-menu-btn {
  color: #111;
  font-size: 20px;
}

.mobile-drawer {
  font-family: 'Poppins', sans-serif;
}

.drawer-header {
  padding: 16px;
}

.drawer-item {
  padding: 12px 16px;
}

.drawer-item-label {
  font-size: 1rem;
  font-weight: 500;
}

.drawer-cta-wrapper {
  padding: 4px 16px;
}

.drawer-cta {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  width: 100%;
  text-align: center;
  font-size: 0.85rem;
}
</style>
