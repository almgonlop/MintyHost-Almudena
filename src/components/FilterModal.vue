<template>
  <div class="filter-modal-container">
    
    <button @click="abrirModal" class="btn-abrir-modal">
      <img class="icon" :src="require('@/assets/filter.png')" alt="House icon" />!Pulsa aquí para aplicar filtros a la busqueda!</button>
    
    <transition name="fade">
      <div v-if="mostrarModal" class="modal-overlay" @click="cerrarModal">
        <div class="modal-content" @click.stop>
          <label for="rangoPrecio">Rango de precios:</label>
          <div class="input-group">
            <input id="rangoPrecioMin" type="number" v-model="rangoPrecio.min" placeholder="Precio mínimo">
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
      // Agregar el manejador de clics en el documento al abrir el modal
      document.addEventListener('click', this.cerrarModalExterno);
    },
    cerrarModal() {
      this.mostrarModal = false;
      // Eliminar el manejador de clics en el documento al cerrar el modal
      document.removeEventListener('click', this.cerrarModalExterno);
    },
    cerrarModalExterno(event) {
      // Comprueba si el clic ocurrió fuera del modal y cierra el modal en ese caso
      if (this.$el && !this.$el.contains(event.target)) {
        this.cerrarModal();
      }
    },
    aplicarFiltros() {
      // Emite el evento con la información necesaria
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
  justify-content: center; /* Centra los elementos horizontalmente */
  align-items: center; /* Centra los elementos verticalmente */
  
}

.btn-abrir-modal {
  display: flex; /* Utiliza flexbox para alinear los elementos internos */
  align-items: center; /* Alinea verticalmente los elementos */
  padding: 0.5rem 1rem;
  border: 1px solid #006400;
  border-radius: 35px;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.668);
  font-weight: 500;
  z-index: 2; /* Asegura que el botón esté por encima del contenido del modal */
}

.icon {
  width: 16px; /* Ajusta el tamaño del icono según tus necesidades */
  height: 16px;
  margin-right: 0.2rem; /* Ajusta el espacio entre el icono y el texto */
  margin-top: 3px;
}
.modal-content label {
  display: block;
  margin-bottom: 5px;
  color: black; /* Cambia el color del texto del label */
  font-weight: 500; 
  /* Agrega otros estilos según tus preferencias */
}

.modal-overlay {
  position: absolute;
  top: 100%; /* Posiciona el modal debajo del botón */
  left: 50%; /* Centra el modal horizontalmente en relación con el contenedor padre */
  transform: translateX(-50%); /* Ajusta la posición horizontal del modal */
  width: 400px; /* Ajusta el ancho del modal según tus necesidades */
  display: flex;
  align-items: flex-start; /* Alinea el contenido del modal al inicio del contenedor */
  justify-content: center;
  z-index: 2; /* Asegura que el modal-overlay esté sobre otros elementos */
}

.modal-content {
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
  flex-direction: column; /* Alinea los elementos en columna */
  align-items: center; /* Centra los elementos horizontalmente */
  margin-bottom: 15px;
  border-bottom: 1px solid #ddd; /* Línea debajo del campo numDormitorios */
  padding-bottom: 5px; /* Ajusta el espaciado debajo de la línea según tus preferencias */
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
  transform: scale(1.05); /* Puedes ajustar el factor de escala según tus preferencias */
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
