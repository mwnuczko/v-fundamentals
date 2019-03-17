import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const state = {
  entities: {
    tweets: {},
  },
  result: {
    tweets: [],
    unreadTweets: [],
  },
};

export const NAMESPACE = 'infinite-list-module';

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
};