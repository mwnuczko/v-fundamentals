import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const state = {
  syncCounter: {
    value: 100,
  },
  asyncCounter: {
    value: -11,
  },
};

export const NAMESPACE = 'vuex-basics-module';

export default {
  state,
  actions,
  getters,
  mutations,
};
