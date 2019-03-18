<template>
<v-card>
  <v-toolbar color="teal" dark>
    <v-toolbar-title>TODOs</v-toolbar-title>
  </v-toolbar>
  <list-items
    :is-fetching="false"
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
import { NAMESPACE } from '../store';

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
    ...mapGetters(NAMESPACE, ['todos']),
  },
  methods: {
    ...mapActions(NAMESPACE, ['fetchTodos', 'deleteTodo']),
    check(todo) {
      console.log('check(todo)', todo);
    },
  },
  mounted() {
    this.fetchTodos();
  },
};
</script>

<style scoped>
</style>
