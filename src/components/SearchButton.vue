<!-- SearchButton.vue -->
<template>
  <button class="search-button" @click="filtrarYBuscar">
    <img class="icon" :src="require('@/assets/search.png')" alt="Search icon" />
    Buscar
  </button>
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
.search-button {
  position: relative;
  display: flex;
  justify-content: center; /* Centra los elementos horizontalmente */
  align-items: center;
  padding: 0.5rem 1rem;
  border: 1px solid #006400;
  border-radius: 35px;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.668);
  font-weight: 500;
  margin-left: 10px; /* Ajusta el margen izquierdo según tus necesidades */
  margin-right: 10px; /* Ajusta el margen derecho según tus necesidades */
}

.search-button:hover {
  background-color: #c9ffd4;
  transform: scale(1.05);
}

.icon {
  width: 16px;
  height: 16px;
  margin-right: 0.2rem;
  margin-top: 3px;
}
</style>
