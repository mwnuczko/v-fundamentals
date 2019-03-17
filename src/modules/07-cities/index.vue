<template>
<v-flex class="xs12 sm12 md12 lg12 xl12">
  <h1>Cities</h1>
  <h3>Selected City: TODO</h3>
  <!--<g-map-->
    <!--:geo-objects="cities"-->
    <!--:selected="selectedCity"-->
    <!--@marker-click="onPlaceClick($event)"-->
  <!--/>-->
</v-flex>
</template>

<script>
import api from './api';

export default {
  name: 'CitiesModule',
  data() {
    return {
      cities: [],
      selectedCity: null,
    };
  },
  methods: {
    onPlaceClick(city) {
      console.log('city', city);
      // TODO
    },
  },
  mounted() {
    api.getAll().then((cities) => {
      this.cities = cities;
    });
  },
};
</script>

<style scoped>
</style>
