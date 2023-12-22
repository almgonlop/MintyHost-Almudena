<template>
  <div>
    <BarrioSelect @barrioSeleccionado="actualizarBarrio" />
    <FilterModal @aplicarFiltros="aplicarFiltros" />
    <SearchButton @filtrarYBuscar="filtrarYBuscar" />
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
      },
      mostrarApartamentos: false
    };
  },
  methods: {
    actualizarBarrio(barrioId) {
      this.barrioSeleccionado = barrioId;
    },
    aplicarFiltros(filtros) {
      // Aplica los filtros directamente
      this.filtros = filtros;
      // Actualiza la bandera para mostrar los apartamentos
      this.mostrarApartamentos = false;
    },
    async realizarBusqueda() {
      // Aquí puedes utilizar this.barrioSeleccionado y this.filtros para realizar la búsqueda.
      console.log('Barrio Seleccionado en FiltrosPanel:', this.barrioSeleccionado);
      console.log('Filtros Seleccionados en FiltrosPanel:', this.filtros);

      // Luego, emite un evento para que MainPage realice la acción de filtrar
      this.$emit('filtrarApartamentos', {
        barrioSeleccionado: this.barrioSeleccionado,
        filtros: this.filtros,
      });

      // Mostrar los apartamentos solo si la bandera está activada
      if (this.mostrarApartamentos) {
        this.$emit('mostrarApartamentos', true);
      }
    },
    filtrarYBuscar() {
      // Actualiza la bandera para mostrar los apartamentos
      this.mostrarApartamentos = true;
      // Realiza la acción de filtrar y buscar con los valores de FiltrosPanel
      this.realizarBusqueda();
    },
    mostrarApartamentosHandler() {
      // Si es necesario, realiza alguna acción cuando se debe mostrar los apartamentos
      // ...
    },
  },
  watch: {
    // Watcher para la bandera mostrarApartamentos
    mostrarApartamentos: {
      handler() {
        this.mostrarApartamentosHandler();
      },
    },
  },
};
</script>

<style scoped>
/* Estilos específicos para el panel de filtros */
</style>
