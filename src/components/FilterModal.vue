<template>
  <div class="filter-modal-container">
    
    <button @click="abrirModal" class="btn-abrir-modal">
      <img class="icon" :src="require('@/assets/filter.png')" alt="House icon" />!Pulsa aquí para aplicar filtros a la busqueda!</button>
    
    <transition name="fade">
      <div v-if="mostrarModal" class="modal-overlay" @click="cerrarModal">
        <div class="modal-content" @click.stop>
          <label for="rangoPrecio">Rango de precios:</label>
          <div class="input-group">
            <input id="rangoPrecioMin" type="number" v-model="rangoPrecio.min" placeholder="Precio mínimo" class="mb-3">
            <input id="rangoPrecioMax" type="number" v-model="rangoPrecio.max" placeholder="Precio máximo">
          </div>
          
          <label for="numDormitorios">Número de Dormitorios:</label>
          <div class="input-group">
          <input id="numDormitorios" type="number" v-model="numDormitorios">
        </div>
          
          <label for="capacidadMaxima">Capacidad Máxima de Huéspedes:</label>
          <div class="input-group">
          <input id="capacidadMaxima" type="number" v-model="capacidadMaxima">
        </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mostrarModal: false,
      rangoPrecio: {
        min: 1,
        max: 30000,
      },
      numDormitorios: 1,
      capacidadMaxima: 3,
    };
  },
  watch: {
    rangoPrecio: {
      handler() {
        this.aplicarFiltros();
      },
      deep: true,
    },
    numDormitorios: {
      handler() {
        this.aplicarFiltros();
      },
    },
    capacidadMaxima: {
      handler() {
        this.aplicarFiltros();
      },
    },
  },
  methods: {
    abrirModal() {
      this.mostrarModal = true;
      document.addEventListener('click', this.cerrarModalExterno);
    },
    cerrarModal() {
      this.mostrarModal = false;
      document.removeEventListener('click', this.cerrarModalExterno);
    },
    cerrarModalExterno(event) {
      if (this.$el && !this.$el.contains(event.target)) {
        this.cerrarModal();
      }
    },
    aplicarFiltros() {
      this.$emit('aplicarFiltros', {
        rangoPrecio: { min: this.rangoPrecio.min, max: this.rangoPrecio.max },
        numDormitorios: this.numDormitorios,
        capacidadMaxima: this.capacidadMaxima,
      });
    },
  },
};
</script>

<style scoped>

.filter-modal-container {
  position: relative;
  display: flex;
  justify-content: center; 
  align-items: center; 
  
}

.btn-abrir-modal {
  display: flex; 
  align-items: center; 
  padding: 0.5rem 1rem;
  border: 1px solid #006400;
  border-radius: 35px;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.668);
  font-weight: 500;
  z-index: 2; 
}

.icon {
  width: 16px; 
  height: 16px;
  margin-right: 0.2rem; 
  margin-top: 3px;
}
.modal-content label {
  display: block;
  margin-bottom: 5px;
  color: black; 
  font-weight: 500; 
  
}

.modal-overlay {
  position: absolute;
  top: 100%; 
  left: 50%; 
  transform: translateX(-50%); 
  width: 400px; 
  display: flex;
  align-items: flex-start; 
  justify-content: center;
  z-index: 2; 
}

.modal-content {
  text-align: center;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  padding: 20px;
}

.modal-content label {
  display: block;
  margin-bottom: 5px;
}

.input-group {
  display: flex;
  flex-direction: column; 
  align-items: center; 
  margin-bottom: 15px;
  border-bottom: 1px solid #ddd; 
  padding-bottom: 5px; 
  margin-bottom: 10px;
}

.input-group input {
  margin-right: 10px;
  color: #006400;
  padding: 0.5rem 1rem;
  border: 1px solid #006400;
  border-radius: 35px;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.668);
  font-weight: 500;
}

.btn-abrir-modal:hover {
  background-color: #c9ffd4;
  transform: scale(1.05); 
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
