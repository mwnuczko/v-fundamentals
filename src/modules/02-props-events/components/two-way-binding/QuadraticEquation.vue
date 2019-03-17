<template>
<div class="equation">
  <h2>a * X^2 + b * X + c = 0</h2>
  <div>
    <label>a =</label>
    <input type="number"/>
  </div>
  <div>
    <label>b =</label>
    <input type="number"/>
  </div>
  <div>
    <label>c =</label>
    <input type="number"/>
  </div>
  <div>
    <h2>Results</h2>
    <h4>delta = TODO</h4>
    <h4>x1 = TODO</h4>
    <h4>x2 = TODO</h4>
  </div>
</div>
</template>

<script>
export default {
  name: 'QuadraticEquation',
  data() {
    return {
      a: 2,
      b: 8,
      c: -10,
    };
  },
};
</script>

<style scoped>
.equation {
  border: 3px solid #000;
  background-color: #ddd;
  padding: 12px;
}

.equation input {
  border: 1px solid #000;
  background-color: #fff;
  padding: 2px 4px;
}
</style>
