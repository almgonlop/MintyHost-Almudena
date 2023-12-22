<template>
  <div>
    <ApartmentCard v-for="apartamento in apartamentos" :key="apartamento.id" :apartamento="apartamento" />
    <p>lista apartamentos</p>
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
  }
};
</script>

<style scoped>
/* Estilos específicos para la lista de apartamentos */
</style>
