import { map } from 'lodash';

const tweetsIds = (state) => {
  return state.result.tweets;
};

const tweetsById = (state) => {
  return state.entities.tweets;
};

const tweets = (state, getters) => {
  return map(getters.tweetsIds, (id) => {
    return getters.tweetsById[id];
  });
};

const tweetsCount = (state, getters) => {
  return getters.tweetsIds.length;
};

const unreadTweetsCount = (state) => {
  return state.result.unreadTweets.length;
};

export default {
  tweetsIds,
  tweetsById,
  tweets,
  tweetsCount,
  unreadTweetsCount,
};
