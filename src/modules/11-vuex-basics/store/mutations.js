import { SYNC_INCREMENT, SYNC_DECREMENT, ASYNC_DECREMENT, ASYNC_INCREMENT } from './mutation-types';

const incrementSync = (state, payload) => {
  console.log('incrementSync args', state, payload);
  state.syncCounter.value += payload;
};

// TODO: decrementSync mutation
const decrementSync = (state, payload) => {
  console.log('descrementSync args', state, payload);
  state.syncCounter.value -= payload;
};

const incrementAsync = (state, value) => {
  state.asyncCounter.value += value;
};

// TODO: decrementAsync mutation
const decrementAsync = (state, value) => {
  state.asyncCounter.value -= value;
};


export default {
  [SYNC_INCREMENT]: incrementSync,
  [SYNC_DECREMENT]: decrementSync,
  [ASYNC_INCREMENT]: incrementAsync,
  [ASYNC_DECREMENT]: decrementAsync
};
