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
  context.commit(FETCH_CATEGORIES_REQUEST, true);
  api.getAll().then((todos) => {
    context.commit(FETCH_CATEGORIES_SUCCESS, todos);
  }, (error) => {
    context.commit(FETCH_CATEGORIES_FAILURE, error);
  });
};

const createCategory = (context, todo) => {
  // TODO: loading
  api.create(todo).then((createdTodo) => {
    context.commit(CREATE_CATEGORY, createdTodo);
  });
  // TODO: error handling
};

const fetchCategory = (context, id) => {
  context.commit(FETCH_CATEGORY_REQUEST, true);
  api.find(id).then((category) => {
    context.commit(FETCH_CATEGORY_SUCCESS, category);
  }, (error) => {
    context.commit(FETCH_CATEGORY_FAILURE, error);
  });
};

const deleteCategory = (context, category) => {
  if (!category) {
    throw new Error('Undefined category');
  }
  api.remove(category).then((deletedId) => {
    context.commit(DELETE_CATEGORY, deletedId);
  });
};

const createTodoInCategory = (context, { categoryId, todo }) => {
  api.createTodoInCategory({ categoryId, todo }).then((modifiedCategory) => {
    context.commit(CREATE_TODO_IN_CATEGORY_SUCCESS, modifiedCategory);
  });
};

const deleteTodoFromCategory = (context, { categoryId, todoId }) => {
  api.deleteTodoFromCategory({ categoryId, todoId }).then((modifiedCategory) => {
    context.commit(DELETE_TODO_FROM_CATEGORY_SUCCESS, modifiedCategory);
  });
};

export default {
  fetchCategories,
  fetchCategory,
  createCategory,
  deleteCategory,
  createTodoInCategory,
  deleteTodoFromCategory,
};
