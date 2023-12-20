<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <div class="bg-yellow-100 text-green-900 font-montserrat">
    ¡Hola, este es mi componente Vue con Tailwind CSS!
  </div>
  
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ed0c0c;
  margin-top: 60px;
}
</style>
