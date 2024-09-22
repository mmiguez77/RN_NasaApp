import {BASE_URL, API_KEY} from '@env';

const getImgOfDay = async (urlParams?: string) => {
  try {
    const response = await fetch(
      `${BASE_URL}?api_key=${API_KEY}${urlParams ? `&${urlParams}` : ''}`,
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getImgOfDay;
