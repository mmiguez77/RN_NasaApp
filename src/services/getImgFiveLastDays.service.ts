import { BASE_URL, API_KEY } from '@env';
import { NasaResponse } from '../infrastructure/interfaces/NasaResponse';

export const getLastFiveDaysImages = async (
  startDate: string,
  endDate: string,
): Promise<NasaResponse[]> => {
  try {
    const response = await fetch(
      `${BASE_URL}?api_key=${API_KEY}&start_date=${startDate}&end_date=${endDate}`,
    );
    const data = await response.json();
    return Promise.resolve(data);
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
};
