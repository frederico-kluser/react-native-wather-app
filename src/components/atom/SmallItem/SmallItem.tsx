import React from 'react';
import {weatherIcons} from '../../../styles/icons';
import Container, {Hour, Temperature, WeatherIcon} from './SmallItem.styled';

const SmallItem = ({}: any) => (
  <Container>
    <Hour>10 AM</Hour>
    <WeatherIcon source={weatherIcons.day} />
    <Temperature>19°</Temperature>
  </Container>
);

export default SmallItem;
