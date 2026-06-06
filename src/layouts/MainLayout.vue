<template>
  <div class="main-layout">
    <StructuredData />
    <NavBar />
    <main class="main-layout__page">
      <router-view />
    </main>
    <WhatsAppButton />
  </div>
</template>

<script setup>
import NavBar from 'src/components/NavBar.vue'
import WhatsAppButton from 'src/components/WhatsAppButton.vue'
import StructuredData from 'src/components/StructuredData.vue'
import { useScrollReveal } from 'src/composables/useScrollReveal'

// Activa las animaciones de aparición al hacer scroll en toda la app.
useScrollReveal()
</script>

<style lang="scss" scoped>
// El header es fixed y transparente, así que el contenido arranca arriba de todo
// (el Hero queda por debajo del header). No hace falta padding-top.
.main-layout__page {
  padding-top: 0;
}
</style>
