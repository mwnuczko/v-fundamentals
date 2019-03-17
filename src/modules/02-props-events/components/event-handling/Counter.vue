<template>
<div class="counter">
  <h3 class="headline mb-0">Counter</h3>
  <div>{{value}}</div>
  <div>
    <v-btn color="primary">Increment</v-btn>
    <v-btn color="error">Decrement</v-btn>
  </div>
</div>
</template>

<script>
export default {
  name: 'Counter',
  data() {
    return {
      value: 0,
    };
  },
};
</script>

<style scoped>
.counter {
  border: 1px solid #000;
  padding: 12px;
  font-weight: bold;
  text-align: center;
}
</style>
