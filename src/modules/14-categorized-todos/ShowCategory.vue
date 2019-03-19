<template>
<v-card>
  <div v-if="isCategoryFetching" class="text-xs-center">
    <v-progress-circular indeterminate color="primary"/>
  </div>
  <div v-else>
    <v-toolbar color="teal" dark>
      <v-toolbar-title>Category: {{ category.title }}</v-toolbar-title>
    </v-toolbar>
    <list-items
      :is-fetching="false"
      :items="todos"
      :title-prop="'title'"
      :sub-title-prop="'description'"
      :key-prop="'id'"
      @check-click="check($event)"
      @delete-click="deleteTodo($event.id)"
    />
    <todos-form
      :id="id"
    />
  </div>
</v-card>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import ListItems from '../../components/ListItems';
import TodosForm from './containers/TodosForm';

export default {
  components: {
    TodosForm,
    ListItems,
  },
  props: [
    'id',
  ],
  name: 'ShowCategory',
  computed: {
    // TODO getters: categoryById, todosByCategoryId
    category() {
      return null; // TODO category by id
    },
    todos() {
      return []; // TODO todos by category id
    },
    isCategoryFetching() {
      return !this.category;
    },
  },
  methods: {
    // TODO actions: fetchCategory, deleteTodoFromCategory
    check(todo) {
      console.log('check(todo)', todo);
    },
    deleteTodo(todoId) {
      // TODO
    },
  },
  created() {
    // TODO fetch category if not already fetched
  },
};
</script>

<style scoped>
</style>
