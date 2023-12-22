<template>
  <div class="bg-green-900 p-4">
    <button @click="abrirModal">Abrir Modal</button>
    <div v-if="mostrarModal">
      <label>Rango de Precio:</label>
      <input type="number" v-model="rangoPrecio.min" placeholder="Mínimo">
      <input type="number" v-model="rangoPrecio.max" placeholder="Máximo">
      
      <label>Número de Dormitorios:</label>
      <input type="number" v-model="numDormitorios">
      
      <label>Capacidad Máxima de Huéspedes:</label>
      <input type="number" v-model="capacidadMaxima">
      
      <button @click="aplicarFiltros">Aplicar Filtros</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mostrarModal: false,
      rangoPrecio: {
        min: 1,
        max: 30000,
      },
      numDormitorios: 1,
      capacidadMaxima: 3,
    };
  },
  methods: {
    abrirModal() {
      this.mostrarModal = true;
    },
    cerrarModal() {
      this.mostrarModal = false;
    },
    aplicarFiltros() {
      this.$emit('aplicarFiltros', {
        rangoPrecio: { min: this.rangoPrecio.min, max: this.rangoPrecio.max },
        numDormitorios: this.numDormitorios,
        capacidadMaxima: this.capacidadMaxima,
      });
      // Mueve esta línea fuera del método para que el modal no se cierre automáticamente
      // this.cerrarModal();
    },
  },
};
</script>


<style scoped>
/* Estilos específicos para el modal de filtros */
</style>
