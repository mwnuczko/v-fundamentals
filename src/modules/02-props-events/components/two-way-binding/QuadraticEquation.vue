<template>
<div class="equation">
  <h2>a * X^2 + b * X + c = 0</h2>
  <div>
    <label>a =</label>
    <input type="number" v-model.number="a"/>
  </div>
  <div>
    <label>b =</label>
    <input type="number" v-model.number="b"/>
  </div>
  <div>
    <label>c =</label>
    <input type="number" v-model.number="c"/>
  </div>
  <h2>Results</h2>
  <div>
    <template v-if="isQuadratic">
      <h4>delta = {{ delta }}</h4>
      <template v-if="hasOneResult">
        <h4>x = {{ x0 }}</h4>
      </template>
      <template v-else-if="hasTwoResults">
        <h4>x1 = {{ x1 }}</h4>
        <h4>x2 = {{ x2 }}</h4>
      </template>
      <template v-else>
        Has no result.
      </template>
    </template>
    <template v-else>
      It's not Quadratic Equation.
    </template>
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
  computed: {
    delta() {
      if(this.isQuadratic) {
        return this.b * this.b - 4 * this.a * this.c;
      } else {
        return null;
      }
    },
    isQuadratic() {
      return this.a !== 0 && this.a != '';
    },
    hasOneResult() {
      return this.isQuadratic && this.delta === 0;
    },
    hasTwoResults() {
      return this.isQuadratic && this.delta > 0;
    },
    x0() {
      if (this.isQuadratic) {
        return -this.b / (2 * this.a);
      } else {
        return null;
      }
    },
    x1() {
      if (this.isQuadratic) {
        return (-this.b - Math.sqrt(this.delta)) / (2 * this.a);
      } else {
        return null;
      }
    },
    x2() {
      if (this.isQuadratic) {
        return (-this.b + Math.sqrt(this.delta)) / (2 * this.a);
      } else {
        return null;
      }
    }
  }
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
