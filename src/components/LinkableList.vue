<template>
<v-list two-line subheader>
  <div v-if="isFetching" class="text-xs-center">
    <v-progress-circular indeterminate color="primary"/>
  </div>
  <div v-else>
    <v-list-tile v-for="(item, index) in items" :key="item[keyProp]" avatar ripple>
      <v-list-tile-action>
        <v-badge right>
          <span slot="badge">{{ counters[index] }}</span>
        </v-badge>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>{{ item[titleProp] }}</v-list-tile-title>
        <router-link :to="urls[index]">link</router-link>
      </v-list-tile-content>
      <v-list-tile-action>
        <v-btn @click="deleteItem(item)" icon ripple>
          <v-icon color="error">delete_forever</v-icon>
        </v-btn>
      </v-list-tile-action>
    </v-list-tile>
  </div>
</v-list>
</template>

<script>
export default {
  name: 'LinkableList',
  props: [
    'isFetching',
    'items',
    'urls',
    'counters',
    'titleProp',
    'keyProp',
  ],
  methods: {
    deleteItem(item) {
      this.$emit('delete-click', item);
    },
  },
};
</script>

<style scoped>
</style>
