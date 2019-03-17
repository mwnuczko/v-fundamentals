<template>
<div>
  <h1>Heroes</h1>
  <!--<data-table-->
    <!--:items="heroes"-->
    <!--:meta-data="tableMetaData"-->
    <!--:selected-item="selectedHero"-->
    <!--@item-click="selectHero($event)"-->
  <!--/>-->
</div>
</template>

<script>
import api from './api';

const META_DATA = [
  { value: 'universe', text: 'Komiksowe Uniwersum' },
  { value: 'name', text: 'Imie' },
  { value: 'secretIdentity', text: 'Tozsamosc' },
];

export default {
  name: 'HeroesModule',
  data() {
    return {
      heroes: [],
      selectedHero: null,
      tableMetaData: META_DATA,
    };
  },
  methods: {
    selectHero(hero) {
      console.log('hero', hero.name);
    },
  },
  mounted() {
    api.getAll().then((heroes) => {
      console.log('fetched heroes', heroes);
      // TODO
    }).catch((error) => {
      console.log(error);
    });
  },
};
</script>

<style scoped>
</style>
