<template>
<div>
  <h3>Event handling</h3>
    <counter/>
    <styled-text/>
  <hr/>
  <h3>Property binding</h3>
    <simple-form-initialized/>
  <hr/>
  <h3>Two-way binding</h3>
    <instant-styled-text/>
  <h3>Quadratic Equation</h3>
  <quadratic-equation/>

</div>
</template>

<script>
import Counter from './components/event-handling/Counter';
import SimpleFormInitialized from './components/property-binding/SimpleFormInitialized';
import StyledText from './components/event-handling/StyledText';
import InstantStyledText from './components/two-way-binding/InstantStyledText';
import QuadraticEquation from "./components/two-way-binding/QuadraticEquation";

export default {
  components: {
    QuadraticEquation,
    Counter,
    SimpleFormInitialized,
    StyledText,
    InstantStyledText
  },
  name: 'PropsEventsModule',
};
</script>

<style scoped>
</style>
