<template>
<div class="simple-list">
  <h3>Simple list</h3>
  <ul>

    <li v-for="person in people" :key="person.id">
      <p>
        {{ person.name }}
      </p>
    </li>

  </ul>
</div>
</template>

<script>
export default {
  name: 'SimpleList',
  data() {
    return {
      people: [
        { name: 'Bob', id: 1 },
        { name: 'Ed', id: 2 },
        { name: 'Batman', id: 3 },
      ],
    };
  },
  methods: {
    logPerson(person) {
      console.log('logPerson(person)', person.name);
    },
  },
};
</script>

<style scoped>
</style>
