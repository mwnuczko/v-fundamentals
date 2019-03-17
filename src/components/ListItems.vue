<template>
<v-list two-line subheader>
  <div v-if="isFetching" class="text-xs-center">
    <v-progress-circular indeterminate color="primary"/>
  </div>
  <div v-else>
    <v-list-tile v-for="item in items" :key="item[keyProp]" avatar ripple>
      <v-list-tile-action>
        <v-checkbox @click="checkItem(item)"/>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>{{item[titleProp]}}</v-list-tile-title>
        <v-list-tile-sub-title>{{item[subTitleProp]}}</v-list-tile-sub-title>
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
  name: 'ListItems',
  props: [
    'isFetching',
    'items',
    'titleProp',
    'subTitleProp',
    'keyProp',
  ],
  methods: {
    checkItem(item) {
      this.$emit('check-click', item);
    },
    deleteItem(item) {
      this.$emit('delete-click', item);
    },
  },
};
</script>

<style scoped>
</style>
