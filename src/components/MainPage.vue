<template>
  <div class="fondo">
    <div class="contenido">
    <NavbarResponsive />
    <div class="container mx-auto mt-7">
      <FiltrosPanel @filtrarApartamentos="filtrarApartamentos" />
      <transition name="fade">
          <div v-if="cargando" class="loading-overlay">
            <div class="loading-spinner"></div>
          </div>
        </transition>
      <ApartmentList :apartamentos="apartamentosFiltrados" />
      <div v-if="sinResultados" class="mensaje">
        <p>No se encontraron apartamentos con los filtros seleccionados.</p>
      </div>
      
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
      apartamentos: [], 
      apartamentosFiltrados: [], 
      sinResultados: false,
      cargando: false
    };
  },
  methods: {
    async filtrarApartamentos({ barrioSeleccionado, filtros }) {
      console.log('Barrio Seleccionado en MainPage:', barrioSeleccionado);
      console.log('Filtros Seleccionados en MainPage:', filtros);
      this.cargando=true
      const params = {
        bedrooms: filtros.numDormitorios,
        guests: filtros.capacidadMaxima,
        min_price: filtros.rangoPrecio.min,
        max_price: filtros.rangoPrecio.max,
      };

      try {
        const response = await axios.post('https://api.dev.myplazze.com/api/v1/practice/search', params);
        const apartamentosFiltradosGenerales = response.data;

        const apartamentosFiltradosPorBarrio = apartamentosFiltradosGenerales.filter(apartamento => {
          return apartamento.barrio.id === barrioSeleccionado.id;
        });
        this.apartamentosFiltrados = apartamentosFiltradosPorBarrio;
        this.sinResultados = this.apartamentosFiltrados.length === 0;
      } catch (error) {
        console.error('Error al realizar la búsqueda de apartamentos', error);
      } finally {
        this.cargando = false; 
      }
    },
  },
};
</script>

<style scoped>
.mensaje {
  margin-top: 20px; 
  font-weight: bolder;
  font-size: x-large;
  text-align: center;
  background-color: white;
  border-radius: 10px; 
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
  background-color: rgba(255, 255, 255, 0.6); 
  overflow: hidden; 
}
.fondo::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.6); 
  z-index: 1; 
}
.contenido{
  position: relative;
  z-index: 2;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
}

.loading-spinner {
  border: 8px solid #f3f3f3;
  border-top: 8px solid #009483;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
