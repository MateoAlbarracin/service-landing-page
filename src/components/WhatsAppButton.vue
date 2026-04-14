<template>
  <a
    href="https://wa.me/message/EVCEHGK4VV3GD1"
    target="_blank"
    rel="noopener noreferrer"
    class="whatsapp-btn"
    aria-label="Contactar por WhatsApp"
  >
    <q-icon name="fab fa-whatsapp" size="32px" color="white" />
  </a>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.whatsapp-btn {
  position: fixed;
  bottom: 24px;
  right: 24px;
  width: 60px;
  height: 60px;
  background-color: #25d366;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(37, 211, 102, 0.4);
  z-index: 9999;
  transition: transform 0.3s ease;
  animation: pulse 1.8s infinite;

  &:hover {
    transform: scale(1.1);
  }
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7);
  }
  70% {
    box-shadow: 0 0 0 14px rgba(37, 211, 102, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
  }
}
</style>
