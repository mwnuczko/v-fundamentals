<template>
<v-flex xs12 sm6 lg6>
  <hr/>
  <todos-list
    :items="todos"
    @delete-item="deleteTodo($event)"
  />
  <todos-form
    @create-item="createTodo($event)"
  />
  <hr/>
  <v-btn @click="resetDb()" color="error">Reset DB</v-btn>
</v-flex>
</template>

<script>
// import { inMemoryTodos } from './data/todos-data';
import TodosList from "./components/TodosList";
import TodosForm from "./components/TodosForm";
import todosService from './services/todos-service';

export default {
  name: 'TodosModule',
  components: {TodosForm, TodosList},
  data() {
    return {
      todos: todosService.getAll(),
    };
  },
  methods: {
    deleteTodo({ item, index }) {
      // this.todos = this.todos.filter(todo => todo !== event)
      // this.todos.splice(this.todos.indexOf(event.item), 1);
      
      // this.todos.splice(event.index, 1);
      todosService.delete(this.todos, index)
      
    },
    createTodo(todo) {
      // this.todos.push(event);
      todosService.create(this.todos, todo)
    },
    resetDb() {
      // this.todos = this.copyTodos(inMemoryTodos);
      this.todos = todosService.getAll();
    }
  }
};
</script>

<style scoped>
</style>
