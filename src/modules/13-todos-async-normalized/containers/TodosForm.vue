<template>
<v-card>
  <simple-form
    :values="values"
    :labels="labels"
    @submit-click="submit($event)"
    @clear-click="clear()"
  />
</v-card>
</template>

<script>
import { mapActions } from 'vuex';
import SimpleForm from '../../../components/SimpleForm';

const LABELS = {
  header: 'Create TODO',
  required: 'Title',
  optional: 'Description',
};

export default {
  components: { SimpleForm },
  name: 'TodosForm',
  data() {
    return {
      values: {
        required: '',
        optional: '',
      },
      labels: LABELS,
    };
  },
  methods: {
    ...mapActions(['createTodo']),
    submit({ required, optional }) {
      this.createTodo({ title: required, description: optional });
      this.clear();
    },
    clear() {
      this.values = { required: '', optional: '' };
    },
  },
};
</script>

<style scoped>
</style>
