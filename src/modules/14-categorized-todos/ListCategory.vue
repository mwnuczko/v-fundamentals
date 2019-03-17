<template>
<v-flex xs12 sm6 lg6>
  <h3>ListCategory</h3>
  <categories-list/>
</v-flex>
</template>

<script>
import CategoriesList from './containers/CategoriesList';

export default {
  components: {
    CategoriesList,
  },
  name: 'ListCategory',
};
</script>

<style scoped>
</style>
