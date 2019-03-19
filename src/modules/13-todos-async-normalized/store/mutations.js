import {
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_FAILURE,
  FETCH_TODOS_SUCCESS,
  CREATE_TODO,
  DELETE_TODO,
} from './mutation-types';

const createTodo = (state, todoPayload) => {
  // TODO
};

const deleteTodo = (state, deletedId) => {
  // TODO
};

const setIsFetchingTodos = (state, value) => {
  // TODO
};

const setTodos = (state, todosPayload) => {
  // TODO
};

const setTodosFetchError = (state, error) => {
  // TODO
};

export default {
  [FETCH_TODOS_REQUEST]: setIsFetchingTodos,
  [FETCH_TODOS_SUCCESS]: setTodos,
  [FETCH_TODOS_FAILURE]: setTodosFetchError,
  [CREATE_TODO]: createTodo,
  [DELETE_TODO]: deleteTodo,
};
