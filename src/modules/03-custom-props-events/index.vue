<template>
<div>
  <car-configurator/>
  <h3>CustomPropsEventsModule</h3>
  <parent/>
  <hr/>
</div>
</template>

<script>
import Parent from './components/Parent';
import CarConfigurator from './components/CarConfigurator';

export default {
  components: {
    Parent,
    CarConfigurator
  },
  name: 'CustomPropsEventsModule',
};
</script>

<style scoped>
</style>
