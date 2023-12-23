<!-- src/components/NavbarResponsive.vue -->
<template>
  <nav class="bg-green-900 p-4">
    <div class="container mx-auto flex justify-between items-center">
      <!-- Logo Minty Host (Desktop) -->
      <div class="md:flex items-center">
        <LogoMintyHost />
      </div>

      <!-- Navbar Links (Desktop) -->
      <div class="hidden md:flex space-x-4 text-white">
        <ListadoPaginas />
      </div>

      <!-- Selector de Idioma (Desktop) -->
      <div class="hidden md:flex">
        <SelectorIdioma />
      </div>

      <!-- Hamburger Icon (Mobile) -->
      <div class="md:hidden">
        <button @click="toggleNavbar" class="hamburger-btn">
          <svg
            class="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      <!-- Responsive Navbar Links (Mobile) -->
      <div class="mobile-menu" :class="{ 'hidden': !navbarOpen }">
        <div class="mobile-menu-content">
          <ListadoPaginas class="mb-5"/>
          <SelectorIdioma />
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import LogoMintyHost from '@/components/LogoMintyHost.vue';
import ListadoPaginas from '@/components/ListadoPaginas.vue';
import SelectorIdioma from '@/components/SelectorIdioma.vue';

export default {
  components: {
    LogoMintyHost,
    ListadoPaginas,
    SelectorIdioma,
  },
  data() {
    return {
      navbarOpen: false,
    };
  },
  created() {
    // Cambia la clase según el ancho de la pantalla
    this.listadoClass = window.innerWidth < 768 ? 'flex flex-col p-4' : 'flex';

    // Añade un listener al evento resize
    window.addEventListener('resize', this.handleResize);
  },
  unmounted() {
    // Limpia el listener cuando se destruye el componente
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    toggleNavbar() {
      this.navbarOpen = !this.navbarOpen;
      console.log('Toggle Navbar clicked', this.navbarOpen);
    },
    closeNavbar() {
      this.navbarOpen = false;
    },
    handleResize() {
      // Cierra el menú si está abierto y el ancho es mayor que 768 píxeles
      if (this.navbarOpen && window.innerWidth >= 768) {
        this.navbarOpen = false;
      }
    },
  },
};
</script>

<style scoped>
/* Estilos específicos para NavbarResponsive */

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}


.hamburger-btn {
  color: white;
  cursor: pointer;
  transition: color 0.3s;
}

.hamburger-btn:hover {
  color: #FFD700;
}


.mobile-menu {
  position: absolute;
  top: 70px;
  right: 0;
  left: 0; /* Ajuste para ocupar todo el ancho */
  background-color: #16BCA9;
  padding: 1rem;
  border-radius: 8px;
}
.mobile-menu-content {
  padding: 1rem; /* Ajusta el margen interior según tus necesidades */
}
.mobile-menu-content a {
  display: block;
  margin-bottom: 0.5rem; /* Ajusta el margen entre enlaces según tus necesidades */
  color: white;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s;
}

.mobile-menu a:hover {
  color: #FFD700;
}
</style>
