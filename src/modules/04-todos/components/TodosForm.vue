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
      />
      <v-text-field
        label="Description"
      />
      <v-btn>Submit</v-btn>
      <v-btn>Clear</v-btn>
    </v-form>
  </v-card-text>
</v-card>
</template>

<script>
export default {
  name: 'TodosForm',
};
</script>

<style scoped>
</style>
