<template>
<div class="car-configurator">
  <h1>CarConfigurator</h1>
  <div class="chosen-config">
    <h3>Current config</h3>
    <p>Engine: {{selectedEngine}}</p>
    <p>Color: {{selectedColor}}</p>
    <p>Drive Wheel: {{selectedDriveWheel}}</p>
  </div>
  <div>
    <option-picker
      label=""
      options=""
      option-select=""
    />
  </div>
</div>
</template>

<script>
export default {
  name: 'CarConfigurator',
  data() {
    return {
      engineLabel: 'Choose engine type',
      selectedEngine: null,
      engines: ['Petrol', 'Diesel', 'Tesla'],
      colorLabel: 'Select color',
      selectedColor: null,
      colors: ['Black', 'White', 'Red', 'Yellow'],
      driveWheelLabel: 'Your drive wheel?',
      selectedDriveWheel: null,
      driveWheels: ['4X', 'Front-Wheel-Drive', 'Rear-Wheel-Drive'],
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
