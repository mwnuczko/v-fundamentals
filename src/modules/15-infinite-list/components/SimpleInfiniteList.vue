<template>
<v-flex>
  <div v-if="isLoading">
    Loading...
  </div>
  <div v-else>
    <ul>
      <transition-group name="fade">
        <li v-for="item in items" :key="item.id">
          {{ item.text }}
        </li>
      </transition-group>
    </ul>
    <div>
      <v-btn @click="onLoadMore()" color="blue">Load more</v-btn>
    </div>
  </div>
</v-flex>
</template>

<script>
export default {
  name: 'SimpleInfiniteList',
  props: [
    'items',
  ],
  data() {
    return {};
  },
  computed: {
    isLoading() {
      return !this.items || this.items.length === 0;
    },
  },
  methods: {
    onLoadMore() {
      this.$emit('load-more-click');
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
