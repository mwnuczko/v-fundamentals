import { SYNC_INCREMENT, SYNC_DECREMENT, ASYNC_DECREMENT, ASYNC_INCREMENT } from './mutation-types';

const incrementSync = (state, payload) => {
  console.log('incrementSync args', state, payload);
  state.syncCounter.value += 1;
};

// TODO: decrementSync mutation

const incrementAsync = (state, value) => {
  state.asyncCounter.value += value;
};

// TODO: decrementAsync mutation


export default {
  [SYNC_INCREMENT]: incrementSync,
  [ASYNC_INCREMENT]: incrementAsync,
};
