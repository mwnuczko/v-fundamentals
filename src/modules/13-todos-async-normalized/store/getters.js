import { map } from 'lodash';

const todosIds = (state) => {
  return state.result.todos;
};

const todosMap = (state) => {
  return state.entities.todos;
};

// TODO
const todos = function (state, getters) {
  return [];
};

// TODO
const isTodosListFetching = (state) => {
  return false;
};

export default {
  todosIds,
  todosMap,
  todos,
  isTodosListFetching,
};
