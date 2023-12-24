<template>
  <div class="fondo">
    <div class="contenido">
    <NavbarResponsive />
    <div class="container mx-auto mt-7">
      <FiltrosPanel @filtrarApartamentos="filtrarApartamentos" />
      <ApartmentList :apartamentos="apartamentosFiltrados" />
      <!-- Mostrar mensaje si no hay resultados -->
      <div v-if="sinResultados" class="mensaje">
        <p>No se encontraron apartamentos con los filtros seleccionados.</p>
      </div>
      <!-- Mostrar mensaje por defecto -->
      <div v-else-if="apartamentosFiltrados.length === 0" class="mensaje">
        <p>Selecciona un barrio y aplica filtros para buscar apartamentos.</p>
      </div>
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
.mensaje {
  margin-top: 20px; /* Ajusta la separación según tus necesidades */
  font-weight: bolder;
  font-size: x-large;
  text-align: center;
  background-color: white;
  border-radius: 10px; /* Ajusta el radio de las esquinas según tus necesidades */
  padding: 20px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}
.fondo{
  background-image: url('@/assets/imagen.jpg');
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.6); /* Color blanco semitransparente */
  overflow: hidden; /* Evita el desbordamiento horizontal */
}
.fondo::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.6); /* Color blanco semitransparente */
  z-index: 1; /* Asegura que esta capa esté encima de la imagen de fondo */
}
.contenido{
  position: relative;
  z-index: 2;
}
</style>
