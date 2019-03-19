import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const state = {
  todos: [
  ],
};

export const NAMESPACE = 'todos-async-basic-module';

export default {
  state,
  actions,
  getters,
  mutations,
};
