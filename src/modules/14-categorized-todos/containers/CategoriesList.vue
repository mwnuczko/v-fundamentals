<template>
<v-card>
  <v-toolbar color="blue" dark>
    <v-toolbar-title>Categories</v-toolbar-title>
  </v-toolbar>
  <linkable-list
    :is-fetching="isCategoriesListFetching"
    :items="categories"
    :urls="categoriesUrls"
    :counters="todosCounters"
    title-prop="title"
    key-prop="id"
    @delete-click="deleteCategory($event)"
  />
</v-card>
</template>

<script>
import { map } from 'lodash';
import { mapActions, mapGetters } from 'vuex';
import LinkableList from '../../../components/LinkableList';

export default {
  components: { LinkableList },
  name: 'CategoriesList',
  computed: {
    // TODO getters: categories', isCategoriesListFetching
    categories() {
      return [];
    },
    isCategoriesListFetching() {
      return false;
    },
    categoriesUrls() {
      return map(this.categories, (category) => {
        const { id } = category;
        return { name: 'show-category', params: { id } };
      });
    },
    todosCounters() {
      return map(this.categories, (category) => {
        const { todos = [] } = category;
        return todos.length;
      });
    },
  },
  methods: {
    // TODO actions: fetchCategories', deleteCategory
  },
  mounted() {
    // TODO fetchCategories
  },
};
</script>

<style scoped>
</style>
