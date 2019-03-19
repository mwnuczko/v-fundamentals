import {
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_FAILURE,
  DELETE_TODO,
  CREATE_TODO,
} from './mutation-types';
import api from '../api';

const fetchTodos = (context) => {
  // TODO: FETCH_TODOS_REQUEST
  api.getAll().then((todosPayload) => {
    console.log('normalized todos', todosPayload);
    // TODO: FETCH_TODOS_SUCCESS
  }, (error) => {
    // TODO: FETCH_TODOS_FAILURE
  });
};

// TODO actions: createTodo, deleteTodo

export default {
  fetchTodos,
};
