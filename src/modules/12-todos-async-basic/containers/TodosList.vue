<template>
<v-card>
  <v-toolbar color="teal" dark>
    <v-toolbar-title>TODOs</v-toolbar-title>
  </v-toolbar>
  <list-items
    :is-fetching="true"
    :items="todos"
    :title-prop="propNames.title"
    :sub-title-prop="propNames.subTitle"
    :key-prop="propNames.key"
    @check-click="check($event)"
    @delete-click="deleteTodo($event)"
  />
</v-card>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import ListItems from '../../../components/ListItems';

export default {
  components: { ListItems },
  name: 'TodosList',
  data() {
    return {
      propNames: {
        title: 'title',
        subTitle: 'description',
        key: 'id',
      },
    };
  },
  computed: {
    // TODO getters: todos
    todos() {
      return []; // TODO
    }
  },
  methods: {
    // TODO actions: fetchTodos, deleteTodo
    check(todo) {
      console.log('check(todo)', todo);
    },
  },
  mounted() {
    // TODO: fetchTodos
  },
};
</script>

<style scoped>
</style>
