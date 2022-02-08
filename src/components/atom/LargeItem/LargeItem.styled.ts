import styled from 'styled-components/native';

const Container = styled.View`
  margin-bottom: 6%;
`;

export const DayOfWeek = styled.Text`
  font-size: 13px;
  font-weight: 500;
  text-transform: capitalize;
`;

export const WeatherIcon = styled.Image`
  position: absolute;
  left: 47%;
  height: 32px;
  width: 32px;
  top: -8px;
`;

export const MaxTemperature = styled.Text`
  position: absolute;
  left: 80%;
  font-size: 13px;
  color: red;
  font-weight: bold;
`;

export const MinTemperature = styled.Text`
  position: absolute;
  right: 0%;
  font-size: 12px;
  color: blue;
  font-weight: bold;
`;

export default Container;
