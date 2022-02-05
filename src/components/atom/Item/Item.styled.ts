import styled from 'styled-components/native';
import {itemSize} from '../../../helpers/dimentions';

export const Container = styled.TouchableOpacity`
  border-radius: 16px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  box-sizing: border-box;
  height: ${itemSize}px;
  ${({marginRight}) => marginRight && 'margin-right: 32px;'}
  margin-bottom: 32px;
  padding: 16px;
  width: ${itemSize}px;
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

export const WeatherIcon = styled.Image`
  height: 64px;
  position: absolute;
  right: 10px;
  top: 10px;
  width: 64px;
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
