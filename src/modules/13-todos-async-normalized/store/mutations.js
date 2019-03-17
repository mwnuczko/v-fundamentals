import { entities, saveEntity, deleteEntity } from '../../../store/mutations';
import {
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_FAILURE,
  FETCH_TODOS_SUCCESS,
  CREATE_TODO,
  DELETE_TODO,
} from './mutation-types';

const createTodo = (state, todoPayload) => {
  saveEntity(state, todoPayload);
};

const entitiesKey = 'todos';
const deleteTodo = (state, deletedId) => {
  deleteEntity(state, deletedId, entitiesKey);
};

const isFetchingTodosMutation = (state, value) => {
  state.isFetching.todos = value;
};

const todosMutation = (state, todosPayload) => {
  isFetchingTodosMutation(state, false);
  entities(state, todosPayload);
};

const errorMutation = (state, error) => {
  isFetchingTodosMutation(state, false);
  state.error.todos = error;
};

export default {
  [FETCH_TODOS_REQUEST]: isFetchingTodosMutation,
  [FETCH_TODOS_SUCCESS]: todosMutation,
  [FETCH_TODOS_FAILURE]: errorMutation,
  [CREATE_TODO]: createTodo,
  [DELETE_TODO]: deleteTodo,
};
