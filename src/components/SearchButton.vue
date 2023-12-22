<template>
  <button @click="buscar">Buscar</button>
</template>

<script>
export default {
  methods: {
    buscar() {
      this.$emit('buscar');
    },
  },
};
</script>


<style scoped>
/* Estilos específicos para el botón de búsqueda */
</style>
