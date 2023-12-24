<template>
  <div class="custom-dropdown" ref="dropdown" @click="toggleDropdown">
    <div class="selected-option" :class="{ 'placeholder': !nombre }">
      <img class="icon" :src="require('@/assets/house.png')" alt="House icon" />
      {{ nombre || 'Elige un barrio' }}
    </div>
    <ul v-show="isDropdownVisible" class="options">
      <li v-for="barrio in barrios" :key="barrio.id" @click="selectBarrio(barrio)">
        {{ barrio.name }}
      </li>
    </ul>
  </div>
</template>


<script>
import axios from 'axios';


export default {
  data() {
    return {
      nombre:null,
      selectedBarrio: null,
      barrios: [],
      isDropdownVisible: false,
    };
  },
  methods: {
    toggleDropdown() {
      this.isDropdownVisible = !this.isDropdownVisible;
      if (this.isDropdownVisible) {
        document.addEventListener('click', this.closeDropdownHandler);
      }
    },
    closeDropdownHandler(event) {
      this.$nextTick(() => {
        if (this.$refs.dropdown && !this.$refs.dropdown.contains(event.target)) {
          this.isDropdownVisible = false;
          document.removeEventListener('click', this.closeDropdownHandler);
        }
      });
    },
selectBarrio(barrio) {
  this.nombre = barrio.name; 
  this.selectedBarrio = barrio.id; 
  this.isDropdownVisible = false;
  document.removeEventListener('click', this.closeDropdownHandler);

  
  this.emitBarrioSeleccionado();
},
    cargarBarrios() {
      axios.get('https://api.dev.myplazze.com/api/v1/practice/barrios')
        .then(response => {
          this.barrios = response.data;
          console.log('Barrios cargados con éxito:', this.barrios);
        })
        .catch(error => {
          console.error('Error al cargar la lista de barrios', error);
        });
    },
    emitBarrioSeleccionado() {
      const barrioSeleccionado = this.barrios.find(barrio => barrio.id === this.selectedBarrio);
      console.log('Barrio seleccionado (ID):', this.selectedBarrio);
      console.log('Barrio seleccionado (objeto):', barrioSeleccionado);
      this.$emit('barrioSeleccionado', barrioSeleccionado);
    },
  },
  mounted() {
    this.cargarBarrios();
  },
  beforeUnmount() {
    document.removeEventListener('click', this.closeDropdownHandler);
  },
};
</script>



<style scoped>
.custom-dropdown {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  
  
}


.selected-option {
  display: flex;
  color: #006400;
  padding: 0.5rem 1rem;
  border: 1px solid #006400;
  border-radius: 35px;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.668);
  font-weight: 500;
  color: black;
  
  
}

.selected-option:hover{
  background-color: #c9ffd4;
  transform: scale(1.05);

}




.options {
  position: absolute;
  top: 100%;
  width: 70%;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  max-height: 200px;
  overflow-y: auto;
  transition: opacity 0.2s;
  opacity: 1;
  z-index: 4;
  text-align: center;
}


.options li {
  padding: 0.5rem 1rem;
  cursor: pointer;
}


.options li:hover {
  background-color: #c9ffd4;
}
.icon {
  width: 16px; 
  height: 16px;
  margin-right: 0.2rem; 
  margin-top: 3px;
}
</style>

