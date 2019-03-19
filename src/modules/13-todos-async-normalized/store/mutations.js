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
  debugger;
  delete state.entities.todos[deletedId.id];
  const newResultTodos = state.result.todos.filter(todoId => todoId !== deletedId.id);
  state.result.todos = newResultTodos;
  // const resultIndex = state.result.todos.indexOf(deletedId);
  // state.result.todos.splice(resultIndex, 1);
};

const setIsFetchingTodos = (state, value) => {
  state.isFetching.todos = value;
};

const setTodos = (state, {entities, result}) => {
  state.entities.todos = entities.todos;
  state.result.todos = result.todos;
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
