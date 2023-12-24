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
      <div class="title-container">
        <h3 class="titulo">{{ apartamento.apartment_title }}</h3>
        <span class="precio">{{ apartamento.monthly_price }} €/mes</span>
      </div>
      <p class="direccion">{{ apartamento.address }}</p>
      
      <div class="details-container">
        <p><strong>Hasta:</strong> {{ apartamento.accommodates_max }} huéspedes</p>
        <p><strong>Tamaño:</strong> {{ apartamento.square_meter }} m²</p>
        <p><strong>Dormitorios:</strong> {{ apartamento.bedrooms }}</p>
        <p><strong>Cuarto de baños:</strong> {{ apartamento.bathrooms }}</p>
    </div>
      <div class="amenities">
        <ul>
          <li v-if="apartamento.amenities.wifi">
            
            <div class="tooltip">
              <img class="icon" src="@/assets/wi-fi.png" alt="Wifi Icon" title="Wifi">
                <span class="tooltiptext">Wi-fi</span>
            </div> 
          </li>
          <li v-if="apartamento.amenities['A/C']">
            <div class="tooltip">
              <img class="icon" src="@/assets/air-conditioner.png" alt="Aire Acondicionado" title="Wifi">
                <span class="tooltiptext">Aire Acondicionado</span>
            </div> 
          </li>
          <li v-if="apartamento.amenities.heating">
            <div class="tooltip">
              <img class="icon" src="@/assets/fire.png" alt="Calefacción" title="Wifi">
                <span class="tooltiptext">Calefacción</span>
            </div> 
          </li>
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
.apartment-card {
  display: flex;
  justify-content: start;
  border: 2px solid #009483;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 8px;
  width: 900px;
  background-color: #ffffffdf;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.314); 
  transition: box-shadow 0.3s ease;
}

.image-container {
  flex: 1;
  max-width: 400px; 
}

.text-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 20px;
}
.title-container {
  display: grid;
  grid-template-columns: 1fr auto; 
  align-items: baseline; 
}
.apartment-card img {
  max-width: 100%;
  border-radius: 8px;
  
}

.apartment-card:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.precio {
  font-size: large;
  font-weight: bold;
}

.direccion {
  font-weight: bold;
  margin-bottom: 10px;
}

.text-container {
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.titulo {
  margin-bottom: 10px;
  font-size: x-large;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
}



.details-container {
  margin-top: 10px;
}

.amenities {
  margin-top: 10px;
}

.amenities p {
  margin-bottom: 5px;
}



.amenities li {
  display: inline-block;
  margin-right: 10px;
  font-size: 0.9rem;
}

.icon {
  width: 35px; 
  height: 35px;
  margin-right: 0.1rem; 
}

.tooltip {
  position: relative;
  display: inline-block;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}

.tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: #333;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -60px; 
  opacity: 0;
  transition: opacity 0.3s;
}
@media (max-width: 600px) {
  .apartment-card {
    width: 100%; 
    flex-direction: column;
  }

  .text-container {
    margin-top: 0;
  }

  .title-container {
    flex-direction: column;
  }
  .image-container {
  max-width: 100%;
  border-radius: 8px;
  margin: auto;
  
}
}
</style>
