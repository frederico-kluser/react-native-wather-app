import {GOOGLE_API_KEY} from '@env';

const requestOptions = {
  method: 'GET',
  redirect: 'follow',
};

const getCityNames = async (cityName: string): Promise<string[]> => {
  const response = await fetch(
    `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURI(
      cityName,
    )}&sensor=false&types=(cities)&key=${GOOGLE_API_KEY}`,
    requestOptions,
  );
  return await response.json();
};

export default getCityNames;
