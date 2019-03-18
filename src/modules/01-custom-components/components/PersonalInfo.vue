<template>
<div class="personal-info">
  <h2>Personal Info</h2>
  <p>Name: {{ name }}</p>
  <p>Age: {{ age }} ({{ dob }})</p>
  <p>email: {{ email }}</p>
</div>
</template>

<script>
export default {
  name: 'PersonalInfo',
  data() {
    return {
      name: 'Maciej',
      age: 26,
      dob: '1992/05/21',
      email: 'maciej.wnuczko@ge.com'
    }
  }
};
</script>

<style scoped>
.personal-info {
}
</style>
