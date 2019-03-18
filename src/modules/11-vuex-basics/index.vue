<template>
<div>
  <counter/>
  <hr/>
  <sync-counter/>
  <hr/>
  <async-counter/>
</div>
</template>

<script>
import Counter from './containers/Counter';
import store, { NAMESPACE } from './store';
import SyncCounter from './containers/SyncCounter';
import AsyncCounter from './containers/AsyncCounter';

export default {
  components: {
    AsyncCounter,
    SyncCounter,
    Counter,
  },
  name: 'VuexBasicsModule',
  created() {
    this.$store.registerModule(NAMESPACE, store);
  },
  beforeDestroy() {
    this.$store.unregisterModule(NAMESPACE, store);
  },
};
</script>

<style scoped>
</style>
