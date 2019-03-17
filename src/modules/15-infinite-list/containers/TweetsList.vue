<template>
<div>
  <h3>My Tweets</h3>
  <simple-infinite-list
    :items="tweets"
    @load-more-click="loadMoreTweets()"
  />
  <div class="fixed-pos">
    <notifications-info
      :total="tweetsCount"
      :unread="unreadTweetsCount"
      @mark-as-read="markAllTweetsAsRead()"
    />
  </div>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import SimpleInfiniteList from '../components/SimpleInfiniteList';
import { NAMESPACE } from '../store';
import NotificationsInfo from '../components/NotificationsInfo';

export default {
  components: {
    NotificationsInfo,
    SimpleInfiniteList,
  },
  name: 'TweetsList',
  data() {
    return {
      offset: 0,
      limit: 20,
    };
  },
  methods: {
    ...mapActions(NAMESPACE, ['fetchTweetsPage', 'subscribeToNewTweets', 'markAllTweetsAsRead']),
    loadMoreTweets() {
      const { offset, limit } = this;
      this.fetchTweetsPage({ offset, limit });
      this.offset += this.limit;
    },
  },
  computed: {
    ...mapGetters(NAMESPACE, ['tweets', 'tweetsCount', 'unreadTweetsCount']),
  },
  mounted() {
    this.loadMoreTweets();
    this.subscribeToNewTweets();
  },
};
</script>

<style scoped>
.fixed-pos {
  position: fixed;
  top: 70px;
  right: 25px;
}
</style>
