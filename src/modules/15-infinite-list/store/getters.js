import { map } from 'lodash';

const tweetsIds = (state) => {
  return state.result.tweets;
};

const tweetsById = (state) => {
  return state.entities.tweets;
};

const tweets = (state, getters) => {
  // TODO
};

const tweetsCount = (state, getters) => {
  // TODO
};

const unreadTweetsCount = (state) => {
  // TODO
};

export default {
  tweetsIds,
  tweetsById,
  tweets,
  tweetsCount,
  unreadTweetsCount,
};
