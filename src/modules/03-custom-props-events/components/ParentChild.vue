<template>
<div class="parent-child">
  <h3>Child</h3>
  <div>
    <p>
      Child received: {{text}}
    </p>
  </div>
  <div>
    <input v-model="childText"/>
    <p>Child text: {{childText}}</p>
  </div>
  <div>
    <button @click="sendMessage()">Send</button>
  </div>
</div>
</template>

<script>
export default {
  name: 'ParentChild',
  props: [
    'text',
  ],
  data() {
    return {
      childText: '',
    };
  },
  methods: {
    sendMessage() {
      this.$emit('message-sent', this.childText);
    },
  },
};
</script>

<style scoped>
.parent-child {
  padding: 8px;
  background-color: lightcoral;
}

input {
  border: 1px solid #000;
  padding: 3px;
}

button {
  background-color: #fff;
  border: 1px solid #000;
  padding: 6px 12px;
}
</style>
