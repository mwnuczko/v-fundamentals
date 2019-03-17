import DataApiService from './data-api.service';

const delayInMs = 1800;
const api = new DataApiService('/api/todos', delayInMs);

export default api;
