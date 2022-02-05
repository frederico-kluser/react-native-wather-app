import React from 'react';
import Title from '../../atom/Title/Title';
import Container, {
  City,
  Country,
  Metric,
  Temperature,
  WeatherIcon,
  WeatherInfo,
  WeatherInfoIcon,
  WeatherInfoText,
} from './Item.styled';

const weatherIcons = {
  cloudDay: require('../../../assets/cloudDay.png'),
  day: require('../../../assets/day.png'),
  humidity: require('../../../assets/humidity.png'),
  wind: require('../../../assets/wind.png'),
};

const Item = ({
  temperature = '',
  func = () => {},
  index,
  city,
  country,
  status,
}: any) => (
  <Container marginRight={index % 2 === 0} onPress={() => func(index)}>
    <WeatherIcon source={weatherIcons[status]} />
    <Temperature>{temperature}°</Temperature>
    <City>{city}</City>
    <Country>{country}</Country>
    <WeatherInfo>
      <WeatherInfoIcon source={weatherIcons.humidity} />
      <WeatherInfoText>20%</WeatherInfoText>
    </WeatherInfo>
    <WeatherInfo rightPosition>
      <WeatherInfoIcon source={weatherIcons.wind} />
      <WeatherInfoText>7 km/h</WeatherInfoText>
    </WeatherInfo>
  </Container>
);

export default Item;
