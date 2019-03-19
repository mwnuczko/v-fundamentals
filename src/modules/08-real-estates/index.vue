<template>
<v-flex class="xs12 sm12 md12 lg12 xl12">
  <h1>Real Estates</h1>

  <v-layout row>
    <v-flex class="xs8 sm8 lg8 xl8">
      <g-map
        :geo-objects="realEstates"
        :selected="selected"
        @marker-click="onRealEstateClick($event)"
      />
    </v-flex>

    <v-flex class="xs4 sm4 lg4 xl4">
      <real-estate-details :item="selected"/>
    </v-flex>
  </v-layout>
  <v-layout row>
    <v-flex class="xs12 sm12 lg12 xl12">
      <data-table
        :items="realEstates"
        :selected-item="selected"
        :meta-data="metadata"
        @item-click="onRealEstateClick($event)"
      />
    </v-flex>
  </v-layout>
</v-flex>
</template>

<script>
import realEstatesService from './services/real-estates.service';
import GMap from "../../components/GMap";
import DataTable from "../../components/DataTable";
import RealEstateDetails from "./components/RealEstateDetails";

const metadata = [
  { value: 'street', text: 'Ulica' },
  { value: 'lat', text: 'Wysokosc geo.' },
  { value: 'lng', text: 'Dlugosc geo.' },
];

export default {
  name: 'RealEstatesModule',
  components: {RealEstateDetails, DataTable, GMap},
  data() {
    return {
      service: realEstatesService,
      metadata,
    };
  },
  computed: {
    realEstates() {
      return this.service.realEstates;
    },
    selected() {
      return this.service.selectedRealEstate;
    }
  },
  mounted() {
    this.service.fetch();
  },
  methods: {
    onRealEstateClick(estate) {
      if (this.service.selectedRealEstate === estate)  {
        this.service.toggleRealEstate(null)
      } else {
        this.service.toggleRealEstate(estate);
      }
    }
  }
};
</script>

<style scoped>
</style>
