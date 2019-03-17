<template>
<div class="simple-form">
  <h3 class="headline mb-0">SimpleFormInitialized</h3>
  <div>
    Name: <input type="text"/>
  </div>
  <div>
    Age: <input type="number"/>
  </div>
  <div>
    <input type="checkbox" id="agreement"/>
    <label for="agreement">Do you agree?</label>
  </div>
</div>
</template>

<script>
export default {
  name: 'SimpleFormInitialized',
  data() {
    return {
      name: 'Batman',
      age: 44,
      hasAgreed: false,
    };
  },
};
</script>

<style scoped>
.simple-form {
  border: 1px solid #000;
  padding: 18px;
}

.simple-form input {
  border: 1px solid #ccc;
  padding: 3px;
}
</style>
