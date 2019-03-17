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
const initialData = [
  { id: 100, title: 'Buy milk', description: '2 cartons' },
  { id: 101, title: 'Walk the dog' },
  { id: 102, title: 'Do Homework', description: 'Math, physics' },
];

export default {
  name: 'TodosModule',
  data() {
    return {
      todos: initialData,
    };
  },
};
</script>

<style scoped>
</style>
