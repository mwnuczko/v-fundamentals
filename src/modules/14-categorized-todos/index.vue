<template>
<v-flex xs12 sm6 lg6>
  <router-view/>
</v-flex>
</template>

<script>
import store, { NAMESPACE } from './store';

export default {
  name: 'CategorizedTodosModule',
  created() {
    this.$store.registerModule(NAMESPACE, store);
  },
  beforeDestroy() {
    this.$store.unregisterModule(NAMESPACE);
  },
};
</script>

<style scoped>
</style>
