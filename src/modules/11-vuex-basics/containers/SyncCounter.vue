<template>
<div class="counter">
  <h3 class="headline mb-0">Sync Counter</h3>
  <div>{{ syncCounterValue }}</div>
  <div>
    <v-btn @click="incrementSyncCounter()" color="primary">Increment</v-btn>
    <v-btn @click="decrementSyncCounter()" color="error">Decrement</v-btn>
  </div>
</div>
</template>

<script>
import { NAMESPACE } from '../store/index';
import { mapGetters } from 'vuex';


export default {
  name: 'SyncCounter',
  methods: {
    incrementSyncCounter() {
      // TODO: dispatch increment sync counter action
      this.$store.dispatch('incrementSyncCounter');
  
    },
    decrementSyncCounter() {
      // TODO
      this.$store.dispatch('decrementSyncCounter');
    }
    // TODO: introduce mapActions
  },
  computed: {
    ...mapGetters(['syncCounterValue']),
    // ...mapGetters({ storeSyncCounterValue: 'syncCounterValue' })
    // syncCounterValue() {
    //   // return 123; // TODO
    //   // return this.$store.state[NAMESPACE].syncCounter.value;
    //   return this.$store.getters.syncCounterValue;
    // }
    // TODO: introduce mapGetters
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
