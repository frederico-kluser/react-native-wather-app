import React from 'react';
import {IconProps, weatherIcons} from '../../../styles/icons';
import Container, {
  City,
  Country,
  Temperature,
  WeatherIcon,
  WeatherInfo,
  WeatherInfoIcon,
  WeatherInfoText,
} from './Item.styled';

export interface ItemInterface {
  temperature: number;
  func: Function;
  index: number;
  city: string;
  country: string;
  status: IconProps;
}

const Item = ({
  temperature,
  func = () => {},
  index,
  city,
  country,
  status,
}: ItemInterface) => (
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
