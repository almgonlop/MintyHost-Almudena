<template>
  <div class="apartment-list">
    <ApartmentCard v-for="apartamento in uniqueApartamentos" :key="apartamento.id" :apartamento="apartamento" />
  </div>
</template>

<script>
import ApartmentCard from '@/components/ApartmentCard.vue';

export default {
  components: {
    ApartmentCard
  },
  props: {
    apartamentos: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    uniqueApartamentos() {
      // Utiliza un conjunto (Set) para eliminar duplicados
      const uniqueSet = new Set(this.apartamentos.map(apartamento => apartamento.id));
      // Convierte el conjunto nuevamente a una matriz
      return Array.from(uniqueSet, id => this.apartamentos.find(apartamento => apartamento.id === id));
    }
  }
};
</script>

<style scoped>
/* Estilos específicos para la lista de apartamentos */
.apartment-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* Centra las tarjetas horizontalmente */
  gap: 20px;
  margin-top: 20px;
}
@media (max-width: 768px) {
  .apartment-list {
    grid-template-columns: 1fr; /* Cambia a una columna en pantallas más pequeñas */
  }
}
</style>
