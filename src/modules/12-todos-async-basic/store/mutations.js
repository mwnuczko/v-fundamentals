import { filter } from 'lodash';
import {
  FETCH_ALL_TODOS,
  CREATE_TODO,
  DELETE_TODO,
} from './mutation-types';

// TODO mutations: addTodo, deleteTodo, setTodos
const setTodos = (state, value) => {
  state.todos = value;
};

export default {
  [FETCH_ALL_TODOS]: setTodos
};
