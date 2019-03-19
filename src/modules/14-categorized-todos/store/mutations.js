import {
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE,
  FETCH_CATEGORY_FAILURE,
  FETCH_CATEGORY_REQUEST,
  FETCH_CATEGORY_SUCCESS,
  CREATE_CATEGORY,
  DELETE_CATEGORY,
  CREATE_TODO_IN_CATEGORY_SUCCESS,
  DELETE_TODO_FROM_CATEGORY_SUCCESS,
} from './mutation-types';

const deleteCategory = (state, deletedId) => {
  // TODO
};

const setIsFetchingCategories = (state, value) => {
  state.isFetching.categories = value;
};

const setCategories = (state, categoriesPayload) => {
  // TODO
};

const setErrorFetchingCategories = (state, error) => {
  // TODO
};

const setIsFetchingSingleCategory = (state, value) => {
};

const setSingleCategory = (state, categoryPayload) => {
  // TODO
};

const setErrorFetchingSingleCategory = (state, error) => {
  // TODO
};

const saveCategory = (state, categoryPayload) => {
  // TODO
};

export default {
  [FETCH_CATEGORIES_REQUEST]: setIsFetchingCategories,
  [FETCH_CATEGORIES_SUCCESS]: setCategories,
  [FETCH_CATEGORIES_FAILURE]: setErrorFetchingCategories,

  [FETCH_CATEGORY_REQUEST]: setIsFetchingSingleCategory,
  [FETCH_CATEGORY_SUCCESS]: setSingleCategory,
  [FETCH_CATEGORY_FAILURE]: setErrorFetchingSingleCategory,

  [CREATE_CATEGORY]: saveCategory,
  [DELETE_CATEGORY]: deleteCategory,

  [CREATE_TODO_IN_CATEGORY_SUCCESS]: saveCategory,
  [DELETE_TODO_FROM_CATEGORY_SUCCESS]: saveCategory,
};
