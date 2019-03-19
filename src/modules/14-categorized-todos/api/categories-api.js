import DataApiService from '../../../api/data-api.service';
import normalizeCategories from './normalize-categories';
import uuid from '../../../utils/simple-uuid';

const categoriesApi = new DataApiService('/api/categories', 1200);

const api = {
  getAll() {
    return categoriesApi.getAll().then((categories) => {
      return normalizeCategories.array(categories);
    });
  },

  find(id) {
    return categoriesApi.find(id).then((category) => {
      return normalizeCategories.entity(category);
    });
  },

  create(categoryData) {
    return categoriesApi.create(categoryData).then((createdCategory) => {
      return normalizeCategories.entity(createdCategory);
    });
  },

  remove(category) {
    return categoriesApi.remove(category);
  },

  deleteTodoFromCategory({ categoryId, todoId }) {
    return categoriesApi.find(categoryId).then((category) => {
      category.todos = category.todos.filter((todo) => todo.id !== todoId);
      return categoriesApi.update(category);
    }).then((updatedCategory) => {
      return normalizeCategories.entity(updatedCategory);
    });
  },

  createTodoInCategory({ categoryId, todo }) {
    return categoriesApi.find(categoryId).then((category) => {
      category.todos.push({ id: uuid(), ...todo });
      return categoriesApi.update(category);
    }).then((updatedCategory) => {
      return normalizeCategories.entity(updatedCategory);
    });
  },
};

export default api;
