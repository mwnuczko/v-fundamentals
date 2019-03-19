import { merge } from 'lodash';
import {
  ALL_TWEETS_READ,
  FETCH_TWEETS_FAILURE,
  FETCH_TWEETS_REQUEST,
  FETCH_TWEETS_SUCCESS, NEW_TWEETS_SUBSCRIPTION, PUSH_TWEETS_SUCCESS,
} from './mutation-types';


const setIsFetchingTweets = (state, payload) => {
  // TODO
};

const setTweets = (state, tweetsPayload) => {
  // TODO
};

const setNewTweetsSubscription = (state, payload) => {
  // TODO
};

const addPushedTweets = (state, tweetsPayload) => {
  // TODO
};

const setAllTweetsRead = (state) => {
  // TODO
};


const setErrorFetchingTweets = (state, error) => {
  // TODO
};

export default {
  [FETCH_TWEETS_REQUEST]: setIsFetchingTweets,
  [FETCH_TWEETS_SUCCESS]: setTweets,
  [FETCH_TWEETS_FAILURE]: setErrorFetchingTweets,
  [NEW_TWEETS_SUBSCRIPTION]: setNewTweetsSubscription,
  [PUSH_TWEETS_SUCCESS]: addPushedTweets,
  [ALL_TWEETS_READ]: setAllTweetsRead,
};
