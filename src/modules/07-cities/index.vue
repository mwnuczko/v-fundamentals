<template>
<v-flex class="xs12 sm12 md12 lg12 xl12">
  <h1>Cities</h1>
  <h3>Selected City: TODO</h3>
  <g-map
    :geo-objects="cities"
    @marker-click="onPlaceClick($event)"
    :selected="selectedCity"
  />
</v-flex>
</template>

<script>
import api from './api';
import GMap from "../../components/GMap";

export default {
  name: 'CitiesModule',
  components: {GMap},
  data() {
    return {
      cities: [],
      selectedCity: null,
    };
  },
  methods: {
    onPlaceClick(city) {
      // console.log('city', city);
      this.selectedCity = city;
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
