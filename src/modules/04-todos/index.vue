<template>
<v-flex xs12 sm6 lg6>
  <!--<hr/>-->
  <!--<todos-list-->
  <!--items="todos"-->
  <!--delete-item="deleteTodo($event)"-->
  <!--/>-->
  <!--<todos-form-->
  <!--create-item="createTodo($event)"-->
  <!--/>-->
  <hr/>
  <!--<v-btn @click="resetDb()" color="error">Reset DB</v-btn>-->
</v-flex>
</template>

<script>
import { inMemoryTodos } from './data/todos-data';

export default {
  name: 'TodosModule',
  data() {
    return {
      todos: inMemoryTodos,
    };
  },
};
</script>

<style scoped>
</style>
