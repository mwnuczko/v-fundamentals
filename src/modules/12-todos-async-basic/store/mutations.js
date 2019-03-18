import { filter } from 'lodash';
import {
  SHOW_TODO_LIST,
  CREATE_TODO,
  DELETE_TODO,
} from './mutation-types';

const createTodo = (state, todo) => {
  state.todos = [...state.todos, todo];
};

const deleteTodo = (state, deletedId) => {
  state.todos = filter(state.todos, (todo) => {
    return todo.id !== deletedId;
  });
};

const showTodoList = (state, todos) => {
  state.todos = todos;
};

export default {
  [SHOW_TODO_LIST]: showTodoList,
  [CREATE_TODO]: createTodo,
  [DELETE_TODO]: deleteTodo,
};
