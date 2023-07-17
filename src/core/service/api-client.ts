import { create } from 'apisauce';
import storage from '../utils/storage';

const apiClient = create({
  baseURL: '',
});

apiClient.addAsyncRequestTransform(async (request: any) => {
  const authToken = await storage.getToken();
  if (!authToken) return;
  request.headers['Authorization'] = `Bearer ${authToken}`;
});

apiClient.addAsyncResponseTransform(async (response: any) => {
  if (response.problem === 'NETWORK_ERROR' || response.problem === 'CONNECTION_ERROR' || response.problem === 'TIMEOUT_ERROR') {

  }
});

export default apiClient;
