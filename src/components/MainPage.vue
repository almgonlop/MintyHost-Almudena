<template>
    <div>
      <p>HOlaaaa</p>
      <NavbarResponsive />
      <div class="container mx-auto mt-8">
        <LogoMintyHost />
        <ListadoPaginas />
        <SelectorIdioma />
        <FiltrosPanel />
        <ApartmentList />
      </div>
    </div>
  </template>
  
  <script>
  import NavbarResponsive from './NavbarResponsive.vue';
  import LogoMintyHost from './LogoMintyHost.vue';
  import ListadoPaginas from './ListadoPaginas.vue';
  import SelectorIdioma from './SelectorIdioma.vue';
  import FiltrosPanel from './FiltrosPanel.vue';
  import ApartmentList from './ApartmentList.vue';
  
  export default {
    components: {
      NavbarResponsive,
      LogoMintyHost,
      ListadoPaginas,
      SelectorIdioma,
      FiltrosPanel,
      ApartmentList,
    },
  };
  </script>
  
  <style>
  /* Estilos específicos para MainPage si es necesario */
  </style>
  