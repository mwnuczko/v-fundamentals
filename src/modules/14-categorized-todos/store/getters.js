import { map } from 'lodash';

const categoriesIds = (state) => {
  return state.result.categories;
};

const categoryById = (state) => {
  return state.entities.categories;
};

const categories = function (state, getters) {
  return map(getters.categoriesIds, (id) => {
    return getters.categoryById[id];
  });
};

const todosByCategoryId = (state, getters) => {
  return (id) => {
    const { todos = [] } = getters.categoryById[id];
    return map(todos, (todoId) => {
      return state.entities.todos[todoId];
    });
  };
};

const isCategoriesListFetching = (state) => {
  return state.isFetching.categories;
};

export default {
  categoriesIds,
  categories,
  isCategoriesListFetching,
  categoryById,
  todosByCategoryId,
};
