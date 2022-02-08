import {OPENWEATHERMAP_API_KEY} from '@env';

const requestOptions = {
  method: 'GET',
  redirect: 'follow',
};

const getCityWeatherInfo = async (cityName: string): Promise<string[]> => {
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?appid=${OPENWEATHERMAP_API_KEY}&q=${cityName}`,
    requestOptions,
  );
  return await response.json();
};

export default getCityWeatherInfo;
