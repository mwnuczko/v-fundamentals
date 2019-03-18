<template>
<div>
  <personal-info/>
  <hello-world/>
  <hello-world/>
</div>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import PersonalInfo from './components/PersonalInfo';

export default {
  components: {
    HelloWorld,
    PersonalInfo
  },
  name: 'CustomComponentsModule',
};
</script>

<style scoped>
</style>
