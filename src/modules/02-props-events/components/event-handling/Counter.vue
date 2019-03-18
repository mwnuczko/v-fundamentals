<template>
<div class="counter">
  <h3 class="headline mb-0">Counter</h3>
  <div>{{value}}</div>
  <div>
    <v-btn @click="increment('test', 123, $event)" color="primary">Increment</v-btn>
    <v-btn @click="decrement" color="error">Decrement</v-btn>
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
  methods: {
    increment(a, b, c) {
      this.value++;
      console.log(a, b, c);
    },
    decrement() {
      this.value--;
    }
  }
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
