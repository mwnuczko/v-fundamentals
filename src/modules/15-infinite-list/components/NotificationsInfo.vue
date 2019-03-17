<template>
<v-layout>
  <v-flex xs12>
    <v-toolbar color="pink">
      <v-toolbar-title class="white--text">Your Tweet's</v-toolbar-title>
    </v-toolbar>
    <v-card>
      <v-card-title primary-title>
        <div>
          <kbd>Total tweets: {{ total }}</kbd>
          <br/><br/>
          <v-badge color="orange">
            <span slot="badge">{{ unread }}</span>
            <span>Unread tweets</span>
          </v-badge>
        </div>
      </v-card-title>
      <v-card-actions>
        <v-btn @click="onMarkAsRead()" color="orange">Mark as read</v-btn>
      </v-card-actions>
    </v-card>
  </v-flex>
</v-layout>


</template>

<script>
export default {
  name: 'NotificationsInfo',
  props: [
    'total',
    'unread',
  ],
  methods: {
    onMarkAsRead() {
      this.$emit('mark-as-read');
    },
  },
};
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  background-color: deepskyblue;
  transition: opacity 2.25s ease-out, background-color 1.5s ease-in-out;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
  background-color: transparent;
}
</style>
