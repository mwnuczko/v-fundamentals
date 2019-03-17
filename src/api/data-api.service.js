import axios from 'axios';

const DEFAULT_DELAY = 1800;

const port = 3100;
const baseUrl = `http://localhost:${port}`;

export function resolveAfter(data, delay) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(data);
    }, delay);
  });
}

export default class DataApiService {
  constructor(url, delay = DEFAULT_DELAY) {
    this.url = url;
    this.delay = delay;
  }

  find(id) {
    return axios.get(this._getSingleUrl({ id }))
      .then((response) => response.data)
      .then((entity) => resolveAfter(entity, this.delay));
  }

  update(entity) {
    return axios.put(this._getSingleUrl(entity), entity)
      .then((response) => response.data)
      .then((entity) => resolveAfter(entity, this.delay));
  }

  remove(entity) {
    return axios.delete(this._getSingleUrl(entity))
      .then(() => entity.id)
      .then((id) => resolveAfter(id, this.delay));
  }

  create(entity) {
    return axios.post(this._getUrl(), entity)
      .then((response) => response.data)
      .then((created) => resolveAfter(created, this.delay));
  }

  getAll() {
    return axios.get(this._getUrl())
      .then((response) => response.data)
      .then((data) => resolveAfter(data, this.delay));
  }

  _getUrl() {
    return `${baseUrl}${this.url}`;
  }

  _getSingleUrl(entity) {
    return `${this._getUrl()}/${entity.id}`;
  }
}
