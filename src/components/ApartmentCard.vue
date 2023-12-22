<template>
    <div>
      <h2>{{ apartamento.title }}</h2>
      <!-- Agrega más elementos y estilos según tus necesidades -->
      <p>carta apartamento</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      apartamento: {
        type: Object,
        default: () => ({})
      }
    }
  };
  </script>
  
  <style scoped>
  /* Estilos específicos para la tarjeta de apartamento */
  </style>
  