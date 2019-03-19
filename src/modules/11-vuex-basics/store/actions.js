import { SYNC_INCREMENT, SYNC_DECREMENT, ASYNC_INCREMENT, ASYNC_DECREMENT } from './mutation-types';
import api from '../api';

const incrementSyncCounter = (context) => {
  console.log('incrementSyncCounter context obj', context);
  context.commit(SYNC_INCREMENT, 10);
};

// TODO: decrementSyncCounter action
const decrementSyncCounter = ({commit}) => {
  console.log('decrementSyncCounter context obj', context);
  commit(SYNC_DECREMENT, 5);
};

const incrementAsyncCounter = (context, value) => {
  return api.ajaxCall().then(() => {
    context.commit(ASYNC_INCREMENT, value);
  });
};

// TODO: decrementAsyncCounter action
const decrementAsyncCounter = (context, value) => {
  return api.ajaxCall().then(() => {
    context.commit(ASYNC_DECREMENT, value);
  });
};

export default {
  incrementSyncCounter,
  decrementSyncCounter,
  incrementAsyncCounter,
  decrementAsyncCounter
};
