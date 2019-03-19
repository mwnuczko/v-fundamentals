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
import api from '../api/categories-api';

const fetchCategories = (context) => {
  // TODO: request
  // TODO: success
  // TODO: error
};

const createCategory = (context, categoryParams) => {
  // TODO: request
  // TODO: success
  // TODO: error
};

const fetchCategory = (context, id) => {
  // TODO: success
  // TODO: error
};

const deleteCategory = (context, category) => {
  // TODO: success
};

const createTodoInCategory = (context, { categoryId, todo }) => {
  // TODO: success
};

const deleteTodoFromCategory = (context, { categoryId, todoId }) => {
  // TODO: success
};

export default {
  fetchCategories,
  fetchCategory,
  createCategory,
  deleteCategory,
  createTodoInCategory,
  deleteTodoFromCategory,
};
