import {
  FETCH_TWEETS_FAILURE,
  FETCH_TWEETS_SUCCESS,
  FETCH_TWEETS_REQUEST,
  PUSH_TWEETS_SUCCESS, NEW_TWEETS_SUBSCRIPTION, ALL_TWEETS_READ,
} from './mutation-types';
import api from '../api';
import normalizeTweets from '../api/normalize-tweets';

const fetchTweetsPage = (context, { offset, limit }) => {
  // TODO: request
  // TODO: success
  // TODO: error
};

const subscribeToNewTweets = (context) => {
  // TODO mut: NEW_TWEETS_SUBSCRIPTION
  const updatesFrequency = 5000;
  api.subscribe((tweets) => {
    // TODO mut: PUSH_TWEETS_SUCCESS
  }, updatesFrequency);
};

const markAllTweetsAsRead = (context) => {
  // TODO
};


export default {
  fetchTweetsPage,
  subscribeToNewTweets,
  markAllTweetsAsRead,
};
