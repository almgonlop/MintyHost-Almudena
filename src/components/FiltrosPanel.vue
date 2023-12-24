<template>
  <div class="filtro-panel">
    <BarrioSelect class="barrio-select" @barrioSeleccionado="actualizarBarrio" />
    <FilterModal class="filter-modal" @aplicarFiltros="aplicarFiltros" />
    <SearchButton class="search-button" @filtrarYBuscar="filtrarYBuscar" />
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
.filtro-panel {
  padding: 0.5rem;
  border: 2px solid #FFD558;
  background-color: #FFD558;
  border-radius: 999px;
  display: flex;
  justify-content: space-around; /* Ajusta según tu preferencia */
  align-items: center;
  max-width: 950px;
  margin: 0 auto;
}
.barrio-select {
  flex: 1; /* Hace que BarrioSelect tome todo el espacio disponible */
  
}

.filter-modal {
  /* Agrega estilos según sea necesario */
  flex: 2;
}

.search-button {
  flex: 3;
  margin-right: 25px;
  max-width: 200px;
  /* Agrega estilos según sea necesario */
}

/* Responsive layout - cambia a diseño de columna en lugar de dos columnas */
@media (max-width: 800px) {
  .filtro-panel {
    flex-direction: column;
  }
  .barrio-select,
  .filter-modal,
  .search-button {
    margin-bottom: 10px; /* Ajusta el margen inferior según tus necesidades */
  }
  
}
</style>
