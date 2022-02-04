import styled from 'styled-components/native';
import {deviceWidth} from '../../../helpers/dimentions';
import {PAGE_PADDING} from '../../../styles/theme';

export const Container = styled.TouchableOpacity`
  border-radius: 16px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  box-sizing: border-box;
  height: ${deviceWidth / 2 - PAGE_PADDING * 2}px;
  ${({marginRight}) => marginRight && 'margin-right: 32px;'}
  margin-bottom: 32px;
  padding: 16px;
  width: ${deviceWidth / 2 - PAGE_PADDING * 2}px;
`;

export const Temperature = styled.Text`
  font-size: 37px;
`;

export const City = styled.Text`
  font-size: 12px;
  font-weight: 500;
  margin-top: 8px;
`;

export const Country = styled.Text`
  font-size: 12px;
  margin-top: 6px;
`;

export const Metric = styled.Text`
  font-size: 19px;
  left: ${({temperature}) => temperature.length * 20 + 15}px;
  position: absolute;
  top: 10px;
`;

export const WeatherIcon = styled.Image`
  position: absolute;
  right: 10px;
  top: 10px;
`;

export const WeatherInfo = styled.View`
  flex-direction: row;
  position: absolute;
  ${({rightPosition}) => (rightPosition ? 'right' : 'left')}: 16px;
  bottom: 16px;
`;

export const WeatherInfoIcon = styled.Image`
  width: 15px;
  height: 15px;
`;

export const WeatherInfoText = styled.Text`
  font-size: 12px;
  font-weight: bold;
`;

export default Container;
