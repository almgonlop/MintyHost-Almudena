<template>
  <div>
    <BarrioSelect @barrioSeleccionado="actualizarBarrio" />
    <FilterModal @aplicarFiltros="aplicarFiltros" />
    <SearchButton @buscar="realizarBusqueda" />
  </div>
</template>

<script>
import BarrioSelect from '@/components/BarrioSelect.vue';
import FilterModal from '@/components/FilterModal.vue';
import SearchButton from '@/components/SearchButton.vue';

export default {
  components: {
    BarrioSelect,
    FilterModal,
    SearchButton,
  },
  data() {
    return {
      barrioSeleccionado: null,
      filtros: {
        numDormitorios: null,
        capacidadMaxima: null,
        rangoPrecio: {
          min: null,
          max: null,
        },
      }
    };
  },
  methods: {
    actualizarBarrio(barrioId) {
      this.barrioSeleccionado = barrioId;
    },
    aplicarFiltros(filtros) {
      this.filtros = filtros;
    },
    realizarBusqueda() {
      // Aquí puedes utilizar this.barrioSeleccionado y this.filtros para realizar la búsqueda.
      console.log('Barrio Seleccionado en FiltrosPanel:', this.barrioSeleccionado);
      console.log('Filtros Seleccionados en FiltrosPanel:', this.filtros);
      
      // Luego, emite un evento para que MainPage realice la acción de filtrar
      this.$emit('filtrarApartamentos', {
        barrioSeleccionado: this.barrioSeleccionado,
        filtros: this.filtros
});

    },
    
  },
};
</script>


<style scoped>
/* Estilos específicos para el panel de filtros */
</style>
