<template>
<div class="simple-form">
  <h3 class="headline mb-0">SimpleFormInitialized</h3>
  <div>
    Name: <input type="text" :placeholder="name" v-model="providedName"/>
  </div>
  <div>
    Age: <input type="number" :placeholder="age" @input="saveAge($event)"/>
  </div>
  <div>
    <p v-if="providedName || providedAge">Your data:
      <ul>
        <li v-if="providedName">
          Name: {{ providedName }}
        </li>
        <li v-if="providedAge">
          Age: {{ providedAge }}
        </li>
      </ul>
    </p>
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
      providedName: '',
      age: 44,
      providedAge: null,
      hasAgreed: false,
    };
  },
  methods: {
    saveAge(event) {
      this.providedAge = event.target.value;
      console.log(event);
    }
  }
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
