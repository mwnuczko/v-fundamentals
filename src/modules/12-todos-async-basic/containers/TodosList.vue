<template>
<v-card>
  <v-toolbar color="teal" dark>
    <v-toolbar-title>TODOs</v-toolbar-title>
  </v-toolbar>
  <list-items
    :is-fetching="isFetching"
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
      isFetching: true,
      propNames: {
        title: 'title',
        subTitle: 'description',
        key: 'id',
      },
    };
  },
  computed: {
    ...mapGetters(['todos'])
    // TODO getters: todos
    // todos() {
    //   return []; // TODO
    // }
  },
  methods: {
    // TODO actions: fetchTodos, deleteTodo
    ...mapActions(['fetchTodos']),
    check(todo) {
      console.log('check(todo)', todo);
    },
  },
  mounted() {
    // TODO: fetchTodos
    this.isFetching = true;
    this.fetchTodos().finally(() => {
      setTimeout(()=>{      this.isFetching = false;
      }, 2000)
    });
  },
};
</script>

<style scoped>
</style>
