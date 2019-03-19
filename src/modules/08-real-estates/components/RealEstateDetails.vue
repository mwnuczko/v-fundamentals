<template>
<div class="details">
  <h3>Real Estate Details:</h3>
  <div v-if="item">
    <p>Ulica: {{ item.street }}</p>

    <p>Szer. Geo.: {{ item.lng }}</p>

    <p>Dl. Geo.: {{ item.lat }}</p>

    <p>Cena: {{ item.price }}</p>

    <p>Typ: {{ item.type }}</p>

    <p>Rok bud.: {{ item.builtAt }}</p>
  </div>
</div>
</template>

<script>
export default {
  name: 'RealEstateDetails',
  props: {
    item: Object
  }
};
</script>

<style scoped>
.details {
  height: 460px;
  margin: 10px;
  padding: 16px;
  background-color: chocolate;
}
</style>
