import { BASE_URL, API_KEY } from '@env';
import { NasaResponse } from '../infrastructure/interfaces/NasaResponse';

export const getTodayImage = async (): Promise<NasaResponse> => {
  try {
    const response = await fetch(`${BASE_URL}?api_key=${API_KEY}`);
    const data: NasaResponse = await response.json();
    return Promise.resolve(data);
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
};
