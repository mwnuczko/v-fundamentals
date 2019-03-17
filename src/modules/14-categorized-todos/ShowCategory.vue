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
import { NAMESPACE } from './store';

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
    ...mapGetters(NAMESPACE, ['categoryById', 'todosByCategoryId']),
    category() {
      return this.categoryById[this.id];
    },
    todos() {
      return this.todosByCategoryId(this.id);
    },
    isCategoryFetching() {
      return !this.category;
    },
  },
  methods: {
    ...mapActions(NAMESPACE, ['fetchCategory', 'deleteTodoFromCategory']),
    check(todo) {
      console.log('check(todo)', todo);
    },
    deleteTodo(todoId) {
      this.deleteTodoFromCategory({ categoryId: this.id, todoId });
    },
  },
  created() {
    if (this.isCategoryFetching) {
      this.fetchCategory(this.id);
    }
  },
};
</script>

<style scoped>
</style>
