<template>
<div class="parent">
  <h3>Parent</h3>
  <div>
    <input v-model="parentMsg"/>
    <p>
      Parent: {{parentMsg}}
    </p>
  </div>
  <div>
    <parent-child
      :text="parentMsg"
      @message-sent="logMessage($event)"
    />
  </div>
</div>
</template>

<script>
import ParentChild from './ParentChild';

export default {
  components: {
    ParentChild,
  },
  name: 'Parent',
  data() {
    return {
      parentMsg: '',
    };
  },
  methods: {
    logMessage(message) {
      console.log('received from Child', message);
    },
  },
};
</script>

<style scoped>
.parent {
  padding: 18px;
  background-color: aquamarine;
}

input {
  border: 1px solid #000;
  padding: 3px;
}
</style>
