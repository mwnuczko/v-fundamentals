/* eslint-disable import/no-webpack-loader-syntax */
// import actionsInjector from 'inject-loader!../actions';
//
// const data = {
//   entities: {
//     categories: {},
//   },
//   result: {
//     categories: [],
//   },
// };
//
// // create the module with our mocks
// const actions = actionsInjector({
//   '../../api/categories-api': {
//     getList() {
//       return Promise.resolve(data);
//     },
//   },
// });
//
// const testAction = (action, payload, state, expectedMutations, done) => {
//   let count = 0;
//
//   // mock commit
//   const commit = (type, actualPayload) => {
//     const mutation = expectedMutations[count];
//
//     try {
//       expect(mutation.type).to.equal(type);
//       if (actualPayload) {
//         expect(mutation.payload).to.deep.equal(actualPayload);
//       }
//     } catch (error) {
//       done(error);
//     }
//
//     count++;
//     if (count >= expectedMutations.length) {
//       done();
//     }
//   };
//
//   // call the action with mocked store and arguments
//   action({ commit, state }, payload);
//
//   // check if no mutations should have been dispatched
//   if (expectedMutations.length === 0) {
//     expect(count).to.equal(0);
//     done();
//   }
// };

describe('categories: actions', () => {
  // beforeEach(function () {
  // });

  // describe('fetchCategories', function () {
  //   it('should GGG', function (done) {
  //     testAction(actions.getAllProducts, null, {}, [
  //       { type: 'REQUEST_PRODUCTS' },
  //       { type: 'RECEIVE_PRODUCTS', payload: { /* mocked response */ } }
  //     ], done);
  //   });
  // });

  it('should zzz', () => {
    expect(123).to.equal(123);
  });
});
