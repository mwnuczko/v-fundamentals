<template>
<div class="option-picker">
  <h3>{{ label }}</h3>
  <v-btn v-for="option in options" :key="option.id"
    @click="$emit('option-select', option)"
    :color="option !== selected ? 'success' : 'error'">
    {{ option }}
  </v-btn>
</div>
</template>

<script>
export default {
  name: 'OptionPicker',
  props: {
    label: String,
    options: Array,
    selected: String
  }
};
</script>

<style scoped>
.option-picker {
  padding: 16px;
  border: 1px solid #000;
  margin: 8px auto;
  background-color: aliceblue;
}
</style>
