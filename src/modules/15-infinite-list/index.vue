<template>
<tweets-list/>
</template>

<script>
import store, { NAMESPACE } from './store';
import TweetsList from './containers/TweetsList';

export default {
  name: 'InfiniteListModule',
  components: {
    TweetsList,
  },
  methods: {},
  created() {
    this.$store.registerModule(NAMESPACE, store);
  },
  beforeDestroy() {
    this.$store.unregisterModule(NAMESPACE);
  },
};
</script>

<style scoped>
</style>
