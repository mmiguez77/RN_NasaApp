import {BASE_URL, API_KEY} from '@env';
import {NasaResponse} from '../infrastructure/interfaces/NasaResponse';

const getImgOfDay = async (urlParams?: string): Promise<NasaResponse> => {
  try {
    const response = await fetch(
      `${BASE_URL}?api_key=${API_KEY}${urlParams ? `&${urlParams}` : ''}`,
    );
    const data: NasaResponse = await response.json();
    return Promise.resolve(data);
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
};

export default getImgOfDay;
