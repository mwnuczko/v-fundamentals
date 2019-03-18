import { normalize, schema } from 'normalizr';

const TODOS_KEY = 'todos';
const todoSchema = new schema.Entity(TODOS_KEY);

const KEY = 'categories';
const categorySchema = new schema.Entity(KEY, { todos: [todoSchema] });
const categoriesListSchema = { [KEY]: [categorySchema] };

const normalizeCategories = {
  array(categories) {
    return normalize({ [KEY]: categories }, categoriesListSchema);
  },

  entity(category) {
    return this.array([category]);
  },
};

export default normalizeCategories;

export {
  categorySchema,
  categoriesListSchema,
};
