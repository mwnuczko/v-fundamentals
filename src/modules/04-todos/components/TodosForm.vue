<template>
<v-card>
  <v-divider/>
  <v-card-title>
    <h3 class="headline mb-0">Create TODO</h3>
  </v-card-title>
  <v-card-text>
    <v-form>
      <v-text-field
        label="Title"
        required
        v-model="title"
      />
      <v-text-field
        label="Description"
        v-model="description"
      />
      <v-btn :disabled="!title" @click="createTodo">Submit</v-btn>
      <v-btn @click="clearForm">Clear</v-btn>
    </v-form>
  </v-card-text>
</v-card>
</template>

<script>
export default {
  name: 'TodosForm',
  data() {
    return {
      title: '',
      description: ''
    }
  },
  methods: {
    createTodo() {
      this.$emit('create-item',  { title: this.title, description: this.description } );
      this.clearForm();
    },
    clearForm() {
      this.title = '';
      this.description = '';
    }
  }
};
</script>

<style scoped>
</style>
