const syncCounterValue = (state) => {
  return state.syncCounter.value;
};

// TODO: multipliedSyncCounterValue getter

// TODO: asyncCounterValue getter
const asyncCounterValue = (state) => {
  return state.asyncCounter.value;
};

// TODO: squaredAsyncCounterValue getter

export default {
  syncCounterValue,
  asyncCounterValue
};
