<template>
  <div>
    <NavbarResponsive />
    <div class="container mx-auto mt-7">
      <FiltrosPanel @filtrarApartamentos="filtrarApartamentos" />
      <ApartmentList :apartamentos="apartamentosFiltrados" />
      <!-- Mostrar mensaje si no hay resultados -->
      <div v-if="sinResultados">
        <p>No se encontraron apartamentos con los filtros seleccionados.</p>
      </div>
      <!-- Mostrar mensaje por defecto -->
      <div v-else-if="apartamentosFiltrados.length === 0">
        <p>Selecciona un barrio y aplica filtros para buscar apartamentos.</p>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarResponsive from '@/components/NavbarResponsive.vue';
import FiltrosPanel from '@/components/FiltrosPanel.vue';
import ApartmentList from '@/components/ApartmentList.vue';
import axios from 'axios';

export default {
  components: {
    NavbarResponsive,
    FiltrosPanel,
    ApartmentList
  },
  data() {
    return {
      apartamentos: [], // Almacenar la lista de todos los apartamentos
      apartamentosFiltrados: [], // Almacenar la lista de apartamentos después de aplicar filtros
      sinResultados: false
    };
  },
  methods: {
    async filtrarApartamentos({ barrioSeleccionado, filtros }) {
      console.log('Barrio Seleccionado en MainPage:', barrioSeleccionado);
      console.log('Filtros Seleccionados en MainPage:', filtros);

      // Construir la solicitud a la API utilizando los filtros generales
      const params = {
        bedrooms: filtros.numDormitorios,
        guests: filtros.capacidadMaxima,
        min_price: filtros.rangoPrecio.min,
        max_price: filtros.rangoPrecio.max,
      };

      try {
        // Realizar la solicitud a la API para obtener los apartamentos según los filtros generales
        const response = await axios.post('https://api.dev.myplazze.com/api/v1/practice/search', params);
        const apartamentosFiltradosGenerales = response.data;

        // Filtrar los apartamentos obtenidos por el barrio seleccionado
        const apartamentosFiltradosPorBarrio = apartamentosFiltradosGenerales.filter(apartamento => {
          return apartamento.barrio.id === barrioSeleccionado.id;
        });
        // Almacenar la lista final de apartamentos filtrados
        this.apartamentosFiltrados = apartamentosFiltradosPorBarrio;
        // Verificar si no hay resultados
        this.sinResultados = this.apartamentosFiltrados.length === 0;
      } catch (error) {
        console.error('Error al realizar la búsqueda de apartamentos', error);
      }
    },
  },
};
</script>

<style scoped>
/* Estilos específicos para la página principal */
</style>
