import { map } from 'lodash';

const todosIds = (state) => {
  return state.result.todos;
};

const todosMap = (state) => {
  return state.entities.todos;
};

const todos = function (state, getters) {
  return map(getters.todosIds, (id) => {
    return getters.todosMap[id];
  });
};

const isTodosListFetching = (state) => {
  return state.isFetching.todos;
};

export default {
  todosIds,
  todosMap,
  todos,
  isTodosListFetching,
};