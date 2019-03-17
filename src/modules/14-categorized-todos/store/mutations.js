import { entities, saveEntity, deleteEntity } from '../../../store/mutations';
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

const categoriesEntityId = 'categories';
const deleteCategory = (state, deletedId) => {
  deleteEntity(state, deletedId, categoriesEntityId);
};

const isFetchingCategories = (state, value) => {
  state.isFetching.categories = value;
};

const fetchedCategories = (state, categoriesPayload) => {
  isFetchingCategories(state, false);
  entities(state, categoriesPayload);
};

const errorFetchingCategories = (state, error) => {
  isFetchingCategories(state, false);
  state.error.categories = error;
};

const isFetchingSingleCategory = (state, value) => {
  console.log('isFetchingSingleCategory TODO', state, value);
};

const fetchedSingleCategory = (state, categoryPayload) => {
  isFetchingSingleCategory(state, false);
  entities(state, categoryPayload);
};

const errorFetchingSingleCategory = (state, error) => {
  isFetchingSingleCategory(state, false);
  console.log('errorFetchingCategory TODO', state, error);
};

const saveCategory = (state, categoryPayload) => {
  saveEntity(state, categoryPayload);
};

export default {
  [FETCH_CATEGORIES_REQUEST]: isFetchingCategories,
  [FETCH_CATEGORIES_SUCCESS]: fetchedCategories,
  [FETCH_CATEGORIES_FAILURE]: errorFetchingCategories,

  [FETCH_CATEGORY_REQUEST]: isFetchingSingleCategory,
  [FETCH_CATEGORY_SUCCESS]: fetchedSingleCategory,
  [FETCH_CATEGORY_FAILURE]: errorFetchingSingleCategory,

  [CREATE_CATEGORY]: saveCategory,
  [DELETE_CATEGORY]: deleteCategory,

  [CREATE_TODO_IN_CATEGORY_SUCCESS]: saveCategory,
  [DELETE_TODO_FROM_CATEGORY_SUCCESS]: saveCategory,
};
