import uuid from '../../../utils/simple-uuid';
import random from '../../../utils/random';
import { resolveAfter } from '../../../api/data-api.service';

const generateTweet = () => {
  const text = `Some text... ${random(10000)}`;
  return { id: uuid(), text };
};

const generateTweetsList = (count) => {
  const tweets = [];
  for (let i = 0; i < count; i++) {
    tweets.push(generateTweet());
  }
  return tweets;
};

const DELAY = 1200;

const allTweets = generateTweetsList(125);

const api = {
  getList({ offset, limit }) {
    const tweetsPage = allTweets.slice(offset, offset + limit);
    return resolveAfter(tweetsPage, DELAY);
  },

  subscribe(callback, frequency = 10000) {
    setInterval(() => {
      const count = random(4);
      callback(generateTweetsList(count));
    }, frequency);
  },
};

export default api;
