import React from 'react';
import {weatherIcons} from '../../../styles/icons';
import Container, {
  DayOfWeek,
  MaxTemperature,
  MinTemperature,
  WeatherIcon,
} from './LargeItem.styled';

const LargeItem = ({}: any) => (
  <Container>
    <DayOfWeek>Monday</DayOfWeek>
    <WeatherIcon source={weatherIcons.thunderstorm} />
    <MaxTemperature>32°</MaxTemperature>
    <MinTemperature>22°</MinTemperature>
  </Container>
);

export default LargeItem;
