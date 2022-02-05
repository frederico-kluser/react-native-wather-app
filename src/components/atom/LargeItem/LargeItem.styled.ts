import styled from 'styled-components/native';

const Container = styled.View`
  margin-bottom: 6%;
`;

export const DayOfWeek = styled.Text``;

export const WeatherIcon = styled.Image`
  position: absolute;
  left: 47%;
  height: 32px;
  width: 32px;
`;

export const MaxTemperature = styled.Text`
  position: absolute;
  left: 80%;
  font-size: 17px;
`;

export const MinTemperature = styled.Text`
  position: absolute;
  right: 0%;
  font-size: 17px;
`;

export default Container;
