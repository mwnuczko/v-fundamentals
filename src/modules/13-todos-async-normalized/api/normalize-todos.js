import { normalize, schema } from 'normalizr';

const KEY = 'todos';
const todoSchema = new schema.Entity(KEY);
const todoListSchema = { [KEY]: [todoSchema] };

const normalizeTodos = {
  array(todos) {
    return normalize({ [KEY]: todos }, todoListSchema);
  },

  entity(todo) {
    return this.array([todo]);
  },
};

export default normalizeTodos;
