import todosApi from '../../../api/todos-api';
import normalizeTodos from './normalize-todos';

const api = {
  getAll() {
    return todosApi.getAll().then((todos) => {
      return normalizeTodos.array(todos);
    });
  },

  find(id) {
    return todosApi.find(id).then((todo) => {
      return normalizeTodos.entity(todo);
    });
  },

  create(todoData) {
    return todosApi.create(todoData).then((todo) => {
      return normalizeTodos.entity(todo);
    });
  },

  remove(todo) {
    return todosApi.remove(todo);
  },
};

export default api;
