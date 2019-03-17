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
  api.getAll().then((todosPayload) => {
    context.commit(FETCH_TODOS_SUCCESS, todosPayload);
  }, (error) => {
    context.commit(FETCH_TODOS_FAILURE, error);
  });
};

const createTodo = (context, todo) => {
  api.create(todo).then((createdTodoPayload) => {
    context.commit(CREATE_TODO, createdTodoPayload);
  });
};

const deleteTodo = (context, todo) => {
  if (!todo) {
    throw new Error('Undefined todo');
  }
  api.remove(todo).then((deletedId) => {
    context.commit(DELETE_TODO, deletedId);
  });
};

export default {
  fetchTodos,
  createTodo,
  deleteTodo,
};
