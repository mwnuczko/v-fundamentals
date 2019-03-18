import { inMemoryTodos } from '../data/todos-data';
import uuid from '../../../utils/simple-uuid';

export default {
  getAll() {
    return copyTodos(inMemoryTodos);
  },
  delete(todos, index) {
    todos.splice(index, 1);
  },
  create(todos, todo) {
    todos.push({ id: uuid(), ...todo });
  }
}

const copyTodos = (source) => {
  return source.map(todo => {
    return {
      id: todo.id || '',
      title: todo.title,
      description: todo.description || ''
    }
  });
};
