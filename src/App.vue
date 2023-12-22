<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <div class="bg-yellow-100 text-green-900 font-montserrat">
    ¡Hola, este es mi componente Vue con Tailwind CSS!
  </div>
  <MainPage />
</template>

<script>
import MainPage from './components/MainPage.vue';
export default {
  name: 'App',
  components: {
    MainPage
  }
}
</script>

<style>
#app {
  font-family: Montserrat;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  margin-top: 60px;
}
</style>
