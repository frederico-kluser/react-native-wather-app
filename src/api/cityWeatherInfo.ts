import {OPENWEATHERMAP_API_KEY} from '@env';

const requestOptions = {
  method: 'GET',
  redirect: 'follow',
};

const domain = 'https://api.openweathermap.org/data/2.5';

const getCityWeatherInfo = async (cityName: string): Promise<string[]> => {
  const response = await fetch(
    `${domain}/weather?appid=${OPENWEATHERMAP_API_KEY}&q=${encodeURI(
      cityName,
    )}`,
    requestOptions,
  );
  return await response.json();
};

export const getCityWeatherNextDaysInfo = async (
  lat: string,
  lon: string,
): Promise<string[]> => {
  const response = await fetch(
    `${domain}/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely,alerts&appid=${OPENWEATHERMAP_API_KEY}`,
    requestOptions,
  );
  return await response.json();
};

export default getCityWeatherInfo;
