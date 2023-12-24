<template>
  <div :class="listadoClass">
    <a href="#" class="pagina-link">Viviendas</a>
    <a href="#" class="pagina-link">Contacto</a>
    <a href="#" class="pagina-link">Preguntas</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listadoClass: 'flex', 
    };
  },
  mounted() {
    this.checkScreenWidth();
    window.addEventListener('resize', this.checkScreenWidth);
  },
  beforeunmont() {
    window.removeEventListener('resize', this.checkScreenWidth);
  },
  methods: {
    checkScreenWidth() {
      this.listadoClass = window.innerWidth < 768 ? 'flex flex-col p-4' : 'flex';
    },
  },
};
</script>

<style scoped>
.pagina-link {
  color: white;
  margin: 0rem 2.5rem; 
  font-size: 1.25rem; 
  text-decoration: none; 
  transition: color 0.3s; 
  
}

.pagina-link:hover {
  color: #FFD700; 
}

@media (max-width: auto) {
  .flex.flex-col {
    flex-direction: column;
  }
}
</style>
