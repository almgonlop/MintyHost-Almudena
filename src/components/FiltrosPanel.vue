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
      
      this.filtros = filtros;
      
      this.mostrarApartamentos = false;
    },
    async realizarBusqueda() {
      console.log('Barrio Seleccionado en FiltrosPanel:', this.barrioSeleccionado);
      console.log('Filtros Seleccionados en FiltrosPanel:', this.filtros);

  
      this.$emit('filtrarApartamentos', {
        barrioSeleccionado: this.barrioSeleccionado,
        filtros: this.filtros,
      });

      if (this.mostrarApartamentos) {
        this.$emit('mostrarApartamentos', true);
      }
    },
    filtrarYBuscar() {
      this.mostrarApartamentos = true;

      this.realizarBusqueda();
    },
    mostrarApartamentosHandler() {
 
    },
  },
  watch: {
    
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
  justify-content: space-around; 
  align-items: center;
  max-width: 950px;
  margin: 0 auto;
}
.barrio-select {
  flex: 1; 
  
}

.filter-modal {
  
  flex: 2;
}

.search-button {
  flex: 3;
  margin-right: 25px;
  max-width: 200px;
 
}

@media (max-width: 800px) {
  .filtro-panel {
    flex-direction: column;
    border-radius: 50px;
  }
  .barrio-select,
  .filter-modal,
  .search-button {
    margin-bottom: 10px; 
  }
  
}
</style>
