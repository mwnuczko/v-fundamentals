import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const state = {
  entities: {
    categories: {},
    todos: {},
  },
  result: {
    categories: [],
    todos: [],
  },
  isFetching: {
    categories: false,
    todos: false,
  },
  error: {
    categories: null,
    todos: null,
  },
};

export const NAMESPACE = 'categorized-todos-module';

export default {
  state,
  actions,
  getters,
  mutations,
};
