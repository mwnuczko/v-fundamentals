import { map } from 'lodash';

const categoriesIds = (state) => {
  return state.result.categories;
};

const categoryById = (state) => {
  return state.entities.categories;
};


const categories = function (state, getters) {
  // TODO
};

const todosByCategoryId = (state, getters) => {
  // TODO: parametrized getter -> return function
};

const isCategoriesListFetching = (state) => {
  // TODO
};

export default {
  categoriesIds,
  categories,
  isCategoriesListFetching,
  categoryById,
  todosByCategoryId,
};
