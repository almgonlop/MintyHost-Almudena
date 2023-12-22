<template>
  <div>
    <NavbarResponsive />
    <div class="container mx-auto mt-7">
    <LogoMintyHost />
    <ListadoPaginas />
    <SelectorIdioma />
    <FiltrosPanel @filtrarApartamentos="filtrarApartamentos" />
    <ApartmentList :apartamentos="apartamentosFiltrados" />
        <!-- Mostrar los apartamentos filtrados -->
        <div v-if="apartamentosFiltrados.length > 0">
      <h2>Apartamentos Filtrados:</h2>
      <ul>
        <li v-for="apartamento in apartamentosFiltrados" :key="apartamento.id">
          {{ apartamento.apartment_title }} - {{ apartamento.address }}
        </li>
      </ul>
    </div>
  </div>
  </div>
</template>

<script>
import NavbarResponsive from '@/components/NavbarResponsive.vue';
import LogoMintyHost from '@/components/LogoMintyHost.vue';
import ListadoPaginas from '@/components/ListadoPaginas.vue';
import SelectorIdioma from '@/components/SelectorIdioma.vue';
import FiltrosPanel from '@/components/FiltrosPanel.vue';
import ApartmentList from '@/components/ApartmentList.vue';
import axios from 'axios';

export default {
  components: {
    NavbarResponsive,
    LogoMintyHost,
    ListadoPaginas,
    SelectorIdioma,
    FiltrosPanel,
    ApartmentList
  },
  data() {
    return {
      apartamentos: [], // Almacenar la lista de todos los apartamentos
      apartamentosFiltrados: [] // Almacenar la lista de apartamentos después de aplicar filtros
    };
  },
  methods: {
    filtrarApartamentos({ barrioSeleccionado, filtros }) {
  console.log('Barrio Seleccionado en MainPage:', barrioSeleccionado);
  console.log('Filtros Seleccionados en MainPage:', filtros);

  // Verifica que filtros sea un objeto válido antes de acceder a sus propiedades
  if (filtros && typeof filtros === 'object') {
    // Utiliza la información recibida para construir la solicitud a la API, por ejemplo:
    const params = {
      barrio_id: barrioSeleccionado,
      bedrooms: filtros.numDormitorios,
      guests: filtros.capacidadMaxima,
      min_price: filtros.rangoPrecio && filtros.rangoPrecio.min,
      max_price: filtros.rangoPrecio && filtros.rangoPrecio.max,
    };

    console.log('Parámetros de búsqueda:', params);

    // Realiza la solicitud a la API utilizando Axios u otra biblioteca
    axios.post('https://api.dev.myplazze.com/api/v1/practice/search', params)
      .then(response => {
        console.log('Respuesta de la búsqueda de apartamentos:', response.data);
        // Almacena la respuesta en la propiedad de datos
        this.apartamentosFiltrados = response.data;
      })
      .catch(error => {
        console.error('Error al realizar la búsqueda de apartamentos', error);
      });
  } else {
    console.error('Filtros no válidos:', filtros);
  }
}
  },
};
</script>

<style scoped>
/* Estilos específicos para la página principal */
</style>
