import { normalize, schema } from 'normalizr';

const KEY = 'tweets';
const tweetSchema = new schema.Entity(KEY);
const tweetListSchema = { [KEY]: [tweetSchema] };

const normalizeTweets = {
  array(tweets) {
    return normalize({ [KEY]: tweets }, tweetListSchema);
  },

  entity(tweet) {
    return this.array([tweet]);
  },
};

export default normalizeTweets;
