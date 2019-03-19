import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const state = {
  entities: {
    todos: {
      120: {id: 120, title: 'title120', description: 'desc120'},
      121: {id: 121, title: 'title121', description: 'desc121'},
      997: {id: 997, title: 'title997', description: 'desc997'}
    }
  },
  result: {
    todos: [121, 997, 120],
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
  state,
  actions,
  getters,
  mutations,
};
