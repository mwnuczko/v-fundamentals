<template>
<v-list dense>
  <v-list-tile v-for="(item, i) in items" :key="i" @click="onItemClick(item)">
    <template v-if="item === null">
    <v-divider/>
    </template>
    <template v-else>
    <v-list-tile-action>
      <v-icon>{{item.icon || 'label'}}</v-icon>
    </v-list-tile-action>
    <v-list-tile-content>
      <v-list-tile-title>{{item.text}}</v-list-tile-title>
    </v-list-tile-content>
    </template>
  </v-list-tile>
</v-list>
</template>

<script>
import router from '@/router';

const FUNDAMENTALS_ITEMS = [
  { text: 'Custom Components', url: '/', icon: 'home' },
  { text: 'Props, Events', url: '/props-events' },
  { text: 'Custom Props & Events', url: '/custom-props-events' },
  { text: 'Todos', url: '/todos' },
  { text: 'Filters', url: '/filters' },
  { text: 'Heroes List', url: '/heroes' },
  { text: 'Cities Map', url: '/cities' },
  { text: 'Real Estates', url: '/real-estates' },
];

const VUEX_ITEMS = [
];


export default {
  name: 'Navigation',
  data() {
    return {
      items: FUNDAMENTALS_ITEMS.concat([null], VUEX_ITEMS),
    };
  },
  methods: {
    onItemClick(item) {
      router.push(item.url);
    },
  },
};
</script>

<style scoped>
</style>
