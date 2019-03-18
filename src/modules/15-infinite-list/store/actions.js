import {
  FETCH_TWEETS_FAILURE,
  FETCH_TWEETS_SUCCESS,
  FETCH_TWEETS_REQUEST,
  PUSH_TWEETS_SUCCESS, NEW_TWEETS_SUBSCRIPTION, ALL_TWEETS_READ,
} from './mutation-types';
import api from '../api';
import normalizeTweets from '../api/normalize-tweets';

const fetchTweetsPage = (context, { offset, limit }) => {
  context.commit(FETCH_TWEETS_REQUEST, { isFetching: true }); // TODO
  api.getList({ offset, limit }).then((tweets) => {
    const normalizedTweets = normalizeTweets.array(tweets);
    context.commit(FETCH_TWEETS_SUCCESS, normalizedTweets);
  }, (error) => {
    context.commit(FETCH_TWEETS_FAILURE, error);
  });
};

const subscribeToNewTweets = (context) => {
  context.commit(NEW_TWEETS_SUBSCRIPTION, Date.now());
  const updatesFrequency = 5000;
  api.subscribe((tweets) => {
    const normalizedTweets = normalizeTweets.array(tweets);
    context.commit(PUSH_TWEETS_SUCCESS, normalizedTweets);
  }, updatesFrequency);
};

const markAllTweetsAsRead = (context) => {
  context.commit(ALL_TWEETS_READ);
};


export default {
  fetchTweetsPage,
  subscribeToNewTweets,
  markAllTweetsAsRead,
};
