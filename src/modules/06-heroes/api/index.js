import DataApiService from '../../../api/data-api.service';

const url = `/api/heroes`;
const api = new DataApiService(url);

export default api;
