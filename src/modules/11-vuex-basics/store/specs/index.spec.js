import Vuex from 'vuex';
import storeDefinition from '../index';

describe('SyncCounter: mutations', () => {
  let store;

  beforeEach(function () {
    store = new Vuex.Store(storeDefinition);
  });

  describe('incrementSyncCounter action', function () {
    it('should increment SyncCounter by 1', function () {
      // given
      const originalValue = store.getters.syncCounterValue;
      // when
      store.dispatch('incrementSyncCounter');
      // then
      const expectedValue = originalValue + 1;
      expect(store.getters.syncCounterValue).to.equal(expectedValue);
    });
  });

  describe('decrementSyncCounter action', function () {
    it('should decrement SyncCounter by 1', function () {
      // given
      const originalValue = store.getters.syncCounterValue;
      // when
      store.dispatch('decrementSyncCounter');
      // then
      const expectedValue = originalValue - 1;
      expect(store.getters.syncCounterValue).to.equal(expectedValue);
    });
  });

  describe('incrementAsyncCounter action', function () {
    it('should increment AsyncCounter by 10', function (done) {
      // given
      const originalValue = store.getters.asyncCounterValue;
      const value = 10;
      // when
      store.dispatch('incrementAsyncCounter', value).then(() => {
        // then
        const expectedValue = originalValue + value;
        try {
          expect(store.getters.asyncCounterValue).to.equal(expectedValue);
        } catch (error) {
          done(error);
        }
        done();
      });
    });
  });

  describe('decrementAsyncCounter action', function () {
    it('should decrement AsyncCounter by 10', function (done) {
      // given
      const originalValue = store.getters.asyncCounterValue;
      const value = 3;
      // when
      store.dispatch('decrementAsyncCounter', value).then(() => {
        // then
        const expectedValue = originalValue - value;
        try {
          expect(store.getters.asyncCounterValue).to.equal(expectedValue);
        } catch (error) {
          done(error);
        }
        done();
      });
    });
  });
});
