
<template>
  <nav class="bg-green-900 p-4">
    <div class="container mx-auto flex justify-between items-center">
      <div class="md:flex items-center">
        <LogoMintyHost />
      </div>

      <div class="hidden md:flex space-x-4 text-white">
        <ListadoPaginas />
      </div>

      <div class="hidden md:flex">
        <SelectorIdioma />
      </div>

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

      <div class="mobile-menu" :class="{ 'hidden': !navbarOpen }" @click="closeNavbarOutside">
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
    this.listadoClass = window.innerWidth < 770 ? 'flex flex-col p-4' : 'flex';

    window.addEventListener('resize', this.handleResize);
  },
  unmounted() {
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
      if (this.navbarOpen && window.innerWidth >= 770) {
        this.navbarOpen = false;
      }
    },
    closeNavbarOutside(event) {
      if (this.navbarOpen && !this.$el.contains(event.target)) {
        this.closeNavbar();
      }
    },
  },
};
</script>

<style scoped>


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
  left: 0; 
  background-color: #16BCA9;
  padding: 1rem;
  border-radius: 8px;
  z-index: 5;
}
.mobile-menu-content {
  padding: 1rem; 
}
.mobile-menu-content a {
  display: block;
  margin-bottom: 0.5rem; 
  color: white;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s;
}

.mobile-menu a:hover {
  color: #FFD700;
}
</style>
