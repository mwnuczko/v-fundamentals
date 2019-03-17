<template>
<div class="counter">
  <h3 class="headline mb-0">Sync Counter</h3>
  <div>{{syncCounterValue}}</div>
  <div>
    <v-btn @click="incrementSyncCounter()" color="primary">Increment</v-btn>
    <v-btn @click="decrementSyncCounter()" color="error">Decrement</v-btn>
  </div>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { NAMESPACE } from '../store';

export default {
  name: 'SyncCounter',
  methods: {
    ...mapActions(NAMESPACE, ['incrementSyncCounter', 'decrementSyncCounter']),
  },
  computed: {
    ...mapGetters(NAMESPACE, ['syncCounterValue']),
  },
};
</script>

<style scoped>
.counter {
  border: 1px solid #000;
  background-color: cornflowerblue;
  padding: 12px;
  font-weight: bold;
  text-align: center;
}
</style>
