<template>
  <div class="ml-auto">
    <div
      class="custom-select"
      @mouseover="hovered = true"
      @mouseleave="hovered = false"
      @mousedown="buttonPressed = true"
      @mouseup="buttonPressed = false"
    >
      <div class="selected-option" @click="toggleDropdown" :class="{ 'pressed': buttonPressed }">
        <img class="icon" :src="require('@/assets/earth-globe.png')" alt="Globe icon" />
        {{ selectedOption.label }}
      </div>
      <transition name="fade">
        <div v-show="isDropdownVisible" class="options">
          <div
            v-for="(option, index) in options"
            :key="index"
            @click="selectOption(option)"
            :class="{ 'hovered-option': hoveredOption === index }"
          >
            {{ option.label }}
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        { value: "es", label: "Español" },
        { value: "en", label: "English" },
      ],
      selectedOption: { value: "es", label: "Español" },
      isDropdownVisible: false,
      hovered: false,
      hoveredOption: null,
      buttonPressed: false,
    };
  },
  methods: {
    toggleDropdown() {
      this.isDropdownVisible = !this.isDropdownVisible;
    },
    selectOption(option) {
      this.selectedOption = option;
      this.isDropdownVisible = false;
    },
  },
};
</script>

<style scoped>
.custom-select {
  position: relative;
  display: inline-block;
}

.selected-option {
  font-size: 1.05rem;
  color: #006400;
  padding: 0.5rem;
  border-radius: 0.25rem;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.7); /* Cambia el último valor (0.7) para ajustar la transparencia */

  display: flex;
  align-items: center; /* Centra verticalmente el emoji y el texto */
  width: 100px; /* Establece un ancho fijo */
  transition: box-shadow 0.2s;
}

.selected-option.pressed {
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.633);
}


.options {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.7);
  border-top: none;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  max-height: 200px;
  overflow-y: auto;
  z-index: 1;
  transition: opacity 0.2s;
  opacity: 1;
}

.options div {
  padding: 0.5rem;
  cursor: pointer;
}

.options div:hover {
  background-color: #c9ffd4;
}
.icon {
  width: 16px; /* Ajusta el tamaño del icono según tus necesidades */
  height: 16px;
  margin-right: 0.1rem; /* Ajusta el espacio entre el icono y el texto */
}
</style>
