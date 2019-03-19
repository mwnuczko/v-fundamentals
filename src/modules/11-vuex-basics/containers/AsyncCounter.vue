<template>
<div class="counter">
  <h3 class="headline mb-0">Async Counter</h3>
  <div>{{counterValue}}</div>
  <div>
    <v-btn @click="incrementAsyncCounter(10)" color="primary">Increment</v-btn>
    <v-btn @click="decrementAsyncCounter(5)" color="error">Decrement</v-btn>
  </div>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'AsyncCounter',
  methods: {
    ...mapActions(['decrementAsyncCounter']),
    incrementAsyncCounter(value) {
      // TODO
      this.$store.dispatch('incrementAsyncCounter', value);
    }
    // TODO: decrementAsyncCounter
    // TODO: mapActions
  },
  computed: {
    ...mapGetters({counterValue: 'asyncCounterValue'})
    // asyncCounterValue() {
    //   return 997;
    // }
  },
};
</script>

<style scoped>
.counter {
  border: 1px solid #000;
  background-color: chartreuse;
  padding: 12px;
  font-weight: bold;
  text-align: center;
}
</style>
