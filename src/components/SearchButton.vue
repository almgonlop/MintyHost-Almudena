<!-- SearchButton.vue -->
<template>
  <button @click="filtrarYBuscar">Buscar</button>
</template>

<script>
export default {
  methods: {
    filtrarYBuscar() {
      // Emite el evento con la información necesaria
      this.$emit('filtrarYBuscar');
    },
  },
};
</script>

<style scoped>
/* Estilos específicos para el botón de búsqueda */
</style>
