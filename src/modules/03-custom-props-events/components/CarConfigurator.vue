<template>
<div class="car-configurator">
  <h1>CarConfigurator</h1>
  <div class="chosen-config">
    <h3>Current config</h3>
    <p v-for="config in configs">
      {{ config.name }}: {{ config.selected }}
    </p>
  </div>
  <div>
    <option-picker v-for="config in configs"
      :label="config.label"
      :options="config.options"
      @option-select="config.selected = $event"
      :selected="config.selected"
    />
  </div>
</div>
</template>

<script>
import OptionPicker from './OptionPicker'

export default {
  name: 'CarConfigurator',
  components: {
    OptionPicker
  },
  data() {
    return {
      configs: [
        {
          name: 'Engine',
          label: 'Choose engine type',
          options: ['Petrol', 'Diesel', 'Tesla'],
          selected: null
        },
        {
          name: 'Color',
          label: 'Select color',
          options: ['Black', 'White', 'Red', 'Yellow'],
          selected: null
        },
        {
          name: 'Drive Wheel',
          label: 'Your drive wheel?',
          options: ['4X', 'Front-Wheel-Drive', 'Rear-Wheel-Drive'],
          selected: null
        }
      ]
    };
  },
};
</script>

<style scoped>
.car-configurator {
  border: 1px solid #000;
  padding: 8px;
  background-color: deepskyblue;
}

.chosen-config {
  padding: 16px;
}
</style>
