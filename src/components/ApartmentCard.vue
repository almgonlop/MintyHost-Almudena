<template>
  <div class="apartment-card">
    <Swiper
    :pagination="{
      type: 'progressbar',
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper"
    >
      <SwiperSlide v-for="(image, index) in apartamento.pic" :key="index">
        <img :src="image" alt="Apartment Photo" class="apartment-image" />
      </SwiperSlide>
    </Swiper>
    <h3>{{ apartamento.apartment_title }}</h3>
    <p>{{ apartamento.address }}</p>
    <!-- Agrega aquí más detalles del apartamento -->
    <p>Precio Mensual: {{ apartamento.monthly_price }} €</p>
      <p>Hasta {{ apartamento.accommodates_max }} huéspedes</p>
      <p>{{ apartamento.square_meter }} m²</p>
      <p>Dormitorios: {{ apartamento.bedrooms }}</p>
      <p>Cuarto de baños: {{ apartamento.bathrooms }}</p>
      <div class="amenities">
        <p>Comodidades:</p>
        <ul>
          <li v-if="apartamento.amenities.wifi">Wifi</li>
          <li v-if="apartamento.amenities['A/C']">Aire acondicionado</li>
          <li v-if="apartamento.amenities.heating">Calefacción</li>
          <!-- Agrega más amenities según sea necesario -->
        </ul>
      </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

export default {
  components: {
      Swiper,
      SwiperSlide,
    },
  props: {
    apartamento: {
      type: Object,
      required: true,
    },
  },    
  setup() {
      return {
        modules: [Pagination, Navigation],
      };
    },
};
</script>

<style scoped>
/* Agrega estilos según sea necesario */
.apartment-card {
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 8px;
  transition: box-shadow 0.3s ease;
  text-align: center; /* Centrar la imagen */
}

.apartment-card img {
  max-width: 100%; /* Asegurar que la imagen no se desborde del contenedor */
  border-radius: 8px; /* Opcional: redondear las esquinas de la imagen */
}

.apartment-card:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}


</style>
