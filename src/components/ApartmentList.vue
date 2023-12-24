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
      const uniqueSet = new Set(this.apartamentos.map(apartamento => apartamento.id));
      return Array.from(uniqueSet, id => this.apartamentos.find(apartamento => apartamento.id === id));
    }
  }
};
</script>

<style scoped>
.apartment-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
}
@media (max-width: 768px) {
  .apartment-list {
    grid-template-columns: 1fr; 
  }
}
</style>
