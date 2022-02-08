import React from 'react';
import convertKelvinToCelsius from '../../../helpers/conversor';
import {weatherIcons} from '../../../styles/icons';
import Container, {
  DayOfWeek,
  MaxTemperature,
  MinTemperature,
  WeatherIcon,
} from './LargeItem.styled';

const LargeItem = ({icon, min, max, text}: any) => {
  const date = new Date(parseInt(`${text}000`));
  const daysOfWeek = [
    'segunda',
    'terça',
    'quarta',
    'quinta',
    'sexta',
    'sábado',
    'domingo',
  ];

  return (
    <Container>
      <DayOfWeek>{daysOfWeek[date.getDay()]}</DayOfWeek>
      <WeatherIcon source={weatherIcons[icon]} />
      <MaxTemperature>{convertKelvinToCelsius(min)}°</MaxTemperature>
      <MinTemperature>{convertKelvinToCelsius(max)}°</MinTemperature>
    </Container>
  );
};

export default LargeItem;
