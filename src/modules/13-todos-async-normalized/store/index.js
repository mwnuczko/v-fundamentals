import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const state = {
  entities: {
    todos: {},
  },
  result: {
    todos: [],
  },
  isFetching: {
    todos: false,
  },
  error: {
    todos: null,
  },
};

export const NAMESPACE = 'todos-async-normalized-module';

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
};
