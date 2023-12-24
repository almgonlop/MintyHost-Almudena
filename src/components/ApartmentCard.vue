<!-- ApartamentoCard.vue -->
<template>
  <div class="apartment-card">
    <div class="image-container">
      <Swiper
        :pagination="{ type: 'progressbar' }"
        :navigation="true"
        :modules="modules"
        class="mySwiper"
      >
        <SwiperSlide v-for="(image, index) in apartamento.pic" :key="index">
          <img :src="image" alt="Apartment Photo" class="apartment-image" />
        </SwiperSlide>
      </Swiper>
    </div>
    <div class="text-container">
      <h3 class="titulo">{{ apartamento.apartment_title }}</h3>
      <p class="direccion">{{ apartamento.address }}</p>
      <!-- Otros detalles del apartamento aquí -->
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
/* Estilos específicos para la tarjeta de apartamento */
.apartment-card {
  display: flex;
  border: 2px solid #009483;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 8px;
  max-width: 80%; 
  transition: box-shadow 0.3s ease;
}

.image-container {
  flex: 1;
  max-width: 400px; /* Ajusta el tamaño máximo de la imagen según sea necesario */
}

.text-container {
  flex: 2;
  padding-left: 20px; /* Ajusta el espaciado entre la imagen y el texto según sea necesario */
}

.apartment-card img {
  max-width: 100%;
  border-radius: 8px;
}

.apartment-card:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.titulo{
  font-size: x-large;
  font-weight: bold;
}
</style>
