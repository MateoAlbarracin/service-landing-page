<template>
  <q-layout view="hHh lpR fFf">
    <NavBar />
    <q-page-container>
      <router-view />
    </q-page-container>
    <WhatsAppButton />
  </q-layout>
</template>

<script setup>
import NavBar from 'src/components/NavBar.vue'
import WhatsAppButton from 'src/components/WhatsAppButton.vue'
</script>
