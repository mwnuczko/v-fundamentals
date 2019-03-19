import {
  FETCH_ALL_TODOS,
  DELETE_TODO,
  CREATE_TODO,
} from './mutation-types';
import api from '../../../api/todos-api';

// api.create(params).then((createdTodo) => ...)
// api.remove(todo).then((deletedId) => ...)

// TODO actions: fetchTodos, createTodo, deleteTodo
const fetchTodos = (context) => {
  api.getAll().then(
      (todos) => context.commit(FETCH_ALL_TODOS, todos)
  );
  
};

export default {
  fetchTodos
};
