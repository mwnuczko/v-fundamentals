import {
  SHOW_TODO_LIST,
  DELETE_TODO,
  CREATE_TODO,
} from './mutation-types';
import api from '../../../api/todos-api';

const fetchTodos = (context) => {
  api.getAll().then((todos) => {
    context.commit(SHOW_TODO_LIST, todos);
  });
};

const createTodo = (context, todo) => {
  api.create(todo).then((createdTodo) => {
    context.commit(CREATE_TODO, createdTodo);
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
