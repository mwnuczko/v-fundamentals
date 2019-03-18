<template>
<v-card>
  <v-toolbar color="teal" dark>
    <v-toolbar-title>TODOs</v-toolbar-title>
  </v-toolbar>

  <v-progress-circular
    indeterminate
    color="primary"
  />

  <v-list two-line subheader>
    <v-list-tile avatar ripple>
      <v-list-tile-action>
        <v-checkbox/>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>TODO title</v-list-tile-title>
        <v-list-tile-sub-title>TODO description</v-list-tile-sub-title>
      </v-list-tile-content>
      <v-list-tile-action>
        <v-btn icon ripple>
          <v-icon color="error">delete_forever</v-icon>
        </v-btn>
      </v-list-tile-action>
    </v-list-tile>
  </v-list>
</v-card>
</template>

<script>

export default {
  name: 'TodosList',
};
</script>

<style scoped>
</style>
