import Vuex from 'vuex';
import categoriesStoreDefinition from '../index';
import {
  FETCH_CATEGORIES_REQUEST, FETCH_CATEGORIES_SUCCESS,
  // FETCH_CATEGORIES_SUCCESS,
  // FETCH_CATEGORIES_FAILURE,
} from '../mutation-types';
import normalizeCategories from '../../api/normalize-categories';

const random = (max) => {
  return Math.floor(Math.random() * max);
};

const fakeTodo = (id) => {
  return { id, title: `Todo ${random(1000)}` };
};

const fakeCategory = (id, todosCount = 0) => {
  const todos = [];
  for (let i = 0; i < todosCount; i++) {
    todos.push(fakeTodo(`todo-${random(100000)}`));
  }
  return { id, title: `Category ${random(1000)}`, todos };
};


describe('categories: mutations', () => {
  let store;

  beforeEach(function () {
    store = new Vuex.Store(categoriesStoreDefinition);
  });

  describe(FETCH_CATEGORIES_REQUEST, function () {
    it('should start fetching categories', function () {
      const expectedValue = true;
      store.commit(FETCH_CATEGORIES_REQUEST, expectedValue);
      expect(store.getters.isCategoriesListFetching).to.equal(expectedValue);
    });
  });

  describe(FETCH_CATEGORIES_SUCCESS, function () {
    it('should start fetching categories', function () {
      // given
      const categories = [
        fakeCategory('qq2', 3),
        fakeCategory('qq3', 5),
        fakeCategory('qq1', 1),
      ];
      const normalizedData = normalizeCategories.array(categories);
      // when
      store.commit(FETCH_CATEGORIES_SUCCESS, normalizedData);
      // then
      expect(store.getters.categories.map((c) => c.id)).to.deep.equal(categories.map((c) => c.id));
    });
  });
});
