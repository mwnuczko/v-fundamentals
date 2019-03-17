<template>
<v-flex xs12 sm6 lg6>
  <todos-list/>
  <todos-form/>
</v-flex>
</template>

<script>
import store, { NAMESPACE } from './store';
import TodosList from './containers/TodosList';
import TodosForm from './containers/TodosForm';

export default {
  components: {
    TodosForm,
    TodosList,
  },
  name: 'TodosAsyncBasicModule',
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
