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
  city: string;
  country: string;
  favorite: boolean;
  func: Function;
  humidity: number;
  index: number;
  status: IconProps;
  temperature: number;
  wind: number;
}

const Item = ({
  city,
  country,
  favorite,
  func = () => {},
  humidity,
  index,
  status,
  temperature,
  wind,
}: ItemInterface) => (
  <Container
    favorite={favorite}
    marginRight={index % 2 === 0}
    onPress={() => func(index)}>
    <WeatherIcon source={weatherIcons[status]} />
    <Temperature favorite={favorite}>{temperature}°</Temperature>
    <City>{city}</City>
    <Country>{country}</Country>
    <WeatherInfo>
      <WeatherInfoIcon source={weatherIcons.humidity} />
      <WeatherInfoText>{humidity}%</WeatherInfoText>
    </WeatherInfo>
    <WeatherInfo rightPosition>
      <WeatherInfoIcon source={weatherIcons.wind} />
      <WeatherInfoText>{wind} km/h</WeatherInfoText>
    </WeatherInfo>
  </Container>
);

export default Item;
