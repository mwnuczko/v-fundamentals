<template>
<div>
  <h1>Heroes</h1>
  <!--<data-table-->
    <!--:items="heroes"-->
    <!--:meta-data="tableMetaData"-->
    <!--:selected-item="selectedHero"-->
    <!--@item-click="selectHero($event)"-->
  <!--/>-->
  
  <data-table v-if="heroes.length"
    :items="heroes"
    :meta-data="tableMetaData"
    @item-click="selectHero($event)"
    :selected-item="selectedHero"
  />
</div>
</template>

<script>
import api from './api';
import DataTable from "../../components/DataTable";

const META_DATA = [
  { value: 'universe', text: 'Komiksowe Uniwersum' },
  { value: 'name', text: 'Imie' },
  { value: 'secretIdentity', text: 'Tozsamosc' },
];

export default {
  name: 'HeroesModule',
  components: {DataTable},
  data() {
    return {
      heroes: [],
      selectedHero: null,
      tableMetaData: META_DATA,
    };
  },
  methods: {
    selectHero(hero) {
      if(this.selectedHero === hero) {
        this.selectedHero = null;
      } else {
        this.selectedHero = hero;
      }
      console.log('hero', hero.name);
    },
  },
  mounted() {
    api.getAll().then((heroes) => {
      console.log('fetched heroes', heroes);
      // TODO
      this.heroes = heroes;
    }).catch((error) => {
      console.log(error);
    });
  },
};
</script>

<style scoped>
</style>
