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
  header: 'Add TODO to Category',
  required: 'Title',
  optional: 'Description',
};

export default {
  components: { SimpleForm },
  name: 'TodosForm',
  props: [
    'id',
  ],
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
    // TODO actions: createTodoInCategory
    submit({ required, optional }) {
      const params = {
        categoryId: this.id,
        todo: { title: required, description: optional },
      };
      this.createTodoInCategory(params);
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
