export type IconProps =
  | 'broken clouds'
  | 'clear sky'
  | 'few clouds'
  | 'humidity'
  | 'mist'
  | 'rain'
  | 'scattered clouds'
  | 'shower rain'
  | 'snow'
  | 'thunderstorm'
  | 'wind';

export const weatherIcons = {
  'broken clouds': require('../assets/cloudWind.png'),
  'broken clouds: 51-84%': require('../assets/cloudWind.png'),
  'overcast clouds: 85-100%': require('../assets/cloudWind.png'),
  'overcast clouds': require('../assets/cloudWind.png'),
  'clear sky': require('../assets/sun.png'), // moon
  'few clouds': require('../assets/cloudDay.png'), // cloudNight
  'few clouds: 11-25%': require('../assets/cloudDay.png'), // cloudNight
  'scattered clouds': require('../assets/cloud.png'),
  'scattered clouds: 25-50%': require('../assets/cloud.png'),
  'shower rain': require('../assets/rain.png'), // moonRain, sunRain
  'light intensity drizzle': require('../assets/rain.png'), // moonRain, sunRain
  drizzle: require('../assets/rain.png'), // moonRain, sunRain
  'heavy intensity drizzle': require('../assets/rain.png'), // moonRain, sunRain
  'light intensity drizzle rain': require('../assets/rain.png'), // moonRain, sunRain
  'drizzle rain': require('../assets/rain.png'), // moonRain, sunRain
  'heavy intensity drizzle rain': require('../assets/rain.png'), // moonRain, sunRain
  'shower rain and drizzle': require('../assets/rain.png'), // moonRain, sunRain
  'heavy shower rain and drizzle': require('../assets/rain.png'), // moonRain, sunRain
  'shower drizzle': require('../assets/rain.png'), // moonRain, sunRain
  'light intensity shower rain': require('../assets/rain.png'), // moonRain, sunRain
  'heavy intensity shower rain': require('../assets/rain.png'), // moonRain, sunRain
  'ragged shower rain': require('../assets/rain.png'), // moonRain, sunRain
  humidity: require('../assets/humidity.png'),
  mist: require('../assets/sunMist.png'), // moonMist
  Smoke: require('../assets/sunMist.png'), // moonMist
  Haze: require('../assets/sunMist.png'), // moonMist
  'sand/ dust whirls': require('../assets/sunMist.png'), // moonMist
  fog: require('../assets/sunMist.png'), // moonMist
  sand: require('../assets/sunMist.png'), // moonMist
  dust: require('../assets/sunMist.png'), // moonMist
  'volcanic ash': require('../assets/sunMist.png'), // moonMist
  squalls: require('../assets/sunMist.png'), // moonMist
  tornado: require('../assets/sunMist.png'), // moonMist
  rain: require('../assets/rain.png'), // moonRain, sunRain
  'light rain': require('../assets/rain.png'), // moonRain, sunRain
  'moderate rain': require('../assets/rain.png'), // moonRain, sunRain
  'heavy intensity rain': require('../assets/rain.png'), // moonRain, sunRain
  'very heavy rain': require('../assets/rain.png'), // moonRain, sunRain
  'extreme rain': require('../assets/rain.png'), // moonRain, sunRain
  snow: require('../assets/sunSnow.png'), // moonSnow
  'freezing rain': require('../assets/sunSnow.png'), // moonSnow
  'light snow': require('../assets/sunSnow.png'), // moonSnow
  Snow: require('../assets/sunSnow.png'), // moonSnow
  'Heavy snow': require('../assets/sunSnow.png'), // moonSnow
  Sleet: require('../assets/sunSnow.png'), // moonSnow
  'Light shower sleet': require('../assets/sunSnow.png'), // moonSnow
  'Shower sleet': require('../assets/sunSnow.png'), // moonSnow
  'Light rain and snow': require('../assets/sunSnow.png'), // moonSnow
  'Rain and snow': require('../assets/sunSnow.png'), // moonSnow
  'Light shower snow': require('../assets/sunSnow.png'), // moonSnow
  'Shower snow': require('../assets/sunSnow.png'), // moonSnow
  'Heavy shower snow': require('../assets/sunSnow.png'), // moonSnow
  thunderstorm: require('../assets/sunStorm.png'), // moonStorm
  'thunderstorm with light rain': require('../assets/sunStorm.png'), // moonStorm
  'thunderstorm with rain': require('../assets/sunStorm.png'), // moonStorm
  'thunderstorm with heavy rain': require('../assets/sunStorm.png'), // moonStorm
  'light thunderstorm': require('../assets/sunStorm.png'), // moonStorm
  'heavy thunderstorm': require('../assets/sunStorm.png'), // moonStorm
  'ragged thunderstorm': require('../assets/sunStorm.png'), // moonStorm
  'thunderstorm with light drizzle': require('../assets/sunStorm.png'), // moonStorm
  'thunderstorm with drizzle': require('../assets/sunStorm.png'), // moonStorm
  'thunderstorm with heavy drizzle': require('../assets/sunStorm.png'), // moonStorm
  wind: require('../assets/wind.png'),
};

export const searchIcon = require('../assets/search.png');

export const closeIcon = require('../assets/close.png');
export const closeIcon2 = require('../assets/close2.png');

export const trashIcon = require('../assets/trash.png');

export const heartIcon = require('../assets/heart.png');
export const heartFullIcon = require('../assets/heartFull.png');

export const spartaLabsIcons = require('../assets/spartaLabs.png');
