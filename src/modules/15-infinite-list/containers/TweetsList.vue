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
    // TODO actions: fetchTweetsPage, subscribeToNewTweets, markAllTweetsAsRead
    loadMoreTweets() {
      const { offset, limit } = this;
      this.fetchTweetsPage({ offset, limit });
      this.offset += this.limit;
    },
  },
  computed: {
    // TODO getters: tweets, tweetsCount, unreadTweetsCount
    tweets() {
      return [];
    },
    tweetsCount() {
      return 99;
    },
    unreadTweetsCount() {
      return 98;
    }
  },
  mounted() {
    // TODO: loadMoreTweets; subscribeToNewTweets
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
