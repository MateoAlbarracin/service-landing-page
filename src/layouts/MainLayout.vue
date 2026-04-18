<template>
  <q-layout view="hHh lpR fFf" class="main-layout">
    <NavBar />
    <q-page-container class="main-layout__page">
      <router-view />
    </q-page-container>
    <WhatsAppButton />
  </q-layout>
</template>

<script setup>
import NavBar from 'src/components/NavBar.vue'
import WhatsAppButton from 'src/components/WhatsAppButton.vue'
import { useScrollReveal } from 'src/composables/useScrollReveal'

// Activa las animaciones de aparición al hacer scroll en toda la app.
useScrollReveal()
</script>

<style lang="scss" scoped>
.main-layout {
  // Permite que el Hero quede por debajo del header transparente
  :deep(.q-page-container) {
    padding-top: 0 !important;
  }
}
</style>
