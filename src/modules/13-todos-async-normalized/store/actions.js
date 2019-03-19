import {
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_FAILURE,
  DELETE_TODO,
  CREATE_TODO,
} from './mutation-types';
import api from '../api';

const fetchTodos = (context) => {
  context.commit(FETCH_TODOS_REQUEST, true);
  // TODO: FETCH_TODOS_REQUEST
  api.getAll().then((todosPayload) => {
    console.log('normalized todos', todosPayload);
    // TODO: FETCH_TODOS_SUCCESS
    context.commit(FETCH_TODOS_SUCCESS, todosPayload);
  }, (error) => {
    // TODO: FETCH_TODOS_FAILURE
    context.commit(FETCH_TODOS_FAILURE);
  }).finally(() => {
    context.commit(FETCH_TODOS_REQUEST, false);
  });
};

// TODO actions: createTodo, deleteTodo
const deleteTodo = (context, deletedId) => {
  context.commit(DELETE_TODO, deletedId);
  api.remove(deletedId);
  // context.commit(FETCH_TODOS_REQUEST, true);
  // api.remove(deletedId).finally(() => context.commit(FETCH_TODOS_REQUEST, false));
};

export default {
  fetchTodos,
  deleteTodo
};
