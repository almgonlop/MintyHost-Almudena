<template>
  <div class="apartment-card">
    <h3>{{ apartamento.apartment_title }}</h3>
    <p>{{ apartamento.address }}</p>
    <!-- Agrega aquí más detalles del apartamento -->
  </div>
</template>

<script>
export default {
  props: {
    apartamento: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
/* Agrega estilos según sea necesario */
.apartment-card {
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 8px;
  transition: box-shadow 0.3s ease;
}

.apartment-card:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>
