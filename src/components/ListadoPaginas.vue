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
      listadoClass: 'flex', // Por defecto, el ListadoPaginas es horizontal
    };
  },
  mounted() {
    // Verifica si es una pantalla pequeña y cambia la clase según sea necesario
    this.checkScreenWidth();
    // Agrega un listener para verificar el tamaño de la pantalla cuando cambie
    window.addEventListener('resize', this.checkScreenWidth);
  },
  beforeunmont() {
    // Limpia el listener al destruir el componente
    window.removeEventListener('resize', this.checkScreenWidth);
  },
  methods: {
    checkScreenWidth() {
      // Cambia la clase según el ancho de la pantalla
      this.listadoClass = window.innerWidth < 768 ? 'flex flex-col p-4' : 'flex';
    },
  },
};
</script>

<style scoped>
/* Estilos específicos para ListadoPaginas */

.pagina-link {
  color: white;
  margin: 0rem 2.5rem; /* Ajusta el espacio entre enlaces según tus necesidades */
  font-size: 1.25rem; /* Tamaño del texto grande */
  text-decoration: none; /* Elimina el subrayado del enlace */
  transition: color 0.3s; /* Agrega una transición de color suave */
  
}

.pagina-link:hover {
  color: #FFD700; /* Cambia el color a amarillo al pasar el ratón por encima */
}

/* Estilo adicional para la versión móvil */
@media (max-width: auto) {
  .flex.flex-col {
    flex-direction: column;
  }
}
</style>
