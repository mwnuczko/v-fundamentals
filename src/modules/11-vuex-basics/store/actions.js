import { SYNC_INCREMENT, SYNC_DECREMENT, ASYNC_INCREMENT, ASYNC_DECREMENT } from './mutation-types';
import api from '../api';

const incrementSyncCounter = (context) => {
  context.commit(SYNC_INCREMENT);
};

const decrementSyncCounter = (context) => {
  context.commit(SYNC_DECREMENT);
};

const incrementAsyncCounter = (context, value) => {
  return api.ajaxCall().then(() => {
    context.commit(ASYNC_INCREMENT, value);
  });
};

const decrementAsyncCounter = (context, value) => {
  return api.ajaxCall().then(() => {
    context.commit(ASYNC_DECREMENT, value);
  });
};

export default {
  incrementSyncCounter,
  decrementSyncCounter,
  incrementAsyncCounter,
  decrementAsyncCounter,
};
