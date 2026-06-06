<template>
  <i :class="classes" :style="styles" aria-hidden="true">{{ ligature }}</i>
</template>

<script setup>
import { computed } from 'vue'

// Reemplazo liviano de q-icon. Replica su API (name / size / color) para no
// tener que reescribir todos los íconos del sitio.
//  - "fab fa-whatsapp" (FontAwesome) -> <i class="fab fa-whatsapp">
//  - "schedule" (Material Icons)     -> <i class="material-icons">schedule</i>
const props = defineProps({
  name: { type: String, required: true },
  size: { type: String, default: '' },
  color: { type: String, default: '' }
})

const BRAND = {
  white: '#ffffff',
  primary: '#1a56db',
  secondary: '#dc2626',
  accent: '#111111',
  dark: '#111111',
  positive: '#16a34a',
  negative: '#dc2626',
  info: '#1a56db',
  warning: '#f59e0b'
}

const isFontAwesome = computed(() => /(^|\s)(fab|fas|far|fal|fad|fa-[a-z]+)(\s|$)/.test(props.name))
const classes = computed(() => ['app-icon', isFontAwesome.value ? props.name : 'material-icons'])
const ligature = computed(() => (isFontAwesome.value ? '' : props.name))
const styles = computed(() => ({
  fontSize: props.size || null,
  color: props.color ? (BRAND[props.color] || props.color) : null
}))
</script>

<style scoped>
.app-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  vertical-align: middle;
  font-size: 1.25em;
  font-style: normal;
  flex-shrink: 0;
}
</style>
