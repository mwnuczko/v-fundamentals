import { SYNC_INCREMENT, SYNC_DECREMENT, ASYNC_INCREMENT, ASYNC_DECREMENT } from './mutation-types';
import api from '../api';

const incrementSyncCounter = (context) => {
  // console.log('incrementSyncCounter context obj', context);
  context.commit(SYNC_INCREMENT);
};

// TODO: decrementSyncCounter action

const incrementAsyncCounter = (context, value) => {
  return api.ajaxCall().then(() => {
    context.commit(ASYNC_INCREMENT, value);
  });
};

// TODO: decrementAsyncCounter action

export default {
  incrementSyncCounter,
  incrementAsyncCounter,
};
