import { merge } from 'lodash';
import {
  ALL_TWEETS_READ,
  FETCH_TWEETS_FAILURE,
  FETCH_TWEETS_REQUEST,
  FETCH_TWEETS_SUCCESS, NEW_TWEETS_SUBSCRIPTION, PUSH_TWEETS_SUCCESS,
} from './mutation-types';


const isFetchingMutation = (state, payload) => {
  console.log('isFetchingMutation', payload);
};

const pushEntities = (entitiesName, state, payload, unshift = false) => {
  if (!entitiesName) {
    throw new Error('Missing required "entitiesName" param');
  }
  const entitiesCopy = merge({}, state.entities);
  entitiesCopy[entitiesName] = {
    ...entitiesCopy[entitiesName],
    ...payload.entities[entitiesName],
  };
  const resultCopy = merge({}, state.result);
  if (unshift) {
    resultCopy[entitiesName] = [
      ...payload.result[entitiesName],
      ...resultCopy[entitiesName],
    ];
  } else {
    resultCopy[entitiesName] = [
      ...resultCopy[entitiesName],
      ...payload.result[entitiesName],
    ];
  }
  state.entities = entitiesCopy;
  state.result = resultCopy;
};

const fetchedTweets = (state, tweetsPayload) => {
  console.log('fetchedTweets ', state, tweetsPayload);
  // isFetchingMutation(state, false);
  pushEntities('tweets', state, tweetsPayload);
};

const newTweetsSubscription = (state, payload) => {
  console.log('newTweetsSubscription TODO', state, payload);
};

const pushedTweets = (state, tweetsPayload) => {
  // isFetchingMutation(state, false);
  pushEntities('tweets', state, tweetsPayload, true);
  state.result.unreadTweets = [
    ...state.result.unreadTweets,
    ...tweetsPayload.result.tweets,
  ];
};

const allTweetsRead = (state) => {
  state.result.unreadTweets = [];
};


const errorMutation = (state, error) => {
  console.log('errorMutation ', state, error);
  // isFetchingMutation(state, false);
  // state.todosList.error = error;
};

export default {
  [FETCH_TWEETS_REQUEST]: isFetchingMutation,
  [FETCH_TWEETS_SUCCESS]: fetchedTweets,
  [FETCH_TWEETS_FAILURE]: errorMutation,
  [NEW_TWEETS_SUBSCRIPTION]: newTweetsSubscription,
  [PUSH_TWEETS_SUCCESS]: pushedTweets,
  [ALL_TWEETS_READ]: allTweetsRead,
};
