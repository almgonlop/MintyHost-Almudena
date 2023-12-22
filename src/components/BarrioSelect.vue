<template>
  <select v-model="selectedBarrio" @change="emitBarrioSeleccionado">
    <option v-for="barrio in barrios" :key="barrio.id" :value="barrio.id">{{ barrio.name }}</option>
  </select>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      selectedBarrio: null,
      barrios: [],
    };
  },
  mounted() {
    this.cargarBarrios();
  },
  methods: {
    cargarBarrios() {
      axios.get('https://api.dev.myplazze.com/api/v1/practice/barrios')
        .then(response => {
          this.barrios = response.data;
          console.log('Barrios cargados con éxito:', this.barrios);
        })
        .catch(error => {
          console.error('Error al cargar la lista de barrios', error);
        });
    },
    emitBarrioSeleccionado() {
  const barrioSeleccionado = this.barrios.find(barrio => barrio.id === this.selectedBarrio);
  console.log('Barrio seleccionado (ID):', this.selectedBarrio);
  console.log('Barrio seleccionado (objeto):', barrioSeleccionado);
  this.$emit('barrioSeleccionado', barrioSeleccionado);
}


  },
};
</script>


<style scoped>
/* Estilos específicos para el selector de barrios */
</style>
